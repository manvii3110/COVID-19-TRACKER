export const sortData = (data) => {
  let sortedData = [...data];
  console.log(sortedData);
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};