import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: "AIzaSyBzEhLZ5RmGLz_XTWnrw9kK6g6lpD8ikGE",
  },
});
