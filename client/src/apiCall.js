import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN;

const fetchData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export default fetchData;
