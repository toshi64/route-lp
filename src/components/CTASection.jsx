import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-yellow-50 py-12 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* キャッチコピー */}
        <h2 className="text-3xl font-bold text-red-700">
          まずは無料説明会！
        </h2>

        {/* 説明文 */}
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          プロの講師があなたの現状をお聞きし、今後取り組むべき課題を明確にします。<br />
          <span className="highlight">Routeで実際に使用するツールや、学習の流れについて詳しくご説明します。</span><br />
          説明会にご参加いただくことで、<span className="font-bold text-red-700">一週間の無料体験</span>をご受講いただけます。
        </p>

        {/* ✅ 修正: `<a>` を削除して `<Link>` にクラスを直接適用 */}
        <div className="mt-6">
          <Link
            href="/contact"
            className="bg-red-600 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 inline-block"
          >
            無料説明会に申し込む
          </Link>
        </div>

        {/* 安心感を与える補足メッセージ */}
        <p className="text-sm text-gray-600 mt-4">
          ※ 無理な勧誘は一切ありません。お気軽にご参加ください！
        </p>
      </div>
    </section>
  );
}
