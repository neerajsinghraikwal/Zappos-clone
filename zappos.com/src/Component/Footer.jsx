import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Flex bgColor='blue.900' color='white' justifyContent='space-around' pt='30px' h='700px' >
        <Stack w='20%' alignItems='flex-start'>
          <Text>Explore Zappos</Text>
          <Stack fontSize='15px' alignItems='flex-start'  spacing='3px' pb='20px'>
            <Text mt='10px'>Brands</Text>
            <Text>Clothing</Text>
            <Text>The Style Room</Text>
            <Text>Eyewear</Text>
            <Text>New Arrivals</Text>
            <Text>Running</Text>
            <Text>Jackets</Text>
            <Text>Shoes</Text>
            <Text>Watches</Text>
            <Text>Zappos Adaptive</Text>
          </Stack>
        </Stack>
        <Stack  w='20%' alignItems='flex-start'>
          <Text>Customer Service</Text>
          <Stack fontSize='15px' alignItems='flex-start'  spacing='3px' pb='20px'>
            <Text mt='10px'>FAQs</Text>
            <Text>Contact Info</Text>
            <Text>¿Ayuda en español?</Text>
            <Text>Shipping And Returns Policy</Text>
            <Text>About Proposition 65</Text>
            <Text>Fit Info</Text>
            <Text>Measurement Guide</Text>
            <Text>Size Conversion Chart</Text>
            <Text>Measure Your Bra Size</Text>
          </Stack>
        </Stack>
        <Stack   w='20%' alignItems='flex-start'>
          <Text>About Zappos</Text>
          <Stack fontSize='15px' alignItems='flex-start' spacing='3px' pb='20px'>
            <Text mt='10px'>About</Text>
            <Text>Zappos ONE</Text>
            <Text>Zappos for Good</Text>
            <Text>Get the Zappos Mobile App</Text>
            <Text>Amazon Prime Benefits</Text>
            <Text>Zappos VIP Benefits</Text>
            <Text>Powered by Zappos</Text>
            <Text>Coupons</Text>
            <Text>Accessibility Statement</Text>
            <Text>Beyond the Box Blog</Text>
          </Stack>
          <Text >Resources</Text>
          <Stack fontSize='15px' alignItems='flex-start' spacing='3px' pb='20px'>
            <Text  >Associates Program</Text>
            <Text>Influencer Program</Text>
            <Text>Jobs</Text>
            <Text>Press Kit & Brand Inquiries</Text>
            <Text>Site Map</Text>
          </Stack>
        </Stack>
        <Stack  w='20%' >
          <Box bgColor='blue.700'  fontSize='15px' textAlign='start' p='20px'>
            <Text fontSize='20px' fontWeight='600'>Your Voice Matters</Text>
            <Text mt='20px'>
              We'd love to learn more about your shopping experiences on
              Zappos.com and how we can improve!
            </Text>
            <Button variant='outline' h='40px' mt='10px' fontSize='20px'>TAKE SURVEY</Button>
          </Box>
          <Text>Connect With Us</Text>
        </Stack>
      </Flex>
    </>
  );
};

export default Footer;
