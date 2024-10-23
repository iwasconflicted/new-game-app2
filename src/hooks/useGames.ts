import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import { CACHE_KEY_GAME } from "../constant";
import APIClient, { FetchResponse } from "../services/apiClient";
// Define the Game interface as before


const apiClient = new APIClient<Game>('/games')

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}


// useGames hook refactored to use useQuery
const useGames = (gameQuery: GameQuery) =>

  useInfiniteQuery<FetchResponse<Game>>({
  queryKey: [CACHE_KEY_GAME, gameQuery],
  queryFn: ({pageParam = 1}) =>
              apiClient
                .getAll({
                  params:{
                            genres:gameQuery.genre?.id, 
                            parent_platforms:gameQuery.platform?.id,
                            ordering:gameQuery.sortOrder,
                            search:gameQuery.searchText, page: pageParam
                        }
                }),
                getNextPageParam: (lastPage, allPages) => {
                  return allPages.length + 1
                }
   
  });

export default useGames;

// 
//  queryFn: () => 
//              api.Client.get<FetchResponse<Game>(CACHE_KEY_GAME, ) {
//               params: {
//                        genres: gameQuery.genre?.id,
//                        parent_platforms: gameQuery.platform?.id,
//                         ordering: gameQuery.sortOrder,
//                         search: gameQuery.searchText,
//                  },
//                  })
//                      .then(res => res.data)


// }