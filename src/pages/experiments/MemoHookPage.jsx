import { useState } from "react";
import RenderUsers from "../../components/api/RenderUsers";
import ChildPage1 from "./ChildPage1";
import ChildPage2 from "./ChildPage2";

export default function MemoHookPage() {
  const [parent, setParent] = useState(0);
  const [child1, setChild1] = useState(0);
  const [child2, setChild2] = useState(0);

  console.log("Rendering Parent Component - ", parent);
  // useState vs useMemo
  // useState is used for managing local component state
  // useMemo is used for memoizing expensive calculations and preventing unnecessary re-renders

  const updateParent = () => {
    setParent(Math.floor(Math.random() * 100));
  };

  const updateChild1 = () => {
    setChild1(Math.floor(Math.random() * 100));
  };

  const updateChild2 = () => {
    setChild2(Math.floor(Math.random() * 100));
  };

  return (
    <div className={`min-h-screen bg-green-100`}>
      <title>MyApp - UseMemo Experiment</title>
      <div>
        <div className="flex items-center space-x-3 justify-center">
          <h1 className="text-4xl font-semibold text-center p-20">
            UseMemo Concepts
          </h1>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h1>Parent Component - {parent}</h1>
            <button
              type="button"
              onClick={updateParent}
              className="px-2 py-1 rounded border hover:bg-gray-50"
            >
              Update Parent
            </button>
          </div>
          <div className="flex items-center justify-between">
            <ChildPage1 value={child1} />
            <button
              type="button"
              onClick={updateChild1}
              className="px-2 py-1 rounded border hover:bg-gray-50"
            >
              Update Child1
            </button>
          </div>

          <div className="flex items-center justify-between">
            <ChildPage2 value={child2} />
            <button
              type="button"
              onClick={updateChild2}
              className="px-2 py-1 rounded border hover:bg-gray-50"
            >
              Update Child2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
