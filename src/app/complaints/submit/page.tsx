import { SubmitComplaintWizard } from "@/components/submit-complaint-wizard";

export const metadata = {
  title: "Submit a Complaint",
  description:
    "Submit your complaint about unfair casino treatment. Provide details and evidence so our team can review your case.",
};

export default function SubmitComplaintPage() {
  return (
    <main data-section="main" className="flex-1">
      <SubmitComplaintWizard />
    </main>
  );
}
