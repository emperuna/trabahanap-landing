import { Box, Heading, Text, Flex, Container } from "@chakra-ui/react";

function TrustSectionHeader() {
  return (
    <Box
      w="full"
      py={{ base: 6, md: 12 }}
      mb={{ base: 6, md: 10 }}
    >
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={14}
          w="full"
        >
          <Box flex="1">
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            color="slate.900"
            fontWeight="extrabold"
            mb={4}
            textAlign={{ base: "center", md: "left" }}
            lineHeight="1.1"
          >
            Find Your{" "}
            <Text as="span" color="blue.600" fontSize="inherit">
              Dream Job
            </Text>{" "}
            in Just One Click!
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: "lg", md: "xl" }}
            textAlign={{ base: "center", md: "left" }}
            maxW="2xl"
            mb={2}
          >
            Trabahanap makes job hunting simple and accessible. Whether you’re a fresh graduate or an experienced professional, 
            our platform connects you with opportunities that match your skills, passion, and career goals.
          </Text>
        </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default TrustSectionHeader;