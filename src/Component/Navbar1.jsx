import { Box } from "@chakra-ui/react";
import React from "react";
import Uppernav from "./Navcomp/Uppernav";
import Middlenav from "./Navcomp/Middlenav";
import Lowernav from "./Navcomp/Lowernav";

const Navbar1 = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const dispatch = useDispatch();
  // const toast = useToast();

  return (
    <div>
      <Box
        m="auto"
        as="header"
        pb="15px"
        position="fixed"
        top="0"
        width="100%"
        backgroundColor="white"
      >
        <Uppernav />
        <Middlenav />
        <Lowernav />
      </Box>
    </div>
  );
};

export default Navbar1;
