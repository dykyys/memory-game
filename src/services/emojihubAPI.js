import axios from 'axios';
export const fetchEmoji = async (category) => {
  const { data } = await axios.get(
    `https://emojihub.yurace.pro/api/all/category/${category}`
  );
  return data;
};
