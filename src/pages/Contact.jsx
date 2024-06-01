import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">Contact Us</Heading>
        <Text fontSize="lg">We would love to hear from you! Reach out to us through any of the following methods:</Text>

        <Box>
          <Heading as="h3" size="lg" mb={4}>Email</Heading>
          <Text fontSize="md">support@electroshop.com</Text>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>Phone</Heading>
          <Text fontSize="md">+1 (800) 123-4567</Text>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>Address</Heading>
          <Text fontSize="md">123 ElectroShop Lane, Tech City, TX 75001</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;