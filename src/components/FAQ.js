import FaqAccordion from "./qna.js";

function FAQ() {
  return (
    <div className="p-16 max-h-[552px] bg-[#1A1A1A] flex">
      <div className="w-1/2">
        <p className="font-semibold text-8xl leading-[110%] tracking-[-2%]">
          Frequently{" "}
          <span className="line-through decoration-1 text-gray-400 ">
            Asked
          </span>{" "}
          Forecasted Questions
        </p>
      </div>
      <div className="w-1/2 h-[400px]">
        <FaqAccordion />
      </div>
    </div>
  );
}

export default FAQ;
