import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friendsArr from "./friends.json";
import transactions from "./transactions.json";
import FriedList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <Profile userProfile={userData} />
      <FriedList friends={friendsArr} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
