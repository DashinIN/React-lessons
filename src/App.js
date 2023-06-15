import { useState } from 'react';
import './App.scss';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState('Привет!');

  return (
    <div className="App">
      <div className="wrapper">
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={() => setCount(prevCount => prevCount - 1 )}>- Минус</button>
        <button className="plus" onClick={() => setCount(prevCount => prevCount + 1 )} >Плюс +</button>
      </div>

      <div className="wrapper">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <p>Вы ввели: {text}</p>
        <button onClick={() => setText('Привет!')}>Вернуть как было</button>
      </div>
    </div>
  );
}

export default App;
