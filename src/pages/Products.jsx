import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Products = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">Our Products</Heading>
        <Text fontSize="lg">Explore our wide range of electronic products.</Text>

        <Box>
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

export default Products;