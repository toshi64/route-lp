import Image from "next/image";

export default function BreakthroughSection() {
  return (
    <section className="max-w-4xl mx-auto my-12 px-6">
      {/* 見出し部分 */}
      <div className="bg-red-50 p-4 sm:p-6 rounded-md border-l-4 border-red-700 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
          まず第一に英弱高校生の現状を打破します！
        </h2>
      </div>

      {/* 3つの課題 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <div key={index} className="text-center">
            <h3 className="font-bold text-lg">{problem.title}</h3>
            <Image
              src={problem.image}
              alt={problem.title}
              width={300}
              height={200}
              className="rounded-md shadow-md mx-auto mt-2"
            />
          </div>
        ))}
      </div>

      {/* 矢印 */}
      <div className="flex justify-center my-6 text-2xl">⬇</div>

      {/* 成功後の変化 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <div key={index} className="text-center">
            <Image
              src={solution.image}
              alt={solution.title}
              width={300}
              height={200}
              className="rounded-md shadow-md mx-auto"
            />
            <p className="font-bold text-lg mt-2">
              {solution.text.split(" ").map((word, i) =>
                word.startsWith("「") ? (
                  <span key={i} className="highlight">
                    {word}
                  </span>
                ) : (
                  ` ${word}`
                )
              )}
            </p>
          </div>
        ))}
      </div>

      {/* 強調メッセージ */}
      <p className="text-center text-red-700 font-bold text-lg mt-6">
        英語が苦手で大嫌いな生徒が一つ一つ成功体験を積み上げて、
        入塾前と比べて劇的な成果を叩き出しています。
      </p>
    </section>
  );
}

/* データ */
const problems = [
  {
    title: "①英文がチンプンカンプン",
    image: "/problem1.png",
  },
  {
    title: "②単語を覚えられない",
    image: "/problem2.png",
  },
  {
    title: "③何をすべきかわからない",
    image: "/problem3.png",
  },
];

const solutions = [
  {
    image: "/future1.png",
    text: 'とにかく「読める！」ようになる',
  },
  {
    image: "/future2.png",
    text: "最低1冊、単語帳をマスター",
  },
  {
    image: "/future3.png",
    text: "勉強法への迷いがなくなる",
  },
];
