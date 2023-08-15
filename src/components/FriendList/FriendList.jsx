import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import {List} from './FriendList.styled';

const FriendList = ({ friends }) => (
    <List>
        {friends.map(({avatar, name, isOnline, id}) => (
    <FriendListItem 
    key={id} 
    avatar={avatar} 
    name={name} 
    isOnline={isOnline} />
        ))}
    </List>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })
    ).isRequired,
};

export default FriendList;