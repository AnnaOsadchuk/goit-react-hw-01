import FriendListItem from "../FriendListItem/FriendListItem";
import css from "../FriendList/FriendList.module.css";

export default function FriedList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friendItem={friend} />
        </li>
      ))}
    </ul>
  );
}
