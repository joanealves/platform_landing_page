interface Component {
  id: string;
  type: string;
  content?: string;
  style?: {
    [key: string]: string | number;
  };
  children?: Component[];
}

interface Template {
  id: number;
  name: string;
  components: Component[];
}

export function generateCode(template: Template, language: string): string {
  switch (language) {
    case 'react':
      return generateReactCode(template);
    case 'vue':
      return generateVueCode(template);
    case 'angular':
      return generateAngularCode(template);
    case 'html':
      return generateHTMLCode(template);
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
}

function generateReactCode(template: Template): string {
  const componentCode = template.components.map(component => generateReactComponent(component)).join('\n');
  return `
import React from 'react';

export const ${template.name.replace(/\s+/g, '')} = () => {
  return (
    <div>
      ${componentCode}
    </div>
  );
};
  `.trim();
}

function generateReactComponent(component: Component): string {
  const style = component.style ? ` style={${JSON.stringify(component.style)}}` : '';
  switch (component.type) {
    case 'text':
      return `<p${style}>${component.content}</p>`;
    case 'image':
      return `<img src="${component.content}" alt=""${style} />`;
    case 'button':
      return `<button${style}>${component.content}</button>`;
    case 'input':
      return `<input type="text" placeholder="${component.content}"${style} />`;
    case 'textarea':
      return `<textarea placeholder="${component.content}"${style}></textarea>`;
    case 'select':
      return `
        <select${style}>
          <option value="">Select an option</option>
          ${component.content?.split(',').map(option => `<option value="${option.trim()}">${option.trim()}</option>`).join('\n')}
        </select>
      `;
    default:
      return `<div${style}>${component.content || ''}</div>`;
  }
}

function generateVueCode(template: Template): string {
  const componentCode = template.components.map(component => generateVueComponent(component)).join('\n');
  return `
<template>
  <div>
    ${componentCode}
  </div>
</template>

<script>
export default {
  name: '${template.name.replace(/\s+/g, '')}',
}
</script>
  `.trim();
}

function generateVueComponent(component: Component): string {
  const style = component.style ? ` :style="${JSON.stringify(component.style)}"` : '';
  switch (component.type) {
    case 'text':
      return `<p${style}>${component.content}</p>`;
    case 'image':
      return `<img :src="${component.content}" alt=""${style} />`;
    case 'button':
      return `<button${style}>${component.content}</button>`;
    default:
      return `<div${style}>${component.content || ''}</div>`;
  }
}

function generateAngularCode(template: Template): string {
  const componentCode = template.components.map(component => generateAngularComponent(component)).join('\n');
  return `
import { Component } from '@angular/core';

@Component({
  selector: 'app-${template.name.toLowerCase().replace(/\s+/g, '-')}',
  template: \`
    <div>
      ${componentCode}
    </div>
  \`,
})
export class ${template.name.replace(/\s+/g, '')}Component { }
  `.trim();
}

function generateAngularComponent(component: Component): string {
  const style = component.style ? ` [ngStyle]="${JSON.stringify(component.style)}"` : '';
  switch (component.type) {
    case 'text':
      return `<p${style}>${component.content}</p>`;
    case 'image':
      return `<img [src]="${component.content}" alt=""${style} />`;
    case 'button':
      return `<button${style}>${component.content}</button>`;
    default:
      return `<div${style}>${component.content || ''}</div>`;
  }
}

function generateHTMLCode(template: Template): string {
  const componentCode = template.components.map(component => generateHTMLComponent(component)).join('\n');
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${template.name}</title>
</head>
<body>
  ${componentCode}
</body>
</html>
  `.trim();
}

function generateHTMLComponent(component: Component): string {
  const style = component.style ? ` style="${Object.entries(component.style).map(([key, value]) => `${key}: ${value}`).join('; ')}"` : '';
  switch (component.type) {
    case 'text':
      return `<p${style}>${component.content}</p>`;
    case 'image':
      return `<img src="${component.content}" alt=""${style} />`;
    case 'button':
      return `<button${style}>${component.content}</button>`;
    default:
      return `<div${style}>${component.content || ''}</div>`;
  }
}