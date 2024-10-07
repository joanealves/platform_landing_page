// src/types/types.ts

export interface PageComponentButton {
  id: string;
  content: 'Botão';
  settings: {
    text: string;
    color: string;
  };
}

export interface PageComponentTexto {
  id: string;
  content: 'Texto';
  settings: {
    text: string;
  };
}

export interface PageComponentImagem {
  id: string;
  content: 'Imagem';
  settings: {
    src: string;
  };
}

export interface PageComponentMenu {
  id: string;
  content: 'Menu';
  settings: {
    links: string[];
  };
}

export interface PageComponentVideo {
  id: string;
  content: 'Vídeo';
  settings: {
    url: string;
  };
}

export type PageComponent =
  | PageComponentButton
  | PageComponentTexto
  | PageComponentImagem
  | PageComponentMenu
  | PageComponentVideo;
