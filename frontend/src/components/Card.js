import {
  Flex,
  Heading,
  Icon,
  Link,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const ProjectCard = ({
  desc,
  git,
  source,
  src,
  clickDetails,
  popheading,
  description,
}) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        boxShadow="xs"
        borderColor="blue.800"
        p="3"
        dropShadow="lg"
        shadowColor="blue"
        shadow="3px 2px purple"
        _hover={{ shadow: "2px 2px 2px 2px blue" }}
        rounded="md"
        mt="6"
        wrap="wrap"
        m="8"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Image
          my="8"
          w={{ lg: "500px", base: "200px" }}
          h={{ lg: "300px", base: "100px" }}
          objectFit="cover"
          src={src}
          shadow="3px 2px purple"
          _hover={{ shadow: "2px 2px 2px 2px black " }}
        />
        <Text
          my="8"
          fontSize={{ lg: "2xl", base: "xl" }}
          fontWeight="medium"
          mt="3"
          mb="2"
          style={{ color: "blue.800" }}
        >
          {desc}
        </Text>
        <Flex my="6" gap="10">
          <Link
            p="5"
            border="1px solid purple"
            rounded="md"
            shadow="md"
            _hover={{ textDecor: "none", bgColor: "purple.500" }}
            href={git}
            target="_blank"
          >
            Browse Code
          </Link>
          <Link
            p="5"
            border="1px solid purple"
            rounded="md"
            shadow="md"
            _hover={{ textDecor: "none", bgColor: "purple.500" }}
            href={source}
            target="_blank"
          >
            Live
          </Link>
          <Popover placement="top-end">
            <PopoverTrigger>
              <Button
                border="1px solid purple"
                rounded="md"
                shadow="md"
                _hover={{ textDecor: "none", bgColor: "purple.500" }}
                marginTop="5"
              >
                {clickDetails}
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="blue.200" color="blue.900">
              <PopoverHeader fontWeight="bold" fontSize="xxl">
                {popheading}
              </PopoverHeader>
              <PopoverArrow bg="pink.500" />
              <PopoverCloseButton bg="blue.500" />
              <PopoverBody>{description}</PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </>
  );
};

export const Card = ({ children, ic }) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        boxShadow="xs"
        border=""
        borderColor="blue.800"
        p="9"
        shadow="3px 2px purple"
        _hover={{ shadow: "5px 5px 2px 2px blue" }}
        rounded="md"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Icon as={ic} my="3" w="20" h="20" />
        <Heading my="3" as="h3" fontSize="3xl">
          {children}
        </Heading>
      </Flex>
    </>
  );
};

export const FullStackCard = ({ ic }) => {
  return (
    <>
      <Icon as={ic} my="3" w="10" h="10" />
    </>
  );
};
