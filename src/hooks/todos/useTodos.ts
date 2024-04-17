import { useQuery } from '@tanstack/react-query';
import TodoService from '../../services/TodoService';

export const useTodos = (page: number) => {

  return useQuery({
    queryKey: ['todos', page],
    queryFn: () => TodoService.getTodos(page),
  });
};
