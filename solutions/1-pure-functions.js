// BEGIN
const isSimple = (number) => {
  if (number < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
};

const sayPrimeOrNot = (number) => {
  if (isSimple(number)) {
    console.log('yes');
  } else {
    console.log('no');
  }
};

export default sayPrimeOrNot;
// END