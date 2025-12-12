import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Link,
  Image,
  IconButton,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from '../../assets/logo/TrabaHanap-Logo-White.svg';
import Brandname from '../../assets/logo/TrabaHanap-Brandname.svg';

const FOOTER_LINKS = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Companies', href: '/companies' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  forJobSeekers: {
    title: 'For Job Seekers',
    links: [
      { label: 'Browse Jobs', href: 'https://app.trabahanap.com/find-jobs' },
      { label: 'Career Advice', href: '#' },
      { label: 'Resume Tips', href: '#' },
      { label: 'Salary Guide', href: '#' },
    ],
  },
  forEmployers: {
    title: 'For Employers',
    links: [
      { label: 'Post a Job', href: 'https://app.trabahanap.com/employer/post-job' },
      { label: 'Pricing', href: '#' },
      { label: 'Employer Resources', href: '#' },
      { label: 'Partner With Us', href: '#' },
    ],
  },
};

const SOCIAL_LINKS = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
  const bgColor = useColorModeValue('slate.900', 'gray.900');
  const textColor = useColorModeValue('slate.400', 'slate.400');
  const headingColor = useColorModeValue('white', 'white');
  const linkHoverColor = useColorModeValue('blue.400', 'blue.400');

  return (
    <Box as="footer" bg={bgColor} color={textColor}>
      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={8}>
          {/* Brand Column */}
          <VStack align="flex-start" spacing={4} gridColumn={{ lg: 'span 1' }}>
            <HStack spacing={2}>
              <Image src={Logo} alt="TrabaHanap Logo" h={10} />
            </HStack>
            <Text fontSize="sm" maxW="250px">
              Connecting Filipino talent with opportunities. Your gateway to career success in the Philippines.
            </Text>
            <HStack spacing={2} pt={2}>
              {SOCIAL_LINKS.map((social) => (
                <IconButton
                  key={social.label}
                  as="a"
                  href={social.href}
                  aria-label={social.label}
                  icon={<social.icon />}
                  variant="ghost"
                  color={textColor}
                  size="sm"
                  borderRadius="full"
                  _hover={{
                    color: linkHoverColor,
                    bg: 'whiteAlpha.200',
                  }}
                />
              ))}
            </HStack>
          </VStack>

          {/* Link Columns */}
          {Object.values(FOOTER_LINKS).map((section) => (
            <VStack key={section.title} align="flex-start" spacing={4}>
              <Text fontWeight="600" color={headingColor} fontSize="sm">
                {section.title}
              </Text>
              <VStack align="flex-start" spacing={2}>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    as={link.href.startsWith('/') ? RouterLink : 'a'}
                    to={link.href.startsWith('/') ? link.href : undefined}
                    href={link.href.startsWith('/') ? undefined : link.href}
                    fontSize="sm"
                    _hover={{
                      color: linkHoverColor,
                      textDecoration: 'none',
                    }}
                    transition="color 0.2s ease"
                  >
                    {link.label}
                  </Link>
                ))}
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>

        <Divider my={8} borderColor="whiteAlpha.200" />

        {/* Bottom Bar */}
        <HStack
          justify="space-between"
          align="center"
          flexDir={{ base: 'column', md: 'row' }}
          spacing={4}
        >
          <Text fontSize="sm">
            © {new Date().getFullYear()} TrabaHanap. All rights reserved.
          </Text>
          <HStack spacing={6}>
            <Link fontSize="sm" _hover={{ color: linkHoverColor }}>
              Privacy Policy
            </Link>
            <Link fontSize="sm" _hover={{ color: linkHoverColor }}>
              Terms of Service
            </Link>
            <Link fontSize="sm" _hover={{ color: linkHoverColor }}>
              Cookie Policy
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
