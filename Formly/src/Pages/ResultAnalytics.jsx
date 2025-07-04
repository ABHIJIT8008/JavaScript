import { useState, useEffect } from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import { MainLayout } from '../components/layout/MainLayout';
import { 
  AnalyticsHeader,
  FormSelector,
  QuestionList,
  ResponseCharts,
  DetailedResponsesTable,
  RespondentList
} from '../components/analytics';

const ResultAnalytics = () => {
  const [selectedForm, setSelectedForm] = useState('form1');
  const [selectedQuestion, setSelectedQuestion] = useState('q1');
  const [loading, setLoading] = useState({
    respondents: false,
    responses: false
  });

  // Define formData here
  const formData = {
    form1: {
      id: 'form1',
      name: 'Customer Satisfaction Survey',
      title: 'Customer Satisfaction Survey',
      questions: [
        {
          id: 'q1',
          text: 'How satisfied are you with our service?',
          type: 'radio',
          options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'],
          responses: [
            { option: 'Very Satisfied', count: 12 },
            { option: 'Satisfied', count: 9 },
            { option: 'Neutral', count: 4 },
            { option: 'Unsatisfied', count: 2 },
          ],
          detailedResponses: [
            { respondentId: 1, name: 'John Doe', answer: 'Very Satisfied', date: '2023-05-15T10:30:00Z' },
            { respondentId: 2, name: 'Jane Smith', answer: 'Satisfied', date: '2023-05-14T14:45:00Z' },
            { respondentId: 3, name: 'Robert Johnson', answer: 'Very Satisfied', date: '2023-05-13T09:15:00Z' },
          ]
        },
        {
          id: 'q2',
          text: 'Which features do you use most often?',
          type: 'checkbox',
          options: ['Dashboard', 'Reports', 'Analytics', 'Settings'],
          responses: [
            { option: 'Dashboard', count: 21 },
            { option: 'Reports', count: 18 },
            { option: 'Analytics', count: 15 },
            { option: 'Settings', count: 9 },
          ],
          detailedResponses: [
            { respondentId: 1, name: 'John Doe', answer: ['Dashboard', 'Reports'], date: '2023-05-15T10:30:00Z' },
            { respondentId: 2, name: 'Jane Smith', answer: ['Dashboard', 'Analytics'], date: '2023-05-14T14:45:00Z' },
          ]
        }
      ],
      respondents: [
        { id: 1, name: 'John Doe', email: 'john@example.com', submissionDate: '2023-05-15T10:30:00Z' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', submissionDate: '2023-05-14T14:45:00Z' },
        { id: 3, name: 'Robert Johnson', email: 'robert@example.com', submissionDate: '2023-05-13T09:15:00Z' },
      ]
    },
    form2: {
      id: 'form2',
      name: 'Product Feedback',
      title: 'Product Feedback',
      questions: [
        {
          id: 'q1',
          text: 'How often do you use our product?',
          type: 'radio',
          options: ['Daily', 'Weekly', 'Monthly', 'Rarely'],
          responses: [
            { option: 'Daily', count: 180 },
            { option: 'Weekly', count: 75 },
            { option: 'Monthly', count: 30 },
            { option: 'Rarely', count: 15 }
          ],
          detailedResponses: [
            { respondentId: 4, name: 'Alice Williams', answer: 'Daily', date: '2023-05-12T16:20:00Z' },
            { respondentId: 5, name: 'Michael Brown', answer: 'Weekly', date: '2023-05-11T11:10:00Z' },
          ]
        }
      ],
      respondents: [
        { id: 4, name: 'Alice Williams', email: 'alice@example.com', submissionDate: '2023-05-12T16:20:00Z' },
        { id: 5, name: 'Michael Brown', email: 'michael@example.com', submissionDate: '2023-05-11T11:10:00Z' },
      ]
    }
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const currentForm = formData[selectedForm];
  const currentQuestion = currentForm?.questions.find(q => q.id === selectedQuestion);
  const chartData = currentQuestion?.responses || [];
  const responseData = currentQuestion?.detailedResponses || [];

  useEffect(() => {
    // Simulate loading respondents
    setLoading(prev => ({ ...prev, respondents: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, respondents: false }));
    }, 500);
  }, [selectedForm]);

  useEffect(() => {
    // Simulate loading responses
    if (currentQuestion) {
      setLoading(prev => ({ ...prev, responses: true }));
      setTimeout(() => {
        setLoading(prev => ({ ...prev, responses: false }));
      }, 300);
    }
  }, [selectedQuestion]);

  const handleFormChange = (e) => {
    const formId = e.target.value;
    setSelectedForm(formId);
    setSelectedQuestion(formData[formId].questions[0].id);
  };

  const handleQuestionSelect = (questionId) => {
    setSelectedQuestion(questionId);
  };

  const handleRespondentSelect = (respondentId) => {
    // You could implement detailed respondent view here
    console.log("Selected respondent:", respondentId);
  };

  return (
    <MainLayout>
      <AnalyticsHeader />
      
      <Container maxW="100vw" p={0} m={0}>
        <Flex width="100%" minHeight="calc(100vh - 84px)" px={8} py={6} gap={6}>
          {/* Left Panel */}
          <Box width="400px" bg="white" borderRadius="xl" boxShadow="md" p={6}>
            <FormSelector 
              forms={Object.values(formData)} 
              selectedForm={currentForm}
              onFormChange={handleFormChange}
            />
            
            <QuestionList 
              questions={currentForm?.questions || []}
              selectedQuestion={selectedQuestion}
              onQuestionSelect={handleQuestionSelect}
            />
          </Box>

          {/* Right Panel */}
          <Box flex={1} display="flex" flexDirection="column" gap={6}>
            <ResponseCharts 
              question={currentQuestion}
              chartData={chartData}
              colors={COLORS}
            />
            
            <DetailedResponsesTable 
              responses={responseData}
              loading={loading.responses}
              questionText={currentQuestion?.text}
            />

            <RespondentList
              respondents={currentForm?.respondents || []}
              loading={loading.respondents}
              onRespondentSelect={handleRespondentSelect}
            />
          </Box>
        </Flex>
      </Container>
    </MainLayout>
  );
};

export default ResultAnalytics;