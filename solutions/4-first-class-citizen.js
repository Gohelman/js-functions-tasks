const run = (text) => {
    // BEGIN
    const takeLast = (string, n) => {
      if (string.length === 0 || string.length < n) {
      return null;
    }
  
    let result = '';
    for (let i = string.length - 1; i >= string.length - n; i--) {
      result += string[i];
    }
  
      return result;
    };
    // END
   
    return takeLast(text, 4);
  };
  
export default run;