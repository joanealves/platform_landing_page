import axios from 'axios';

const API_URL = 'http://seu-backend-url.com/api'; // Substitua pela URL real do seu backend

export interface Template {
  id: number;
  name: string;
  components: any[]; // Substitua 'any' pelo tipo correto dos seus componentes
}

export const templateService = {
  async getTemplate(id: number): Promise<Template> {
    const response = await axios.get(`${API_URL}/templates/${id}`);
    return response.data;
  },

  async saveTemplate(template: Template): Promise<Template> {
    if (template.id) {
      const response = await axios.put(`${API_URL}/templates/${template.id}`, template);
      return response.data;
    } else {
      const response = await axios.post(`${API_URL}/templates`, template);
      return response.data;
    }
  },

  async getAllTemplates(): Promise<Template[]> {
    const response = await axios.get(`${API_URL}/templates`);
    return response.data;
  },

  async deleteTemplate(id: number): Promise<void> {
    await axios.delete(`${API_URL}/templates/${id}`);
  }
};