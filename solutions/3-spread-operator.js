// BEGIN
const convert = (...dates) => {
  const result = [];
  
  for (const date of dates) {
    const [year, month, day] = date;
    const changedDate = new Date(year, month, day);
    result.push(changedDate.toDateString());
  }
  
  return result;
};

export default convert;
// END