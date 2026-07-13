import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { signInWithRedirect, fetchAuthSession } from 'aws-amplify/auth';
import theme from './styles/theme';
import './styles/index.scss';
import './core/amplifyConfig';
import AppRouter from './core/AppRouter';
import { configureAmplify } from './core/amplifyConfig.ts';

function renderRoot() {
  createRoot(document.body).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </StrictMode>,
  );
}

async function requireAuthSession() {
  configureAmplify();

  const { tokens } = await fetchAuthSession();

  if (tokens?.accessToken) {
    return;
  }

  await signInWithRedirect({
    options: {
      nonce: '',
      lang: 'ja',
    }
  });
}

async function main() {
  // await requireAuthSession();
  renderRoot();
}

main();
