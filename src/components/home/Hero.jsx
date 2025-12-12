import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  Icon,
  Circle,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiSearch, HiTrendingUp, HiLightBulb, HiDocumentText, HiChartBar } from 'react-icons/hi';
import heroImage from '../../assets/hero_man_pointing.png';

const MotionBox = motion(Box);

const Hero = () => {
  const textColor = 'gray.800';
  const subTextColor = 'gray.500';

  // Circular Orbit Animation for background icons
  // Rotates the container to simulate orbiting
  const orbitVariant = (duration = 20, delay = 0) => ({
    animate: {
      rotate: [0, 360],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        delay: delay
      }
    }
  });

  // Counter-rotate icons to keep them upright while orbiting (optional, but looks better)
  const counterRotateVariant = (duration = 20) => ({
    animate: {
      rotate: [360, 0],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity
      }
    }
  });

  return (
    <Box bg="gray.50" overflow="hidden" position="relative" minH="90vh">
      <Container maxW="7xl" position="relative" zIndex={1} py={{ base: 16, lg: 20 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 0 }} alignItems="center">
          
          {/* Left Content */}
          <VStack align="flex-start" spacing={6} pr={{ lg: 8 }} zIndex={2}>
            <Box>
              <Text 
                fontSize="sm" 
                fontWeight="bold" 
                color="blue.600" 
                textTransform="uppercase"
                letterSpacing="wider"
                mb={3}
              >
                #1 Job Platform in the Philippines
              </Text>
              <Heading
                as="h1"
                fontFamily="'Poppins', sans-serif"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl', xl: '7xl' }}
                fontWeight="800"
                color={textColor}
                lineHeight="1.1"
                letterSpacing="-0.02em"
                mb={4}
              >
                Millions of Jobs <br />
                <Text as="span" color="blue.600">Waiting for you!</Text>
              </Heading>
              
              <Text
                fontSize={{ base: 'md', lg: 'lg' }}
                color={subTextColor}
                maxW="lg"
                lineHeight="relaxed"
              >
                Connect with top employers and discover opportunities that match your skills and aspirations. Your dream career starts here.
              </Text>
            </Box>

            <HStack spacing={4} pt={2}>
              <Button
                size="lg"
                h={16}
                px={10}
                fontSize="lg"
                fontWeight="700"
                colorScheme="blue"
                bg="blue.600"
                _hover={{ bg: 'blue.700', transform: 'translateY(-2px)', boxShadow: 'xl' }}
                borderRadius="xl"
                rightIcon={<Icon as={HiArrowRight} />}
                transition="all 0.2s"
              >
                Find It Now
              </Button>
            </HStack>

            {/* Stats Row */}
            <HStack spacing={{ base: 8, md: 12 }} pt={8} borderTop="1px solid" borderColor="gray.200" w="full" mt={6}>
              <Box>
                <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="800" color={textColor}>20K</Text>
                <Text fontSize="sm" color={subTextColor}>People got jobs</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="800" color={textColor}>15K</Text>
                <Text fontSize="sm" color={subTextColor}>Companies</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="800" color={textColor}>1.5M</Text>
                <Text fontSize="sm" color={subTextColor}>Subscribers</Text>
              </Box>
            </HStack>
          </VStack>

          {/* Right Content - Image & Orbiting Background */}
          <Box position="relative" display="flex" justifyContent="center" alignItems="center" h={{ base: "400px", lg: "600px" }}>
             
             {/* Orbiting Icons Container - Centered behind image */}
             <Box
               position="absolute"
               left="50%"
               top="50%"
               transform="translate(-50%, -50%)"
               w="600px"
               h="600px"
               zIndex={0}
             >
                {/* Inner Orbit */}
                <MotionBox
                  position="absolute"
                  w="100%"
                  h="100%"
                  variants={orbitVariant(25)}
                  initial="initial"
                  animate="animate"
                >
                  <Box position="absolute" top="10%" left="50%">
                    <MotionBox variants={counterRotateVariant(25)}>
                      <Circle size={14} bg="blue.100" opacity={0.6}>
                        <Icon as={HiSearch} boxSize={6} color="blue.500" />
                      </Circle>
                    </MotionBox>
                  </Box>
                  <Box position="absolute" bottom="10%" left="50%">
                     <MotionBox variants={counterRotateVariant(25)}>
                      <Circle size={10} bg="green.100" opacity={0.6}>
                        <Icon as={HiTrendingUp} boxSize={5} color="green.500" />
                      </Circle>
                    </MotionBox>
                  </Box>
                   <Box position="absolute" top="50%" right="10%">
                     <MotionBox variants={counterRotateVariant(25)}>
                      <Circle size={12} bg="purple.100" opacity={0.6}>
                        <Icon as={HiLightBulb} boxSize={6} color="purple.500" />
                      </Circle>
                    </MotionBox>
                  </Box>
                </MotionBox>

                {/* Outer Orbit (Slower) */}
                <MotionBox
                  position="absolute"
                  w="120%"
                  h="120%"
                  left="-10%"
                  top="-10%"
                  variants={orbitVariant(40, 5)}
                  initial="initial"
                  animate="animate"
                >
                   <Box position="absolute" top="20%" right="20%">
                     <MotionBox variants={counterRotateVariant(40)}>
                      <Circle size={16} bg="orange.100" opacity={0.5}>
                        <Icon as={HiDocumentText} boxSize={8} color="orange.500" />
                      </Circle>
                    </MotionBox>
                  </Box>
                  <Box position="absolute" bottom="30%" left="10%">
                     <MotionBox variants={counterRotateVariant(40)}>
                      <Circle size={12} bg="cyan.100" opacity={0.5}>
                        <Icon as={HiChartBar} boxSize={5} color="cyan.500" />
                      </Circle>
                    </MotionBox>
                  </Box>
                </MotionBox>
             </Box>

             {/* Background Blob */}
             <Box
              position="absolute"
              w="80%"
              h="80%"
              bg="blue.50"
              borderRadius="full"
              filter="blur(50px)"
              zIndex={0}
             />

            {/* Main Image */}
            <Box position="relative" zIndex={1} h="full" display="flex" alignItems="flex-end">
              <Image
                src={heroImage}
                alt="Happy professional"
                objectFit="contain"
                maxH="full"
                maxW="full"
              />
            </Box>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;