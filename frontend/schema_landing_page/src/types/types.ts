// src/types/types.ts

import { ReactNode } from 'react';

export interface Position {
  x: number;
  y: number;
}

export interface BasePageComponent {
  id: string;
  type: string;
  position: Position;
  size: {
    width: number;
    height: number;
  };
  zIndex: number;
}

export interface PageComponentButton extends BasePageComponent {
  type: 'button';
  settings: {
    text: string;
    color: string;
  };
}

export interface PageComponentTexto extends BasePageComponent {
  type: 'text';
  settings: {
    text: string;
  };
}

export interface PageComponentImagem extends BasePageComponent {
  type: 'image';
  settings: {
    src: string;
  };
}

export interface PageComponentMenu extends BasePageComponent {
  type: 'menu';
  settings: {
    links: string[];
  };
}

export interface PageComponentVideo extends BasePageComponent {
  type: 'video';
  settings: {
    url: string;
  };
}

export interface PageComponentForm extends BasePageComponent {
  type: 'form';
  settings: {
    fields: Array<{
      type: 'text' | 'email' | 'number' | 'checkbox';
      label: string;
      required: boolean;
    }>;
    submitButtonText: string;
  };
}

export interface PageComponentCarousel extends BasePageComponent {
  type: 'carousel';
  settings: {
    images: string[];
    autoPlay: boolean;
    interval: number;
  };
}

export interface PageComponentMap extends BasePageComponent {
  type: 'map';
  settings: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type PageComponent = 
  PageComponentButton | 
  PageComponentTexto | 
  PageComponentImagem | 
  PageComponentMenu | 
  PageComponentVideo |
  PageComponentForm |
  PageComponentCarousel |
  PageComponentMap;

export interface PageComponent {
  id: string;
  type: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  content: ReactNode;
}
