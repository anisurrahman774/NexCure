import React, { useState } from 'react';
import { publications } from '../data/publicationData';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('published');

  const publishedPapers = publications.published;
  const underReviewPapers = publications.underReview;

  const getPublicationIcon = (type) => {
    switch (type) {
      case 'journal':
        return '📖';
      case 'conference':
        return '🎤';
      default:
        return '📄';
    }
  };

  const getPublicationBadge = (type) => {
    switch (type) {
      case 'journal':
        return 'bg-blue-100 text-blue-800';
      case 'conference':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Publications</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Explore our research contributions to the scientific community through 
              peer-reviewed publications and ongoing research work.
            </p>
          </div>
        </div>
      </section>

      {/* Publication Stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {publishedPapers.length}
              </div>
              <div className="text-gray-600">Published Papers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {underReviewPapers.length}
              </div>
              <div className="text-gray-600">Under Review</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1,500+</div>
              <div className="text-gray-600">Total Citations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">H-Index</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('published')}
                className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'published'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Published Papers ({publishedPapers.length})
              </button>
              <button
                onClick={() => setActiveTab('under-review')}
                className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'under-review'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Under Review ({underReviewPapers.length})
              </button>
            </div>
          </div>

          {/* Published Papers */}
          {activeTab === 'published' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Published Research Papers
              </h2>
              {publishedPapers.map((paper, index) => (
                <div
                  key={paper.id}
                  className="card card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                        {getPublicationIcon(paper.type)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight">
                          {paper.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPublicationBadge(paper.type)}`}>
                          {paper.type === 'journal' ? 'Journal' : 'Conference'}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-600 mb-2">
                          <span className="font-medium">Authors:</span> {paper.authors.join(', ')}
                        </p>
                        <p className="text-gray-600 mb-2">
                          <span className="font-medium">{paper.type === 'journal' ? 'Journal:' : 'Conference:'}</span> {paper.conference}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Year:</span> {paper.year}
                        </p>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {paper.abstract}
                      </p>

                      <div className="flex items-center space-x-4">
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm"
                        >
                          Read Paper
                        </a>
                        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                          Cite
                        </button>
                        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Under Review Papers */}
          {activeTab === 'under-review' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Papers Under Review
              </h2>
              {underReviewPapers.map((paper, index) => (
                <div
                  key={paper.id}
                  className="card card-hover border-l-4 border-yellow-400"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                        📝
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight">
                          {paper.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          {paper.status}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-600 mb-2">
                          <span className="font-medium">Authors:</span> {paper.authors.join(', ')}
                        </p>
                        <p className="text-gray-600 mb-2">
                          <span className="font-medium">Target Venue:</span> {paper.conference}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Submission Year:</span> {paper.year}
                        </p>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Research Impact */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Research Impact & Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">High Impact Publications</h3>
              <p className="text-gray-600">
                Our research has been published in top-tier venues including Nature Medicine, 
                Bioinformatics, and IEEE conferences.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Recognition</h3>
              <p className="text-gray-600">
                Our work has been cited by researchers worldwide, contributing to the 
                advancement of AI in healthcare.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Research</h3>
              <p className="text-gray-600">
                We actively collaborate with leading institutions and researchers 
                to push the boundaries of medical AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Our Research?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with us for collaboration opportunities, research partnerships, 
            or to learn more about our ongoing projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Us
            </a>
            <a href="/research" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              View Research Areas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
