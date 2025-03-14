import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "../src/hooks/usePlatforms"
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";


// undefined is absence of value;
// null: is an intentional absence of value

export interface GameQuery {
  genreId: number;
  platformId?: number
  sortOrder: string
  searchText: string
}


const App = () => {
  
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  
  return (
    <>
      {/* create a responsive layout with Chakra UI Grid */}
      {/* Nav, aside, main_______responsive for desktop and mobile */}
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`, //1024
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText})}/>
          </GridItem>

        <Show above="lg">
          <GridItem area="aside" padding={2}>
            {" "}
           <GenreList selectedGenreId={gameQuery.genreId} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}/>
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box padding={5}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginY={5} >
            <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
            <SortSelector onSelectSortOrder={sortOrder => setGameQuery({...gameQuery, sortOrder})} />
          </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;