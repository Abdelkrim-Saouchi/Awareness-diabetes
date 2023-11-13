import { useRef, useState } from "react";

const IMCCalculator = () => {
  const weightRef = useRef(null);
  const heightRef = useRef(null);
  const [result, setResult] = useState(0);

  const calculateIMC = () => {
    const weight = Number(weightRef.current.value);
    const height = Number(heightRef.current.value);
    if (isNaN(weight) || isNaN(height) || height === 0) return;
    const imc = weight / (height * height);
    setResult(imc);
  };

  let comment = "";

  if (result < 18.4) comment = "أنت لديك نحافة";
  if (result > 18.5 && result < 24.9) comment = "أنت لديك وزن مثالي";
  if (result > 25 && result < 29.9) comment = "أنت لديك وزن زائد";
  if (result > 30 && result < 34.9) comment = "أنت لديك سمنة متوسطة";
  if (result > 35 && result < 39.9) comment = "أنت لديك سمنة مفرطة";
  if (result > 40) comment = "أنت لديك سمنة خطيرة";
  return (
    <div className="my-3 flex flex-col items-center gap-3 border p-4 shadow">
      <div className="flex flex-wrap items-center gap-4">
        <label htmlFor="weight">
          وزنك
          <input
            type="number"
            id="weight"
            ref={weightRef}
            placeholder="0"
            className="mx-2 p-1 ring-4 ring-gray-200"
          />
        </label>
        <label htmlFor="height">
          طولك
          <input
            type="number"
            min={1}
            id="height"
            ref={heightRef}
            placeholder="0"
            className="mx-2 p-1 ring-4 ring-gray-200"
          />
        </label>
      </div>
      <button
        onClick={calculateIMC}
        className="rounded bg-black px-4 py-2 text-white hover:bg-white hover:text-black hover:outline hover:outline-black"
      >
        أحسب
      </button>
      <div className="mt-3">
        {result > 0 && <p>مؤشرك هو: {result.toFixed(1)}</p>}
        {result > 0 && <p className="text-red-700">{comment}</p>}
      </div>
    </div>
  );
};

export default IMCCalculator;
