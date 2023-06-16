import React from 'react';
import './App.scss';

import searchIcon from "./assets/searchmagnifierinterfacesymbol1_79893.svg"
import plusIcon from "./assets/1491254405-plusaddmoredetail_82972.svg"
import minusIcon from "./assets/1491254402-minussubtractreducediscount_82971.svg"


 const Users = ({items, isLoading}) => {
  return (
    <>
      <div className="search">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Найти пользователя..." />
      </div>
      {isLoading ? (
        <div className="skeleton-list">загрузка...</div>
      ) : (
        <ul className="users-list">
            <User/>
        </ul>
      )}
      <button className="send-invite-btn">Отправить приглашение</button>
    </>
  );
};


 const User = () => (
  <li>
    <div>
      <img className="avatar" src="https://reqres.in/img/faces/1-image.jpg" alt="User" />
      <div>
        <h3>Имя Фамилия</h3>
        <p>почта@mail.ru</p>
      </div>
    </div>
    <img className="action" src={plusIcon} alt="Action" />
  </li>
);

const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="https://i.gifer.com/p9.gif" alt="Success"/>
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button className="send-invite-btn">Назад</button>
    </div>
  );
};


function App() {
  return (
     <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;