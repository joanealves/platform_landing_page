import { v4 as uuidv4 } from 'uuid';

interface Component {
  id: string;
  type: string;
  content?: string;
  style?: {
    [key: string]: string | number;
  };
  children?: Component[];
}

export function parseHTML(html: string): Component[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return parseNode(doc.body);
}

function parseNode(node: Node): Component[] {
  const components: Component[] = [];

  node.childNodes.forEach((childNode) => {
    if (childNode.nodeType === Node.ELEMENT_NODE) {
      const element = childNode as Element;
      const component: Component = {
        id: uuidv4(),
        type: element.tagName.toLowerCase(),
        style: parseStyle(element),
      };

      if (element.textContent) {
        component.content = element.textContent;
      }

      const children = parseNode(element);
      if (children.length > 0) {
        component.children = children;
      }

      components.push(component);
    }
  });

  return components;
}

function parseStyle(element: Element): { [key: string]: string | number } {
  const style: { [key: string]: string | number } = {};
  const computedStyle = window.getComputedStyle(element);

  // Adicione mais propriedades de estilo conforme necessário
  const properties = ['color', 'background-color', 'font-size', 'font-weight', 'padding', 'margin', 'border'];

  properties.forEach((prop) => {
    const value = computedStyle.getPropertyValue(prop);
    if (value) {
      style[prop] = value;
    }
  });

  return style;
}