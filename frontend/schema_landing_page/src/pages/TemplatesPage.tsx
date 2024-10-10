import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Image, Text, VStack, Button, Spinner, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { templateService, Template } from '../services/templateService';

const TemplatesPage: React.FC = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const data = await templateService.getAllTemplates();
        setTemplates(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching templates:', error);
        toast({
          title: "Error loading templates",
          description: "There was an error loading the templates. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setLoading(false);
      }
    };
    fetchTemplates();
  }, [toast]);

  const handleTemplateSelect = (templateId: number) => {
    navigate(`/edit-template/${templateId}`);
  };

  const handleCreateNewTemplate = () => {
    navigate('/edit-template/new');
  };

  const handleDeleteTemplate = async (templateId: number) => {
    try {
      await templateService.deleteTemplate(templateId);
      setTemplates(templates.filter(t => t.id !== templateId));
      toast({
        title: "Template deleted",
        description: "The template has been successfully deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error deleting template:', error);
      toast({
        title: "Error deleting template",
        description: "There was an error deleting the template. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p={8} bg="gray.50" minHeight="100vh">
      <Text fontSize="3xl" fontWeight="bold" mb={8}>Templates</Text>
      <Button colorScheme="blue" mb={8} onClick={handleCreateNewTemplate}>Create New Template</Button>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {templates.map((template) => (
          <VStack key={template.id} spacing={4} align="stretch" bg="white" borderRadius="md" overflow="hidden" boxShadow="md">
            <Image src={template.previewImage || '/path-to-default-image.jpg'} alt={template.name} height="200px" objectFit="cover" />
            <Box p={4}>
              <Text fontWeight="medium" fontSize="xl" mb={2}>{template.name}</Text>
              <Button onClick={() => handleTemplateSelect(template.id)} colorScheme="blue" mr={2}>
                Edit
              </Button>
              <Button onClick={() => handleDeleteTemplate(template.id)} colorScheme="red">
                Delete
              </Button>
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TemplatesPage;