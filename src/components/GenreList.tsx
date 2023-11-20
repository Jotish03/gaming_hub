import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

// const truncateGenreName = (name: string) => {
//   if (name.length > 13) {
//     return name.slice(0, 10) + "...";
//   }
//   return name;
// };

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, loading } = useGenres();
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      <Heading marginBottom={5} marginTop={4} fontSize={"3xl"}>
        {" "}
        Genres{" "}
      </Heading>
      <List>
        {loading &&
          skeleton.map((skeletonId) => (
            <ListItem key={`skeleton-${skeletonId}`} paddingY={"5px"}>
              <HStack>
                <Skeleton borderRadius={8} boxSize={"32px"} />
                <Skeleton height="20px" width="100px" />
              </HStack>
            </ListItem>
          ))}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                boxSize={"32px"}
              />
              <Button
                _hover={{
                  textDecoration: "underline",
                }}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
                fontSize={"lg"}
                variant={"link"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
