import { Button, Center, FormControl, FormLabel, Image, Input, Stack, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

let initial={
    name:"",
    email:"",
    password:"",
    repass:"",
}



const Register = () => {
    const toast = useToast({position: 'top',})
    const [user,setuser] =useState(initial)
    const [auth,setAuth]=useState(false)
    const navigate = useNavigate();

    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    const createAccount=() => {
        let data = {
            name:user.name,
            email: user.email,
            password: user.password,
          };
      
          if (checkMail(data.email) === true) {
            userData.push(data);
            localStorage.setItem("userData", JSON.stringify(userData));
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
              setAuth(true)
        } else {
            toast({
                title: 'Account already exist .',
                description: "This email is already registered.",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
          }
        }

        if(auth){
            return <Navigate to="/" />;
        }
      
        function checkMail(email) {
          let filtered = userData.filter(function (elem) {
            return email === elem.email;
          });
          if (filtered.length > 0) {
            return false;
          } else {
            return true;
          }
        }

    const handleChange = (e) => {
        console.log(e.target.value)
        const { value, name } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
    }


    const {name,email,password,repass} = user;

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
          <FormLabel>Your Name</FormLabel>
          <Input value={name} name='name' onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="" value={email} name="email" onChange={handleChange}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input placeholder="" value={password} name='password' onChange={handleChange}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Re-enter Password</FormLabel>
          <Input placeholder="" value={repass} name='repass' onChange={handleChange}/>
        </FormControl>
        <Button fontSize='17px' onClick={()=>createAccount()}>CREATE YOUR ZAPPOS ACCOUNT</Button>
      </Stack>
    </div>
  );
};

export default Register;
