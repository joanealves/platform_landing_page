declare module 'react-color' {
    export interface ColorResult {
      hex: string;
      rgb: {
        r: number;
        g: number;
        b: number;
        a?: number;
      };
      hsl: {
        h: number;
        s: number;
        l: number;
        a?: number;
      };
    }
  
    export const SketchPicker: React.ComponentType<{
      color: string | { r: number; g: number; b: number; a?: number };
      onChangeComplete: (color: ColorResult) => void;
    }>;
  }
  