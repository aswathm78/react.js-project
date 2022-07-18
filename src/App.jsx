import { useState } from 'react';
import './App.css';
import Recent from './components/recent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Recent />
    </>
  );
}

export default App;
