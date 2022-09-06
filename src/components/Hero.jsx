import React from "react";
import "../index.css";
import Ilustration from "../assets/Illustration.svg";
import Arrow from "../assets/Arrow Right.svg";
import { Text, Flex, Box, Image, Button } from "@chakra-ui/react";

function Hero() {
  return (
    <Flex
      mt="131px"
      mx="120px"
      alignItems="center"
      gap="0"
      justifyContent="center"
      className="Hero"
    >
      <Box>
        <Box
          display="flex"
          gap="16px"
          bgColor="rgba(255, 255, 255, 0.1)"
          borderRadius="32px"
          py="4px"
          pl="4px"
          mb="32px"
          w="365px"
          alignItems="center"
        >
          <Text
            bgColor="#ffffff"
            borderRadius="32px"
            fontSize="14px"
            py="8px"
            px="20px"
            fontWeight="bold"
          >
            75% SAVE
          </Text>
          <Text color="#ffffff" fontSize="16px" py="8px" pr="11px">
            For the Black Friday weekend
          </Text>
        </Box>
        <Text
          color="#ffffff"
          fontSize="64px"
          fontWeight="700"
          lineHeight="76px"
          mb="24px"
        >
          Fastest & secure platform to invest
          <br /> in crypto
        </Text>
        <Text color="#E0E0E0" fontSize="16px" mb="32px">
          Buy and sell cryptocurrencies, trusted by 10M wallets <br />
          with over $30 billion in transactions.
        </Text>
        <Button bgColor="#3671E9" borderRadius="32px" py="32px" pl="32px">
          <label color="white" fontSize="18px">
            Try for FREE
          </label>
          <Image src={Arrow} w="32px" ml="24px" />
        </Button>
      </Box>
      <Image src={Ilustration} w="604px" />
    </Flex>
  );
}

export default Hero;
