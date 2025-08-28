import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Vitalsync - 健康管理アプリ | Eguchi Takahiro Portfolio',
  description: '体重・血圧・服薬を簡単に記録・管理できる健康管理アプリ。React Native、Expo、TypeScriptを使用して開発。',
};

export default function VitalsyncPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ナビゲーション */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            ← ポートフォリオに戻る
          </Link>
        </div>
      </nav>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* ヘッダーセクション */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Vitalsync</h1>
          <h2 className="text-2xl text-blue-600 mb-6">健康管理アプリ</h2>

          <p className="text-lg text-gray-600 mb-6">
            体重・血圧・服薬を簡単に記録・管理できる健康管理アプリです。
            データは端末内に安全に保存され、グラフで変化を視覚的に確認できます。
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href="https://apps.apple.com/jp/developer/takahiro-eguchi/id1812546025"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store で見る
            </a>
          </div>

          {/* 技術スタック */}
          <div className="flex flex-wrap gap-2">
            {['React Native', 'Expo', 'TypeScript', 'AsyncStorage', 'React Navigation'].map((tech) => (
              <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* スクリーンショット */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">アプリスクリーンショット</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/vitalsync/weight.png`}
                  alt="体重記録画面"
                  width={300}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-medium text-blue-800 mb-1">体重記録画面</div>
                <div className="text-sm text-blue-600">日々の体重入力とグラフ表示</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/vitalsync/BP.png`}
                  alt="血圧管理画面"
                  width={300}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-medium text-green-800 mb-1">血圧管理画面</div>
                <div className="text-sm text-green-600">血圧・脈拍の記録と推移</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/vitalsync/medicine.png`}
                  alt="服薬記録画面"
                  width={300}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-medium text-purple-800 mb-1">服薬記録画面</div>
                <div className="text-sm text-purple-600">薬の種類と服用時間管理</div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700 text-center">
              📱 <strong>実際のアプリスクリーンショット</strong> - App Storeで公開中の健康管理アプリの画面です
            </p>
          </div>
        </div>

        {/* 主要機能 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">主要機能</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">体重記録</h4>
                <p className="text-gray-600">日々の体重を簡単に記録し、変化をグラフで確認</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">血圧管理</h4>
                <p className="text-gray-600">収縮期・拡張期血圧と脈拍を記録・管理</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">服薬記録</h4>
                <p className="text-gray-600">薬の服用時間と種類を記録してリマインダー機能</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">データ可視化</h4>
                <p className="text-gray-600">グラフとチャートで健康データの傾向を表示</p>
              </div>
            </div>
          </div>
        </div>

        {/* 技術的な特徴 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">技術的な特徴</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">データセキュリティ</h4>
              <p className="text-gray-700">すべての健康データは端末内に保存され、外部に送信されることはありません</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">ユーザビリティ</h4>
              <p className="text-gray-700">直感的なUIデザインで、年齢を問わず使いやすいインターフェース</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">パフォーマンス</h4>
              <p className="text-gray-700">AsyncStorageを使用した高速なデータアクセスと軽量な設計</p>
            </div>
          </div>
        </div>

        {/* 開発期間・規模 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">プロジェクト詳細</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">開発情報</h4>
              <dl className="space-y-2">
                <div className="flex">
                  <dt className="w-24 text-gray-600">開発期間:</dt>
                  <dd className="text-gray-800">2ヶ月</dd>
                </div>
                <div className="flex">
                  <dt className="w-24 text-gray-600">規模:</dt>
                  <dd className="text-gray-800">個人開発</dd>
                </div>
                <div className="flex">
                  <dt className="w-24 text-gray-600">プラットフォーム:</dt>
                  <dd className="text-gray-800">iOS</dd>
                </div>
              </dl>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">担当業務</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">要件定義・企画</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">UI/UXデザイン</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">フロントエンド開発</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">テスト・デバッグ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">App Store申請・公開</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
