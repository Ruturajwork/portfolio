import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { FullStackCard } from "./Card";
import {
  DiJavascript1,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import {
  SiRedux,
  SiChakraui,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiHeroku,
  SiBootstrap,
  SiMaterialui,
  SiNetlify,
  SiExpress,
} from "react-icons/si";

const FullStack = () => {
  const skill = [
    { skill: "HTML", ic: DiHtml5 },
    { skill: "CSS", ic: DiCss3 },

    { skill: "JavaScript", ic: DiJavascript1 },
    { skill: "Node js", ic: DiNodejs },
    { skill: "React js", ic: DiReact },
    { skill: "Mongo DB", ic: DiMongodb },
    { skill: "Redux", ic: SiRedux },
    { skill: "Express-js", ic: SiExpress },

    { skill: "Heroku", ic: SiHeroku },
    { skill: "Netlify", ic: SiNetlify },

    { skill: "Chakra UI", ic: SiChakraui },
    { skill: "Bootstrap", ic: SiBootstrap },
    { skill: "Material-ui", ic: SiMaterialui },
  ];
  return (
    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
      py="10"
      wrap="wrap"
      direction="column"
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
        <Image mx="10" src="fullstack.svg" w="300px" h="300px" />
        <Flex mx="10" direction="column">
          <Heading
            as="h2"
            fontSize={{ lg: "5xl", base: "3xl" }}
            fontWeight="bold"
            color="blue.300"
          >
            Full Stack Development
          </Heading>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
            color="gray.500"
          >
            ⚡ Building resposive website front end using React-Redux
          </Text>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
            color="gray.500"
          >
            ⚡ Creating application backend in Node& Express
          </Text>
        </Flex>
        <Flex p="2" justifyContent="center" wrap="wrap" gap="10">
          {skill.map((item) => (
            <FullStackCard ic={item.ic}>{item.skill}</FullStackCard>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default FullStack;
