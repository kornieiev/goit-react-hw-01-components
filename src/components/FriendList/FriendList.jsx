import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map((friend) => {
      return (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
