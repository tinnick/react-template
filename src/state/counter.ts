import { signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';

const count = signal(0);

function increment() {
  count.value += 1;
}

function reset() {
  count.value = 0;
}

export function useCounterState() {
  useSignals();

  return { count: count.value, increment, reset };
}
