import { useState } from 'react';
import './App.scss';

function App() {

  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button className="modal__open" onClick={() => setOpen(true)}>Открыть окно</button>
  
          <div className={`overlay animated ${open ? 'show' : ''}`}>
            <div className="modal">
              <svg  onClick={() => setOpen(false)} 
              height="200" viewBox="0 0 200 200" width="200" >
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
              <img src="https://media.tenor.com/SDwGg31pp4AAAAAC/maxwell-the-cat-maxwell.gif" />
            </div>
         </div>
      
  
   </div> 
  );

  }

export default App;
