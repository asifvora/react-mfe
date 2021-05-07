import React, { useEffect, useCallback } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

interface IMicroFrontendProps {
  history: any;
  name: string;
  host: string;
}

const MicroFrontend: React.FC<IMicroFrontendProps> = (props) => {
  const { name, host, history } = props;
  const scriptId = `micro-frontend-script-${name}`;
  
  const renderMicroFrontend = useCallback(() => {
    (window as any)[`render${name}`] &&
      (window as any)[`render${name}`](`${name}-container`, history);
  }, [name, history]);

  useEffect(() => {
    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
    } else {
      fetch(`${host}/asset-manifest.json`)
        .then(res => res.json())
        .then(manifest => {
          const promises = Object.keys(manifest.files)
            .filter(key => key.endsWith('.js'))
            .reduce((sum, key) => {
              sum.push(
                new Promise(resolve => {
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

                  document.body.after(script);
                }),
              );
              return sum;
            }, [] as any);

          Promise.allSettled(promises).then(() => {
            renderMicroFrontend();
          });
        });
    }

    return () => {
      (window as any)[`unmount${name}`] &&
        (window as any)[`unmount${name}`](`${name}-container`);
    };
  }, [renderMicroFrontend, host, name, scriptId]);

  return (
    <>
      <ErrorBoundary appName={name}>
        <React.Suspense fallback="Loading...">
          <main id={`${name}-container`} />
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
};

export default MicroFrontend;
