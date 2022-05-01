import PropTypes from 'prop-types';
import style from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img src={avatar} alt="User avatar" className={style.avatar} />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>

    <ul className={style.stats}>
      <li className={style.statsItem}>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li className={style.statsItem}>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li className={style.statsItem}>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
  avatar: PropTypes.string,
};
