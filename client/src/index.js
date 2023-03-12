import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { Notifications} from '@mantine/notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider
    theme={{
      colorScheme: 'dark',
      colors: {
        rose: '#FC466B',
        magenta: '#d3498f',
        thanos: '#9b549d',
        grimace: '#625895',
        navy: '#39537a',
        ravsPants: '#2f4858',
        blue: '#3F5EFB',
        white: '#ffffff',
      },
      primaryColor: 'rose',
      defaultGradient: {
        deg: 50,
        from: '#FC466B',
        to: '#3F5EFB'
      },
      fontFamily: 'new-zen',
      loader: 'bars'

    }}
    withGlobalStyles
    withNormalizeCSS
  >
    <Notifications position='top-left'/>
    <App />
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
