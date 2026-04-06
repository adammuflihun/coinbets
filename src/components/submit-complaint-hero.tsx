export function SubmitComplaintHero() {
  return (
    <section data-section="submit-complaint-hero">
      <div
        data-name="submit-complaint-hero-bg"
        className="relative overflow-hidden bg-[#020202] pb-16 pt-12 sm:pt-16 lg:pt-20"
      >
        <div
          data-section="hero-background"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero/background-expert-review.svg')",
          }}
        />
        <div
          data-name="submit-complaint-hero-container"
          className="relative site-container"
        >
          {/* Title & Subtitle */}
          <div
            data-name="submit-complaint-hero-content"
            className="mx-auto flex max-w-[800px] flex-col items-center gap-4 text-center text-white"
          >
            <h1
              data-name="submit-complaint-hero-title"
              className="font-heading text-3xl font-black leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Submit your complaint
            </h1>
            <p
              data-name="submit-complaint-hero-subtitle"
              className="max-w-[620px] text-sm leading-relaxed text-white/80 sm:text-base"
            >
              Please complete the form below with a detailed description of the
              situation, including all essential details. We do not publish
              private information. You may attach supporting evidence
              (screenshots, chat transcripts, etc.) at the bottom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
