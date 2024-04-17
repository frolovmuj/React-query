import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import TodoService from '../../services/TodoService';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['createTodo'],
    mutationFn: ({ text }: { text: string }) =>
      TodoService.createTodo(text),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });
};
