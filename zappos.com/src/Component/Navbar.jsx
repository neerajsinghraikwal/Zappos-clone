import { Box, Button, Flex, Image, Input, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {

  return (
    <>
    <Flex w='100%' h='100px' border='1px' borderColor='black' alignItems='center'>
        <Image src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg" w='10%' h='60%'  ml='20px'></Image>
        <Input type='text' display='flex' w='26%' ml='30px' h='48%' ></Input>
        <Button h='50%' bgColor='#322659' color='white' fontSize='2xs' ml='0px'>SEARCH</Button>
        <Spacer></Spacer>
        <Button  border='2px'  borderColor='green.500' size='sm' mr='40px'bgColor='white' color='gray' hover={{bgColor:'green.500'}} bgImage><Image />  My Cart</Button>
    </Flex>
    <Flex  w='100%' h='40px' border='1px' borderColor='black' alignItems='center'>
        <Box >New</Box>
    </Flex>

    </>
  )
}

export default Navbar