import React from 'react';
import './App.scss';

import searchIcon from "./assets/searchmagnifierinterfacesymbol1_79893.svg"
import plusIcon from "./assets/1491254405-plusaddmoredetail_82972.svg"
import minusIcon from "./assets/1491254402-minussubtractreducediscount_82971.svg"


 const Users = ({ 
    items,
    isLoading, 
    searchValue, 
    onChangeSearchValue,
    invites, 
    onClickInvite,
    onClickSendInvites}) => {
  return (
    <>
      <div className="search">
        <img src={searchIcon} alt="" />
        <input 
        value={searchValue} 
        onChange={onChangeSearchValue} 
        type="text" 
        placeholder="Найти пользователя..." />
      </div>

      {isLoading ? (
        <div className="skeleton-list">загрузка...</div>
      ) : (
        <ul className="users-list">
          {
            items.filter(obj => {
              const fullName = obj.first_name + " " +  obj.last_name;
              return fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
               obj.email.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map(item => 
            <User 
            isInvited={invites.includes(item.id)}
            onClickInvite={onClickInvite}
             key={item.id} {...item}/>)
          }
        </ul>
      )}

      {
        invites.length > 0 && 
        <button  onClick={onClickSendInvites} 
        className="send-invite-btn">Отправить приглашение</button>
      }
    </>
  );
};


 const User = ({ id, email, first_name, last_name, avatar, onClickInvite, isInvited}) => (
  <li>
    <div>
      <img className="avatar" src={avatar} alt="User" />
      <div>
        <h3>{first_name} {last_name}</h3>
        <p>{email}</p>
      </div>
    </div>
    <img onClick={() => onClickInvite(id)} 
    className="action" src={isInvited ? minusIcon : plusIcon} alt="Action" />
  </li>
);

const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="https://i.gifer.com/p9.gif" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};


function App() {

  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  const [invites, setInvites] = React.useState([]);
  const [success, setSucsess] = React.useState(false);

  React.useEffect(() => {
      fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then((json) => setUsers(json.data))
      .catch(err =>{ console.log(err); alert("error")})
      .finally(() => setIsLoading(false))
  }, [])

  const onChangeSearchValue = e => setSearchValue(e.target.value);

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  const onClickSendInvites = () => setSucsess(true);

  return (
    <div className="App">

      { success ? 
       <Success count={invites.length}/> :
        <Users items={users} 
        isLoading={isLoading} 
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        invites={invites}
        onClickInvite={onClickInvite}
        onClickSendInvites={onClickSendInvites}/>
       }
      
    </div>
  );
}

export default App;