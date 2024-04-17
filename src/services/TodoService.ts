import axios from 'axios';
import { ICreateTodo, ITodo } from '../models/ITodo';

class TodoService {
  private URL =
    'https://jsonplaceholder.typicode.com/todos';

  async getTodos(page: number) {
    console.log(page);
    const { data } = await axios.get<ITodo[]>(
      `${this.URL}/?_page=${page}`
    );

    return data;
  }

  async getTodoById(id: number) {
    const { data } = await axios.get<ITodo[]>(
      `${this.URL}/${id}`
    );
    return data;
  }
  async createTodo(title: string) {
    await axios.post<any, any, ICreateTodo>(this.URL, {
      title,
      completed: false,
      userId: 1,
    });
  }

  async deleteTodo(id: number) {
    await axios.delete(`${this.URL}/${id}`);
  }
}

export default new TodoService();
