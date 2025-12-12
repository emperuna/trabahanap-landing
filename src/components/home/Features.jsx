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
  Flex,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  HiLightningBolt, 
  HiUsers, 
  HiShieldCheck,
  HiTrendingUp,
  HiChatAlt,
  HiGlobe
} from 'react-icons/hi';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

const Features = () => {
  const textColor = 'gray.800';
  const subTextColor = 'gray.500';

  const mainFeatures = [
    {
      icon: HiLightningBolt,
      title: 'AI-Powered Job Matching',
      description: 'Our smart algorithm matches you with jobs that perfectly fit your skills and preferences.',
      stats: '95% accuracy',
      color: 'yellow',
      accentColor: 'yellow.500',
      bgColor: 'yellow.50',
    },
    {
      icon: HiUsers,
      title: 'Verified Employers',
      description: 'All companies on our platform are thoroughly vetted for legitimacy and quality.',
      stats: '2,500+ companies',
      color: 'blue',
      accentColor: 'blue.500',
      bgColor: 'blue.50',
    }
  ];

  const additionalFeatures = [
    {
      icon: HiShieldCheck,
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected',
      color: 'blue.500',
      bgColor: 'blue.50'
    },
    {
      icon: HiTrendingUp,
      title: 'Salary Insights', 
      description: 'Real-time salary data and trends',
      color: 'green.500',
      bgColor: 'green.50'
    },
    {
      icon: HiChatAlt,
      title: 'Direct Messaging',
      description: 'Chat directly with recruiters', 
      color: 'purple.500',
      bgColor: 'purple.50'
    },
    {
      icon: HiGlobe,
      title: 'Remote-Friendly',
      description: 'Find remote work opportunities',
      color: 'orange.500',
      bgColor: 'orange.50'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const smallCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <Box py={20} bg="white" position="relative" overflow="hidden">
      {/* Background decorations */}
      <Box
        position="absolute"
        top="10%"
        right="-10%"
        w="400px"
        h="400px"
        bg="blue.50"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.6}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="20%"
        left="-10%"
        w="350px"
        h="350px"
        bg="yellow.50"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.5}
        zIndex={0}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={16}>
          {/* Header Section */}
          <MotionVStack
            spacing={4}
            textAlign="center"
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
              Platform Features
            </Badge>
            <Heading
              as="h2"
              fontFamily="'Poppins', sans-serif"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="800"
              color={textColor}
              letterSpacing="-0.02em"
            >
              Everything You Need to <Text as="span" color="blue.600">Succeed</Text>
            </Heading>
            <Text fontSize="lg" color={subTextColor} maxW="2xl" lineHeight="relaxed">
              Powerful tools and features designed to accelerate your career growth
            </Text>
          </MotionVStack>

          {/* Main Features - Large Cards */}
          <MotionBox
            as={SimpleGrid}
            columns={{ base: 1, lg: 2 }}
            spacing={8}
            w="full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {mainFeatures.map((feature, index) => (
              <MotionBox
                key={index}
                variants={cardVariants}
                bg="white"
                p={8}
                borderRadius="3xl"
                border="1px solid"
                borderColor="gray.100"
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.06)"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)',
                  borderColor: `${feature.color}.200`,
                }}
                position="relative"
                overflow="hidden"
              >
                {/* Background accent */}
                <Box
                  position="absolute"
                  top={-20}
                  right={-20}
                  w="150px"
                  h="150px"
                  bg={feature.bgColor}
                  borderRadius="full"
                  opacity={0.5}
                />

                <VStack spacing={6} align="flex-start" position="relative">
                  <HStack justify="space-between" w="full">
                    <MotionBox
                      variants={floatVariants}
                      animate="animate"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <Box
                        p={4}
                        bg={feature.bgColor}
                        borderRadius="2xl"
                        color={feature.accentColor}
                        boxShadow="0 4px 15px rgba(0, 0, 0, 0.08)"
                      >
                        <Icon as={feature.icon} boxSize={8} />
                      </Box>
                    </MotionBox>
                    <Badge
                      colorScheme={feature.color}
                      variant="solid"
                      borderRadius="full"
                      px={4}
                      py={1.5}
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      {feature.stats}
                    </Badge>
                  </HStack>

                  <VStack spacing={3} align="flex-start">
                    <Heading
                      size="lg"
                      color={textColor}
                      fontFamily="'Poppins', sans-serif"
                      fontWeight="700"
                    >
                      {feature.title}
                    </Heading>
                    <Text color={subTextColor} fontSize="md" lineHeight="tall">
                      {feature.description}
                    </Text>
                  </VStack>

                  {/* Feature highlight line */}
                  <Box
                    w="60px"
                    h="4px"
                    bgGradient={`linear(to-r, ${feature.accentColor}, transparent)`}
                    borderRadius="full"
                  />
                </VStack>
              </MotionBox>
            ))}
          </MotionBox>

          {/* Additional Features - Compact Grid */}
          <Box w="full">
            <VStack spacing={8}>
              <Heading
                size="lg"
                color={textColor}
                textAlign="center"
                fontFamily="'Poppins', sans-serif"
                fontWeight="700"
              >
                Plus More Amazing Features
              </Heading>
              
              <MotionBox
                as={SimpleGrid}
                columns={{ base: 2, md: 4 }}
                spacing={6}
                w="full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {additionalFeatures.map((feature, index) => (
                  <MotionFlex
                    key={index}
                    variants={smallCardVariants}
                    direction="column"
                    align="center"
                    p={6}
                    bg="gray.50"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="gray.100"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-4px)',
                      borderColor: 'blue.200',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                      bg: 'white',
                    }}
                    cursor="pointer"
                  >
                    <MotionBox
                      variants={floatVariants}
                      animate="animate"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <Box
                        p={3}
                        bg={feature.bgColor}
                        borderRadius="xl"
                        mb={4}
                      >
                        <Icon 
                          as={feature.icon} 
                          boxSize={6} 
                          color={feature.color}
                        />
                      </Box>
                    </MotionBox>
                    <VStack spacing={2} textAlign="center">
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color={textColor}
                        fontFamily="'Poppins', sans-serif"
                      >
                        {feature.title}
                      </Text>
                      <Text fontSize="xs" color={subTextColor} textAlign="center">
                        {feature.description}
                      </Text>
                    </VStack>
                  </MotionFlex>
                ))}
              </MotionBox>
            </VStack>
          </Box>

          {/* Bottom Stats Section */}
          <MotionBox
            w="full"
            bg="gray.50"
            borderRadius="3xl"
            p={10}
            textAlign="center"
            position="relative"
            overflow="hidden"
            border="1px solid"
            borderColor="gray.100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background accent */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="500px"
              h="150px"
              bg="blue.50"
              borderRadius="full"
              filter="blur(60px)"
              opacity={0.6}
            />
            
            <VStack spacing={6} position="relative" zIndex={1}>
              <VStack spacing={2}>
                <Heading
                  size="lg"
                  color={textColor}
                  fontFamily="'Poppins', sans-serif"
                  fontWeight="700"
                >
                  Ready to Experience These Features?
                </Heading>
                <Text color={subTextColor} maxW="md">
                  Join thousands of professionals who've already found their dream jobs
                </Text>
              </VStack>
              
              <HStack spacing={{ base: 8, md: 12 }} pt={4}>
                <VStack spacing={1}>
                  <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="800"
                    color="blue.600"
                  >
                    50K+
                  </Text>
                  <Text fontSize="sm" color={subTextColor}>
                    Success Stories
                  </Text>
                </VStack>
                <Box w="1px" h={10} bg="gray.200" />
                <VStack spacing={1}>
                  <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="800"
                    color="blue.600"
                  >
                    98%
                  </Text>
                  <Text fontSize="sm" color={subTextColor}>
                    Satisfaction Rate
                  </Text>
                </VStack>
                <Box w="1px" h={10} bg="gray.200" />
                <VStack spacing={1}>
                  <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="800"
                    color="blue.600"
                  >
                    24/7
                  </Text>
                  <Text fontSize="sm" color={subTextColor}>
                    Support
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Features;