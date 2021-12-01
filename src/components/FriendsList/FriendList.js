import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    friends.length > 0 && (
      <ul className={s.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    )
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  };

export default FriendList;