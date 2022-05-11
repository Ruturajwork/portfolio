import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { ProjectCard } from "../components/Card";
import {
  DiJavascript1,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import TryPrject from "../components/TryProject";

const ProjectsScreen = () => {
  return (
    <>
      <Flex
        w="full"
        direction="column"
        justifyContent="center"
        alignItems="center"
        py="10"
      >
        <TryPrject />
        {/* <Flex
        w="full"
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt="86px"
        py="10"
      >
        <Flex
          mt="40px"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image mx="10" src="projects_image.svg" w="300px" h="300px" />
          <Heading as="h2" fontSize="5xl" fontWeight="bold">
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

          {/* <Heading
            as="h2"
            fontSize={{ lg: "5xl", base: "3xl" }}
            fontWeight="medium"
          >
            My Recent Projects
          </Heading> */}
        {/* <Text as="h2" fontSize="2xl" style={{ color: "blue.800" }}>
            Here are a few projects I've worked on recently.
          </Text>
        </Flex> */}
        <Flex direction="row" justifyContent="center" wrap="wrap">
          <ProjectCard
            source="https://ruturajstore.herokuapp.com/"
            git="https://github.com/Ruturajwork"
            src="shopsite.png"
            desc="Full stack E-commerce web application made
            with latest tranding technologies that comes with
             many Features."
            clickDetails="Features"
            popheading="G-STORE"
            description="Authorization using JWT,
            Rest Api,
            Login,
            Logout,
            Payment option selection,
            Payment(Paypal),
            View Profile and Update, Admin Access ,
            View Orders,Make it Delivered"
          />
          <ProjectCard
            source="https://rutuportfolio.netlify.app/"
            git="https://github.com/Ruturajwork"
            src="project2.png"
            desc="Frontend Application "
            clickDetails="Features"
            popheading="RUTUPORTFOLIO"
            description="Rect,
            ReactDom,react-pdf,react-redux,
            Redux-thunk,Theme,Redux"
          />{" "}
        </Flex>
      </Flex>
      s
    </>
  );
};

export default ProjectsScreen;
