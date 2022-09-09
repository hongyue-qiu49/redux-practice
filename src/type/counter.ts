export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

export const initialCounterState: CounterState = {
  value: 0,
  status: 'idle'
}
