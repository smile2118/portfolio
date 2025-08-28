import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '東大和散歩 - 地域散策アプリ | Eguchi Takahiro Portfolio',
  description: 'かわいいイラストと一緒に、東大和の魅力を見つけよう！マンホールや公園を巡って、楽しく散策できるアプリ。React Native、Expo、Google Maps APIを使用。',
};

export default function HyappPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-800">東大和散歩</h1>
          <h2 className="text-2xl text-green-600 mb-6">地域散策アプリ</h2>
          
          <p className="text-lg text-gray-600 mb-6">
            かわいいイラスト「うまべぇ」と一緒に、東大和の魅力を見つけよう！
            マンホールや公園を巡って、楽しく散策できるアプリです。
          </p>

          <div className="flex gap-4 mb-8">
            <a 
              href="https://apps.apple.com/jp/developer/takahiro-eguchi/id1812546025" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store で見る
            </a>
          </div>

          {/* 技術スタック */}
          <div className="flex flex-wrap gap-2">
            {['React Native', 'Expo', 'TypeScript', 'Google Maps API', 'React Navigation', 'AsyncStorage'].map((tech) => (
              <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
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
                  src="/portfolio/images/hyapp/map.png"
                  alt="マップ画面"
                  width={300}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-medium text-green-800 mb-1">マップ画面</div>
                <div className="text-sm text-green-600">現在地とスポット表示</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/portfolio/images/hyapp/stamp.png"
                  alt="スタンプ画面"
                  width={300}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-medium text-blue-800 mb-1">スタンプ画面</div>
                <div className="text-sm text-blue-600">うまべぇスタンプコレクション</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/portfolio/images/hyapp/gallery.png"
                  alt="ギャラリー画面"
                  width={300}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-medium text-purple-800 mb-1">ギャラリー画面</div>
                <div className="text-sm text-purple-600">撮影した写真と記録</div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700 text-center">
              📱 <strong>実際のアプリスクリーンショット</strong> - App Storeで公開中の東大和散歩アプリの画面です
            </p>
          </div>
        </div>

        {/* 主要機能 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">主要機能</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">マンホール探し</h4>
                <p className="text-gray-600">東大和市内の特色あるマンホールを見つけてスタンプ獲得</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">公園めぐり</h4>
                <p className="text-gray-600">地域の公園情報を確認し、写真投稿で思い出を残す</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">うまべぇスタンプ</h4>
                <p className="text-gray-600">かわいいマスコットキャラクターのスタンプコレクション</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">マップ機能</h4>
                <p className="text-gray-600">Google Mapsを活用した現在地表示とナビゲーション</p>
              </div>
            </div>
          </div>
        </div>

        {/* アプリの特色 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">アプリの特色</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">地域密着型コンテンツ</h4>
              <p className="text-gray-700">東大和市の地域性を活かし、実在するマンホールや公園を巡る楽しさを提供</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">位置情報活用</h4>
              <p className="text-gray-700">GPS機能を使用して実際の場所でスタンプ獲得、リアルな散策体験を演出</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">キャラクターデザイン</h4>
              <p className="text-gray-700">オリジナルキャラクター「うまべぇ」が散策をナビゲート</p>
            </div>
          </div>
        </div>

        {/* 技術的な実装 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">技術的な実装</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">マップ機能</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">Google Maps API統合</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">現在地追跡</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">カスタムマーカー表示</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">データ管理</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">スタンプ収集状況の永続化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">写真データのローカル保存</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">進捗データの管理</span>
                </li>
              </ul>
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
                  <dd className="text-gray-800">3ヶ月</dd>
                </div>
                <div className="flex">
                  <dt className="w-24 text-gray-600">規模:</dt>
                  <dd className="text-gray-800">個人開発</dd>
                </div>
                <div className="flex">
                  <dt className="w-24 text-gray-600">プラットフォーム:</dt>
                  <dd className="text-gray-800">iOS / Android</dd>
                </div>
              </dl>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">担当業務</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">企画・コンセプト設計</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">UI/UXデザイン</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">フロントエンド開発</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">マップAPI統合</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
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