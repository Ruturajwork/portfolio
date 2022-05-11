import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const TryPrject = () => {
  return (
    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
      py="10"
      wrap="wrap"
      direction="column"
      borderBottom="1px"
      borderColor="purple.200"
      backdropFilter="saturate(180%) blur(10px)"
      shadowColor="blue"
      shadow="3px 2px purple"
      _hover={{ shadow: "2px 2px 2px 2px blue" }}
      rounded="md"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        gap="10"
        borderBottom="2px"
        borderColor="purple.400"
        shadow="lg"
        mt="10"
        backdropFilter="saturate(180%) blur(10px)"
      >
        {" "}
        <Flex mx="10" direction="column">
          <Heading
            as="h2"
            fontSize={{ lg: "5xl", base: "3xl" }}
            fontWeight="bold"
          >
            My Recent{" "}
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              Projects
            </span>
          </Heading>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
            style={{ color: "blue.800" }}
          >
            Here are a few
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              Projects
            </span>{" "}
            I've worked on recently.
          </Text>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
            color="gray.500"
          >
            My projects makes use of vast variety of latest <br />
            technology tools. My best experience is to create <br />
            FullStack projects and Deploy them to web applications
            <br /> using cloud infrastructure..
          </Text>
        </Flex>
        <Image mx="10" src="projects_image.svg" w="300px" h="300px" />
      </Flex>
    </Flex>
  );
};
export default TryPrject;
