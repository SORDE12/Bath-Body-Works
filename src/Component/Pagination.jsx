import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Center, Flex } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ page, handleChange , totalPage}) => {
  return (
    <Center>
      <Flex margin="auto">
        <Button disabled={page===1} onClick={()=>handleChange(page-1)}>
          <ChevronLeftIcon />
        </Button>
        <Button>{page}</Button>
        <Button disabled={true===totalPage} onClick={()=>handleChange(page+1)}>
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Center>
  );
};

export default Pagination;
