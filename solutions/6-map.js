// BEGIN
const getChildren = (listOfUsers) => {
  const massiveOfChildren = listOfUsers.map(user => user.children);
  
  return massiveOfChildren.flat();
};

export default getChildren;
// END