//Задание 1. Профиль социальной сети
import user from './Data/user.json';
import Profile from './Profile/Profile';
//Задание 2. Секция статистики
//import data from './components/Statistics/data.json';
//import Statistics from './components/Statistics/Statistics';
// Задание 3. Список друзей
//import FriendsList from './components/Friends/FriendsList';
//import friends from './components/Friends/friends.json';
// Задание 4. История транзакций

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />    
    </div>
  );
}

export default App;
//<Statistics stats={data} />
//<FriendsList friends={friends} />