import Image from "next/image";

const concerns = [
  {
    title: "中学から英語が大の苦手",
    image: "/struggle-1.jpg",
    points: [
      "英文を見るだけで<span class='highlight'>吐き気が・・・</span>",
      "<span class='highlight'>中学の基礎</span>が分かっていない",
      "<span class='highlight'>単語だけ丸覚え</span>してテストを乗り切っている",
    ],
  },
  {
    title: "何からやるべきか分からない",
    image: "/struggle-2.jpg",
    points: [
      "映像教材や参考書を見ても、<span class='highlight'>できるようになる気がしない</span>",
      "自分だけで考えても、<span class='highlight'>何をやるか迷ってしまう</span>",
      "そもそも英語の学習が<span class='highlight'>習慣化できていない</span>",
    ],
  },
  {
    title: "単語も覚えられない",
    image: "/struggle-3.jpg",
    points: [
      "どうしても<span class='highlight'>単語が頭に入ってこない</span>",
      "ついつい<span class='highlight'>サボってしまいがち</span>",
      "単語の<span class='highlight'>覚え方のルール</span>が分かっていない",
    ],
  },
];

export default function ConcernsSection() {
  return (
    <section className="max-w-4xl mx-auto my-12 px-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        1つでも当てはまるならご注意！<br />
        <span className="text-lg text-gray-700">落ちこぼれ生徒の３つの特徴</span>
      </h2>

      <div className="space-y-8">
        {concerns.map((concern, index) => (
          <ConcernItem key={index} title={concern.title} image={concern.image} points={concern.points} />
        ))}
      </div>
    </section>
  );
}

function ConcernItem({ title, image, points }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] items-center gap-6 bg-white p-4 rounded-lg shadow-md">
      <div className="w-full flex justify-center">
        <Image src={image} alt={title} width={300} height={200} className="rounded-lg" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-bold text-red-700">{title}</h3>
        <ul className="mt-2 space-y-2 text-left text-gray-800">
          {points.map((point, index) => (
            <li key={index} className="leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      </div>
    </div>
  );
}
