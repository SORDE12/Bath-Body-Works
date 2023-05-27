import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useBreakpointValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
 
import ModalCart from "./ModalCart";
  
  const Orders = ({ id, date, product, status, ...rest }) => {
    let dollarIndianLocale = Intl.NumberFormat("en-IN");
    const { isOpen, onOpen, onClose } = useDisclosure();
    let d = new Date(date);
    let [day] = d.toString().split(" GMT");
    let sum = 0;
    for (let i = 0; i < product.length; i++) {
      sum += product[i].qty * product[i].product.price;
    }
    return (
      <Flex
        direction={"column"}
        p={"10px"}
        border={"1px solid #ddd"}
        w={useBreakpointValue({ md: "50%", base: "100%" })}
        m={"auto"}
        my={"10px"}
      >
        <Text as={"b"} color={"gray.600"}>
          Order ID: {id}
        </Text>
        <Text as={"b"} color={"gray.600"}>
          Date: {day}
        </Text>
        <Text as={"b"} color={"gray.600"}>
          Total Amount: ₹{dollarIndianLocale.format(sum)}/-
        </Text>
        <Text as={"b"} color={"gray.600"}>
          No. of items: {product.length}
        </Text>
        <Text as={"b"} color={"#84cc16"}>
          Status: {status}
        </Text>
        <Button
          w={"fit-content"}
          onClick={onOpen}
          variant={"outline"}
          colorScheme={"blue"}
        >
          Show Details
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Products ({product.length})</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction={"column"} gap={"20px"}>
                {product.map((item) => {
                  return <ModalCart key={item.id} {...item} />;
                })}
              </Flex>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    );
  };
  
  export default Orders;