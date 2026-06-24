import { useState, type FormEvent } from 'react';

type Props = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue('');
  };

  return (
    <form onSubmit={submit} className="p-4 border-b border-stone-100 flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs doing?"
        className="flex-1 h-11 px-4 rounded-xl bg-stone-100 text-stone-900 placeholder:text-stone-400 outline-none focus:bg-white focus:ring-2 focus:ring-stone-900/10 transition"
        autoFocus
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="h-11 px-5 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 active:bg-stone-950 disabled:bg-stone-300 disabled:cursor-not-allowed transition"
      >
        Add
      </button>
    </form>
  );
}
