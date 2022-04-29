import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={style.item} key={id}>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={style.name}>{name}</p>
            {isOnline ? (
              <span className={style.statusOnline}></span>
            ) : (
              <span className={style.statusOfline}></span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
