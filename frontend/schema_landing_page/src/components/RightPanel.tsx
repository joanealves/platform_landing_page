import React from 'react';
import { Box, VStack, Text, Input, Select, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';

const RightPanel: React.FC = () => {
  return (
    <Box width="250px" bg="#1F2937" p={4} color="#E5E7EB">
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Text fontWeight="bold">Layout</Text>
          </AccordionButton>
          <AccordionPanel>
            <Select placeholder="Selecione o layout" bg="#374151">
              <option value="flexbox">Flexbox</option>
              <option value="grid">Grid</option>
            </Select>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Text fontWeight="bold">Posição</Text>
          </AccordionButton>
          <AccordionPanel>
            <Input placeholder="X" mb={2} bg="#374151" />
            <Input placeholder="Y" bg="#374151" />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Text fontWeight="bold">Tamanho</Text>
          </AccordionButton>
          <AccordionPanel>
            <Input placeholder="Largura" mb={2} bg="#374151" />
            <Input placeholder="Altura" bg="#374151" />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Text fontWeight="bold">Espaçamento</Text>
          </AccordionButton>
          <AccordionPanel>
            <Input placeholder="Margem" mb={2} bg="#374151" />
            <Input placeholder="Padding" bg="#374151" />
          </AccordionPanel>
        </AccordionItem>
                
      </Accordion>
    </Box>
  );
};

export default RightPanel;
