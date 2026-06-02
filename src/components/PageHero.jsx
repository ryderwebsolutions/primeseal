export default function PageHero({ label, title, summary }) {
  return (
    <section className="relative overflow-hidden bg-mist page-hero-top">
      <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-transparent to-[#ccdef0]/55" />
      <div className="container-shell relative pb-12 sm:pb-14">
        <p className="label-text">{label}</p>
        <h1 className="section-title max-w-[19ch]">{title}</h1>
        <p className="mt-4 max-w-[66ch] text-base leading-relaxed text-navy/72 sm:text-lg">{summary}</p>
      </div>
    </section>
  )
}
