import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import LoginSecLeft from "../Component/LoginComp/LoginSecLeft";
import LoginSecRight from "../Component/LoginComp/LoginSecRight";

const Login = () => {
  return (
    <Box
      margin="auto"
      
      width={{ base: "95%", sm: "95%", md: "80%", lg: "70%" }}
    >
      <Center>
        <Image
          width={{ base: "90%", sm: "90%", md: "95%", lg: "100%" }}
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
          mx="auto"
          src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw66f3bdef/images/signin.png"
        />
      </Center>
      <Text
        mt="15px"
        mb="15px"
        fontSize="22px"
        width={{ base: "90%", sm: "90%", md: "95%", lg: "100%" }}
        mx="auto"
      >
        Sign In or Sign Up
      </Text>
      <Box
        width={{ base: "90%", sm: "90%", md: "95%", lg: "100%" }}
        border="1px solid black"
        mb="15px"
        mx="auto"
      ></Box>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent="space-around"
      >
        <LoginSecLeft />
        <LoginSecRight />
      </Flex>
    </Box>
  );
};

export default Login;
