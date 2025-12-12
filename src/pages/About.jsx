import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Navbar, Footer } from '../components/layout';
import Team from '../components/about/Team';
import Header from '../components/about/Header';
import CompaniesSection from '../components/about/CompaniesSection';
import VisionSection from '../components/about/VisionSection';
import MissionSection from '../components/about/MissionSection';

const About = () => (
  <>
    <Navbar />
    <Box minH="100vh" py={10} bg="white" display="flex" flexDirection="column" alignItems="center">
      <Header />
      <CompaniesSection />
      <Team />
      <VisionSection />
      <MissionSection />
    </Box>
    <Footer />
  </>
);

export default About;