process.argv.slice(2)
  .map((item) => {
    return Number(item)*1000;
  })
  .filter((item) => {
    if (item >= 0 && item) {
      return true;
    } else {
      return false;
    }
  })
  .forEach(item => {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`${item/1000} seconds timer went off`)
    }, item);
  });