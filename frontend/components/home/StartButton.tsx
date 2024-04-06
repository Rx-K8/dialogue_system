import Link from "next/link";

export default function StartButton({
  child,
  link,
}: {
  child: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-4 px-8 my-10 rounded"
    >
      {child}
    </Link>
  );
}
