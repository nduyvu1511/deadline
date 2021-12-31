import axios from 'axios';

export interface IParamsHTTP {
    method?: 'get' | 'post' | 'delete' | 'put';
    path: string;
    payload?: any;
    config?: {
        isPrivate?: boolean;
        isFormData?: boolean;
    };
    showSuccess?: boolean;
    showError?: boolean;
}

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        console.log(err);
    }
);

export default axiosClient;
