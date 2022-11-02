import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { CartContext } from "../Context/CartContextProvider";

function SinglePageProduct() {
  const { id } = useParams();
  const [product, setProductData] = useState({});
  const {Totalitems,setTotalItems } = useContext(CartContext);

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setProductData(res.data);
    });
  }, [id]);

  const addtocart = (product) => {
    let cartItems= JSON.parse(localStorage.getItem('ItemsInCart'))||[];
    let ProductExist = cartItems.find(({id}) => id == product.id);
    if (ProductExist) {
      console.log("when first item is already present",cartItems);
      cartItems.map((item,index) =>{
        if(item.id === ProductExist.id){
          cartItems[index].quantity+= 1;
          localStorage.setItem('ItemsInCart',JSON.stringify(cartItems))
        }}
        )
        console.log("after upadate first item quantity",cartItems);
      } else {
        console.log("when cart is empty",cartItems);
        localStorage.setItem('ItemsInCart',JSON.stringify([...cartItems, {...product, quantity: 1 }]))
        console.log("after adding first item",cartItems);
      }
      let cart=JSON.parse(localStorage.getItem('ItemsInCart'))
      console.log("cart",cart);
      setTotalItems(cart.length);
      console.log("total",Totalitems)
    };
    
  return (
    <div>
      <Navbar/>
      <div
        style={{ width: "500px", height: "500px", margin: "auto" }}
        key={product.id}
      >
        <img
          style={{ width: "100%", height: "50%" }}
          src={`https://${product.imageUrl}`}
          alt="image"
        />
        <h6 style={{ fontSize: "17px" }}>{product.title}</h6>
        <p style={{ fontSize: "17px", marginTop: "-20px", fontWeight: 600 }}>
          {product.id}
        </p>
        <Button onClick={()=>addtocart(product)}>Add to Cart</Button>
        <br />
      </div>
    </div>
  );
}

export default SinglePageProduct;
