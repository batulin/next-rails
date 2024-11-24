import api from './index';
import {Author, AuthorWithoutId} from "@/types/author";

type Endpoints = {
  getAuthors: () => Promise<Author[]>,
  getAuthor: (id: number) => Promise<Author>,
  createAuthor: (user: AuthorWithoutId) => Promise<Author>,
  updateAuthor: (user: Author) => Promise<Author>,
  deleteAuthor: (user: Author) => Promise<{message: string}>,
}

const endpoints: Endpoints = {
  getAuthors: async () => {
    return await api('author');
  },

  getAuthor: async (id) => {
    return await api(`author/${id}`);
  },

  createAuthor: async (author) => {
    return await api('author', {
      method: "post",
      data: author,
    });
  },
  updateAuthor: async (author) => {
    return await api(`author/${author.id}`, {
      method: "put",
      data: author,
    });
  },
  deleteAuthor: async (author) => {
    return await api(`author/${author.id}`, {
      method: "delete",
    });
  },
}

export default endpoints;