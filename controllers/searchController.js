import axios from "axios";

import { API_KEY, REQUEST_URL } from "../constants/constants";

export const retrieveSearchResults = async (req, res) => {
  const query = req.query.query;
  let results;

  const { data } = await axios.get(
    `${REQUEST_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  results = data;

  return res.json(results);
};
