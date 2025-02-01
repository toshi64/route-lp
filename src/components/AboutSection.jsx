import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-12 px-4 text-center">
      {/* セクションタイトル */}
      <div className="bg-red-700 text-white text-2xl sm:text-3xl font-bold p-4 rounded-md max-w-4xl mx-auto">
        英弱高校生専門オンライン塾
        <br />
        Routeとは？
      </div>

      {/* 画像 */}
      <div className="flex justify-center mt-6">
        <Image
          src="/about-image.jpg"
          alt="勉強する学生"
          width={600}
          height={400}
          className="rounded-md shadow-lg"
        />
      </div>

      {/* 説明文 */}
      <p className="mt-6 text-lg sm:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto text-left">
        高校生の時点で{" "}
        <span className="relative font-bold inline-block">
          英語が壊滅的
          <span className="absolute left-0 bottom-0 w-full h-[8px] bg-yellow-300 -z-10"></span>
        </span>
        な状態になってしまったら、一般的な予備校ではなかなか偏差値が上がらず、
        志望校に合格できません。
        <br />
        <span className="relative font-bold inline-block">
          しかしRouteでは、そんな英弱の高校生の
          <span className="relative font-bold inline-block">
          成績を跳ね上げて
          <span className="absolute left-0 bottom-0 w-full h-[8px] bg-yellow-300 -z-10"></span>
        </span>
          きました。
        </span>
      </p>
    </section>
  );
}
