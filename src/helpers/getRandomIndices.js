export const getRandomIndices = (data, formData) => {
  const randomIndicesArray = [];

  for (let i = 0; i < formData.number / 2; i++) {
    const randomNum = Math.floor(Math.random() * data.length);
    if (!randomIndicesArray.includes(randomNum)) {
      randomIndicesArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndicesArray;
};
