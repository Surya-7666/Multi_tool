function SectionWrapper({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}

export default SectionWrapper;
