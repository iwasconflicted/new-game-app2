import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import { CACHE_KEY_GAME } from "../constant";
// Define the Game interface as before
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface FetchGameResponse {
  count: number;
  results: Game[];
}
// useGames hook refactored to use useQuery
const useGames = (gameQuery: GameQuery) =>
  useQuery(
    [CACHE_KEY_GAME, gameQuery],
    () =>
      apiClient
        .get<FetchGameResponse>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then(response => response.data),
    {
      staleTime: 24 * 60 * 60 * 1000,
    }
  );
export default useGames;