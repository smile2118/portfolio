import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "言語・マークアップ",
      skills: [
        "TypeScript（1年6ヶ月）",
        "JavaScript（2年）",
        "HTML / CSS（2年）"
      ]
    },
    {
      title: "フロントエンド技術",
      skills: [
        "React",
        "コンポーネント設計",
        "既存画面のUI/UX改修",
        "状態管理（React Query）",
        "UI実装",
        "表・グラフなどの複雑なレイアウト実装",
        "フィルタ・検索機能の追加",
        "カリキュラム進捗表示、通知機能の実装",
        "デザイン改善",
        "UIのリファクタリング／再設計"
      ]
    },
    {
      title: "バックエンド・API",
      skills: [
        "Express によるAPI連携部分の実装",
        "外部連携APIの実装・保守"
      ]
    },
    {
      title: "開発環境・その他技術",
      skills: [
        "Git / GitHub：ソース管理、チーム開発",
        "MySQL（AWS）でのデータ操作・表示",
        "Firebaseを用いたデータ取得／保存処理",
        "Windows / Mac 両方の開発環境に対応"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
