import { Flex, Text, Link } from '@chakra-ui/react';

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Text fontSize="2xl" fontWeight="bold">Welcome to the Todo App</Text>
      <Flex as="footer" py={4} mt={10} justifyContent="center" bg="gray.100" borderTop="1px" borderColor="gray.200">
        <Text fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} Todo App. All rights reserved.
        </Text>
        <Link href="#" ml={4} fontSize="sm">
          More Links
        </Link>
      </Flex>
    </Flex>
  );
};

export default Index;