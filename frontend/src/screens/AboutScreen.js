import {
  Flex,
  Box,
  Text,
  Heading,
  Link,
  Icon,
  Image,
  List,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
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
  SiExpress, SiVercel,
  SiElectron,
} from "react-icons/si";
import { Card } from "../components/Card.js";
import { AiFillGithub } from "react-icons/ai";
import { DiLinux } from "react-icons/di";
import AboutMe from "../components/AboutMe.js";
//import Github from "../components/GitHub.js";

const AboutScreen = () => {
  const skill = [
    { skill: "HTML", ic: DiHtml5 },
    { skill: "CSS", ic: DiCss3 },
    { skill: "Chakra UI", ic: SiChakraui },
    { skill: "Bootstrap", ic: SiBootstrap },
    { skill: "Material-ui", ic: SiMaterialui },

    { skill: "JavaScript", ic: DiJavascript1 },
    { skill: "React Js", ic: DiReact },

    { skill: "Node js", ic: DiNodejs },
    { skill: "Mongo DB", ic: DiMongodb },
    { skill: "Redux", ic: SiRedux },
    { skill: "Express-js", ic: SiExpress },
    { skill: "Electron", ic: SiElectron },

    

    { skill: "Heroku", ic: SiHeroku },
    { skill: "Netlify", ic: SiNetlify },
    { skill: "Vercel", ic: SiVercel },
  ];

  const tools = [
    { skill: "Linux", ic: DiLinux },
    { skill: "VsCode", ic: SiVisualstudiocode },
    { skill: "PostMan", ic: SiPostman },
    { skill: "Figma", ic: SiFigma },
    { skill: "Git", ic: AiFillGithub },
  ];
  return (
    <>
      <AboutMe />
      <Flex
        mt="10"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h2" fontSize="5xl" fontWeight="bold">
          Professional{" "}
          <span
            style={{
              color: "purple",
              fontWeight: "bold",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          >
            {" "}
            Skillset
          </span>
        </Heading>
        <Flex
          p="10"
          direction="row"
          justifyContent="center"
          wrap="wrap"
          gap="10"

        >
          {skill.map((item) => (
            <Card ic={item.ic}>{item.skill}</Card>
          ))}
        </Flex>
      </Flex>

      <Flex
        mt="10"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h3" fontSize="5xl" fontWeight="bold">
          Tools{" "}
          <span
            style={{
              color: "purple",
              fontWeight: "bold",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          >
            {" "}
            I Use
          </span>
        </Heading>
        <Flex
          p="10"
          direction="row"
          justifyContent="center"
          wrap="wrap"
          gap="20"
        >
          {tools.map((item) => (
            <Card ic={item.ic}>{item.skill}</Card>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default AboutScreen;
