type Props = {
  content: string;
  value: string;
  handleClick: (value: string) => void;
};

export default function Filter({ content, value, handleClick }: Props) {
  return (
    <button className="bg-red-500 px-4 py-2 font-bold text-neutral-100 2xl shadow-lg" onClick={() => handleClick(value)}>
      {content}
    </button>
  );
}
