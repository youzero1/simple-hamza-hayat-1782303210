import type { Todo, TodoFilter } from '@/types/todo';
import TodoItem from '@/components/TodoItem';

type Props = {
  todos: Todo[];
  filter: TodoFilter;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
};

const EMPTY_COPY: Record<TodoFilter, { title: string; hint: string }> = {
  all: {
    title: 'Your list is empty',
    hint: 'Add your first task above to get started.',
  },
  active: {
    title: 'Nothing active',
    hint: 'Every task is done. Treat yourself.',
  },
  completed: {
    title: 'Nothing completed yet',
    hint: 'Check off a task to see it appear here.',
  },
};

export default function TodoList({ todos, filter, onToggle, onEdit, onDelete }: Props) {
  if (todos.length === 0) {
    const copy = EMPTY_COPY[filter];
    return (
      <div className="px-6 py-14 text-center">
        <div className="mx-auto mb-3 size-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
          <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="10" cy="10" r="7" />
            <path d="M7 10.5l2 2 4-4.5" />
          </svg>
        </div>
        <p className="text-sm font-medium text-stone-700">{copy.title}</p>
        <p className="mt-1 text-xs text-stone-400">{copy.hint}</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-stone-100">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
