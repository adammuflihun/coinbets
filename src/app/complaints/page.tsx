import { ComplaintsHero } from "@/components/complaints-hero";

export const metadata = {
  title: "Complaints",
  description:
    "Submit your complaint about unfair casino treatment. Our dedicated mediators will review your case and help you reach a resolution.",
};

export default function ComplaintsPage() {
  return (
    <main data-section="main" className="flex-1">
      <ComplaintsHero />
    </main>
  );
}
