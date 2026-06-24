import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import type { Todo } from '@/types/todo';

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onEdit, onDelete }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  const startEdit = () => {
    if (todo.completed) return;
    setDraft(todo.text);
    setEditing(true);
  };

  const commit = () => {
    setEditing(false);
    if (draft.trim() !== todo.text) {
      onEdit(todo.id, draft);
    }
  };

  const cancel = () => {
    setDraft(todo.text);
    setEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cancel();
    }
  };

  return (
    <li className="group flex items-center gap-3 px-5 py-3 hover:bg-stone-50/70 transition-colors">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="peer sr-only"
        />
        <span
          className="size-5 rounded-full border-2 border-stone-300 flex items-center justify-center transition-colors peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-focus-visible:ring-2 peer-focus-visible:ring-stone-900/20"
          aria-hidden
        >
          <svg
            viewBox="0 0 16 16"
            className={
              'size-3 text-white transition-opacity ' +
              (todo.completed ? 'opacity-100' : 'opacity-0')
            }
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 8.5 6.5 12 13 4.5" />
          </svg>
        </span>
      </label>

      {editing ? (
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={onKeyDown}
          className="flex-1 h-9 px-3 rounded-lg bg-white ring-1 ring-stone-300 outline-none focus:ring-2 focus:ring-stone-900/20 text-stone-900"
        />
      ) : (
        <button
          type="button"
          onDoubleClick={startEdit}
          onClick={() => onToggle(todo.id)}
          className={
            'flex-1 text-left text-[15px] transition-colors break-words ' +
            (todo.completed
              ? 'line-through text-stone-400'
              : 'text-stone-800 hover:text-stone-900')
          }
        >
          {todo.text}
        </button>
      )}

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
        {!editing && !todo.completed && (
          <button
            type="button"
            onClick={startEdit}
            aria-label="Edit task"
            className="p-1.5 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
          >
            <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 3.5a2.121 2.121 0 1 1 3 3L8 16 4 17l1-4 9.5-9.5z" />
            </svg>
          </button>
        )}
        <button
          type="button"
          onClick={() => onDelete(todo.id)}
          aria-label="Delete task"
          className="p-1.5 rounded-md text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition"
        >
          <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 5h14M8 5V3.5A1.5 1.5 0 0 1 9.5 2h1A1.5 1.5 0 0 1 12 3.5V5m-6 0v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5" />
          </svg>
        </button>
      </div>
    </li>
  );
}
