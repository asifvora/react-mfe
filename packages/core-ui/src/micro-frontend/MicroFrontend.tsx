import React, { useEffect, useState, useCallback } from 'react';
import store from '../store';
import { Loader } from '../components/Loader';
import { isDevelopment } from '../config/env';
import {
  ErrorContent,
  ErrorContentText,
  ErrorContentTitle,
  ErrorText,
} from './Styled';

interface IProps {
  history: any;
  name: string;
  host: string;
}

export const MicroFrontend: React.FC<IProps> = (props) => {
  const { name, host, history } = props;
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const scriptId = `micro-frontend-script-${name}`;
  const containerId = `${name}-container`;
  const renderApp = `render${name}`;
  const unmountApp = `unmount${name}`;

  const renderMicroFrontend = useCallback(() => {
    (window as any)[renderApp] &&
      (window as any)[renderApp]({
        containerId,
        history,
        store,
      });
    (window as any)[renderApp] && setLoading(false);
  }, [renderApp, containerId, history]);

  useEffect(() => {
    if (document.getElementById(scriptId) && (window as any)[renderApp]) {
      renderMicroFrontend();
    } else {
      fetch(`${host}/asset-manifest.json`)
        .then((res) => res.json())
        .then((manifest) => {
          const promises = Object.keys(manifest.files)
            .filter((key) => key.endsWith('.js'))
            .reduce((sum, key) => {
              sum.push(
                new Promise((resolve) => {
                  const path = `${host}${manifest.files[key]}`;
                  const script = document.createElement('script');

                  if (key === 'main.js') {
                    script.id = scriptId;
                  }

                  script.onload = () => {
                    resolve(true);
                  };

                  script.crossOrigin = '';
                  script.src = path;

                  document.head.appendChild(script);
                })
              );
              return sum;
            }, [] as any);

          Promise.allSettled(promises).then(() => {
            renderMicroFrontend();
          });
        })
        .catch((error) => {
          setError(error?.message);
          setLoading(false);
        });
    }

    return () => {
      (window as any)[unmountApp] &&
        (window as any)[unmountApp](containerId) &&
        (window as any)[unmountApp](containerId);
    };
  }, [renderMicroFrontend, host, scriptId, unmountApp, renderApp, containerId]);

  return (
    <>
      {loading && <Loader />}
      {hasError && (
        <ErrorContent>
          <ErrorContentText>
            <ErrorContentTitle>
              {isDevelopment
                ? `${name} failed to load. Check if dev-server is running.`
                : 'This page failed to load'}
            </ErrorContentTitle>
            <ErrorText>
              {isDevelopment ? hasError : 'Please try again later.'}
            </ErrorText>
          </ErrorContentText>
        </ErrorContent>
      )}
      <main id={containerId}></main>
    </>
  );
};

export default MicroFrontend;
