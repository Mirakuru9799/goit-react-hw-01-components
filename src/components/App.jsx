//Задание 1. Профиль социальной сети
import user from './Data/user.json';
import Profile from './Profile/Profile';
//Задание 2. Секция статистики
import data from './Data/data.json';
import Statistics from './Statistics/Statistics';
// Задание 3. Список друзей
import FriendsList from './Friends/FriendsList';
import friends from './Data/friends.json';
// Задание 4. История транзакций
import TransactionHistoryList from './TransactionHistory/TransactionHistoryList';
import transactions from './Data/transactions.json';

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
      <Statistics title='Upload stats' elem={data} />
      <Statistics elem={data} />
      <FriendsList friends={friends} />
      <TransactionHistoryList transaction={transactions}
              type={transactions.type}
        amount={transactions.amount}
        currency={transactions.amount}/>;
    </div>
  );
}

export default App;
//<Statistics stats={data} />
//