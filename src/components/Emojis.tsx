import star from "../assets/star.png";
import dislike from "../assets/dislike.png";
import like from "../assets/like.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: dislike, alt: "dislike", boxSize: "25px" },
    4: { src: like, alt: "like", boxSize: "25px" },
    5: { src: star, alt: "star", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emojis;
