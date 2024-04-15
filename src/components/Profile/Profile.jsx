import css from "../Profile/Profile.module.css";
export default function Profile({
  userProfile: {
    username,
    avatar,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileCard}>
        <img className={css.cardImg} src={avatar} alt={username} />
        <p className={css.cardName}>{username}</p>
        <p className={css.cardIText}>@{tag}</p>
        <p className={css.cardIText}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.listItem}>
          <span className={css.listInfo}>Followers</span>
          <span className={css.listNumber}> {followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listInfo}>Views</span>
          <span className={css.listNumber}> {views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listInfo}>Likes</span>
          <span className={css.listNumber}> {likes}</span>
        </li>
      </ul>
    </div>
  );
}
