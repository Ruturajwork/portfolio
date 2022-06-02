import {
  Flex,
  Text,
  Link,
  Icon,
  Box,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { useState } from "react";

const Footer = () => {
  const [show, setShow] = useState(false);
  let date = new Date();
  let year = date.getFullYear();

  //   <Flex
  //     as="footer"
  //     justifyContent="center"
  //     py="5"
  //     // display={{ base: show ? "block" : "none", md: "flex" }}
  //     // width={{ base: "full", md: "auto" }}
  //   >
  //     <Box>
  //       <Text>Designed and Developed by Ruturaj Salunkhe</Text>
  //       <Text fontSize="xl">Copyright@{year} RuturajPortPholio</Text>
  //     </Box>
  //     <Box ml="10">
  //       <Flex
  //         alignItems="centre"
  //         gap="10"
  //         justifyContent="flex-end"
  //         direction="row"
  //       >
  //         <Link href="/">
  //           <Icon as={BsGithub} w="4" h="4" mx="2" />
  //         </Link>
  //         <Link href="/">
  //           <Icon as={BsLinkedin} w="4" h="4" mx="2" />
  //         </Link>
  //         <Link href="/">
  //           <Icon as={BsInstagram} w="4" h="4" mx="2" />
  //         </Link>
  //       </Flex>
  //     </Box>
  //   </Flex>

  //{
  /*trying Different*/
  //   }
  //   return (
  //     <Flex
  //       as="footer"
  //       justifyContent="center"
  //       py="5"
  //       p={4}
  //       display={{ md: "flex" }}
  //     >
  //       <SimpleGrid columns={[2, null, 3]} spacing="20px">
  //         <Box marginEnd="4">
  //           <Text fontSize="xl" color="blue.900">
  //             Designed and Developed by Ruturaj Salunkhe
  //           </Text>
  //         </Box>
  //         <Box marginEnd="4">
  //           <Text fontSize="xl" color="blue.900">
  //             Copyright@{year} RuturajPortfolio
  //           </Text>
  //         </Box>

  //         <Box marginEnd="4">
  //           <Link href="/">
  //             <Icon as={BsGithub} w="4" h="4" mx="2" />
  //           </Link>
  //           <Link href="/">
  //             <Icon as={BsLinkedin} w="4" h="4" mx="2" />
  //           </Link>
  //           <Link href="/">
  //             <Icon as={BsInstagram} w="4" h="4" mx="2" />
  //           </Link>
  //         </Box>
  //       </SimpleGrid>
  //     </Flex>
  //   );
  // };

  /*Trying new*/
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="xl"
          letterSpacing="wide"
          color="cyan.600"
        >
          Designed and Developed by Ruturaj Salunkhe
        </Text>
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="xl"
          letterSpacing="wide"
          color="green.600"
        >
          Copyright@{year} RuturajPortPholio
        </Text>
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          <Link href="https://github.com/Ruturajwork">
            <Icon as={BsGithub} w="4" h="4" mx="2" />
          </Link>
          <Link href="https://www.linkedin.com/in/ruturaj-salunkhe-70b923237">
            <Icon as={BsLinkedin} w="4" h="4" mx="2" />
          </Link>
          <Link href="https://www.instagram.com/_mr_.salunkhe._/">
            <Icon as={BsInstagram} w="4" h="4" mx="2" />
          </Link>
          <Link href="https://twitter.com/RuturajSalunkh6">
            <Icon as={BsTwitter} w="4" h="4" mx="2" />
          </Link>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
