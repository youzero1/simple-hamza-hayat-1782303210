import { useMemo, useState } from 'react';
import { useTodos } from '@/hooks/useTodos';
import type { TodoFilter } from '@/types/todo';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoFilters from '@/components/TodoFilters';

export default function TodoPage() {
  const { todos, addTodo, toggleTodo, editTodo, deleteTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<TodoFilter>('all');

  const filtered = useMemo(() => {
    if (filter === 'active') return todos.filter((t) => !t.completed);
    if (filter === 'completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const activeCount = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);
  const completedCount = todos.length - activeCount;

  return (
    <div className="min-h-screen px-4 py-10 sm:py-16 flex justify-center">
      <div className="w-full max-w-xl">
        <header className="mb-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900">
            Things to do
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            A quiet list. Your tasks stay here even after you refresh.
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-stone-200/70 overflow-hidden">
          <TodoInput onAdd={addTodo} />

          <TodoList
            todos={filtered}
            filter={filter}
            onToggle={toggleTodo}
            onEdit={editTodo}
            onDelete={deleteTodo}
          />

          {todos.length > 0 && (
            <TodoFilters
              filter={filter}
              onFilterChange={setFilter}
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          )}
        </div>

      </div>
    </div>
  );
}
