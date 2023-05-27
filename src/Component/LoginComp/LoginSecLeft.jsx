import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLoginUser } from "../../redux/Auth/authAction";


const LoginSecLeft = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let toast = useToast();

  let signinSub = (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      password: password,
    };
    //console.log(obj)
    dispatch(authLoginUser(obj, navigate,toast));
  };

  return (
    <Box
      textAlign="center"
      width={{ base: "90%", sm: "90%", md: "100%", lg: "50%" }}
      marginX="auto"
      margin="auto"
    >
      <Heading mt="10px" mb="26px">
        Sign In
      </Heading>
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
          />
          Login with Google
        </Button>
      </Flex>
      <Text fontSize="16px" textAlign="left" pl="30px">
        If you already have an account with us, sign in below
      </Text>
      <form onSubmit={signinSub}>
        <Box textAlign="left" pl="30px">
          <Text fontSize="16px">Email Address</Text>
          <Input
            type="email"
            w="300px"
            mt="10px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email ID"
          />
        </Box>
        <Box textAlign="left" pl="30px" mt="15px">
          <Text fontSize="16px">Password</Text>
          <Input
            type="password"
            w="300px"
            mt="10px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </Box>
        <Flex>
          <Text textAlign="left" pl="30px" mt="15px" color="blue">
            Forget Password?
          </Text>
        </Flex>
        <Input
          mt="15px"
          mb="15px"
          width="300px"
          color="white"
          backgroundColor="black"
          type="submit"
        />
      </form>
    </Box>
  );
};

export default LoginSecLeft;
