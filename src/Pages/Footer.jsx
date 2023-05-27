import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Input,
  Image,
  
  useToast,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: `Subscribed to Newsletter`,
      position: "bottom-left",
      isClosable: true,
    });
  };
  return (
    <>
      <hr></hr>
      <SimpleGrid
        minChildWidth="150px"
        spacing={10}
        textAlign="left"
        m="auto"
        mt="30px"
        fontWeight="light"
        width="85%"
      >
        <Box>
          <Heading fontSize="11px">
            GET EMAIL OFFERS & THE LATEST NEWS FROM BATH & BODY WORKS!
          </Heading>
          <form onSubmit={handleSubmit}>
            <Text mt="5px">Enter Email</Text>
            <Input mt="5px" color="black" type="email" required></Input>
            <Text mt="5px">Confirm Email</Text>
            <Input mt="5px" type="email" required></Input>

            <Input
              w="50%"
              type="submit"
              mt="5px"
              bg="black"
              color="white"
              _hover={{
                cursor: "pointer",
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            />
          </form>

          <Text mt="35px">Get Connected</Text>
          <Flex gap={8} mt="10px">
            <Image
              boxSize="25px"
              src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw384a0b5a/Group%2011.png"
            />
            <Image
              boxSize="25px"
              src="data:image/jpeg;base64,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"
            />
          </Flex>
        </Box>
        <Box>
          <Heading as="h6" fontSize="15px" mb="10px">
            CUSTOMER CARE
          </Heading>
          <Text _hover={{ textDecoration: "underline" }} mt="5px">
            Help & FAQs
          </Text>
          <Text _hover={{ textDecoration: "underline" }} mt="5px">
            Shipping
          </Text>
          <Text _hover={{ textDecoration: "underline" }} mt="5px">
            Returns & Exchanges
          </Text>
          <Text _hover={{ textDecoration: "underline" }} mt="5px">
            Order Tracking
          </Text>
          <Text _hover={{ textDecoration: "underline" }} mt="5px">
            Corporate Sales & Gifts
          </Text>
          <Text _hover={{ textDecoration: "underline" }} mt="5px">
            Contact us
          </Text>
        </Box>
        <Box>
          <Box>
            <Heading as="h6" fontSize="15px">
              MY ACCOUNT
            </Heading>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              Sign In or Sign Up
            </Text>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              Order Tracking
            </Text>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              My Auto Refresh
            </Text>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              My Love-It List
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Heading as="h6" fontSize="15px">
              DISCOVER
            </Heading>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              About Us
            </Text>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              Carrers
            </Text>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              Gift Cards
            </Text>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              Shop by Fragrance
            </Text>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              Product Ingredients
            </Text>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              Get Inspired
            </Text>
            <Text _hover={{ textDecoration: "underline" }} mt="5px">
              Diversity, Equity & Inclusion
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h6" fontSize="15px">
            FIND US
          </Heading>
          <Text _hover={{ textDecoration: "underline" }} mt="10px">
            Store Locator
          </Text>
          <Text _hover={{ textDecoration: "underline" }} mt="10px">
            Global Location
          </Text>
        </Box>
      </SimpleGrid>

      <Box w="85%" m="auto" mt="20px">
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <Box m="20px">
            <Image
              width="100px"
              height="30px"
              src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2f6d41ce/secured.png"
            />
          </Box>
          <Box mt="20px">
            <Flex gap={2}>
              <Link to="/adminlogin">
                <Text fontSize="16px">Admin</Text>
              </Link>

              <Text fontSize="16px">
                {" "}
                | Site Map | Terms Of Use | Privacy Policy
              </Text>
            </Flex>

            <Text mt="10px" fontStyle="light">
              © 2022 Bath & Body Works Direct, Inc. All Rights Reserved.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Footer;
