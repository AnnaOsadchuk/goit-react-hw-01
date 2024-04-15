import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";

export default function FriendListItem({
  friendItem: { avatar, name, isOnline },
}) {
  return (
    <div className={css.containerCard}>
      <img className={css.imgCard} src={avatar} alt={name} width="48" />
      <p className={css.nameCard}>{name}</p>
      <p className={clsx(css.onLine, isOnline ? css.onLine : css.offLine)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
