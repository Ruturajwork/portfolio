import { Flex, Heading, Box, Image, Text } from "@chakra-ui/react";

const HomeTwo = () => {
  return (
    <>
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
        py="10"
        wrap="wrap"
        direction="column"
        h="auto"
        gap="20"
        p="7"
        borderBottom="1px"
        shadow="lg"
        borderColor="purple.200"
        backdropFilter="saturate(180%) blur(10px)"
        mt="10"
      >
        <Flex justifyContent="center" alignItems="center" wrap="wrap">
          <Flex direction="column" justifyContent="center">
            <Heading
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
              as="h1"
              letterSpacing="md"
              fontSize={{ lg: "5xl", base: "3xl" }}
              marginLeft="18"
            >
              Let me Introduce Myself
            </Heading>
            <Text
              fontSize={{ lg: "2xl", base: "1xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              I fell in love with programming and I have at least learnt
              <br />
              something, I think… 🤷‍♂️
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "1xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              I am fluent
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Javascript Developer.
              </span>
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "1xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              My field of Interest's are building new
              <br />
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Web Applications
              </span>{" "}
              and
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                {" "}
                Products
              </span>
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "1xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              Whenever possible, I apply my passion for developing <br />
              products with
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                {" "}
                Node.js
              </span>{" "}
              and{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                }}
              >
                Modern Javascript Library{" "}
              </span>
              <br />
              and{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                }}
              >
                Frameworks
              </span>{" "}
              like
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                }}
              >
                {" "}
                React.js{" "}
              </span>
              and
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                }}
              >
                {" "}
                Redux
              </span>
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "1xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              Passed Out{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                B.Sc (Information Technology)
              </span>{" "}
              in 2021
            </Text>

            <Text
              fontSize={{ lg: "2xl", base: "1xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              An aspiring developer who loves to take on
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                  gap: "10",
                }}
              >
                New Projects
              </span>
              <br />
              that challenges his
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Analytical
              </span>
              and
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Technological <br />
                Capacities
              </span>
            </Text>
          </Flex>{" "}
          <Flex p="10" direction="column" gap="20" wrap="wrap">
            <Box>
              <Image
                rounded="full"
                src="avtarruturaj.png"
                objectFit="cover"
                w={{ lg: "400px", md: "300px", base: "300px" }}
                //w={{ lg: "400px", md: "300px", base: "300px" }}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeTwo;
