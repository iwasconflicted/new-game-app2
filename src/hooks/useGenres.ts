import { useQuery } from "@tanstack/react-query"
import { CACHE_KEY_GENRE } from "../constant"
import APIClient, { FetchResponse } from "../services/apiClient"

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
    staleTime: 24*60*60*1000 //24hrs
})
export default useGenres;