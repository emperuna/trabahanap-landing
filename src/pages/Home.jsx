import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Navbar, Footer } from "../components/layout";
import { Hero, Features, CTA, HowItWorks } from "../components/home";

const Home = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Box flex="1">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </Box>
      <Footer />
    </Flex>
  );
};

export default Home;