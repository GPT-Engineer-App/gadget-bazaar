import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "https://via.placeholder.com/150",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    image: "https://via.placeholder.com/150",
    price: "$999",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    image: "https://via.placeholder.com/150",
    price: "$199",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    image: "https://via.placeholder.com/150",
    price: "$299",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to Electronics Store
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the latest in electronic gadgets and accessories
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold" mt={2}>
                  {product.price}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;