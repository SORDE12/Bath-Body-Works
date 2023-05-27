import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";

import { MdLocalShipping } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { addToCart } from "../redux/Cart/cartAction";

export default function SingleProductPage() {
  const { id } = useParams();
  let dispatch = useDispatch();
  let toast = useToast();
  let { products } = useSelector((state) => state.productManager);
  let { status, loggedInUser } = useSelector((state) => state.authManager);
  // let val=useSelector((state) => state.authManager)

  // console.log( loggedInUser);
  let data = products.find((e) => e.id === +id);
  
  const { url, title, ratings, category, price, price1 } = data;


  const handleAddToCart = () => {
    if (status) {
      let item = {
        user: loggedInUser.email,
        product: data,
        qty: 1,
      };
      dispatch(addToCart(item,toast));
     
    } else {
      toast({
        title: "Please, Sign in first",
        position: "top",
        description:
          "Kindly sign in to your account to add product in your cart.",
        status: "info",
        duration: 6000,
        isClosable: true,
      });
    }
  };
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={category}
            src={url}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {category}
            </Heading>
            <Heading
              lineHeight={1.1}
              fontWeight={300}
              mt="15px"
              fontSize={{ base: "xl", sm: "2xl", lg: "2xl" }}
            >
              {title}
            </Heading>
            <Flex gap={5}>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={250}
                fontSize={"xl"}
                mt="10px"
              >
                Discount Price :
              </Text>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={250}
                fontSize={"xl"}
                mt="10px"
              >
                ${price1}
              </Text>
            </Flex>
            <Flex gap={5}>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={250}
                fontSize={"xl"}
                mt="10px"
              >
                Actual Price :
              </Text>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={250}
                fontSize={"xl"}
                mt="10px"
              >
                ${price}
              </Text>
            </Flex>
          </Box>
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

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Green Tea</ListItem>
                  <ListItem>Vitamin C</ListItem> <ListItem>Caffeine</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Green Tea hydrates & detoxifies</ListItem>
                  <ListItem>sun protector</ListItem>
                  <ListItem>body gel lotion</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <Text>
                {" "}
                This lotion is free from harsh chemicals; it is SLS Free, SLES
                Free, Paraben-Free, & Mineral Oil-Free. The lotion is also
                cruelty-free and is dermatologically tested to suit your skin.
              </Text>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text>
                  Make it a part of your daily regime and use it after a shower
                  for maximum benefits. A lightweight, nongreasy lotion - with
                  the mCaffeine Naked Detox Green Tea Body Gel Lotion you can
                  definitely detox naturally!
                </Text>
              </VStack>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
