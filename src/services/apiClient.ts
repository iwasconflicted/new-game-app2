import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}


const axiosInStance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'aabdc80e5faa4768b9db3b21e530012f'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll(config: AxiosRequestConfig) {
        return axiosInStance
        .get(this.endpoint, config)
        .then(response => response.data)
    }

// put



// delete



}


export default APIClient;