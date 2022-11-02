import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContextProvider";
import { useEffect } from "react";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count,setCount] = useState(0);
  const {Totalitems} = useContext(CartContext);
  // let total=0;
  // function getItems(){
  //   let cartItems =JSON.parse(localStorage.getItem('ItemsInCart'));
  //    total = cartItems.length;
  //   setCount(count+1)
  // }


  
// console.log("cart",cartItems);
  return (
    <>
      <Flex w="100%" h="100px" alignItems="center">
        <Box w='15%'h='40%' display='flex' alignItems='center'>
          <Link to="/"  >
            <Image
              src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"
              w='60%'
              ml="40px"
            ></Image>
          </Link>
        </Box>
        <Input type="text" display="flex" w="26%"  h="48%"></Input>
        <Button h="50%" bgColor="#322659" color="white" fontSize="2xs" ml="0px">
          SEARCH
        </Button>
        <Spacer></Spacer>
        <Link to="/cart">
          <Button
            border="2px"
            borderColor="green.500"
            size="sm"
            mr="40px"
            bgColor="white"
            color="gray"
            colorScheme='white'
            _hover={{ bgColor: "green.500", color: "white" }}
          >
            <Image />{Totalitems>0 ? `${Totalitems} items in cart`: "My Cart"}
          </Button>
        </Link>
      </Flex>
      <Flex w="100%" h="40px" alignItems="center" bgColor="whitesmoke">
        <Menu>
          <MenuButton
            fontSize="16px"
            _hover={{ bgColor: "white" }}
            w="70px"
            p="0px"
            bgColor="whitesmoke"
            h="100%"
            fontWeight="500"
          >
            New <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing="0px" fontSize="15px">
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
          <MenuButton
            fontSize="16px"
            _hover={{ bgColor: "white" }}
            w="90px"
            p="0px"
            bgColor="whitesmoke"
            h="100%"
            fontWeight="500"
          >
            Women
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing="0px" fontSize="15px">
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
          <MenuButton
            fontSize="16px"
            _hover={{ bgColor: "white" }}
            w="70px"
            p="0px"
            bgColor="whitesmoke"
            h="100%"
            fontWeight="500"
          >
            Men <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing="0px" fontSize="15px">
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
          <MenuButton
            fontSize="16px"
            _hover={{ bgColor: "white" }}
            w="70px"
            p="0px"
            bgColor="whitesmoke"
            h="100%"
            fontWeight="500"
          >
            Kids <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing="0px" fontSize="15px">
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
          <MenuButton
            fontSize="16px"
            _hover={{ bgColor: "white" }}
            w="120px"
            p="0px"
            bgColor="whitesmoke"
            h="100%"
            fontWeight="500"
          >
            Departments
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing="0px" fontSize="15px">
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
          <MenuButton
            fontSize="16px"
            _hover={{ bgColor: "white" }}
            w="90px"
            p="0px"
            bgColor="whitesmoke"
            h="100%"
            fontWeight="500"
          >
            Brands <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing="0px" fontSize="15px">
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
          <MenuButton
            fontSize="16px"
            _hover={{ bgColor: "white" }}
            w="70px"
            p="0px"
            bgColor="whitesmoke"
            h="100%"
            fontWeight="500"
          >
            Sale <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing="0px" fontSize="15px">
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
          <MenuButton
            fontSize="16px"
            _hover={{ bgColor: "white" }}
            w="90px"
            p="0px"
            bgColor="whitesmoke"
            h="100%"
            fontWeight="500"
          >
            Clothing
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Flex>
              <Stack spacing="0px" fontSize="15px">
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
        <Box mr="30px">
          {isAuth ? (
            <Menu>
              <MenuButton
                fontSize="16px"
                _hover={{ bgColor: "white" }}
                w="90px"
                p="0px"
                bgColor="whitesmoke"
                h="100%"
                fontWeight="500"
              >
                Clothing
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>The Style Room</MenuItem>
                <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <>
              <Button onClick={onOpen} h="100%" fontSize="20px">
                SignIn / Register
              </Button>
              <Modal isOpen={isOpen} onClose={onClose} size="3xl">
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize="26px">Sign-in</ModalHeader>
                  <ModalCloseButton />
                  <Flex>
                    <Divider borderColor="gray.300" border="1px" />
                  </Flex>
                  <ModalBody>
                    <Flex w="100%">
                      <Stack w="50%" textAlign="center" pr="20px" pt="30px">
                        <Link to="/login">
                          <Button
                            fontSize="16px"
                            h="30px"
                            w="100%"
                            bgColor="white"
                            borderColor="black"
                            border="2px"
                            _hover={{ bgColor: "blue.500", color: "white" }}
                            borderRadius="5px"
                          >
                            SIGN IN WITH ZAPPOS
                          </Button>
                        </Link>
                        <Button
                          fontSize="16px"
                          h="30px"
                          w="100%"
                          bgColor="white"
                          borderColor="black"
                          border="2px"
                          _hover={{ bgColor: "blue.500", color: "white" }}
                          borderRadius="5px"
                        >
                          SIGN IN WITH AMAZON
                        </Button>
                        <Button
                          fontSize="16px"
                          h="30px"
                          w="100%"
                          bgColor="white"
                          borderColor="black"
                          border="2px"
                          _hover={{ bgColor: "blue.500", color: "white" }}
                          borderRadius="5px"
                        >
                          SIGN IN WITH GOOGLE
                        </Button>
                        <Flex pt="20px">
                          <Divider borderColor="black" w="40%" />
                          <Spacer />{" "}
                          <Text mt="-10px" color="gray.500" fontSize="15px">
                            or
                          </Text>{" "}
                          <Spacer />
                          <Divider w="40%" borderColor="black" />
                        </Flex>
                        <Link to="/register">
                          <Button
                            fontSize="15px"
                            h="30px"
                            w="100%"
                            bgColor="white"
                            borderColor="black"
                            border="2px"
                            _hover={{ bgColor: "blue.500", color: "white" }}
                            borderRadius="5px"
                          >
                            CREATE YOUR ZAPPOS ACCOUNT
                          </Button>
                        </Link>
                      </Stack>
                      <Center h="350px">
                        <Divider
                          orientation="vertical"
                          borderColor="gray.300"
                          border="2px"
                        ></Divider>
                      </Center>
                      <Stack
                        w="50%"
                        textAlign="flex-start"
                        p="20px"
                        spacing="0px"
                        fontSize="17px"
                      >
                        <Text fontSize="17px" fontWeight="600">
                          By logging in with Amazon, you may be eligible for
                          additional Prime benefits like FREE Upgraded Shipping.
                          Then, join Zappos VIP for additional Prime-linked VIP
                          perks:
                        </Text>
                        <li>
                          If you are an Amazon Prime Member, sign in with Amazon
                          to qualify for free upgraded shipping!
                        </li>
                        <li>Get FREE Expedited Shipping</li>
                        <li>Earn 2 Points for Every $1 Spent</li>
                        <li>Receive Bonus Points on Select Brands</li>
                        <li>Redeem Points for VIP Codes</li>
                      </Stack>
                    </Flex>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
