import PropTypes from 'prop-types';
import styles from '../Profile/Profile.module.css';
import { FaUser, FaMapMarkerAlt, FaEye, FaStar } from 'react-icons/fa';

function Profile(props) {
  const { username, tag, location, avatar, stats } = props;

  return (
      <div className={styles.profile}>
          <div className={styles.description}>
              <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}><FaMapMarkerAlt className={styles.icon}/>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.element}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.element}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.element}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;