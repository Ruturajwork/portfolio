import React from "react";
//import GitHubCalendar from "react-github-calendar";

import { Flex, Text } from "@chakra-ui/react";

const Github = () => {
  return (
    <Flex>
      <Text
        Text
        as="h2"
        fontSize={{ lg: "5xl", base: "3xl" }}
        fontWeight="bold"
      >
        Days I started<strong>Code</strong>
      </Text>

      <GitHubCalendar username="Ruturajwork" />
    </Flex>
  );
};

export default Github;
