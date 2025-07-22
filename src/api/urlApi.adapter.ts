import axios, { type AxiosResponse } from 'axios';

export interface HttpAdapter {
  post<T>(url: string, data: any): Promise<T>;
  get<T>(url: string): Promise<T>;
}

// export class UrlApiFetchAdapter implements HttpAdapter {
//   async post<T>(url: string, data: any): Promise<T> {
//     try {
//       const resp = await fetch(url);
//       if (!resp.ok) {
//         throw new Error(`Error fetching data. Status: ${resp.status}`);
//       }
//       const data: T = await resp.json();
//       console.log('con fetch');
//       return data;
//     } catch (error) {
//       console.error('Error in fetch adapter:', error);
//       throw error;
//     }
//   }

// }

export class UrlApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error in Axios adapter:', error);
      throw error;
    }
  }

  async get<T>(url: string): Promise<T> {
    try {
      const { data }: AxiosResponse<T> = await this.axios.get(url);
      return data;
    } catch (error: any) {
      console.error('Error in Axios adapter:', error);
      throw error;
    }
  }
}
