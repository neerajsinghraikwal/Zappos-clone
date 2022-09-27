import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box w="100%" h="5000px">
        <Center w="100%" mt="30px">
          <Image src="https://m.media-amazon.com/images/G/01/2022/homepage9.26/COOP-FALL-CAMPAGIN-WOMENS-STEVE-MADDEN-HERO-1440x700.jpg"></Image>
        </Center>
        <Text
          textAlign="start"
          fontSize="30px"
          fontWeight="600"
          w="90%"
          m="auto"
          mt="30px"
          mb="20px"
        >
          Shop Popular Categories
        </Text>
        <Grid
          templateColumns="repeat(6,1fr)"
          w="90%"
          templateRows="300px"
          m="auto"
          gap="10px"
        >
          <GridItem border="2px" borderColor="whitesmoke" w="100%" h="100%">
            <Center w="100%" h="80%" p="10%" overflow="hidden">
              <Image
                src="https://m.media-amazon.com/images/I/81crO3+x7YL._AC_SX255_.jpg"
                h="60%"
                w="100%"
                className="image"
              ></Image>
            </Center>
            <Text fontSize="17px" fontWeight="500">
              Sneakers & Athletic Shoes
            </Text>
          </GridItem>
          <GridItem border="2px" borderColor="whitesmoke" w="100%" h="100%">
            <Center w="100%" h="80%" p="10%" overflow="hidden">
              <Image
                src="https://m.media-amazon.com/images/I/71AQ9q89+gL._AC_SX255_.jpg"
                h="60%"
                w="100%"
                className="image"
              ></Image>
            </Center>
            <Text fontSize="17px" fontWeight="500">
              Ankle Booties
            </Text>
          </GridItem>
          <GridItem border="2px" borderColor="whitesmoke" w="100%" h="100%">
            <Center w="100%" h="80%" p="10%" overflow="hidden">
              <Image
                src="https://m.media-amazon.com/images/I/71uz3AedwVL._AC_SX255_.jpg"
                h="60%"
                w="100%"
                className="image"
              ></Image>
            </Center>
            <Text fontSize="17px" fontWeight="500">
              Lifestyle Sneakers
            </Text>
          </GridItem>
          <GridItem border="2px" borderColor="whitesmoke" w="100%" h="100%">
            <Center w="100%" h="80%" p="10%" overflow="hidden">
              <Image
                src="https://m.media-amazon.com/images/I/61h70xJXNRL._AC_SX255_.jpg"
                h="60%"
                w="100%"
                className="image"
              ></Image>
            </Center>
            <Text fontSize="17px" fontWeight="500">
              Sandals On Sale
            </Text>
          </GridItem>
          <GridItem border="2px" borderColor="whitesmoke" w="100%" h="100%">
            <Center w="100%" h="80%" p="10%" overflow="hidden">
              <Image
                src="https://m.media-amazon.com/images/I/81W8icKY5PL._AC_SX255_.jpg"
                h="100%"
                w="100%"
                className="image"
              ></Image>
            </Center>
            <Text fontSize="17px" fontWeight="500">
              Denim
            </Text>
          </GridItem>
          <GridItem border="2px" borderColor="whitesmoke" w="100%" h="100%">
            <Center w="100%" h="80%" p="10%" overflow="hidden">
              <Image
                src="https://m.media-amazon.com/images/I/716Hx34WZnL._AC_SX255_.jpg"
                h="50%"
                w="100%"
                className="image"
              ></Image>
            </Center>
            <Text fontSize="17px" fontWeight="500">
              Loafers
            </Text>
          </GridItem>
        </Grid>
        <Grid
          templateColumns="repeat(3,1fr)"
          w="90%"
          templateRows="580px"
          m="auto"
          gap="30px"
          mt="70px"
        >
          <GridItem>
            <Image src="https://m.media-amazon.com/images/G/01/2022/womens-shoes/WOMENS-HEELS-PUMPS-AUGUST-PROMO-500X500.jpg"></Image>
            <Text className="header">
              Pumps,Stilettos,and Slingbacks,Oh My!
            </Text>
            <Text className="heading2">
              Heels—the perfect excuse to dress up for every occasion!
            </Text>
            <Text className="link" as="u">
              SHOP HEELS YOU’LL LOVE
            </Text>
          </GridItem>
          <GridItem>
            <Image src="https://m.media-amazon.com/images/G/01/2022/homepage9.19/BAGS-HANDBAGS-DESIGNER-FALL-PROMO-AUGUST-500X500.jpg"></Image>
            <Text className="header">The Best in Designer Bags for Fall</Text>
            <Text className="heading2">
              Invest in standout designs that add a little oomph to your
              wardrobe!
            </Text>
            <Text className="link" as="u">
              SHOP TOP DESIGNER BAGS
            </Text>
          </GridItem>
          <GridItem>
            <Image src="https://m.media-amazon.com/images/G/01/2022/homepage9.26/MENS-FALL-BASICS-SEPTEMBER-TRIPTYCH-500x500.jpg"></Image>
            <Text className="header">Smart Style: Fall Footwear Basics</Text>
            <Text className="heading2">
              Featuring chukkas, sneakers, oxfords, and other must-haves!
            </Text>
            <Text className="link" as="u">
              SHOP MEN’S FALL FOOTWEAR
            </Text>
          </GridItem>
        </Grid>
        <Box w="90%" m="auto" mt="40px">
          <Image
            src="https://m.media-amazon.com/images/G/01/Zappos/SITE-VIRTUAL-TRY-ON-HERO-1440x200.jpg"
            w="100%"
          ></Image>
        </Box>
        <Grid
          templateColumns="repeat(2,1fr)"
          w="80%"
          templateRows="600px"
          m="auto"
          gap="30px"
          mt="70px"
        >
          <GridItem bgColor="orange.300" h="100%" w="100%">
            <Center mt="150px">
              <Image src="https://m.media-amazon.com/images/G/01/2022/homepage7.04/COOP-NEW-ARRIVAL-LOGO-1X-01_1.svg"></Image>
            </Center>
            <Text mt="20px" fontSize="17px" p="20px">
              SOREL: Experience fashion faves that’ll have you feeling confident
              and comfy—whether you’re at the pumpkin patch or hanging out with
              friends.
            </Text>
            <Button
              border="2px"
              borderColor="black"
              bgColor="orange.300"
              className="footbtn"
              mt="0px"
              h="40px"
              w="250px"
              fontSize="17px"
              p="20px"
            >
              SHOP NEW SOREL FOOTWEAR
            </Button>
          </GridItem>
          <GridItem h="100%" w="100%">
            <Image
              src="https://m.media-amazon.com/images/G/01/2022/homepage9.26/COOP-SOREL-NEW-ARRIVALS-DESKTOP-RIGHT-1X-634x634.jpg"
              h="100%"
              w="100%"
            ></Image>
          </GridItem>
        </Grid>
        <Flex w="90%" m="auto" mt="50px" justifyContent="space-between">
          <Box w="25%" fontSize="17px">
            <Text mt="150px" fontWeight="600" fontSize="22px">
              Just-In Birkenstock: Cue the Cozy
            </Text>
            <Text>
              Explore iconic designs featuring all-new teddy shearling for extra
              warmth, comfort, and style! Shop New Birkenstock Styles
            </Text>
            <Button
              border="2px"
              borderColor="black"
              bgColor="white"
              color="black"
              className="btn2"
              mt="20px"
              h="40px"
              fontSize="15px"
              w="280px"
              p="10px"
            >
              SHOP NEW BIRKENSTOCK STYLES
            </Button>
          </Box>
          <Box w="70%">
            <Image src="https://m.media-amazon.com/images/G/01/2022/homepage9.26/COOP-BIRKENSTOCK-AOE-960x500.jpg"></Image>
          </Box>
        </Flex>
        <Flex w="90%" m="auto" mt="50px" justifyContent="space-between">
          <Box w="70%">
            <Image src="https://m.media-amazon.com/images/G/01/2022/the-style-room/FASHION-THE-STYLE-ROOM-FREE-PEOPLE-SEPTEMBER-960x500.jpg"></Image>
          </Box>
          <Box w="25%" fontSize="17px">
            <Text mt="150px" fontWeight="600" fontSize="22px">
              Free People : Nostalgic Bohemia
            </Text>
            <Text>
              Fuse Vintage and modern elements by mixing textures, graphics, and
              earthy hues for versatile, perennial fashion. Shop Free People
            </Text>
            <Button
              border="2px"
              borderColor="black"
              bgColor="white"
              color="black"
              className="btn2"
              mt="20px"
              h="40px"
              fontSize="15px"
              w="280px"
              p="10px"
            >
              SHOP FREE PEOPLE
            </Button>
          </Box>
        </Flex>
        <Grid
          templateColumns="repeat(3,1fr)"
          w="90%"
          templateRows="580px"
          m="auto"
          gap="30px"
          mt="70px"
        >
          <GridItem>
            <Image src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/Zappos_ONE_Retina.png"></Image>
            <Text className="header">Diversity Equity & Inclusion</Text>
            <Text className="heading2">
              At Zappos, diversity and individuality are central to our core
              values.
            </Text>
            <Text className="link" as="u">
              LEARN MORE ABOUT ZAPPOS ONE PURPOSE
            </Text>
          </GridItem>
          <GridItem>
            <Image src="https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg"></Image>
            <Text className="header">Zappos for Good</Text>
            <Text className="heading2">
              Learn how to easily donate or recycle your secondhand items.
            </Text>
            <Text className="link" as="u">
              EXPLORE ZAPPOS FOR GOOD
            </Text>
          </GridItem>
          <GridItem>
            <Image src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png"></Image>
            <Text className="header">Goods for Good</Text>
            <Text className="heading2">
              We're highlighting brands who are making a difference and helping
              build a better place for us all.
            </Text>
            <Text className="link" as="u">
              SHOP GOODS FOR GOOD
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
