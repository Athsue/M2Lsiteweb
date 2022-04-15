import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDRjMjQ1NDVmZWNiNDdlY2Y2ZjBmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTEwMDg5NSwiZXhwIjoxNjQ5MzYwMDk1fQ.hidY3TLUielsEvzFMo5deFoQuwEHNWB999oLowvYEio";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});