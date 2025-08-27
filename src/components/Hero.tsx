'use client';

import React, { useEffect, useRef, useState } from 'react';

// 固定のパーティクル位置を生成
const generateParticles = () => {
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      id: i,
      left: (i * 7.23) % 100, // 固定値でランダム風に
      top: (i * 13.97) % 100,  // 固定値でランダム風に
      delay: (i * 0.4) % 20,
      duration: 10 + (i % 10)
    });
  }
  return particles;
};

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mounted, setMounted] = useState(false);
  const particles = generateParticles();

  const typeWriter = (element: HTMLElement, text: string, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };
    type();
  };

  useEffect(() => {
    setMounted(true);
    
    const timer = setTimeout(() => {
      if (titleRef.current) {
        const originalText = titleRef.current.textContent || '';
        typeWriter(titleRef.current, originalText, 150);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center z-10">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Eguchi Takahiro
            </h2>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              React + TypeScript フロントエンド開発者
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              1年3ヶ月のWebアプリ開発経験があり、React＋TypeScriptを中心としたフロントエンド開発を担当。
              UI改善やAPI連携、表・グラフなどの情報可視化コンポーネントの実装経験があります。
              GitHubでのチーム開発、Firebase・MySQLのDB連携経験もあり、開発〜運用保守まで幅広く対応できます。
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative flex items-center justify-center overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center z-10">
        <div className="space-y-6">
          <h2 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            ref={titleRef}
          >
            Eguchi Takahiro
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-8">
            React + TypeScript フロントエンド開発者
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            1年3ヶ月のWebアプリ開発経験があり、React＋TypeScriptを中心としたフロントエンド開発を担当。
            UI改善やAPI連携、表・グラフなどの情報可視化コンポーネントの実装経験があります。
            GitHubでのチーム開発、Firebase・MySQLのDB連携経験もあり、開発〜運用保守まで幅広く対応できます。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;