import React from 'react';

const HtmlPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
          HTML Demo Page
        </h1>
        
        <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-red-900/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Welcome to the HTML Page</h2>
          <p className="text-gray-300 text-lg mb-4">
            This is a separate page that demonstrates navigation in React Router.
          </p>
          <div className="space-y-4">
            <section>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Independent routing</li>
                <li>Separate from portfolio</li>
                <li>Custom styling</li>
                <li>Responsive design</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlPage;
