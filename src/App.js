import './App.scss';

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <h2>Счетчик:</h2>
        <h1>0</h1>
        <button className="minus" >- Минус</button>
        <button className="plus"  >Плюс +</button>
      </div>

      <div className="wrapper">
        <input />
        <p>Вы ввели: </p>
        <button>Вернуть как было</button>
      </div>
    </div>
  );
}

export default App;
