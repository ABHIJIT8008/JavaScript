import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Spinner, Badge, Stack } from '@chakra-ui/react';

export const DetailedResponsesTable = ({ responses, loading, questionText }) => {
  const renderAnswer = (answer) => {
    if (Array.isArray(answer)) {
      return (
        <Stack direction="row" spacing={1}>
          {answer.map((item, i) => (
            <Badge key={i} colorScheme="blue">{item}</Badge>
          ))}
        </Stack>
      );
    }
    return answer;
  };

  return (
    <Box bg="white" borderRadius="xl" boxShadow="md" p={6} height="400px">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Detailed Responses for: {questionText || 'Selected Question'}
      </Text>
      
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="300px">
          <Spinner size="xl" />
        </Box>
      ) : (
        <Box height="calc(100% - 40px)" overflowY="auto">
          <Table variant="striped" size="sm">
            <Thead position="sticky" top={0} bg="white">
              <Tr>
                <Th>Respondent ID</Th>
                <Th>Name</Th>
                <Th>Response</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {responses.length > 0 ? (
                responses.map((response, index) => (
                  <Tr key={index}>
                    <Td>{response.respondentId}</Td>
                    <Td>{response.name}</Td>
                    <Td>{renderAnswer(response.answer)}</Td>
                    <Td>{new Date(response.date).toLocaleString()}</Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan={4} textAlign="center" py={8}>
                    No responses found
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};