function ToolCard({ tool, onClick }) {
  const { name, description } = tool;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        h-full
        flex flex-col
        text-left
        rounded-2xl
        border border-purple-500/30
        bg-gradient-to-br from-purple-900/40 to-black/40
        p-4
        transition
        shadow-[0_10px_30px_rgba(0,0,0,0.55)]
        hover:border-purple-400
        hover:-translate-y-1
      "
    >
      {/* Tool name */}
      <h3 className="text-sm md:text-base font-semibold text-white mb-1">
        {name}
      </h3>

      {/* Description (fixed height via line clamp) */}
      <p className="text-xs md:text-sm text-slate-300 line-clamp-2">
        {description}
      </p>

      {/* Spacer to push content evenly */}
      <div className="flex-grow" />
    </button>
  );
}

export default ToolCard;
