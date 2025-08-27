import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-blue-800">Webアプリ開発（実務経験）</h3>
            <p className="text-blue-600 font-medium mb-6">1年3ヶ月</p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                開発・テスト・運用保守・進捗管理まで担当
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                フルリモートでの開発経験あり
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                チーム規模：PM1名 / PG4〜5名
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                React + TypeScript を中心としたフロントエンド開発
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                UI/UX改修、API連携、データ可視化コンポーネントの実装
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;