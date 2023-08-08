'use client';

type TodoItemProps = {
  id: string;
  title: string;
  isComplete: boolean;
  toggleTodo: (id: string, isComplete: boolean) => void;
};

export default function TodoItem({
  id,
  title,
  isComplete,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        type="checkbox"
        id={id}
        defaultChecked={isComplete}
        className="cursor-pointer peer"
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
