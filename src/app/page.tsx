import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Eguchi Takahiro - Portfolio',
  description: 'React + TypeScript フロントエンド開発者のポートフォリオサイト。1年3ヶ月のWebアプリ開発経験、iOS アプリ開発経験を持つ。',
  keywords: 'React, TypeScript, フロントエンド, 開発者, ポートフォリオ, iOS アプリ開発',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}