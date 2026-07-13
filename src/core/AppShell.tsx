import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function AppShell() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">test-react-app</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="sm" className="py-8">
          <Outlet />
        </Container>
      </main>
    </>
  );
}
