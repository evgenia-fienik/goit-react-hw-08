import React from 'react'
import ReactDOM from 'react-dom/client';
import{BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import App from './components/App/App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}> 
    <BrowserRouter>
        <HelmetProvider>
           <App />
     </HelmetProvider>
    </BrowserRouter>
    </Provider>
    </React.StrictMode>
);
