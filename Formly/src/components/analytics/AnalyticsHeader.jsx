import { Heading, Box } from '@chakra-ui/react';

export const AnalyticsHeader = () => {
  return (
    <Box 
      bg="linear-gradient( #2563eb 0%, #1e40af 100%)" 
      py={6} 
      px={12} 
      boxShadow="lg"
    >
      <Heading 
        as="h1" 
        size="2xl" 
        color="white" 
        textAlign="center"
        fontFamily="sans-serif"
        letterSpacing="tight"
        fontWeight="semibold"
      >
        Survey Analytics Dashboard
      </Heading>
    </Box>
  );
};