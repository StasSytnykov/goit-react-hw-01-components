import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(({ label, percentage, id }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
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
