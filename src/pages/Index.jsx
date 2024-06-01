import { Container, Text, VStack, Box, SimpleGrid, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$299",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$799",
  },
  {
    id: 3,
    name: "Headphones",
    image: "https://via.placeholder.com/150",
    price: "$199",
  },
];

const Index = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.md" py={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Welcome to E-Shop
          </Text>
          <Text>Discover the latest in electronic gadgets and accessories.</Text>
        </VStack>
        <Box mt={8}>
          <Text fontSize="xl" mb={4}>
            Featured Products
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {sampleProducts.map((product) => (
              <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Image src={product.image} alt={product.name} boxSize="150px" />
                <Text fontSize="xl" fontWeight="bold">
                  {product.name}
                </Text>
                <Text>{product.price}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default Index;