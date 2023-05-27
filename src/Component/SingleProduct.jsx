import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({
  id,
  url,
  title,
  category,
  price,
  price1,
  ratings,
}) => {
 
  return (
    <Box
      m="auto"
      mt="15px"
      //width="300px"
      w={{ base: "220px", sm: "220px", md: "220px", lg: "250px" }}
      p="10px"
      border="1px solid #E5E4E2"
      backgroundColor="#FFFFFF"
      borderRadius="15px"
    >
      <Link to={`/products/${id}`}>
        <Image
          m="auto"
          h={{ base: "100px", sm: "170px", md: "170px", lg: "180px" }}
          w={{ base: "130px", sm: "130px", md: "130px", lg: "200px" }}
          src={url}
          alt={title}
        />
      </Link>

      <Flex justifyContent="space-between">
        <Heading mt="15px" px={2} fontSize="16px">
          {title}
        </Heading>
        
        <Image
          boxSize="35px"
          mt="8px"
          src="https://images.bewakoof.com/web/Wishlist.svg"
        />
      </Flex>

      <Text px={2}>{category}</Text>
      <Text px={2}>Actual Price : {price}</Text>
      <Text px={2}>Discount Price : {price1}</Text>
      <Box px={2} display="flex" mt="2" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < Math.floor(ratings) ? "teal.500" : "gray.300"}
            />
          ))}
      </Box>
    </Box>
  );
};

export default SingleProduct;
