import React, { useEffect, useState, useCallback } from 'react';
import store from '../store';

interface IProps {
  history: any;
  name: string;
  host: string;
}

const MicroFrontend: React.FC<IProps> = (props) => {
  const { name, host, history } = props;
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const scriptId = `micro-frontend-script-${name}`;
  const containerId = `${name}-container`;
  const renderApp = `render${name}`;
  const unmountApp = `unmount${name}`;

  const registerStore = (reducers) => {
    store['injectReducer'](reducers);
  };

  const renderMicroFrontend = useCallback(() => {
    (window as any)[renderApp] && setLoading(false);
  }, [renderApp]);

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
          setError(error);
        });
    }

    return () => {
      (window as any)[unmountApp] &&
        (window as any)[unmountApp](containerId) &&
        (window as any)[unmountApp](containerId);
    };
  }, [renderMicroFrontend, host, scriptId, unmountApp, renderApp, containerId]);

  const App = window[renderApp];

  return (
    <>
      {loading && <p> Loading...</p>}
      {hasError && <p> Failed to load {name}</p>}
      <main id={containerId}>
        {!loading && !hasError && App && (
          <App
            containerId={scriptId}
            history={history}
            registerStore={registerStore}
          />
        )}
      </main>
    </>
  );
};

export default MicroFrontend;
