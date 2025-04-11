export const getEmojisArray = (data) => {
  const pairedEmojisArray = [...data, ...data];

  for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pairedEmojisArray[i];
    pairedEmojisArray[i] = pairedEmojisArray[j];
    pairedEmojisArray[j] = temp;
  }
  return pairedEmojisArray;
};
