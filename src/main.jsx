import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor } from './redux/store.js';

import {
  ThemeProvider,
  alpha,
  createTheme,
  getContrastRatio,
} from '@mui/material';

const grayBase = '#646cff';
const violetMain = alpha(grayBase, 0.7);
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    grayBase: {
      main: violetMain,
      light: alpha(grayBase, 0.5),
      dark: alpha(grayBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
