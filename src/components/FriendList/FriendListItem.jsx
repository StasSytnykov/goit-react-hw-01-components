import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
      {isOnline ? (
        <span className={style.statusOnline}></span>
      ) : (
        <span className={style.statusOfline}></span>
      )}
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
