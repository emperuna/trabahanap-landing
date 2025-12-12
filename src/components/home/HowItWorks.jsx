import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Circle,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { HiSearch, HiUserAdd, HiBriefcase, HiArrowRight } from 'react-icons/hi';

const MotionBox = motion(Box);
const MotionCircle = motion(Circle);
const MotionVStack = motion(VStack);

const HowItWorks = () => {
  const textColor = 'gray.800';
  const subTextColor = 'gray.500';

  const steps = [
    {
      icon: HiSearch,
      title: 'Search & Discover',
      description: 'Browse thousands of job opportunities from top companies across the Philippines.',
      color: 'blue.500',
      bgColor: 'blue.50',
    },
    {
      icon: HiUserAdd,
      title: 'Create Profile', 
      description: 'Build your professional profile and let employers find you with ease.',
      color: 'green.500',
      bgColor: 'green.50',
    },
    {
      icon: HiBriefcase,
      title: 'Get Hired',
      description: 'Apply to jobs, interview with confidence, and land your dream career.',
      color: 'purple.500',
      bgColor: 'purple.50',
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <Box py={20} bg="gray.50" position="relative" overflow="hidden">
      {/* Background decorations */}
      <Box
        position="absolute"
        top="20%"
        left="-5%"
        w="300px"
        h="300px"
        bg="blue.100"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.4}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="10%"
        right="-5%"
        w="250px"
        h="250px"
        bg="purple.100"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.4}
        zIndex={0}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={16} textAlign="center">
          {/* Header Section */}
          <MotionVStack
            spacing={4}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              bg="blue.600"
              color="white"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="semibold"
            >
              Simple Process
            </Badge>
            <Heading
              as="h2"
              fontFamily="'Poppins', sans-serif"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="800"
              color={textColor}
              letterSpacing="-0.02em"
            >
              How It <Text as="span" color="blue.600">Works</Text>
            </Heading>
            <Text fontSize="lg" color={subTextColor} maxW="2xl" lineHeight="relaxed">
              Get hired in just 3 simple steps — it's that easy!
            </Text>
          </MotionVStack>

          {/* Steps Grid */}
          <MotionBox
            as={SimpleGrid}
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 10, md: 16 }}
            w="full"
            position="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Connecting Lines (Desktop Only) */}
            <Box
              display={{ base: 'none', md: 'block' }}
              position="absolute"
              top="60px"
              left="calc(16.67% + 40px)"
              right="calc(16.67% + 40px)"
              h="2px"
              zIndex={0}
            >
              <Box
                w="full"
                h="full"
                bgGradient="linear(to-r, blue.400, green.400, purple.400)"
                borderRadius="full"
                opacity={0.4}
              />
              {/* Arrow indicators */}
              <HStack 
                position="absolute" 
                top="-8px" 
                left="0" 
                right="0" 
                justify="space-around"
              >
                <Icon as={HiArrowRight} color="green.400" boxSize={5} opacity={0.6} />
                <Icon as={HiArrowRight} color="purple.400" boxSize={5} opacity={0.6} />
              </HStack>
            </Box>

            {steps.map((step, index) => (
              <MotionVStack
                key={index}
                spacing={6}
                textAlign="center"
                variants={itemVariants}
                position="relative"
                zIndex={1}
              >
                {/* Animated Icon Circle */}
                <MotionBox
                  variants={floatVariants}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <MotionCircle
                    size={24}
                    bg={step.bgColor}
                    position="relative"
                    border="3px solid"
                    borderColor="white"
                    boxShadow="0 8px 30px rgba(0, 0, 0, 0.12)"
                    variants={pulseVariants}
                    animate="animate"
                    _hover={{
                      transform: 'scale(1.1)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.18)',
                    }}
                    transition="all 0.3s ease"
                    cursor="pointer"
                  >
                    <Icon as={step.icon} boxSize={10} color={step.color} />
                    
                    {/* Step Number Badge */}
                    <Circle
                      size={10}
                      bg={step.color}
                      color="white"
                      fontSize="md"
                      fontWeight="bold"
                      position="absolute"
                      top={-2}
                      right={-2}
                      border="3px solid"
                      borderColor="white"
                      boxShadow="md"
                    >
                      {index + 1}
                    </Circle>
                  </MotionCircle>
                </MotionBox>
                
                {/* Content */}
                <VStack spacing={3}>
                  <Heading
                    size="lg"
                    color={textColor}
                    fontFamily="'Poppins', sans-serif"
                    fontWeight="700"
                  >
                    {step.title}
                  </Heading>
                  <Text 
                    color={subTextColor} 
                    maxW="280px" 
                    lineHeight="tall"
                    fontSize="md"
                  >
                    {step.description}
                  </Text>
                </VStack>
              </MotionVStack>
            ))}
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default HowItWorks;