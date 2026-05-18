import { DashboardNav } from "@/components/DashboardNav";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <DashboardNav />
      <div className="mt-8">{children}</div>
    </div>
  );
}
