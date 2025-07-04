import { Select, Text, Box } from '@chakra-ui/react';

export const FormSelector = ({ forms, selectedForm, onFormChange }) => {
  return (
    <Box mb={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4} color="gray.800">
        {selectedForm?.title || 'Select Form'}
      </Text>
      <Select 
        value={selectedForm?.id}
        onChange={onFormChange}
        size="md"
        focusBorderColor="blue.500"
      >
        {forms.map(form => (
          <option key={form.id} value={form.id}>
            {form.name}
          </option>
        ))}
      </Select>
    </Box>
  );
};