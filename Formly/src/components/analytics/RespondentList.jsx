import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Spinner } from '@chakra-ui/react';

export const RespondentList = ({ respondents, loading, onRespondentSelect }) => {
  return (
    <Box bg="white" borderRadius="xl" boxShadow="md" p={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Respondents
      </Text>
      
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <Box overflowX="auto">
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Submitted</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {respondents.map(respondent => (
                <Tr key={respondent.id}>
                  <Td>{respondent.id}</Td>
                  <Td>{respondent.name}</Td>
                  <Td>{respondent.email}</Td>
                  <Td>{new Date(respondent.submissionDate).toLocaleString()}</Td>
                  <Td>
                    <Text 
                      color="blue.500" 
                      cursor="pointer"
                      onClick={() => onRespondentSelect(respondent.id)}
                    >
                      View Responses
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};