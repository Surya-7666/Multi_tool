import { useState } from "react";

export function useToolModal() {
  const [selectedTool, setSelectedTool] = useState(null);

  const openTool = (tool) => setSelectedTool(tool);
  const closeTool = () => setSelectedTool(null);

  return { selectedTool, openTool, closeTool };
}
