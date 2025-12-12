import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Icon,
  Flex,
  Badge,
  Circle,
  useToast,
} from "@chakra-ui/react";
import { motion } from 'framer-motion';
import {
  HiMail,
  HiShieldCheck,
  HiLightningBolt,
  HiUserGroup,
  HiTrendingUp,
  HiBell,
  HiStar,
  HiCheckCircle,
} from "react-icons/hi";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const textColor = 'gray.800';
  const subTextColor = 'gray.500';

  const handleSubscribe = async () => {
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive job alerts and career tips.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 1000);
  };

  const benefits = [
    {
      icon: HiShieldCheck,
      title: "Verified Companies",
      description: "All employers are pre-screened and verified for your safety",
      color: "blue.500",
      bgColor: "blue.50",
    },
    {
      icon: HiLightningBolt,
      title: "Instant Matching",
      description: "AI-powered job matching finds opportunities that fit your skills",
      color: "yellow.500",
      bgColor: "yellow.50",
    },
    {
      icon: HiUserGroup,
      title: "Career Support",
      description: "Get guidance from our team of career development experts",
      color: "green.500",
      bgColor: "green.50",
    },
    {
      icon: HiTrendingUp,
      title: "Salary Insights",
      description: "Access real salary data to negotiate better compensation",
      color: "purple.500",
      bgColor: "purple.50",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-4, 4, -4],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <Box
      py={20}
      bg="gray.50"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorations - matching Hero style */}
      <Box
        position="absolute"
        top="10%"
        right="10%"
        w="400px"
        h="400px"
        bg="blue.100"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.4}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="300px"
        h="300px"
        bg="purple.100"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.3}
        zIndex={0}
      />

      {/* Floating decorative icons - similar to Hero orbiting */}
      <MotionBox
        position="absolute"
        top="15%"
        left="8%"
        variants={floatVariants}
        animate="animate"
        display={{ base: 'none', lg: 'block' }}
      >
        <Circle size={12} bg="blue.50" opacity={0.8}>
          <Icon as={HiStar} boxSize={5} color="blue.400" />
        </Circle>
      </MotionBox>
      <MotionBox
        position="absolute"
        bottom="20%"
        right="8%"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        display={{ base: 'none', lg: 'block' }}
      >
        <Circle size={10} bg="green.50" opacity={0.8}>
          <Icon as={HiCheckCircle} boxSize={4} color="green.400" />
        </Circle>
      </MotionBox>

      <Container maxW="7xl" position="relative" zIndex={1}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={16}
          alignItems="center"
        >
          {/* Left Side - Newsletter */}
          <MotionVStack
            spacing={8}
            align="flex-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={4} align="flex-start">
              <Badge
                bg="blue.600"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="semibold"
              >
                <Icon as={HiBell} mr={2} />
                Stay Updated
              </Badge>

              <Heading
                as="h2"
                fontFamily="'Poppins', sans-serif"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
                color={textColor}
                letterSpacing="-0.02em"
                lineHeight="1.1"
              >
                Get Your Dream Job{' '}
                <Text as="span" color="blue.600">Delivered</Text>
              </Heading>

              <Text
                fontSize="lg"
                color={subTextColor}
                lineHeight="relaxed"
                maxW="lg"
              >
                Join 50,000+ professionals receiving personalized job alerts,
                salary insights, and career tips directly in their inbox.
              </Text>
            </VStack>

            {/* Newsletter Signup */}
            <VStack spacing={4} w="full" maxW="450px">
              <InputGroup size="lg">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  bg="white"
                  border="2px solid"
                  borderColor="gray.200"
                  borderRadius="xl"
                  h={14}
                  color={textColor}
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    borderColor: "blue.500",
                    boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.15)",
                  }}
                  _hover={{
                    borderColor: "gray.300",
                  }}
                />
                <InputRightElement width="auto" pr={2} h={14}>
                  <Button
                    size="md"
                    bg="blue.600"
                    color="white"
                    fontWeight="600"
                    borderRadius="lg"
                    px={6}
                    h={10}
                    isLoading={isLoading}
                    onClick={handleSubscribe}
                    _hover={{
                      bg: "blue.700",
                      transform: "translateY(-1px)",
                    }}
                    transition="all 0.2s"
                  >
                    Subscribe
                  </Button>
                </InputRightElement>
              </InputGroup>

              <HStack spacing={4} fontSize="sm" color={subTextColor}>
                <HStack>
                  <Icon as={HiMail} color="blue.500" />
                  <Text>Weekly job alerts</Text>
                </HStack>
                <Text>•</Text>
                <Text>No spam, unsubscribe anytime</Text>
              </HStack>
            </VStack>

            {/* Social Proof */}
            <HStack
              spacing={{ base: 6, md: 10 }}
              pt={6}
              borderTop="1px solid"
              borderColor="gray.200"
              w="full"
            >
              <VStack spacing={1} align="flex-start">
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="800" color={textColor}>
                  98%
                </Text>
                <Text fontSize="sm" color={subTextColor}>
                  Open rate
                </Text>
              </VStack>

              <Box w="1px" h={10} bg="gray.200" />

              <VStack spacing={1} align="flex-start">
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="800" color={textColor}>
                  50K+
                </Text>
                <Text fontSize="sm" color={subTextColor}>
                  Subscribers
                </Text>
              </VStack>

              <Box w="1px" h={10} bg="gray.200" />

              <VStack spacing={1} align="flex-start">
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="800" color={textColor}>
                  4.9★
                </Text>
                <Text fontSize="sm" color={subTextColor}>
                  User rating
                </Text>
              </VStack>
            </HStack>
          </MotionVStack>

          {/* Right Side - Platform Benefits */}
          <VStack spacing={6} align="flex-start">
            <MotionVStack
              spacing={2}
              align="flex-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                size="lg"
                fontWeight="700"
                color={textColor}
                fontFamily="'Poppins', sans-serif"
              >
                Why Choose TrabaHanap?
              </Heading>
              <Text color={subTextColor}>
                The most trusted job platform in the Philippines
              </Text>
            </MotionVStack>

            <MotionBox
              as={VStack}
              spacing={4}
              w="full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {benefits.map((benefit, index) => (
                <MotionFlex
                  key={index}
                  variants={cardVariants}
                  gap={4}
                  p={5}
                  bg="white"
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="gray.100"
                  w="full"
                  transition="all 0.3s ease"
                  boxShadow="0 2px 12px rgba(0, 0, 0, 0.04)"
                  _hover={{
                    transform: "translateY(-4px)",
                    borderColor: "blue.200",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
                  }}
                  cursor="pointer"
                >
                  <MotionBox
                    variants={floatVariants}
                    animate="animate"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Box
                      p={3}
                      bg={benefit.bgColor}
                      borderRadius="xl"
                      color={benefit.color}
                      flexShrink={0}
                    >
                      <Icon as={benefit.icon} boxSize={6} />
                    </Box>
                  </MotionBox>
                  <VStack spacing={1} align="flex-start" flex={1}>
                    <Text
                      fontSize="md"
                      fontWeight="semibold"
                      color={textColor}
                      fontFamily="'Poppins', sans-serif"
                    >
                      {benefit.title}
                    </Text>
                    <Text
                      fontSize="sm"
                      color={subTextColor}
                      lineHeight="relaxed"
                    >
                      {benefit.description}
                    </Text>
                  </VStack>
                </MotionFlex>
              ))}
            </MotionBox>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CTA;