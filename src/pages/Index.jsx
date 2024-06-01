import { Box, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <RouterLink to="/">ElectroShop</RouterLink>
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/products">Products</Link>
          <Link as={RouterLink} to="/contact">Contact Us</Link>
        </Stack>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">Welcome to ElectroShop</Heading>
        <Text fontSize="lg">Your one-stop shop for the latest and greatest in electronics.</Text>

        <Box>
          <Heading as="h3" size="lg" mb={4}>Featured Products</Heading>
          <Flex wrap="wrap" justifyContent="space-around">
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
              <Image src="/images/sample-product-1.jpg" alt="Sample Product 1" />
              <Box p={4}>
                <Heading as="h4" size="md">Smartphone</Heading>
                <Text mt={2}>A sleek, modern smartphone with all the latest features.</Text>
              </Box>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
              <Image src="/images/sample-product-2.jpg" alt="Sample Product 2" />
              <Box p={4}>
                <Heading as="h4" size="md">Laptop</Heading>
                <Text mt={2}>A high-end laptop perfect for work and play.</Text>
              </Box>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
              <Image src="/images/sample-product-3.jpg" alt="Sample Product 3" />
              <Box p={4}>
                <Heading as="h4" size="md">Wireless Earbuds</Heading>
                <Text mt={2}>Experience true wireless freedom with these sleek earbuds.</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;