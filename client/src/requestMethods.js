import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjE3Mzg2NzE4MTU5N2I2ZWU5ZGI1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzMzMTAzNCwiZXhwIjoxNjY3NTkwMjM0fQ.DvtuLFiYW8lXs07PSyCXGPpkJ_FHo-EwF-Ck5xtM1Ko";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
