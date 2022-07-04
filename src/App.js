import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './settings.scss';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTime = () => {
    setTimer(
      setInterval(() => {
        setTime((time) => time + 1);
      }, 1)
    );
    console.log('start');
  };

  const stopTime = () => {
    if (timer) {
      clearInterval(timer);
    }

    console.log('stop');
  };

  const resetTime = () => {
    setTime(0);
    console.log('reset');
  };

  useEffect(() => {
    // code that runs once at the start
    return () => {
      // code that runs once at the end
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Timer time={time} />
      <div className={styles.button_container}>
        <Button onClick={startTime}>Start</Button>
        <Button onClick={stopTime}>Stop</Button>
        <Button onClick={resetTime}>Reset</Button>
      </div>
    </div>
  );
};

export default App;
