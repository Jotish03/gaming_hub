import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return (
    <Heading marginLeft={10} marginY={10} fontSize={"5xl"} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
