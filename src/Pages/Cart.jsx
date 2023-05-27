import { Box, Button, Flex, Heading, Image, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartPro,
  deleteCartProAfterPlace,
  getCartData,
  updateCartQty,
} from "../redux/Cart/cartAction";
import CartPro from "../Component/CartPro/CartPro";

import { useNavigate } from "react-router-dom";
import { addOrders } from "../redux/Orders/orderAction";

const Cart = () => {
  let { cart } = useSelector((store) => store.cartManager);
  let { loggedInUser } = useSelector((store) => store.authManager);
  const navigate = useNavigate();

  const toast = useToast();
  let dispatch = useDispatch();

  let user = loggedInUser.email;
  useEffect(() => {
    dispatch(getCartData(loggedInUser.email));
  }, [dispatch, loggedInUser.email]);

  cart.filter((e) => {
    return e.email === loggedInUser.email;
  });

  let updateQty = (id, value) => {
    // console.log(id, value);
    dispatch(updateCartQty(id, value, user, toast));
  };


  let handlePlace = async () => {
      let item = {
        user: user,
        product: cart.map((e) => {
          return {
            product: e.product,
            qty: e.qty,
          };
        }),
        date: Date.now(),
        status: "pending",
      };

      await dispatch(addOrders(item, toast));

      for (let i = 0; i < cart.length; i++) {
        await dispatch(deleteCartProAfterPlace(cart[i].id, user));
      }
      navigate("/user-profile");
  }

  let deletePro = (id) => {
    dispatch(deleteCartPro(id, user, toast));
  };
  let totMrp = 0;
  let totDis = 0;
  let subTot = 0;
  for (let i = 0; i < cart.length; i++) {
    let qty = cart[i].qty;
    const { price, price1 } = cart[i].product;
    //  console.log(price,price1,qty);
    totMrp = totMrp + qty * price;
    totDis = Math.floor(totDis + qty * (price - price1));
    subTot = subTot + qty * price1;
  }
  if(cart.length===0){
    return(
      <Box px={"10%"} py={"30px"}>
      <Image
        src={
          "https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
        }
        m={"auto"}
        w={"30%"}
      />
      <Heading textAlign={"center"} color="gray">
        Cart is empty
      </Heading>
    </Box>
    )
  }

  return (
    <Box width="90%" margin="auto">
      <Flex mb="20px" width="100%" p="15px" backgroundColor="#bee3f8">
        <Image
          w="40px"
          pr="10px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Z7k1bA59laJ7ITGD-2A1yoK9qgM2eHYOX0mNTH4NTHfhZjyl3oTKzi_V8QGuyG1Jg2g&usqp=CAU"
        />
        <Text>Yay! No convenience fee on this order.</Text>
      </Flex>
      <h2>
        <b>My Bag</b> {cart.length} item(s)
      </h2>
      <Flex
        mb="20px"
        gap="20px"
        width="100%"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Box
          margin="auto"
          width={{ base: "95%", sm: "95%", md: "95%", lg: "60%" }}
        >
          {cart &&
            cart.map((e) => (
              <CartPro
                key={e.id}
                val={e}
                updateQty={updateQty}
                deletePro={deletePro}
              />
            ))}
        </Box>
        <Box
          margin="auto"
          width={{ base: "85%", sm: "85%", md: "85%", lg: "40%" }}
        >
          <Text pl="10px" backgroundColor="orange" fontSize="18px">
            {" "}
            Save extra <b>₹367</b> with TriBe
          </Text>
          <Box
            mt="15px"
            pl="10px"
            pb="10px"
            boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;"
          >
            <p>
              Whistles! Get extra 10% Cashback upto 100 on prepaid orders
              <br />
              above Rs.699. Coupon code - MAD10.
            </p>
          </Box>
          <Box
            mt="15px"
            pl="10px"
            pb="10px"
            boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;"
          >
            <p>
              Get Rs.200 instant discount on your First Purchase above
              <br /> Rs.999. Coupon code -NEW200
            </p>
          </Box>
          <Box
            mt="15px"
            pl="10px"
            pb="10px"
            boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;"
          >
            <p>
              Whistles! Get extra 20% Cashback on prepaid orders above
              <br />
              Rs.499. Coupon code - NEW20. Applicable for new customers only!
            </p>
          </Box>
          <Flex
            my="10px"
            backgroundColor="green"
            justifyContent="space-between"
            px="10px"
          >
            <Text fontSize="20px">Have a Coupon / Referral / Gift Card ?</Text>
            <Text>
              <b>Redeem</b>
            </Text>
          </Flex>
          <Box
            my="20px"
            pb="15px"
            boxShadow=" rgba(0, 0, 0, 0.2) 0px 20px 30px;"
          >
            <Text fontWeight="bold" p="10px" backgroundColor="whiteSmoke">
              Price Summary
            </Text>
            <Flex pl="10px" mb="15px" justifyContent="space-between">
              <p>Total MRP (Incl. of taxes) </p>
              <p>-${totMrp}/-</p>
            </Flex>
            <Flex pl="10px" mb="15px" justifyContent="space-between">
              <p>Shipping Charges </p>
              <p>FREE</p>
            </Flex>
            <Flex pl="10px" mb="15px" justifyContent="space-between">
              <p>Bag Discount </p>
              <p>-${totDis}/-</p>
            </Flex>
            <Flex pl="10px" mb="15px" justifyContent="space-between">
              <p>Subtotal </p>
              <p>-${subTot}/-</p>
            </Flex>
            <Flex
              pl="10px"
              mb="15px"
              justifyContent="space-between"
              backgroundColor="whitesmoke"
              color="gray"
            >
              <p>You are saving $ {totDis}/- on this order</p>
            </Flex>
            <Flex justifyContent="space-around">
              <Flex gap="10px" justifyContent="space-between">
                <p>Total</p>{" "}
                <p>
                  <b>${subTot}/-</b>
                </p>
              </Flex>
              <Button
                width="250px"
                onClick={handlePlace}
                backgroundColor="#008080"
              >
                Place Order
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
