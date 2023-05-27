import { Box, Flex, Input, Select, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAddUser } from "../redux/Auth/authAction";

let initialState = {
  username: "",
  email: "",
  password: "",
  country: "",
  isMarried: false,
};

const Signup = () => {
  const [formState, setFormState] = useState(initialState);
  const Navigate = useNavigate();
  const dispatch=useDispatch()

  const toast = useToast();

  let handleChange = (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormState({ ...formState, [e.target.name]: val });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, country } = formState;

    if (username === "" || email === "" || password === "" || country === "") {
      toast({
        title: "Please enter all data",
        description: "Not added details to all Inputs",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      setFormState({ ...formState, username:"", email:"",password:"",country:"",isMarried:false });
      return;
    }
       dispatch(authAddUser(formState,Navigate))
  };
  const { username, email, password, country, isMarried } = formState;
  return (
    <Box
      m="auto"
      padding="20px"
      width={{ base: "80%", sm: "80%", md: "60%", lg: "50%" }}
    >
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          USERNAME
          <Input
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="Enter Username"
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          EMAIL
          <Input
            name="email"
            type="text"
            onChange={handleChange}
            value={email}
            placeholder="Enter Email"
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          PASSWORD
          <Input
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            placeholder="Enter Password"
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          COUNTRY
          <Select
            placeholder="Select country"
            name="country"
            onChange={handleChange}
            value={country}
          >
            <option value="india">INDIA</option>
            <option value="china">CHINA</option>
            <option value="uae">UAE</option>
            <option value="japan">JAPAN</option>
          </Select>
        </label>
        <br />
        <br />
        <Flex m="auto" gap={2} alignItems="center">
          <Text>MARITAL STATUS</Text>
          <input
            name="isMarried"
            type="checkbox"
            onChange={handleChange}
            checked={isMarried}
            width="20px"
            border="1px solid black"
          />
        </Flex>
        <br />
        <br />
        <Input
          color="white"
          backgroundColor="black"
          type="submit"
          value="submit"
        />
      </form>
    </Box>
  );
};

export default Signup;
