import PropTypes from 'prop-types';
import { getRandomColor } from '../../helpers/getRandomColor.js';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}

    <ul className={s.statsList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={s.stats_item}
          key={id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  // title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
