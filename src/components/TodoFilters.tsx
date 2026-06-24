import type { TodoFilter } from '@/types/todo';

type Props = {
  filter: TodoFilter;
  onFilterChange: (f: TodoFilter) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
};

const FILTERS: { value: TodoFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export default function TodoFilters({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: Props) {
  return (
    <div className="px-4 py-3 border-t border-stone-100 flex items-center gap-3 text-xs">
      <span className="text-stone-500 min-w-[5.5rem]">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex-1 flex justify-center gap-1">
        {FILTERS.map((f) => {
          const isActive = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => onFilterChange(f.value)}
              className={
                'px-3 py-1.5 rounded-lg font-medium transition-colors ' +
                (isActive
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100')
              }
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="min-w-[5.5rem] flex justify-end">
        {completedCount > 0 ? (
          <button
            type="button"
            onClick={onClearCompleted}
            className="text-stone-500 hover:text-rose-600 transition-colors"
          >
            Clear completed
          </button>
        ) : (
          <span aria-hidden className="opacity-0 select-none">Clear completed</span>
        )}
      </div>
    </div>
  );
}
