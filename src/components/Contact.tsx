import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            お仕事のご相談やご質問がございましたら、お気軽にお声かけください。
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:isotnic@gmail.com" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Email
            </a>
            <a 
              href="https://github.com/smile2118" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;