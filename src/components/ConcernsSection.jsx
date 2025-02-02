import Image from "next/image";

const concerns = [
  {
    title: "中学から英語が大の苦手",
    image: "/struggle-1.png",
    points: [
      "<span class='highlight'>英文を見るだけで吐き気が・・・</span>",
      "<span class='highlight'>中学の基礎</span>が分かっていない",
      "<span class='highlight'>単語だけ丸覚え</span>してテストを乗り切っている",
    ],
  },
  {
    title: "何からやるべきか分からない",
    image: "/struggle-2.png",
    points: [
      "映像教材や参考書を見ても、<span class='highlight'>できるようになる気がしない</span>",
      "自分だけで考えても、<span class='highlight'>何をやるか迷ってしまう</span>",
      "そもそも英語の学習が<span class='highlight'>習慣化できていない</span>",
    ],
  },
  {
    title: "単語も覚えられない",
    image: "/struggle-3.png",
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
      {/* 見出し部分 */}
      <div className="bg-red-50 p-4 sm:p-6 rounded-md border-l-4 border-red-700">
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
          1つでも当てはまるならご注意！
        <p>
          落ちこぼれ生徒の３つの特徴
        </p>
        </h2>
      </div>

      {/* 各コンテンツ */}
      <div className="space-y-8 mt-6">
        {concerns.map((concern, index) => (
          <ConcernItem key={index} title={concern.title} image={concern.image} points={concern.points} />
        ))}
      </div>

      <p className="mt-6 text-lg sm:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto text-left">
        上記の<span class='highlight'>英弱高校生</span>ならおまかせください！ <span class='highlight'>英語の偏差値を跳ね上げて</span>、志望校への合格を果たします。
      </p>
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
