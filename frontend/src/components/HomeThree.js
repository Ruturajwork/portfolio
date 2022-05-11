import { Flex, Box, Text, Heading, Link, Icon } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const HomeThree = () => {
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        m="3"
        w="full"
        h="300px"
        p="7"
        wrap="wrap"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          p="5"
          borderBottom="1px"
          shadow="lg"
          borderColor="purple.200"
        >
          <Heading as="h2" fontSize="4xl">
            Find Me On .
          </Heading>
          <Text fontSize={{ lg: "2xl", base: "xl" }} mt="4">
            Feel free to Connect with me
          </Text>
          <Flex mt="4" direction="row" gap="10">
            <Link href="https://github.com/Ruturajwork">
              <Icon as={BsGithub} w="8" h="8" />
            </Link>
            <Link href="https://www.linkedin.com/in/ruturaj-salunkhe-70b923237">
              <Icon as={BsLinkedin} w="8" h="8" />
            </Link>
            <Link href="https://www.instagram.com/_mr_.salunkhe._/">
              <Icon as={BsInstagram} w="8" h="8" />
            </Link>
            <Link href="https://twitter.com/RuturajSalunkh6">
              <Icon as={BsTwitter} w="8" h="8" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeThree;
