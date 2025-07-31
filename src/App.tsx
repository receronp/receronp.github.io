import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './slices/counterSlice';

export default function App() {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
