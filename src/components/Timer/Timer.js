import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  //console.log(time);
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  };

  const formattedTime = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    // console.log(seconds);
    // console.log(minutes);
    // console.log(hours);

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}.${(milliseconds % 1000).toString().padStart(3, '0')}`;
  };

  /* const milliseconds = time;
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((seconds / 1000 / 60) % 60);
  const hours = Math.floor((minutes / 1000 / 60 / 60) % 24);

  console.log(seconds);

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; */

  return <h1 className={styles.timer}>{formattedTime(time)}</h1>;
};

export default Timer;
