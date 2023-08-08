type TodoItemProps = {
  id: string;
  title: string;
  isComplete: boolean;
};

export default function TodoItem({ id, title, isComplete }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input type="checkbox" id={id} className="cursor-pointer peer" />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
