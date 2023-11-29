export default interface NextData {
  props: Props;
}

interface Props {
  // games
  pageProps: PageProps;
}

interface PageProps {
  // initialParams
  // searchResult
  gameVersions: GameVersion[];
  game: Game;
  // categoriesTree
  gameFlavor: GameFlavor;
  // customShelves
  // metaTags
  // selectedPage
}

interface GameVersion {
  id: number;
  version: string;
}

interface Game {
  id: number;
  slug: string;
  name: string;
}

interface GameFlavor {
  title: string;
  items: GameFlavorItem[];
}

interface GameFlavorItem {
  id: number;
  name: string;
}
