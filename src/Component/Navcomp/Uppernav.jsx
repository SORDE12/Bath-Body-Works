import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Uppernav = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      px="70px"
      height="40px"
      background="#d2e6fe"
      display={{ base: "none", sm: "none", md: "fles", lg: "flex" }}
    >
      <Flex>
        <Text fontSize="15px" fontWeight="bold" color="#e20888">
          POINTS. PERKS. EXCLUSIVES.
        </Text>
        <Text
          fontSize="14px"
          fontWeight="normal"
          textDecoration="underline"
          px="40px"
          _hover={{
            color: "orange",
          }}
        >
          join reward!
        </Text>
      </Flex>
      <Flex>
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1670961565504/images/svg-icons/bopis-icon-small.svg?yocs=o_s_" />

        <Text
          fontSize="15px"
          fontWeight="bold"
          pl="10px"
          pr="40px"
          color="blue"
        >
          PICK UP IN STORE
        </Text>
        <Text
          fontSize="14px"
          fontWeight="normal"
          textDecoration="underline"
          _hover={{
            color: "orange",
          }}
        >
          set store
        </Text>
      </Flex>
    </Flex>
  );
};

export default Uppernav;
