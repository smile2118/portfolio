import React from 'react';
import Link from 'next/link';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
        <div className="space-y-12">

          {/* iOS アプリ開発 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">iOS アプリ（個人開発）</h3>
            <p className="text-lg text-gray-600 mb-6">7つのiOSアプリを個人開発し、App Storeでリリース</p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                React Native, Expo, TypeScript などの技術を使用して、
                ユーティリティアプリからエンターテインメントアプリまで幅広いジャンルのアプリを開発・リリースしています。
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-3">
                  App Storeで公開中の全アプリをご覧いただけます
                </p>
                <a
                  href="https://apps.apple.com/jp/developer/takahiro-eguchi/id1812546025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  App Store で見る →
                </a>
              </div>
            </div>

            {/* 個別プロジェクト */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Vitalsync - 健康管理アプリ</h4>
                <p className="text-gray-600 mb-4">
                  体重・血圧・服薬を簡単に記録・管理できる健康管理アプリ。データは端末内に安全に保存され、グラフで変化を視覚的に確認できます。
                </p>
                <div className="flex gap-3">
                  <Link
                    href="/projects/vitalsync"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                  >
                    詳細を見る
                  </Link>
                  <a
                    href="https://apps.apple.com/jp/developer/takahiro-eguchi/id1812546025"
                    className="border border-blue-300 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App Store
                  </a>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">東大和散歩 - 地域散策アプリ</h4>
                <p className="text-gray-600 mb-4">
                  かわいいイラストと一緒に、東大和の魅力を見つけよう！マンホールや公園を巡って、楽しく散策できるアプリです。
                </p>
                <div className="flex gap-3">
                  <Link
                    href="/projects/hyapp"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                  >
                    詳細を見る
                  </Link>
                  <a
                    href="https://apps.apple.com/jp/developer/takahiro-eguchi/id1812546025"
                    className="border border-green-300 text-green-600 px-4 py-2 rounded hover:bg-green-50 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App Store
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Web開発プロジェクト */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Web開発プロジェクト</h3>
            <p className="text-lg text-gray-600 mb-6">実務で担当したWebアプリケーションの主要機能</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">カリキュラム進捗表示システム</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">通知機能の実装</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">表・グラフによるデータ可視化</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">フィルタ・検索機能</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">UI/UXリファクタリング</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
