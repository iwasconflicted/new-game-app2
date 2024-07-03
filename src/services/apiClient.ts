import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'aabdc80e5faa4768b9db3b21e530012f'
    }
})