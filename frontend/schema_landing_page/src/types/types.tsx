export interface PageComponentBase {
  id: string;
  content: string;
}

export interface PageComponentButton extends PageComponentBase {
  content: 'Botão';
  settings: { text: string; color: string };
}

export interface PageComponentTexto extends PageComponentBase {
  content: 'Texto';
  settings: { text: string };
}

export interface PageComponentImagem extends PageComponentBase {
  content: 'Imagem';
  settings: { src: string };
}

export interface PageComponentMapa extends PageComponentBase {
  content: 'Mapa';
}

export interface PageComponentMenu extends PageComponentBase {
  content: 'Menu';
  settings: { links: string[] };
}

export interface PageComponentVideo extends PageComponentBase {
  content: 'Vídeo';
  settings: { url: string };
}

// Define a interface para os componentes arrastáveis
export interface PageComponent {
  id: string;
  content: string;
  settings?: {
    [key: string]: string | number | boolean;
  };
}


export type PageComponent =
  | PageComponentButton
  | PageComponentTexto
  | PageComponentImagem
  | PageComponentMapa
  | PageComponentMenu
  | PageComponentVideo;
