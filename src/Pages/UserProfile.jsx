import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Orders from "../Component/Orders";
import { getOrders } from "../redux/Orders/orderAction";
import UserPagination from "../Component/UserPagination";

const UserProfile = () => {
  let { loggedInUser } = useSelector((store) => store.authManager);
  const [page, setPage] = useState(1);
  let limit=5
  const { loading, error, orders, totalPages } = useSelector(
    (store) => store.orderManager
  );
  console.log(...orders)
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedInUser.username) {
      // console.log("hi");
      
      dispatch(getOrders({ page, user: loggedInUser.email,limit}));
    //   dispatch(getTotalOrders({ limit: 5, user: loggedInUser.email }));
    }
  }, [dispatch, page]);

  let handleChange=(val)=>{
    setPage(val)

  }

  return (
    <Box>
      <Heading textAlign={"center"} color={"gray.600"}>
        Your Profile
      </Heading>

      <Flex
        direction={"column"}
        justifyContent={"center"}
        w={"fit-content"}
        m={"auto"}
      >
        <Heading size={"lg"} textAlign={"center"}>
          {loggedInUser.username}
        </Heading>
        <Heading size={"md"} textAlign={"center"} color={"gray.400"}>
          {loggedInUser.email}
        </Heading>
      </Flex>

      <Box>
        <Heading textAlign={"center"} color={"gray.600"}>
          Your Orders
        </Heading>
        {orders.map((order) => {
          return <Orders key={order.id} {...order} />;
        })}
     
        <Center>
          <UserPagination
            page={page}
            total={totalPages}
            onChange={handleChange}
          />
        </Center> 
      </Box>
    </Box>
  );
};

export default UserProfile;
