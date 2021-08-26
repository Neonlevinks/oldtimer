const timesUser = process.argv.slice(2);

const timerSound = (times) => {
  times.forEach(time => {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  });
}

timerSound(timesUser);