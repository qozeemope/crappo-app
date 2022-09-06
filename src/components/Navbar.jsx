import React from "react";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import Logo from "../assets/Logo.svg";
import Divider from "../assets/Divider.svg";
import "../index.css";

function Navbar() {
  return (
    <Box className="nav" mr="120px" ml="118px" pt="60px" color="#ffffff">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap="16px">
          <Image src={Logo} w="40px" h="40px" />
          <Text fontSize="18px">CRAPPO</Text>
        </Flex>
        <Flex gap="32px" alignItems="center" fontSize="16px">
          <Text>Products</Text>
          <Text>Features</Text>
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>Login</Text>
          <Image src={Divider} />
          <Button bgColor="#3671E9" borderRadius="32px" py="14px" px="32px">
            Register
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
