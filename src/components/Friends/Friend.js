import PropTypes from 'prop-types';
import css from './Friend.module.css';

function Friend(props) {
  const { avatar, name, isOnline } = props;
    return (
            <section className={css.item}>
                <span className={css.status} style={{backgroundColor: isOnline ? '#008000': '#FF4500'}}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </section>
        );
}

Friend.propTypes = {
 avatar: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired
}

export default Friend;