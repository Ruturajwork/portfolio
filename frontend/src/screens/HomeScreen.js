import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import HomeOne from "../components/HomeOne";
import HomeTwo from "../components/HomeTwo";
import FullStack from "../components/FullStackCardHome";
import HomeThree from "../components/HomeThree";

const HomeScreen = () => {
  return (
    <Flex direction="column" w="full">
      {/* Section 1 Home */}
      <HomeOne />

      {/* Section 2 Home */}
      <HomeTwo />

      {/* Section 3 Home */}
      <FullStack />

      {/* Section 4 Home */}
      <HomeThree />
    </Flex>
  );
};
export default HomeScreen;
