import React from 'react';
import { VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Button } from '@chakra-ui/react';
import { AddIcon, EditIcon, AtSignIcon, ViewIcon, CalendarIcon, InfoIcon, CopyIcon } from '@chakra-ui/icons';
import DraggableItem from './DraggableItem';

const SidebarMenu: React.FC = () => {
  return (
    <VStack spacing={0} align="stretch" bg="#111827" width="250px" height="100%" color="#E5E7EB">
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton py={2} _hover={{ bg: '#1F2937' }}>
            <Box flex="1" textAlign="left">Frame</Box>
          </AccordionButton>
          <AccordionPanel pb={2}>
            <Button variant="ghost" width="100%" justifyContent="flex-start" mb={1}>Configurações</Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start" mb={1}>Visualização</Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start">Tamanhos</Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton py={2} _hover={{ bg: '#1F2937' }}>
            <Box flex="1" textAlign="left">Components</Box>
          </AccordionButton>
          <AccordionPanel pb={2}>
            <DraggableItem id="button" type="button" label="Botão" icon={AddIcon} />
            <DraggableItem id="text" type="text" label="Texto" icon={EditIcon} />
            <DraggableItem id="image" type="image" label="Imagem" icon={AtSignIcon} />
            <DraggableItem id="form" type="form" label="Formulário" icon={ViewIcon} />
            <DraggableItem id="carousel" type="carousel" label="Carrossel" icon={CalendarIcon} />
            <DraggableItem id="map" type="map" label="Mapa" icon={InfoIcon} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton py={2} _hover={{ bg: '#1F2937' }}>
            <Box flex="1" textAlign="left">CRM</Box>
          </AccordionButton>
          <AccordionPanel pb={2}>
            <Button variant="ghost" width="100%" justifyContent="flex-start" mb={1}>Carrinho</Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start" mb={1}>SEO</Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start">Dados</Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton py={2} _hover={{ bg: '#1F2937' }}>
            <Box flex="1" textAlign="left">Code</Box>
          </AccordionButton>
          <AccordionPanel pb={2}>
            <Button variant="ghost" width="100%" justifyContent="flex-start" mb={1}>Exportar</Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start">Importar</Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton py={2} _hover={{ bg: '#1F2937' }}>
            <Box flex="1" textAlign="left">Templates</Box>
          </AccordionButton>
          <AccordionPanel pb={2}>
            <Button variant="ghost" width="100%" justifyContent="flex-start" mb={1}>Gerenciar Templates</Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start">Criar Novo Template</Button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default SidebarMenu;
