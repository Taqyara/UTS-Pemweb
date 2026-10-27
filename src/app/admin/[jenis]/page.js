import { notFound } from "next/navigation";
import AdminCrud from "@/components/AdminCrud";
import { adminConfig } from "@/data/adminConfig";

export function generateStaticParams() {
  return Object.keys(adminConfig).map((jenis) => ({ jenis }));
}

export default async function AdminJenisPage({ params }) {
  const { jenis } = await params;

  if (!adminConfig[jenis]) notFound();

  return <AdminCrud key={jenis} jenis={jenis} />;
}