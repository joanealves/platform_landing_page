import { Box, Text } from '@chakra-ui/react';
import StatsWidget from '../components/StatsWidget';

const CRMPage = () => {
  return (
    <Box p={6}>
      <Text fontSize="2xl">CRM Dashboard</Text>
      <StatsWidget title="Usuários" value="1,230" />
      <StatsWidget title="Vendas" value="$12,300" />
      <StatsWidget title="Novos Leads" value="120" />
    </Box>
  );
};

export default CRMPage;
