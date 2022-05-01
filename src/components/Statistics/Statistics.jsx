import PropTypes from 'prop-types';
import { getRandomHexColor } from './getRundonColor';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            className={style.item}
            key={id}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
