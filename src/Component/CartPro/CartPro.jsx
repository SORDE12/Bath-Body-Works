import { Box, Button, Flex, Image, Select, Text } from "@chakra-ui/react";
import React from "react";

const CartPro = ({ val, updateQty, deletePro }) => {
  let dollarIndianLocale = Intl.NumberFormat("en-IN");
  const { id, qty, product } = val;
  const { url, title, category, price1, price } = product;

  let handleQtyChange = (id,value) => {

    updateQty(id,value)
  };

  return (
    <div>
      <Box
        boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
        m="10px"
        p="10px"
        borderRadius="15px"
      >
        <Flex alignItems="center" justifyContent="space-around">
          <Image src={url} boxSize="180px" alt={title} />
          <Box borderRadius="5px">
            <Text>{category}</Text>
            <Text fontWeight="bold">{title}</Text>
            <Flex className="inline">
              <h1>${dollarIndianLocale.format(price1)}/-</h1>
              <p>
                <s>{price}/-</s>
              </p>
            </Flex>
            <p>You saved ${dollarIndianLocale.format(price - price1)}/-</p>
            <Flex alignItems="center">
              Qty:{" "}
              <Select
                w="80px"
                value={qty}
                onChange={(e) => handleQtyChange( id,e.target.value )}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
            </Flex>
            <Flex width="100%" m="auto" justifyContent="space-around" mt="10px">
              <Button
                _hover={{ backgroundColor: "#bee3f8" }}
                backgroundColor="white"
                onClick={() => {
                  deletePro(id);
                }}
              >
                Remove
              </Button>
              <Button
                _hover={{ backgroundColor: "#bee3f8" }}
                backgroundColor="white"
              >
                Move to WishList
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default CartPro;
