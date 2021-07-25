import axios from "axios";

import { getOrSetCache } from "../redis";
import { API_KEY, REQUEST_URL } from "../constants/constants";

export const retrieveMoviesByType = async (req, res) => {
  const type = req.query.type;
  const page = req.query.page;

  const movies = await getOrSetCache(`movies/${type}/${page}`, async () => {
    const { data } = await axios.get(
      `${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    return data;
  });

  return res.json(movies);
};

export const retrieveMovieDetails = async (req, res) => {
  const id = req.params.id;

  const details = await getOrSetCache(`movies/${id}`, async () => {
    const { data } = await axios.get(
      `${REQUEST_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    return data;
  });

  return res.json(details);
};

export const retrieveMovieCredits = async (req, res) => {
  const id = req.params.id;

  const credits = await getOrSetCache(`movies/${id}/credits`, async () => {
    const { data } = await axios.get(
      `${REQUEST_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    return data;
  });

  return res.json(credits);
};

export const retrieveMovieImages = async (req, res) => {
  const id = req.params.id;

  const images = await getOrSetCache(`movies/${id}/images`, async () => {
    const { data } = await axios.get(
      `${REQUEST_URL}/movie/${id}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`
    );

    return data;
  });

  return res.json(images);
};

export const retrieveMovieVideos = async (req, res) => {
  const id = req.params.id;

  const videos = await getOrSetCache(`movies/${id}/videos`, async () => {
    const { data } = await axios.get(
      `${REQUEST_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    );

    return data;
  });

  return res.json(videos);
};

export const retrieveMovieReviews = async (req, res) => {
  const id = req.params.id;
  const page = req.query.page;

  const reviews = await getOrSetCache(
    `movies/${id}/reviews/${page}`,
    async () => {
      const { data } = await axios.get(
        `${REQUEST_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-USpage=${page}`
      );

      return data;
    }
  );

  return res.json(reviews);
};
