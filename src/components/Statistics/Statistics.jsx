import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2>{title}</h2>

      <ul className={style.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li className={style.item} key={id}>
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
  stats: PropTypes.arrayOf(PropTypes.object),
};
