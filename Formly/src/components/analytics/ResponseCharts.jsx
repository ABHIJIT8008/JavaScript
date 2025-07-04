import { Box, Flex, Text } from '@chakra-ui/react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export const ResponseCharts = ({ question, chartData, colors }) => {
  if (!question) {
    return (
      <Box flex={1} display="flex" alignItems="center" justifyContent="center" color="gray.400">
        <Text>Please select a question to view response analytics</Text>
      </Box>
    );
  }

  return (
    <Box bg="white" borderRadius="xl" boxShadow="md" p={6} flex={1}>
      <Text fontSize="xl" fontWeight="bold" mb={4} color="gray.800">
        {question.text}
      </Text>
      
      <Flex gap={6} minHeight="0">
        {/* Bar Chart */}
        <Box flex={1} bg="gray.50" borderRadius="lg" p={4}>
          <Text fontSize="lg" fontWeight="semibold" mb={4}>Response Count</Text>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="option" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Pie Chart */}
        <Box flex={1} bg="gray.50" borderRadius="lg" p={4}>
          <Text fontSize="lg" fontWeight="semibold" mb={4}>Response Distribution</Text>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="count"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </Box>
  );
};