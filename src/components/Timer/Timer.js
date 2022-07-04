import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  const milliseconds = Math.floor(time / 1000);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor((time / 1000 / 60 / 60) % 24);

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(4, 0)}`;

  console.log(formattedTime);

  return <h1 className={styles.timer}>{formattedTime}</h1>;
};

export default Timer;
