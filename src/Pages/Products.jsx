import { Box, Center, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SingleProduct from "../Component/SingleProduct";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/Products/productAction";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../Component/Pagination";
import Filter from "../Component/Filter";

const Products = () => {
  const [page, setPage] = useState(1);

  const { products, loading } = useSelector((state) => state.productManager);
  console.log(loading);
  let dispatch = useDispatch();
  let location = useLocation();
  const [searchParams] = useSearchParams();

  let handleChange = (p) => {
    setPage(p);
  };
  let totalPage = false;
  if (products.length < 9) {
    totalPage = true;
  }
  useEffect(() => {
    if (location || products.length >= 0) {
      const sortBy = searchParams.get("sort");
      const orderBy = searchParams.get("order");
      //  console.log(sortBy, orderBy)
      const getProductParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy,
          _order: orderBy,
          _page: page,
          _limit: 9,
        },
      };

      dispatch(getProducts(getProductParams));
    }
  }, [dispatch, location.search, searchParams, page]);
  //console.log(products)

  return (
    <Box>
      <Flex
        width="95%"
        gap={2}
        margin="auto"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Filter />
        {loading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Box width={{ base: "99%", sm: "99%", md: "65%", lg: "75%" }}>
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 4 }} gap={2}>
              {products &&
                products.map((e) => <SingleProduct key={e.id} {...e} />)}
            </SimpleGrid>
            <Pagination
              handleChange={handleChange}
              page={page}
              totalPage={totalPage}
            />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Products;
