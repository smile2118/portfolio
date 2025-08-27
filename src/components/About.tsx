import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Webアプリ開発に1年3ヶ月従事し、フロントエンド開発を中心に幅広い技術スタックで、開発経験を積んできました。
            チーム開発での協働や、個人開発でのiOSアプリ5つのリリース経験もあります。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;