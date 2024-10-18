import { useQuery } from "@tanstack/react-query";
import useData from "./useData";
import { CACHE_KEY_PLATFORM} from "../constant";
import apiClient from "../services/apiClient";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const usePlatform = () => useQuery ({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: () => apiClient
    .get<FetchResponse<Platform>>('/platforms/lists/parents')
    .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
})

export default usePlatform