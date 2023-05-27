
import {
  Box,
  Popover,
  PopoverBody,
  PopoverContent,

  PopoverTrigger,

 
} from "@chakra-ui/react";
import styled from "styled-components";
import React from "react";
//import { userLogout } from "../Redux/AuthReducer/action";
//import { emptyCart } from "../Redux/CartReducer/action";



import { ChevronRightIcon} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";


const Navbar = () => {

  //let length = JSON.parse(localStorage.getItem("cartItems")) || [];
  //const cartLength = useSelector((state) => state.CartReducer.carts);
  // const dispatch = useDispatch();


  // console.log(isAuth)

  

  return (
    <MainDivWrapper>
      <Box className="maindiv">
        <div
          style={{
            margin: "auto",
            width: "100%",
            position: "fixed",
            zIndex: "1000",
            background: "white",
          }}
        >
          
          <BottomNavbar>
            <Box className="bottomNavbar">
              <ul className="navbar-product-section">
                <Link to="/products">
                  <li>TOP OFFERS</li>
                </Link>

                {/* Body care */}
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <Link to="/products">
                      <li>BODY CARE</li>
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
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                BATH & SHOWER{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                      </LeftSubsection>
                      <div style={{ width: "220px" }}></div>
                      <Rightsubsection>
                        <p>BODY CARE OFFERS</p>
                        <ul className="navbar-product-lastsubsection">
                          <li>Buy 3, Get 3 FREE All Full-Size Body Care</li>
                          <li>
                            2/$10, 4/$18, 6/$24 Shea Butter Cleansing Bars
                          </li>
                          <li>Buy 3, Get 1 FREE Travel, Hand & Lip Care</li>
                        </ul>
                      </Rightsubsection>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* Candles */}
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <li>CANDLES</li>
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
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                ALL CANDLES{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                      </LeftSubsection>
                      <div style={{ width: "270px", height: "160px" }}></div>
                      <Rightsubsection>
                        <p>CANDLES OFFERS</p>
                        <ul className="navbar-product-lastsubsection">
                          <li>$16.95 All 3-Wick Candles</li>
                          <li>2/$22 Single Wick Candles</li>
                        </ul>
                      </Rightsubsection>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* Wallflowers and Air FRESHENERS part */}
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <li>WALLFLOWERS & AIR FRESHENERS</li>
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
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                WALLFLOWERS{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                      </LeftSubsection>
                      <div style={{ width: "220px" }}></div>
                      <Rightsubsection>
                        <p> WALLFLOWERS & AIR FRESHENERS OFFERS</p>
                        <ul className="navbar-product-lastsubsection">
                          <li>5/$25 Wallflowers Fragrance Refills</li>
                          <li>3/$22 Room Sprays</li>
                          <li>3/$10 Car Fragrance Refills</li>
                        </ul>
                      </Rightsubsection>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* Hand Soaps and Sanitizer */}
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <li>HAND SOAPS & SANITIZERS</li>
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
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                HAND SOAPS{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                      </LeftSubsection>
                      <div style={{ width: "220px", height: "250px" }}></div>
                      <Rightsubsection>
                        <p>HAND SOAPS & SANITIZERS OFFERS</p>
                        <ul className="navbar-product-lastsubsection">
                          <li>5/$25 Hand Soaps</li>
                          <li>$8 Hand Sanitizer 5-Packs</li>
                          <li>3/$12 Hand Sanitizer Sprays</li>
                        </ul>
                      </Rightsubsection>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* Mens Shopping */}
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <li>MEN'S SHOP</li>
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
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                THE MEN'S SHOP{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                      </LeftSubsection>
                      <div style={{ width: "270px", height: "200px" }}></div>
                      <Rightsubsection style={{ border: "none" }}>
                        <ul className="navbar-product-lastsubsection">
                          <li>Hand Soaps & Sanitizers</li>
                        </ul>
                      </Rightsubsection>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <li>MOXY</li>
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <li style={{ color: "tomato", fontWeight: "bold" }}>
                      HOLIDAY SHOP
                    </li>
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
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                GIFTS BY PRICE{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
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
                      </LeftSubsection>
                      <div style={{ width: "270px", height: "200px" }}></div>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </ul>
            </Box>
          </BottomNavbar>
        </div>
      </Box>
    </MainDivWrapper>
  );
};

export default Navbar;

const MainDivWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    ${"" /* DeskStop mode */}
    .maindiv {
      height: 25vh;
    }
  }
  @media only screen and (max-width: 766px) {
    ${"" /* DeskStop mode */}
    .maindiv {
      height: 10vh;
    }
  }
`;





const BottomNavbar = styled.div`
  @media only screen and (min-width: 768px) {
    ${"" /* DeskStop mode */}
    .bottomNavbar {
      padding: 10px 5%;
      width: 100%;
    }
    .navbar-product-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      list-style-type: none;
      font-size: 13px;
      cursor: pointer;
    }

    .navbar-product-section li {
      :hover {
        border-bottom: 2px solid #005699;
      }
    }
  }
  @media only screen and (max-width: 766px) {
    ${"" /* tablate mode */}
    .navbar-product-section {
      display: none;
    }
  }
`;
const LeftSubsection = styled.div`
  p {
    padding: 10px 10px 10px 15px;
    font-weight: bold;
  }
  .navbar-product-rightsubsection {
    list-style-type: none;
    font-size: 13px;
  }
  .navbar-product-rightsubsection li {
    padding: 10px 10px 10px 15px;
    font-weight: bold;
    cursor: pointer;
    :hover {
      color: #005699;
      border-bottom: none;
      border-left: 3px solid #005699;
    }
  }
  .hoverdata {
    list-style-type: none;
    font-size: 13px;
  }
  .hoverdata li {
    cursor: pointer;
    maxwidth: 1536px;
    font-weight: lighter;
    :hover {
      color: #005699;
      border-bottom: none;
      border-left: none;
    }
  }
`;
const Rightsubsection = styled.div`
  border-left: 1px solid lightgray;
  padding: 10px 30px 0px 30px;
  p {
    padding: 5px 0px 10px 0px;
    font-weight: bold;
  }
  .navbar-product-lastsubsection {
    list-style-type: none;
    font-size: 13px;
  }
  .navbar-product-lastsubsection li {
    padding: 5px 0px;
    cursor: pointer;
    :hover {
      color: #005699;
      border-bottom: none;
    }
  }
`;
