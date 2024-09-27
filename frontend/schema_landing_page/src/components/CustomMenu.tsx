// src/components/CustomMenu.tsx
import { Box, List, ListItem, Link } from '@chakra-ui/react';

interface MenuProps {
  items: string[];
}

const CustomMenu: React.FC<MenuProps> = ({ items }) => {
  return (
    <Box bg="gray.700" p={4} color="white" borderRadius="md">
      <List>
        {items.map((item, index) => (
          <ListItem key={index} mb={2}>
            <Link href="#" color="teal.200">{item}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CustomMenu;
