import React from 'react';
import { Box, Flex, Container, Heading, Text, Center, VStack } from '@chakra-ui/react';
import { Navbar, Footer } from '../components/layout';
import CompaniesHero from '../components/companies/Hero';
import StatsBand from '../components/companies/StatsBand';
import PartnersGrid from '../components/companies/PartnersGrid';
import CompaniesCTA from '../components/companies/CTA';

// Use real logos from assets/logo/partners
import AccentureLogo from '../assets/logo/partners/Accenture.svg';
import GoogleLogo from '../assets/logo/partners/google.svg';
import MetaLogo from '../assets/logo/partners/Meta.svg';
import MicrosoftLogo from '../assets/logo/partners/Microsoft.svg';
import SlackLogo from '../assets/logo/partners/Slack.svg';
import TeslaLogo from '../assets/logo/partners/Tesla.svg';
import AdidasLogo from '../assets/logo/partners/Adidas.svg';
import AmazonLogo from '../assets/logo/partners/Amazon.svg';
import SamsungLogo from '../assets/logo/partners/Samsung.svg';
import SonyLogo from '../assets/logo/partners/Sony.svg';
import ToyotaLogo from '../assets/logo/partners/Toyota.svg';
import CodechumLogo from '../assets/logo/partners/Codechum.svg';
import BDOLogo from '../assets/logo/partners/BDO.svg';
import IBMLogo from '../assets/logo/partners/IBM.svg';
import EbayLogo from '../assets/logo/partners/Ebay.svg';

const sampleCompanies = [
  { id: 1, name: 'Accenture', logo: AccentureLogo, industry: 'Consulting' },
  { id: 2, name: 'Google', logo: GoogleLogo, industry: 'Technology' },
  { id: 3, name: 'Meta', logo: MetaLogo, industry: 'Technology' },
  { id: 4, name: 'Microsoft', logo: MicrosoftLogo, industry: 'Technology' },
  { id: 5, name: 'Slack', logo: SlackLogo, industry: 'Communication' },
  { id: 6, name: 'Tesla', logo: TeslaLogo, industry: 'Automotive', logoMaxH: '100px' },
  { id: 7, name: 'Adidas', logo: AdidasLogo, industry: 'Retail', logoMaxH: '80px' },
  { id: 8, name: 'Amazon', logo: AmazonLogo, industry: 'Retail', logoMaxH: '28px' },
  { id: 9, name: 'Samsung', logo: SamsungLogo, industry: 'Electronics', logoMaxH: '16px' },
  { id: 10, name: 'Sony', logo: SonyLogo, industry: 'Electronics', logoMaxH: '100px' },
  { id: 11, name: 'Toyota', logo: ToyotaLogo, industry: 'Automotive', logoMaxH: '72px' },
  { id: 12, name: 'CodeChum', logo: CodechumLogo, industry: 'Tech', logoMaxH: '28px' },
  { id: 13, name: 'BDO', logo: BDOLogo, industry: 'Finance', logoMaxH: '28px' },
  { id: 14, name: 'IBM', logo: IBMLogo, industry: 'Technology', logoMaxH: '28px' },
  { id: 15, name: 'Ebay', logo: EbayLogo, industry: 'E-commerce', logoMaxH: '28px' },
];

const Companies = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Box flex="1" bg={['white', 'gray.50']} py={0}>
        <Container maxW="7xl" px={{ base: 4, md: 6 }} pt={0}>
          <CompaniesHero />
        </Container>

        <StatsBand />

        <Container maxW="7xl" px={{ base: 4, md: 6 }} pt={0}>
          <Center mb={8} mt={{ base: 6, md: 10 }}>
            <VStack spacing={3}>
              <Heading size="lg">Our Partners</Heading>
              <Text color="gray.600">We are proud of contributing to the success of the world's leading brands</Text>
            </VStack>
          </Center>

          <PartnersGrid companies={sampleCompanies} />

          <CompaniesCTA />
        </Container>
      </Box>

      <Footer />
    </Flex>
  );
};

export default Companies;
