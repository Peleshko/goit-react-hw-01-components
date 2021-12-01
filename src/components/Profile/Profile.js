import PropTypes from 'prop-types';
import defaultImage from './default.png';
import s from './Profile.module.css';

const Profile = ({username = 'User', tag = 'No tag', location = 'No location', avatar = defaultImage, 
                   stats: { followers = 'No followers', views = 'No views', likes = 'No likes' }}) => {
    return (
        <div className={s.profile}>
        <div className={s.description}>
          <img 
          src={avatar} 
          alt={username} 
          class={s.profile_avatar} />
          <p className={s.profile_name}>{username}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
  
        <ul className={s.stats}>
          <li>
            <span className={s.stats_label}>Followers</span>
            <span className={s.quantity}>{followers}</span>
          </li>
          <li>
            <span className={s.stats_label}>Views</span>
            <span className={s.quantity}>{views}</span>
          </li>
          <li>
            <span className={s.stats_label}>Likes</span>
            <span className={s.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;