import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Suspense>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
