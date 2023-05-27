import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ModalCart = ({ product, qty, size }) => {
  // console.log(product, qty);
  const { des, price1, price, url, title } = product;
  console.log(product, des, price1);
  let discount = +price - price1;
  return (
    <Box>
      <Flex>
        <Box>
          <Image boxSize="150px" src={url} />
          <Text fontFamily="bold">{title}</Text>
          <Text fontSize="12px">{des}</Text>

          <div>
            <h1>₹{price1}/-</h1>
            <p>
              <s>{price}/-</s>
            </p>
          </div>
          <p>You saved ₹{discount}/-!</p>
        </Box>
      </Flex>
    </Box>
  );
};

export default ModalCart;
