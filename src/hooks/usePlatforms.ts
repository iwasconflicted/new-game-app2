import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM} from "../constant";
import APIClient, {FetchResponse} from "../services/apiClient";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string;
}



const usePlatform = () => useQuery<FetchResponse<Platform>>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: () => apiClient.getAll({}),
    staleTime: 24*60*60*1000 
    
})

export default usePlatform