// DraggableItem.tsx
import React from 'react';
import {
  PageComponent,
  PageComponentButton,
  PageComponentTexto,
  PageComponentImagem,
  PageComponentMenu,
  PageComponentVideo,
} from '../types/types';

interface DraggableItemProps {
  id: string;
  content: PageComponent['content'];
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, content }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    let component: PageComponent;

    switch (content) {
      case 'Botão':
        component = {
          id,
          content,
          settings: { text: 'Clique Aqui', color: '#0000FF' },
        } as PageComponentButton;
        break;
      case 'Texto':
        component = {
          id,
          content,
          settings: { text: 'Texto Padrão' },
        } as PageComponentTexto;
        break;
      case 'Imagem':
        component = {
          id,
          content,
          settings: { src: 'https://via.placeholder.com/150' },
        } as PageComponentImagem;
        break;
      case 'Menu':
        component = {
          id,
          content,
          settings: { links: ['Home', 'Sobre', 'Contato'] },
        } as PageComponentMenu;
        break;
      case 'Vídeo':
        component = {
          id,
          content,
          settings: { url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        } as PageComponentVideo;
        break;
      default:
        component = {
          id,
          content,
          settings: {},
        } as PageComponent;
    }

    event.dataTransfer.setData('application/json', JSON.stringify(component));
  };

  return (
    <div draggable onDragStart={handleDragStart}>
      {content}
    </div>
  );
};

export default DraggableItem;
