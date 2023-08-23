import axios from 'axios'
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const MainApi = axios.create({
    baseURL: baseUrl,
})
MainApi.interceptors.request.use(function (config) {
    return config
})
// MainApi.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response.status === 401) {
//             toast.error(t('Your token has been expired.please sign in again'), {
//                 id: 'error',
//             })
//             localStorage.removeItem('token')
//             store.dispatch(removeToken())
//         }
//         return Promise.reject(error)
//     }
// )

export default MainApi