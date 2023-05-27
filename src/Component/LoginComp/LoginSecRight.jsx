import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const LoginSecRight = () => {
  return (
    <Box
      textAlign="center"
      width={{ base: "90%", sm: "90%", md: "100%", lg: "50%" }}
      marginX="auto"
      fontSize="20px"
      mb="30px"
    >
      <Heading mt="10px" fontSize="26px">
        Sign Up
      </Heading>
      <Text fontSize="16px" mb="6px">
        Create an account to access the best of your favorite store
      </Text>
      <Flex
        justifyContent="space-around"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
        }}
      >
        <Button
          mb="20px"
          border="1px solid black"
          background="white"
          color="#65b3ec"
        >
          <Image
            mr="5px"
            src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwdc80632a/images/facebooksignin.png"
          />{" "}
          Login With Facebook
        </Button>
        <Button
          mb="20px"
          border="1px solid black"
          background="white"
          color="#ff5151"
        >
          <Image
            mr="5px"
            src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw240daad6/images/googlesignin.png"
          />{" "}
          Login with Google
        </Button>
      </Flex>
      <Center>
        <Image src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw661e9c13/images/benefits.png" />
      </Center>
      <Center>
        <Link to="/signup">
          <Button px="25px" mt="35px" py="5px" background="black" color="white">
            Create Account
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default LoginSecRight;
