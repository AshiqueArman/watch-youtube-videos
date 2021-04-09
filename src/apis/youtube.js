import axios from "axios";

const KEY = "AIzaSyCZSqy7OcU034KQdTjdT6ReY2oQlazTbeM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
