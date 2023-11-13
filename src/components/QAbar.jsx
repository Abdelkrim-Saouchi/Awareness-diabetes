import { mdiMinus, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

const QAbar = ({ content }) => {
  const answerRef = useRef(null);
  const [isPlus, setIsPlus] = useState(true);
  const toggleAnswer = () => {
    answerRef.current.classList.toggle("hidden");
    answerRef.current.classList.toggle("scale-y-100");
    setIsPlus((prev) => !prev);
  };
  return (
    <div className="rounded shadow-lg">
      <div className="flex items-center gap-3 rounded border p-2">
        {isPlus && (
          <button onClick={toggleAnswer}>
            <Icon path={mdiPlus} size={1} />
          </button>
        )}
        {!isPlus && (
          <button onClick={toggleAnswer}>
            <Icon path={mdiMinus} size={1} />
          </button>
        )}

        <h3 className="cursor-pointer text-xl font-bold" onClick={toggleAnswer}>
          {content.question}
        </h3>
      </div>
      <p
        ref={answerRef}
        className="hidden scale-y-0 p-3 text-lg font-semibold opacity-80"
      >
        {content.body}
      </p>
    </div>
  );
};

QAbar.propTypes = {
  content: PropTypes.object,
};

export default QAbar;
