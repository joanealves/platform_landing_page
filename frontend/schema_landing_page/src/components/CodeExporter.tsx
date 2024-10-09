import React, { useState, useEffect } from 'react';
import { Box, Button, Select, Textarea, useClipboard } from '@chakra-ui/react';
import { PageComponent } from '../types/types';

interface CodeExporterProps {
  components: PageComponent[];
}

const CodeExporter: React.FC<CodeExporterProps> = ({ components }) => {
  const [framework, setFramework] = useState<'react' | 'vue' | 'angular'>('react');
  const [generatedCode, setGeneratedCode] = useState('');
  const { hasCopied, onCopy } = useClipboard(generatedCode);

  useEffect(() => {
    setGeneratedCode(generateCode());
  }, [framework, components]);

  const generateReactCode = (components: PageComponent[]): string => {
    // Implementação para gerar código React
    return `
import React from 'react';

const LandingPage = () => {
  return (
    <div>
      ${components.map(component => {
        switch (component.type) {
          case 'button':
            return `<button style={{backgroundColor: '${component.settings.color}'}}>${component.settings.text}</button>`;
          case 'text':
            return `<p>${component.settings.text}</p>`;
          // Adicione casos para outros tipos de componentes
          default:
            return '';
        }
      }).join('\n      ')}
    </div>
  );
};

export default LandingPage;
    `;
  };

  const generateVueCode = (components: PageComponent[]): string => {
    // Implementação para gerar código Vue
    return `
<template>
  <div>
    ${components.map(component => {
      switch (component.type) {
        case 'button':
          return `<button :style="{backgroundColor: '${component.settings.color}'}">${component.settings.text}</button>`;
        case 'text':
          return `<p>${component.settings.text}</p>`;
        // Adicione casos para outros tipos de componentes
        default:
          return '';
      }
    }).join('\n    ')}
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>
    `;
  };

  const generateAngularCode = (components: PageComponent[]): string => {
    // Implementação para gerar código Angular
    return `
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: \`
    <div>
      ${components.map(component => {
        switch (component.type) {
          case 'button':
            return `<button [style.backgroundColor]="'${component.settings.color}'">${component.settings.text}</button>`;
          case 'text':
            return `<p>${component.settings.text}</p>`;
          // Adicione casos para outros tipos de componentes
          default:
            return '';
        }
      }).join('\n      ')}
    </div>
  \`
})
export class LandingPageComponent { }
    `;
  };

  const generateCode = () => {
    switch (framework) {
      case 'react':
        return generateReactCode(components);
      case 'vue':
        return generateVueCode(components);
      case 'angular':
        return generateAngularCode(components);
    }
  };

  return (
    <Box>
      <Select value={framework} onChange={(e) => setFramework(e.target.value as 'react' | 'vue' | 'angular')}>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
      </Select>
      <Textarea value={generatedCode} isReadOnly mt={4} height="300px" />
      <Button onClick={onCopy} mt={2}>
        {hasCopied ? 'Copiado!' : 'Copiar código'}
      </Button>
    </Box>
  );
};

export default CodeExporter;