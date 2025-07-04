import { VStack, Box, HStack, Text, Radio } from '@chakra-ui/react';

export const QuestionList = ({ 
  questions, 
  selectedQuestion, 
  onQuestionSelect 
}) => {
  return (
    <VStack align="stretch" spacing={3} overflowY="auto" flex={1}>
      {questions.map((question) => (
        <Box
          key={question.id}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          bg={selectedQuestion === question.id ? 'blue.50' : 'white'}
          borderColor={selectedQuestion === question.id ? 'blue.200' : 'gray.200'}
          cursor="pointer"
          _hover={{
            borderColor: 'blue.300',
            boxShadow: 'sm'
          }}
          onClick={() => onQuestionSelect(question.id)}
        >
          <HStack justify="space-between" align="center">
            <Text fontWeight="medium" color={selectedQuestion === question.id ? 'blue.700' : 'gray.700'}>
              {question.text}
            </Text>
            <Radio 
              isChecked={selectedQuestion === question.id} 
              colorScheme="blue"
            />
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};