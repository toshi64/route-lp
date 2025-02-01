export default function SuccessSamples() {
    const samples = [
      "英語偏差値38 → 共テ英語R 70%超",
      "コミュ英赤点 → 中央大法学部現役合格",
      "中学から英語が壊滅的 → 実テ 学年1ケタ",
    ];
  
    return (
      <div className="w-full max-w-4xl mx-auto space-y-4">
        {samples.map((sample, index) => (
          <SuccessSample key={index} text={sample} />
        ))}
      </div>
    );
  }
  
  function SuccessSample({ text }) {
    return (
      <div className="bg-red-700 text-white text-lg sm:text-xl font-bold p-4 text-center rounded-md">
        {text}
      </div>
    );
  }
  