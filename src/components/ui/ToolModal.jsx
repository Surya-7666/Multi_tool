function ToolModal({ tool, onClose }) {
  const ToolComponent = tool.component;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-3">
      {/* outer shell */}
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-purple-500 bg-[#080017] shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* inner dashed container */}
          <div
            className="m-2 rounded-2xl bg-[#120427] px-4 py-3 sm:px-5 sm:py-4"
            style={{ border: "1px dashed rgba(168,85,247,0.6)" }}
          >
            {/* header */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm sm:text-base font-semibold text-purple-300">
                {tool.name}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-xs sm:text-sm text-slate-400 hover:text-slate-100"
              >
                ✕
              </button>
            </div>

            {/* description (optional) */}
            {tool.description && (
              <p className="mb-3 text-[0.7rem] sm:text-xs text-slate-400 leading-relaxed">
                {tool.description}
              </p>
            )}

            {/* tool content */}
            <div className="mt-2 max-h-[60vh] overflow-y-auto pr-1 text-slate-100 text-sm">
              <ToolComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolModal;
