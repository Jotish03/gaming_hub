import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import MetaCritic from "./MetaCritic";
import getCroppedImageUrl from "../services/image-url";
import Emojis from "./Emojis";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} padding={2} marginBottom={2}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />

          <MetaCritic score={game.metacritic} />
        </HStack>
        <HStack justifyContent={"space-between"} padding={2} marginBottom={2}>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <Emojis rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
