import PropTypes from 'prop-types';

function Statistics({ elem, title = ' ' }) {
  return (
    <div>
      {title !== ' ' && <h2>{title}</h2>}
      <ul>
          {elem.map(({ id, label, percentage }) => (
            <li key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </li>
          ))}
       </ul>
  </div>
  );
}


Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default Statistics;