import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  crousalData,
  imageBuy,
  imageData,
  lowerImageBuy,
} from "../Component/crousalData";
import { useSelector } from "react-redux";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsive1 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
 

  return (
    <div>
      <Box m="auto" w="85%" mt="50px">
        <Image
          src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw35cb0001/ARA%2055.gif"
          alt="err"
        />
      </Box>
      <Box m="auto" p="10px" w="85%" mt="50px" bg="#FFB52E">
        <Center>
          <Heading m="15px" fontSize="24px">
            TODAY'S TOP OFFERS
          </Heading>
        </Center>

        <Carousel responsive={responsive}>
          {crousalData.map((e) => (
            <Box
              bg="#FDFEFF"
              borderRadius="15px"
              border="1px solid #cacbcc"
              key={e.id}
            >
              <Center>
                <Heading mt="15px" fontSize="20px">
                  {e.heading}
                </Heading>
              </Center>
              <Center>
                <Text mt="10px">{e.desc}</Text>
              </Center>
              <Center>
                <Button
                  _hover={{
                    color: "#000933",
                    textDecor: "underline",
                    bg: "#fcc12e",
                  }}
                  mt="10px"
                  mb="15px"
                  color="#FFFFFF"
                  bg="#333333"
                >
                  Shop
                </Button>
              </Center>
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box m="auto" w="85%" mt="50px">
        <Image
          src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwdf0b8c7e/DXA%2056.gif"
          alt="err"
        />
      </Box>
      <Box>
        <Center>
          <Heading m="15px" fontSize="24px">
            SHOP BY CATEGORY
          </Heading>
        </Center>
        <SimpleGrid margin="auto" minChildWidth="120px" gap="1rem" width="85%">
          {imageData &&
            imageData.map((e) => (
              <Box key={e.id}>
                <Image
                  margin="auto"
                  width="150px"
                  src={e.url}
                  alt={e.heading}
                />
                <Heading
                  _hover={{
                    color: "#000933",
                    textDecor: "underline",
                  }}
                  margin="auto"
                  mt="10px"
                  mb="10px"
                  fontSize="14px"
                  textAlign="center"
                >
                  {e.heading}
                </Heading>
              </Box>
            ))}
        </SimpleGrid>
      </Box>

      <Flex
        margin="auto"
        gap="1rem"
        width="95%"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Box
          m="auto"
          mt={{ base: "10px", md: "50px" }}
          mb={{ base: "10px", md: "10px" }}
        >
          <Image
            w="fit-content"
            src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb5725af2/DZA%2064.jpg"
            alt="err"
          />
        </Box>

        <Box
          m="auto"
          w={{ base: "100%", md: "100%", lg: "60%" }}
          mt="50px"
          columns={2}
        >
          <Carousel responsive={responsive1}>
            {imageBuy.map((e) => (
              <Box key={e.id}>
                <Image
                  margin="auto"
                  width="130px"
                  height="200px"
                  src={e.url}
                  alt={e.heading}
                />
                <Heading
                  margin="auto"
                  mt="10px"
                  mb="10px"
                  fontSize="14px"
                  textAlign="center"
                >
                  {e.heading}
                </Heading>
                <Center>
                  <Text>Price:{e.price}</Text>
                </Center>
                <Center>
                  <Text color="#fcc12e">{e.desc}</Text>
                </Center>

                <Center>
                  <Button
                    _hover={{
                      color: "#000933",
                      textDecor: "underline",
                      bg: "#fcc12e",
                    }}
                    mt="10px"
                    mb="15px"
                    color="#FFFFFF"
                    bg="#333333"
                  >
                    Buy Now
                  </Button>
                </Center>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2 }}
        gap={10}
        width="70%"
        margin="auto"
        mt="25px"
      >
        {lowerImageBuy.length > 0 &&
          lowerImageBuy.map((e) => (
            <Box key={e.id}>
              <Image margin="auto" src={e.url} alt={e.heading} />
              <Heading
                margin="auto"
                mt="10px"
                mb="10px"
                fontSize="14px"
                textAlign="center"
                textDecoration="underline"
              >
                {e.heading}
              </Heading>
              <Center>
                <Text _hover={{ textDecor: "underline" }}>{e.desc}</Text>
              </Center>
            </Box>
          ))}
      </SimpleGrid>
      <Box textAlign="center" m="auto" mt="5%" width="80%">
        <Center>
          <Text fontSize="24px">Bath & Body Works</Text>
        </Center>
        <Text width="100%" mt="15px" mb="15px">
          Bath and Body Works is your go-to place for gifts & goodies that
          surprise & delight. From fresh fragrances to soothing skin care, we
          make finding your perfect something special a happy-memory-making
          experience. Searching for new seasonal creations or your favorite
          discontinued scents? We’ve got you covered there, too. Oh! And while
          you're browsing, shop our latest & greatest selection of lotions,
          soaps and candles!
        </Text>
      </Box>
    </div>
  );
};

export default Home;
