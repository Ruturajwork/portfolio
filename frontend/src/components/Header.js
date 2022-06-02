import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Heading,
  Link,
  Box,
  Icon,
  useColorMode,
  WrapItem,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import changeTheme from "../actions/colorAction.js";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.colorMode);

  const changeColor = () => {
    toggleColorMode();
    dispatch(changeTheme(colorMode));
  };

  return (
    <>
      {colorMode === "light" ? (
        <Icon onClick={changeColor} as={BsFillMoonFill} w="4" h="4" />
      ) : (
        <Icon onClick={changeColor} as={BsFillSunFill} w="4" h="4" />
      )}
    </>
  );
}

const MenuItem = ({ children, url }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="sm"
      letterSpacing="wide"
      color="pink.700"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontWeight="extrabold"
      textTransform="uppercase"
      mr="5"
      display="flex"
      alignItems="center"
      _hover={{ color: "blue.900" }}
      mt={{ base: 4, md: 0 }}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="blue.100"
      w="100%"
      top="0"
      pos="fixed"
      zIndex="2"
      boxShadow="lg"
      p="6"
      rounded="md"
      backdropFilter="saturate(180%) blur(10px)"
    >
      <Flex align="center" mr="5">
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
          as="h1"
          letterSpacing="md"
        >
          <Link
            as={RouterLink}
            to="/"
            _hover={{
              color: "blue.900",
              textDecor: "none",
            }}
          >
            RUTURAJPORTFOLIO
          </Link>
        </Heading>
      </Flex>
      <Link as={RouterLink} to="/">
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="avtarruturaj.png" />
        </WrapItem>
      </Link>
      <Box
        display={{ base: "block", md: "none", sm: "block" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="pink.800" w="6" h="6" />
        <title>Menu</title>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        gap="10"
        alignItems="center"
      >
        <MenuItem url="/">
          <Icon
            as={AiOutlineHome}
            color="pink.700"
            w="4"
            h="4"
            mr="1"
            letterSpacing="wide"
          />
          Home
        </MenuItem>
        <MenuItem url="/about">
          <Icon as={AiOutlineUser} color="pink.700" w="4" h="4" mr="1" />
          About
        </MenuItem>
        <MenuItem url="/projects">
          <Icon
            as={AiOutlineFundProjectionScreen}
            color="pink.700"
            w="4"
            h="4"
            mr="1"
          />
          Projects
        </MenuItem>
        <MenuItem url="/resume">
          <Icon as={CgFileDocument} color="pink.700" w="4" h="4" mr="1" />
          Resume
        </MenuItem>
   

        {/*trying to import icons*/}
        <Flex
          alignItems="center"
          gap="3"
          justifyContent="space-evenly"
          direction="row"
        >
          {" "}
          <DarkMode />
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
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
