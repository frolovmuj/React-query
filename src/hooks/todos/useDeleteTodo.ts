import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import TodoService from '../../services/TodoService';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => TodoService.deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries([
        { queryKey: ['todos'] },
      ]),
        alert('Yep');
    },
  });
};
