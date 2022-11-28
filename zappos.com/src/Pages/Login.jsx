import { Button, Center, FormControl, FormLabel, Image, Input, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



let initial = {
    email: "",
    password: "",
  };
const Login = () => {
    const [user,setuser] =useState(initial)
    const navigate = useNavigate()

    const myfun = async() => {
      try{
        let res =  await axios.post("http://localhost:8080/login", user);
        navigate("/")
        console.log(res.data) 
      }catch(err){
        console.log(err)
      }
    }
  
    const handle = (event) => {
      const { name, value } = event.target;
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
            <Button fontSize='17px' onClick={myfun}>LOGIN</Button>
          </Stack>
        </div>
    );
}

export default Login