import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Button,
  Image,
  Container,
  IconButton,
  VStack,
  Spacer,
} from '@chakra-ui/react';
import { HiMenu, HiX, HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import logo from '../../assets/logo/TrabaHanap-Brandname.svg';

const MotionBox = motion(Box);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Colors matching Hero section
  const textColor = 'gray.800';
  const subTextColor = 'gray.600';

  return (
    <Box
      position="relative"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      bg="gray.50"
      w="100%"
    >
      <MotionBox
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Container maxW="7xl" px={{ base: 4, md: 6 }}>
          <Flex align="center" h={20}>
            {/* Logo & Brand */}
            <Flex align="center" gap={4}>
              <Link to="/">
                <Image
                  src={logo}
                  alt="TrabaHanap"
                  h={{ base: 6, sm: 7 }}
                  w="auto"
                  transition="all 0.3s ease"
                  _hover={{ transform: 'scale(1.02)', opacity: 0.9 }}
                />
              </Link>
            </Flex>

            <Spacer />

            {/* Desktop Navigation */}
            <HStack spacing={2} display={{ base: 'none', lg: 'flex' }}>
              <Button
                as={Link}
                to="/"
                variant="ghost"
                color={subTextColor}
                fontWeight="600"
                fontSize="sm"
                px={5}
                h={10}
                borderRadius="xl"
                _hover={{
                  color: textColor,
                  bg: 'white',
                }}
                transition="all 0.2s ease"
              >
                Home
              </Button>
              <Button
                as={Link}
                to="/companies"
                variant="ghost"
                color={subTextColor}
                fontWeight="600"
                fontSize="sm"
                px={5}
                h={10}
                borderRadius="xl"
                _hover={{ color: textColor, bg: 'white' }}
                transition="all 0.2s ease"
              >
                Companies
              </Button>
              <Button
                as={Link}
                to="/about"
                variant="ghost"
                color={subTextColor}
                fontWeight="600"
                fontSize="sm"
                px={5}
                h={10}
                borderRadius="xl"
                _hover={{ color: textColor, bg: 'white' }}
                transition="all 0.2s ease"
              >
                About
              </Button>

              {/* Subtle Divider */}
              <Box w="1px" h={5} bg="gray.300" mx={3} />

              {/* Auth Buttons - External links to main app */}
              <Button
                as="a"
                href="https://app.trabahanap.com/login"
                variant="ghost"
                color={subTextColor}
                fontWeight="600"
                fontSize="sm"
                px={5}
                h={10}
                borderRadius="xl"
                _hover={{ 
                  color: 'blue.600',
                  bg: 'white',
                }}
                transition="all 0.2s ease"
              >
                Sign In
              </Button>
              <Button
                as="a"
                href="https://app.trabahanap.com/register"
                h={10}
                px={6}
                colorScheme="blue"
                bg="blue.600"
                fontWeight="600"
                fontSize="sm"
                borderRadius="xl"
                rightIcon={<HiArrowRight />}
                _hover={{ 
                  bg: 'blue.700', 
                  transform: 'translateY(-2px)', 
                  boxShadow: 'lg' 
                }}
                _active={{ 
                  transform: 'translateY(0)',
                  bg: 'blue.700'
                }}
                transition="all 0.2s ease"
              >
                Get Started
              </Button>
            </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', lg: 'none' }}
            onClick={toggleMenu}
            variant="ghost"
            color={subTextColor}
            size="lg"
            borderRadius="xl"
            aria-label="Toggle menu"
            icon={isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            _hover={{ 
              bg: 'white',
              color: textColor
            }}
            transition="all 0.2s ease"
          />
        </Flex>
        </Container>
      </MotionBox>

      {/* Mobile Menu */}
      {isOpen && (
        <Box
          display={{ base: 'block', lg: 'none' }}
          bg="white"
          py={6}
          px={4}
          borderTop="1px solid"
          borderColor="gray.200"
        >
          <VStack spacing={2} align="stretch">
            <Button 
              as={Link} 
              to="/" 
              variant="ghost" 
              color={subTextColor}
              fontWeight="600"
              h={12}
              justifyContent="flex-start"
              borderRadius="xl"
              _hover={{ 
                color: textColor, 
                bg: 'gray.50',
              }}
              transition="all 0.2s ease"
              onClick={closeMenu}
            >
              Home
            </Button>
            <Button 
              as={Link} 
              to="/companies" 
              variant="ghost" 
              color={subTextColor}
              fontWeight="600"
              h={12}
              justifyContent="flex-start"
              borderRadius="xl"
              _hover={{ 
                color: textColor, 
                bg: 'gray.50',
              }}
              transition="all 0.2s ease"
              onClick={closeMenu}
            >
              Companies
            </Button>
            <Button 
              as={Link} 
              to="/about" 
              variant="ghost" 
              color={subTextColor}
              fontWeight="600"
              h={12}
              justifyContent="flex-start"
              borderRadius="xl"
              _hover={{ 
                color: textColor, 
                bg: 'gray.50',
              }}
              transition="all 0.2s ease"
              onClick={closeMenu}
            >
              About
            </Button>

            {/* Mobile Auth Section */}
            <Box pt={6} borderTop="1px solid" borderColor="gray.200" mt={4}>
              <VStack spacing={3}>
                <Button 
                  as="a"
                  href="https://app.trabahanap.com/login"
                  variant="ghost"
                  color={subTextColor}
                  fontWeight="600"
                  h={12}
                  w="full"
                  borderRadius="xl"
                  _hover={{ 
                    color: 'blue.600',
                    bg: 'gray.50',
                  }}
                  transition="all 0.2s ease"
                >
                  Sign In
                </Button>
                
                <Button 
                  as="a"
                  href="https://app.trabahanap.com/register"
                  h={14}
                  w="full"
                  colorScheme="blue"
                  bg="blue.600"
                  fontWeight="600"
                  borderRadius="xl"
                  rightIcon={<HiArrowRight />}
                  _hover={{
                    bg: 'blue.700',
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg'
                  }}
                  _active={{
                    transform: 'translateY(0)',
                  }}
                  transition="all 0.2s ease"
                >
                  Get Started
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;