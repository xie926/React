import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://neteasecloudmusicapi.zhaoboy.com'
})
// 拦截器
axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误")
  }
)

// 发送请求
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};
