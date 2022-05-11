import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
//import TxtType from "./Type";

const HomeOne = () => {
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        m="3"
        w="full"
        h="auto"
        gap="20"
        wrap="wrap"
        borderBottom="1px"
        shadow="lg"
        borderColor="purple.200"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Flex direction="column" justifyContent="flex-start" p="5">
          <Text as="h2" fontSize={{ lg: "5xl", base: "3xl" }} fontWeight="bold">
            Hi there,{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </Text>

          <Flex direction="row" gap="5" wrap="wrap">
            <Text
              as="h2"
              fontSize={{ lg: "5xl", base: "3xl" }}
              fontWeight="bold"
            >
              I'm <br />
              <span style={{ textShadow: "1px 1px blue" }}>
                Ruturaj Lahu Salunkhe
              </span>
            </Text>
          </Flex>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
            color="gray.500"
          >
            ⚡ A passionate individual who always thrive to <br />
            work on end to end products which develop <br />
            sustainable and scalable social and technical <br />
            systems to create impact.
          </Text>
        </Flex>

        <Flex>
          <Image
            src="feelingProud.svg"
            objectFit="cover"
            w={{ lg: "450px", md: "300px", base: "300px" }}

            // w={{ lg: "400px", md: "300px", base: "300px" }}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default HomeOne;
