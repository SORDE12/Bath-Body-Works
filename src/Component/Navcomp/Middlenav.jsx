import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import MiniNavbarDrawer from "../MiniNavbarDrawer";
import logo from "../../images/logo.png";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { authLogoutUser } from "../../redux/Auth/authAction";
import { useDispatch, useSelector } from "react-redux";

const Middlenav = () => {
  const { status } = useSelector((state) => state.authManager);
  const { cart } = useSelector((state) => state.cartManager);
  const toast = useToast();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogoutUser(toast));
  };
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        px={{ base: "10px", sm: "10px", md: "10px", lg: "70px" }}
      >
        <Flex alignItems="center" justifyContent="flex-start">
          <Box display={{ base: "block", sm: "block", md: "none", lg: "none" }}>
            <MiniNavbarDrawer />
          </Box>
          <Link to="/">
            <Image
              width={{ base: "40%", sm: "40%", md: "30%", lg: "40%" }}
              style={{ cursor: "pointer" }}
              src={logo}
              alt="logo"
              margin="auto"
            />
          </Link>
        </Flex>
        <Flex justifyContent="flex-start" alignItems="center">
          <InputGroup
            size="md"
            margin={"5px"}
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
          >
            <Input
              pr="4.5rem"
              width={"20vw"}
              fontSize="xs"
              placeholder="Search by Fragrance and Product..."
              borderColor={"black"}
              focusBorderColor="black"
              borderRadius={"0px"}
              padding="0px 10px"
            />
            <InputRightElement width="3.8rem">
              <Button
                padding={"0px"}
                children={<Search2Icon color={"#005699"} />}
                backgroundColor="Background"
                size="xl"
              ></Button>
            </InputRightElement>
          </InputGroup>
          <Box width="35px" height="35px">
            <Popover trigger="hover" placement="bottom-end">
              <PopoverTrigger>
                <Image
                  _hover={{
                    cursor: "pointer",
                  }}
                  width={{ base: "80%", sm: "80%", md: "100%", lg: "100%" }}
                  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw8f5c8e40/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
                  alt="user login"
                />
              </PopoverTrigger>
              <PopoverContent borderRadius="none" width={"200px"}>
                <PopoverBody
                  sx={{
                    padding: "20px 10px",
                    margin: "0px",
                    textAlign: "left",
                  }}
                >
                  <ul>
                    {status ? (
                      <li onClick={handleLogout}>Logout</li>
                    ) : (
                      <Link to="/login">
                        <li>Sign in/Sign up</li>
                      </Link>
                    )}
                  </ul>
                  <ul>
                    <Link to="/adminlogin">
                      <li>Login as Admin</li>
                    </Link>
                  </ul>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>

          <Link to="/cart">
            <Box mx="10px">
              {/* Bag cart initial value 0; add cart length here  */}
              <Box style={{ width: "30px", paddingTop: "15px" }}>
                <Image
                  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671014791573/images/svg-icons/UI-AddToBag.svg?yocs=o_s_"
                  alt="cart"
                />
                <Box
                  sx={{
                    position: "relative",
                    bottom: "6",
                    cursor: "pointer",
                    opacity: "1",
                    zIndex: "101",
                    padding: "0",
                    fontSize: "11px",
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "3px",
                  }}
                >
                  {cart.length}
                </Box>
              </Box>
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Middlenav;
