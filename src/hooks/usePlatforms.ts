import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM} from "../constant";
import APIClient, {FetchResponse} from "../services/apiClient";
import ms from 'ms'

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string;
}



const usePlatform = () => useQuery<FetchResponse<Platform>>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: () => apiClient.getAll({}),
    staleTime: ms('24h') 
    
})

export default usePlatform