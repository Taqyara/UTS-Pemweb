import Link from "next/link";

export default function SectionTitle({ title, href, linkLabel = "Selengkapnya" }) {
  return (
    <div className="mb-4 flex items-center justify-between border-b-2 border-[#0b5a73] pb-2">
      <h2 className="text-lg font-bold uppercase text-[#0b5a73]">{title}</h2>
      {href && (
        <Link href={href} className="text-xs font-bold uppercase text-[#0b5a73] hover:underline">
          {linkLabel} ›
        </Link>
      )}
    </div>
  );
}