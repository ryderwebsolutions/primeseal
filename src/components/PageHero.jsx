export default function PageHero({ label, title, summary }) {
  return (
    <section className="bg-mist pt-32 sm:pt-36">
      <div className="container-shell pb-14 sm:pb-16">
        <p className="label-text">{label}</p>
        <h1 className="section-title max-w-[20ch]">{title}</h1>
        <p className="mt-4 max-w-[70ch] text-base leading-relaxed text-navy/72 sm:text-lg">{summary}</p>
      </div>
    </section>
  )
}
