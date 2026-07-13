import { Typography, Button } from '@mui/material';
import { useCounterState } from '../state/counter';

export default function TopPage() {
  const { count, increment } = useCounterState();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        React + Vite + MUI + Tailwind
      </Typography>
      <Typography variant="body1" gutterBottom>
        Count: {count}
      </Typography>
      <Button variant="contained" color="primary" onClick={increment}>
        Increment
      </Button>
    </>
  );
}
