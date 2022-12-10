import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

const getdata = () => axios.get(" http://localhost:8080/products");

const AllProducts = () => {
  const [productdet, setProductDet] = useState([]);
  const [option, setOption] = useState(0);
  const [count,setCount]= useState(0);
  
  // useEffect(() => {
  //   getdata().then((res) => setProductDet(res.data));

  
  function inputoption(e){
    setOption(e.target.value);
  }
  
  useEffect(() => {
    console.log(option)
    if (option == 1) {
      let details=productdet.sort(function (a, b) {
        return a.price.current.value - b.price.current.value;
      });
      console.log(productdet)
      setProductDet(details);
      setCount(count+1)
    }
    if (option == 2) {
      let details=productdet.sort(function (a, b) {
        return b.price.current.value - a.price.current.value;
      });
      setProductDet(details);
      setCount(count+1)
      console.log(productdet);
    }
    if(option == 0){
      getdata().then((res) => setProductDet(res.data));
      setCount(count+1)
    }
  }, [option]);

  console.log(productdet);

  return (
    <div>
      <Navbar />
      <Box w="100%" h="100px">
        <Flex>
          <Text>Your</Text>
          <Spacer></Spacer>
          <Text>Sort by</Text>
          <Select
            fontSize="20px"
            w="200px"
            mr="40px"
            h="40px"
            ml="10px"
            onChange={inputoption}
          >
            <option value="0">Relevance</option>
            <option value="1">Price: Low to High</option>
            <option value="2">Price: High to Low</option>
          </Select>
        </Flex>
      </Box>
      <Flex>
        <Box w="20%" border='1px'>
          <Stack>
            <Flex><input type={"checkbox"} name='Pull&Bear'/> <Text>Pull&Bear</Text></Flex>
            <Flex><input type={"checkbox"} name='New Balance'/><Text>New Balance</Text></Flex>
          </Stack>

        </Box>
        <Box w="80%">
          <Grid templateColumns="repeat(4,1fr)" gap="20px" pr="20px">
            {productdet?.map((el) => {
              return (
                <>
                  <Link to = {`/products/${el.id}`}><GridItem >
                    <Image src={`https://${el.imageUrl}`} ></Image>
                    <Text>{el.name}</Text>
                    <Text>{el.price.current.text}</Text>
                  </GridItem></Link>
                </>
              );
            })}
          </Grid>
        </Box>
      </Flex>
      <Footer />
    </div>
  );
};

export default AllProducts;
