import PropTypes from 'prop-types';  
import {
ProfileWrap,
Description,
Avatar,
Name,
Tag,
Location,
Stats,
ListItem,
Label,
Quantity,
} from './Profile.styled';

  const Profile = ({username, tag, location, avatar, stats }) => {
    return (
      <ProfileWrap>
        <Description>
          <Avatar src={avatar} alt={username}/>
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        
      </ProfileWrap>
    );
};

export default Profile;