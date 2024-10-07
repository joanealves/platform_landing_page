// src/utils/typeGuards.ts

import {
  PageComponent,
  PageComponentButton,
  PageComponentTexto,
  PageComponentImagem,
  PageComponentMenu,
  PageComponentVideo,
} from '../types/types';

export function isPageComponentButton(comp: PageComponent): comp is PageComponentButton {
  return comp.content === 'Botão';
}

export function isPageComponentTexto(comp: PageComponent): comp is PageComponentTexto {
  return comp.content === 'Texto';
}

export function isPageComponentImagem(comp: PageComponent): comp is PageComponentImagem {
  return comp.content === 'Imagem';
}

export function isPageComponentMenu(comp: PageComponent): comp is PageComponentMenu {
  return comp.content === 'Menu';
}

export function isPageComponentVideo(comp: PageComponent): comp is PageComponentVideo {
  return comp.content === 'Vídeo';
}
