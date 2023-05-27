import { Box, Flex, Heading, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.getAll("category");
  const initialSort = searchParams.getAll("sort");
  const initialOrder = searchParams.getAll("order");

  const [category, setCategory] = useState(initialCat || []);
  const [sort, setSort] = useState(initialSort || "");
  const [order, setOrder] = useState(initialOrder || "");

  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    order && (params.order = order);

    setSearchParams(params);
  }, [category, sort, order, searchParams]);

  const handleFilterChange = (e) => {
    let newCat = [...category];
    if (newCat.includes(e.target.value)) {
      newCat.splice(newCat.indexOf(e.target.value), 1);
    } else {
      newCat.push(e.target.value);
    }
    setCategory(newCat);
  };

  const handleSort = (e) => {
    let val = e.target.value.split("-");
    let a = val[0];
    let b = val[1];
    // console.log(a, b);
    setOrder(a);
    setSort(b);
  };
  

  return (
    <Box
      width={{ base: "99%", sm: "99%", md: "35%", lg: "25%" }}

    >
      <Box pl="25px">
        <Heading mb="20px" fontSize="25px">
          Filter by Products
        </Heading>

        <Flex gap={1}>
          <input
            type="checkbox"
            value="Fine Fragrance Mist"
            checked={category.includes("Fine Fragrance Mist")}
            onChange={handleFilterChange}
          />
          <Text>Fine Fragrance Mist</Text>
        </Flex>

        <Flex gap={1}>
          <input
            type="checkbox"
            value="Body_Lotion"
            checked={category.includes("Body_Lotion")}
            onChange={handleFilterChange}
          />
          <Text>Body_Lotion</Text>
        </Flex>

        <Flex gap={1}>
          <input
            type="checkbox"
            value="Shea Butter Cleansing Bar"
            checked={category.includes("Shea Butter Cleansing Bar")}
            onChange={handleFilterChange}
          />
          <Text>Shea Butter Cleansing Bar</Text>
        </Flex>

        <Flex gap={1}>
          <input
            type="checkbox"
            value="Nourishing Lip Tint"
            checked={category.includes("Nourishing Lip Tint")}
            onChange={handleFilterChange}
          />
          <Text>Nourishing Lip Tint</Text>
        </Flex>

        <Flex gap={1}>
          <input
            type="checkbox"
            value="Night Balm"
            checked={category.includes("Night Balm")}
            onChange={handleFilterChange}
          />
          <Text>Night Balm</Text>
        </Flex>

        <Flex gap={1}>
          <input
            type="checkbox"
            value="Lip Balm"
            checked={category.includes("Lip Balm")}
            onChange={handleFilterChange}
          />
          <Text>Lip Balm</Text>
        </Flex>

        <Flex gap={1}>
          <input
            type="checkbox"
            value="Exfoliating Lip Scrub"
            checked={category.includes("Exfoliating Lip Scrub")}
            onChange={handleFilterChange}
          />
          <Text>Exfoliating Lip Scrub</Text>
        </Flex>
      </Box>
      <Box pl="25px" mt="20px">
        <Heading mb="20px" fontSize="25px">
          Sorting
        </Heading>
        <Select
          onChange={handleSort}
          mt="20px"
          w={{ base: "220px", sm: "220px", md: "220px", lg: "250px" }}
        >
          <option>Sort By Rating</option>
          <option value="asc-ratings">Low to High</option>
          <option value="desc-ratings">High to Low</option>
        </Select>
        <Select
          onChange={handleSort}
          mt="20px"
          w={{ base: "220px", sm: "220px", md: "220px", lg: "250px" }}
        >
          <option>Sort By Price</option>
          <option value="asc-price1">Ascending</option>
          <option value="desc-price1">Decending</option>
        </Select>
        <Select
          placeholder="Brand"
          mt="20px"
          w={{ base: "220px", sm: "220px", md: "220px", lg: "250px" }}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </Box>
  );
};

export default Filter;
