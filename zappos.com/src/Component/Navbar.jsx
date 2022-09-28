import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons'
import React, { useState } from "react";

const Navbar = () => {
  const [isAuth,setIsAuth]=useState(false)
  return (
    <>
      <Flex
        w="100%"
        h="100px"
        alignItems="center"
      >
        <Image
          src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"
          w="10%"
          h="60%"
          ml="20px"
        ></Image>
        <Input type="text" display="flex" w="26%" ml="30px" h="48%"></Input>
        <Button h="50%" bgColor="#322659" color="white" fontSize="2xs" ml="0px">
          SEARCH
        </Button>
        <Spacer></Spacer>
        <Button
          border="2px"
          borderColor="green.500"
          size="sm"
          mr="40px"
          bgColor="white"
          color="gray"
          _hover={{ bgColor: "green.500", color:"white" }}
        >
          <Image /> My Cart
        </Button>
      </Flex>
      <Flex
        w="100%"
        h="40px"
        alignItems="center"
        bgColor='whitesmoke'
      >
        <Menu>
          <MenuButton fontSize='16px' _hover={{bgColor:'white'}} w='70px' p='0px' bgColor='whitesmoke' h='100%' fontWeight='500' >
            New <ChevronDownIcon/>
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing='0px' fontSize='15px'>
                <MenuItem>The Style Room</MenuItem>
                <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
              <Stack>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
            </Flex>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton fontSize='16px' _hover={{bgColor:'white'}} w='90px' p='0px' bgColor='whitesmoke' h='100%' fontWeight='500' >
            Women<ChevronDownIcon/>
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing='0px' fontSize='15px'>
                <MenuItem>The Style Room</MenuItem>
                <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
              <Stack>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
            </Flex>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton fontSize='16px' _hover={{bgColor:'white'}} w='70px' p='0px' bgColor='whitesmoke' h='100%' fontWeight='500' >
            Men <ChevronDownIcon/>
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing='0px' fontSize='15px'>
                <MenuItem>The Style Room</MenuItem>
                <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
              <Stack>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
            </Flex>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton fontSize='16px' _hover={{bgColor:'white'}} w='70px' p='0px' bgColor='whitesmoke' h='100%' fontWeight='500' >
            Kids <ChevronDownIcon/>
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing='0px' fontSize='15px'>
                <MenuItem>The Style Room</MenuItem>
                <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
              <Stack>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
            </Flex>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton fontSize='16px' _hover={{bgColor:'white'}} w='120px' p='0px' bgColor='whitesmoke' h='100%' fontWeight='500' >
            Departments<ChevronDownIcon/>
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing='0px' fontSize='15px'>
                <MenuItem>The Style Room</MenuItem>
                <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
              <Stack>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
            </Flex>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton fontSize='16px' _hover={{bgColor:'white'}} w='90px' p='0px' bgColor='whitesmoke' h='100%' fontWeight='500'>
            Brands <ChevronDownIcon/>
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing='0px' fontSize='15px'>
                <MenuItem>The Style Room</MenuItem>
                <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
              <Stack>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
            </Flex>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton fontSize='16px' _hover={{bgColor:'white'}} w='70px' p='0px' bgColor='whitesmoke' h='100%' fontWeight='500' >
            Sale <ChevronDownIcon/>
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing='0px' fontSize='15px'>
                <MenuItem>The Style Room</MenuItem>
                <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
              <Stack>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
            </Flex>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton fontSize='16px' _hover={{bgColor:'white'}} w='90px' p='0px' bgColor='whitesmoke' h='100%' fontWeight='500'  >
            Clothing<ChevronDownIcon/>
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing='0px' fontSize='15px'>
                <MenuItem>The Style Room</MenuItem>
                <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
              <Stack>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </Stack>
            </Flex>
          </MenuList>
        </Menu>
        <Spacer></Spacer>
        <Box mr='30px' >{isAuth ? <Menu >
          <MenuButton fontSize='16px' _hover={{bgColor:'white'}} w='90px' p='0px' bgColor='whitesmoke' h='100%' fontWeight='500' >
            Clothing<ChevronDownIcon/>
          </MenuButton>
          <MenuList>
                <MenuItem>The Style Room</MenuItem>
                <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu> : <Text fontSize='20px'>SignIn / Register</Text>}</Box>
      </Flex>
    </>
  );
};

export default Navbar;
