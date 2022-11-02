import { Button, Center, FormControl, FormLabel, Image, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';



let initial = {
    email: "",
    password: "",
  };
const Login = () => {
    const [user,setuser] =useState(initial)

    let userData = JSON.parse(localStorage.getItem("userData")) || [];

    function myfun(event) {
      let data = {
        email: user.email,
        password: user.password,
      };
      if (checklogin(data.email, data.password) === true) {
        localStorage.setItem("login", JSON.stringify(data));
        alert("Login successful");
  
        // window.location.href = "index.html";
      } else {
        alert("Wrong Email or Password");
      }
    }
    function checklogin(email, password) {
      let filter = userData.filter(function (elem) {
        return elem.email === email && elem.password === password;
      });
      console.log(filter)
      if (filter.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  
    const handle = (event) => {
      // event.preventDefault();
      const { value, name } = event.target;
      setuser({
        ...user,
        [name]: value,
      });
    };

    const {email, password}=user;


    return (
        <div>
          <Link to="/">
            <Center w="10%" m="auto">
              <Image src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"></Image>
            </Center>
          </Link>
          <Stack alignItems='flex-start' w='20%' m='auto' border='1px'>
            <Text fontSize="20px">Create account</Text>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder="" value={email} name="email" onChange={handle}/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input placeholder="" value={password} name='password' onChange={handle}/>
            </FormControl>
            <Button fontSize='17px' onClick={myfun}>CREATE YOUR ZAPPOS ACCOUNT</Button>
          </Stack>
        </div>
    );
}

export default Login