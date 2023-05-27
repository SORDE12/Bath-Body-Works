import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Lowernav = () => {
  return (
    <Flex
      justifyContent="space-between"
      display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
      py="5px"
      px={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
    >
      <Box
        _hover={{
          textDecoration: "underline",
          color: "blue",
        }}
        fontSize="12px"
      >
        <Link to="/products">TOP OFFERS</Link>
      </Box>
      {/* Body care */}
      <Box>
        <Popover trigger="hover" isLazy openDelay={300} placement="bottom">
          <PopoverTrigger>
            <Link to="/products">
              <Text
                _hover={{
                  textDecoration: "underline",
                  color: "blue",
                }}
                fontSize="12px"
              >
                BODY CARE
              </Text>
            </Link>
          </PopoverTrigger>
          <PopoverContent borderRadius="none" width={"100vw"}>
            <PopoverBody
              sx={{
                padding: "20px 10%",
                margin: "0px",
                textAlign: "left",
                display: "flex",
              }}
            >
              <Box>
                <ul className="navbar-product-Box">
                  <Popover trigger="hover" placement="right-start">
                    <PopoverTrigger>
                      <li>
                        BATH & SHOWER{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"200px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>All Bath & Shower</li>
                          <li>Body Wash & Shower Gel</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover trigger="hover" placement="right">
                    <PopoverTrigger>
                      <li>
                        MOISTURIZERS{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"200px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>All Moisturizers</li>
                          <li>Body Lotion</li>
                          <li>Body Cream</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

                  <Popover trigger="hover" placement="right-end">
                    <PopoverTrigger>
                      <li>
                        FRAGRANCE{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"200px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>All Fragrance</li>
                          <li>Body Sprays & Mists</li>
                          <li>Perfume & Cologne</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

                  <Popover trigger="hover" placement="right-end">
                    <PopoverTrigger>
                      <li>
                        NEW & NOW{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"200px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>All Aromatherapy</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </ul>
                <p>EXPLORE BODY CARE</p>
              </Box>
              <div style={{ width: "220px" }}></div>
              <Box>
                <p>BODY CARE OFFERS</p>
                <ul className="navbar-product-lastsubsection">
                  <li>Buy 3, Get 3 FREE All Full-Size Body Care</li>
                  <li>2/$10, 4/$18, 6/$24 Shea Butter Cleansing Bars</li>
                  <li>Buy 3, Get 1 FREE Travel, Hand & Lip Care</li>
                </ul>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      {/* Candles */}
      <Box>
        <Popover trigger="hover" isLazy openDelay={300} placement="bottom">
          <PopoverTrigger>
            <Text
              _hover={{
                textDecoration: "underline",
                color: "blue",
              }}
              fontSize="12px"
            >
              CANDLES
            </Text>
          </PopoverTrigger>
          <PopoverContent borderRadius="none" width={"100vw"}>
            <PopoverBody
              sx={{
                padding: "20px 10%",
                margin: "0px",
                textAlign: "left",
                display: "flex",
              }}
            >
              <Box>
                <ul className="navbar-product-Box">
                  <Popover trigger="hover" placement="right-start">
                    <PopoverTrigger>
                      <li>
                        ALL CANDLES{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"250px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>3-Wick Candles</li>
                          <li>Single Wick Candles</li>
                          <li>Candle Holders & Accessories</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </ul>
                <p>EXPLORE CANDLES</p>
              </Box>
              <div style={{ width: "270px", height: "160px" }}></div>
              <Box>
                <p>CANDLES OFFERS</p>
                <ul className="navbar-product-lastsubsection">
                  <li>$16.95 All 3-Wick Candles</li>
                  <li>2/$22 Single Wick Candles</li>
                </ul>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      {/* Wallflowers and Air FRESHENERS part */}
      <Box>
        <Popover trigger="hover" isLazy openDelay={300} placement="bottom">
          <PopoverTrigger>
            <Text
              _hover={{
                textDecoration: "underline",
                color: "blue",
              }}
              fontSize="12px"
            >
              WALLFLOWERS & AIR FRESHENERS
            </Text>
          </PopoverTrigger>
          <PopoverContent borderRadius="none" width={"100vw"}>
            <PopoverBody
              sx={{
                padding: "20px 10%",
                margin: "0px",
                textAlign: "left",
                display: "flex",
              }}
            >
              <Box>
                <ul className="navbar-product-Box">
                  <Popover trigger="hover" placement="right-start">
                    <PopoverTrigger>
                      <li>
                        WALLFLOWERS{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"200px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>All Wallflowers</li>
                          <li>Wallflowers Plugs</li>
                          <li>Auto Refresh Wallflowers</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover trigger="hover" placement="right">
                    <PopoverTrigger>
                      <li>
                        AIR FRESHENERS{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"200px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>Room Sprays & Mists</li>
                          <li>Car Fragrance</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </ul>
                <p>EXPLORE WALLFLOWERS & AIR FRESHENERS</p>
              </Box>
              <div style={{ width: "220px" }}></div>
              <Box>
                <p> WALLFLOWERS & AIR FRESHENERS OFFERS</p>
                <ul className="navbar-product-lastsubsection">
                  <li>5/$25 Wallflowers Fragrance Refills</li>
                  <li>3/$22 Room Sprays</li>
                  <li>3/$10 Car Fragrance Refills</li>
                </ul>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      {/* Hand Soaps and Sanitizer */}
      <Box>
        <Popover trigger="hover" isLazy openDelay={300} placement="bottom">
          <PopoverTrigger>
            <Text
              _hover={{
                textDecoration: "underline",
                color: "blue",
              }}
              fontSize="12px"
            >
              HAND SOAPS & SANITIZERS
            </Text>
          </PopoverTrigger>
          <PopoverContent borderRadius="none" width={"100vw"}>
            <PopoverBody
              sx={{
                padding: "20px 10%",
                margin: "0px",
                textAlign: "left",
                display: "flex",
              }}
            >
              <Box>
                <ul className="navbar-product-Box">
                  <Popover trigger="hover" placement="right-start">
                    <PopoverTrigger>
                      <li>
                        HAND SOAPS{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"200px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>All Hand Soaps </li>
                          <li>Foaming Soaps </li>
                          <li>Gel Soaps</li>
                          <li>Soap Holders</li>
                          <li>Gentle & Clean Hand Soaps</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover trigger="hover" placement="right-start">
                    <PopoverTrigger>
                      <li>
                        HAND SANITIZERS{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"200px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>All Hand Sanitizers</li>
                          <li>PocketBac Hand Sanitizers</li>
                          <li>Hand Sanitizer Sprays</li>
                          <li>Full-Size Sanitizers</li>
                          <li>Hand Sanitizer Holders</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </ul>
                <p>EXPLORE HAND SOAPS & SANITIZERS</p>
              </Box>
              <div style={{ width: "220px", height: "250px" }}></div>
              <Box>
                <p>HAND SOAPS & SANITIZERS OFFERS</p>
                <ul className="navbar-product-lastsubsection">
                  <li>5/$25 Hand Soaps</li>
                  <li>$8 Hand Sanitizer 5-Packs</li>
                  <li>3/$12 Hand Sanitizer Sprays</li>
                </ul>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      {/* Mens Shopping */}
      <Box>
        <Popover trigger="hover" isLazy openDelay={300} placement="bottom">
          <PopoverTrigger>
            <Text
              _hover={{
                textDecoration: "underline",
                color: "blue",
              }}
              fontSize="12px"
            >
              MEN'S SHOP
            </Text>
          </PopoverTrigger>
          <PopoverContent borderRadius="none" width={"100vw"}>
            <PopoverBody
              sx={{
                padding: "20px 10%",
                margin: "0px",
                textAlign: "left",
                display: "flex",
              }}
            >
              <>
                <ul className="navbar-product-Box">
                  <Popover trigger="hover" placement="right-start">
                    <PopoverTrigger>
                      <li>
                        THE MEN'S SHOP{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"250px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>All Men's Body Care</li>
                          <li>Body Wash & Shower Gel</li>
                          <li>CMoisturizers</li>
                          <li>Body Spray & Cologne</li>
                          <li>Home Fragrance</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </ul>
                <p>EXPLORE MEN'S SHOP</p>
              </>
              <div style={{ width: "270px", height: "200px" }}></div>
              <Box style={{ border: "none" }}>
                <ul className="navbar-product-lastsubsection">
                  <li>Hand Soaps & Sanitizers</li>
                </ul>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <Box>
        <Text
          fontSize="12px"
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
          _hover={{
            textDecoration: "underline",
            color: "blue",
          }}
        >
          MOXY
        </Text>
      </Box>
      <Box>
        <Popover trigger="hover" isLazy openDelay={300} placement="bottom">
          <PopoverTrigger>
            <Text
              fontSize="12px"
              style={{ color: "tomato", fontWeight: "bold" }}
              _hover={{
                textDecoration: "underline",
              }}
            >
              HOLIDAY SHOP
            </Text>
          </PopoverTrigger>
          <PopoverContent borderRadius="none" width={"100vw"}>
            <PopoverBody
              sx={{
                padding: "20px 10%",
                margin: "0px",
                textAlign: "left",
                display: "flex",
              }}
            >
              <Box>
                <ul className="navbar-product-rightsubsection">
                  <Popover trigger="hover" placement="right-start">
                    <PopoverTrigger>
                      <li>
                        GIFTS BY PRICE{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"250px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>Christmas Collection</li>
                          <li>$15 & Under Gifts</li>
                          <li>$40 & Under Gifts</li>
                          <li>Gift Sets</li>
                          <li>Stocking Stuffers</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover trigger="hover" placement="right-start">
                    <PopoverTrigger>
                      <li>
                        NEW & NOW{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"250px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>New Arrivals</li>
                          <li>Aromatherapy Shop</li>
                          <li>Best Sellers</li>
                          <li>Get Inspired</li>
                          <li>Shop By Fragrance</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover trigger="hover" placement="right-end">
                    <PopoverTrigger>
                      <li>
                        FEATURED{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"250px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>Make Joy Happen Gift List</li>
                          <li>Gift Boxes & Bags</li>
                          <li>Accessories</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover trigger="hover" placement="right">
                    <PopoverTrigger>
                      <li>
                        THE MEN'S SHOP{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"250px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>GIFTS BY RECIPIENT</li>
                          <li>Gifts for Her</li>
                          <li>Gifts for Him</li>
                          <li>Gifts for Everyone</li>
                          <li>Housewarming Gifts</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover trigger="hover" placement="right-end">
                    <PopoverTrigger>
                      <li>
                        GIFT CARDS{" "}
                        <ChevronRightIcon fontSize={"20px"} marginLeft="30px" />
                      </li>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"250px"}>
                      <PopoverBody
                        backgroundColor="transparent"
                        boxShadow={"none"}
                        border={"none"}
                      >
                        <ul className="hoverdata">
                          <li>E-Gift Cards</li>
                          <li>Gift Cards</li>
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </ul>
                <p>EXPLORE HOLIDAY SHOP</p>
              </Box>
              <div style={{ width: "270px", height: "200px" }}></div>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Flex>
  );
};

export default Lowernav;
