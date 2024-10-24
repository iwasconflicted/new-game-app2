import { useQuery } from "@tanstack/react-query"
import { CACHE_KEY_GENRE } from "../constant"
import APIClient, { FetchResponse } from "../services/apiClient"
import ms from 'ms'

const apiClient = new APIClient<Genre>('/genres')
export interface Genre {
    id: number
    name: string
    image_background:string
}
export interface FetchGenreResponse <T>  {
    count: number
    results: T[];
}
const useGenres = () => useQuery<FetchResponse<Genre>>({
    queryKey: CACHE_KEY_GENRE,
    queryFn: () => apiClient.getAll({}),
    staleTime: ms('24h') //24hrs
})
export default useGenres;