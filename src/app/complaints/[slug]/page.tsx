import type { Metadata } from "next";
import { complaints } from "@/data/complaints";
import { ComplaintDetail } from "@/components/complaint-detail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const complaint = complaints.find((c) => c.slug === slug);
  const title = complaint?.title ?? "Complaint";

  return {
    title,
    description: `Case complaint: ${title}`,
    openGraph: {
      title: `${title} | CoinBets`,
      description: `Case complaint: ${title}`,
      images: [{ url: "/opengraph.webp", width: 1200, height: 630 }],
    },
  };
}

export default async function ComplaintDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const complaint = complaints.find((c) => c.slug === slug);

  if (!complaint) {
    return (
      <main data-section="main" className="flex-1">
        <div data-name="not-found" className="site-container py-20 text-center">
          <h1 className="text-2xl font-bold">Complaint not found</h1>
          <p className="mt-2 text-neutral-500">
            The complaint you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main data-section="complaint-detail" className="flex-1">
      <ComplaintDetail complaint={complaint} />
    </main>
  );
}
