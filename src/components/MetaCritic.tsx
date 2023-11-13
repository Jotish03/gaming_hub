import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const MetaCritic = ({ score }: Props) => {
  const color = score > 75 ? "green" : score < 60 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} borderRadius={2}>
      {score}
    </Badge>
  );
};

export default MetaCritic;
