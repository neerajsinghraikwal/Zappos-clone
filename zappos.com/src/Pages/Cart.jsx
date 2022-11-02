import {
  Button,
  Flex,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";
import Navbar from "../Component/Navbar";
const Cart = () => {

  const [cartItemDetails, setCartDetails] = useState([]); 
  const [count,setCount] = useState(0);
  const {setTotalItems} = useContext(CartContext);
  function getdata() {
    const cartDetails = JSON.parse(localStorage.getItem("ItemsInCart"));
      setCartDetails(cartDetails)
  }
  // const { handleDecrease, handleIncrease, details, setDetails } = useContext(CartContext);

  const handleQuantity = (id,changedvalue) => {
    console.log("changedvalue",changedvalue)
    cartItemDetails.map((el,index)=>{
      if(el.id === id) {
        setCount(count+1)
        cartItemDetails[index].quantity=changedvalue;
        localStorage.setItem('ItemsInCart',JSON.stringify(cartItemDetails))
        console.log(cartItemDetails)
      }
    })
  }

  const handleDelete = (id) => {
    let cart = cartItemDetails.filter((el) => el.id !== id)
    setCount(count+1)
    localStorage.setItem('ItemsInCart',JSON.stringify(cart))
    setTotalItems(cart.length);
  }

  

  useEffect(() => {
    getdata()
  }, [count])


  return (
    <>
      <Navbar />
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItemDetails.map((product,index) => (
              <Tr key={index}>
                <Td>
                  <Image src={`https://${product.imageUrl}`} alt="icon"></Image>
                </Td>
                <Td>{product.name}</Td>
                <Td>
                  <Flex>
                    <Button
                      onClick={() =>
                        handleQuantity(product.id, product.quantity - 1)
                      }
                      disabled={product.quantity===1}
                    >
                      -
                    </Button>
                    <Button>{product.quantity}</Button>
                    <Button
                      onClick={() =>
                        handleQuantity(product.id, product.quantity + 1)
                      }
                      disabled={product.quantity===5}
                    >
                      +
                    </Button>
                  </Flex>
                </Td>
                <Td><Button onClick={()=> handleDelete(product.id)}>Delete</Button></Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th>into</Th>
              <Th>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default Cart;
