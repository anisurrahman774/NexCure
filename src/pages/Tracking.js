import React from 'react';
import TrackingSystem from '../components/TrackingSystem';

const Tracking = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research <span className="text-gradient">Tracking System</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Monitor project progress, track tasks, and analyze research performance 
              with our comprehensive tracking and analytics platform.
            </p>
          </div>
        </div>
      </section>

      {/* Tracking System Component */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <TrackingSystem />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tracking Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center card-hover">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project Management</h3>
              <p className="text-gray-600">
                Track project progress, budgets, timelines, and team assignments with 
                detailed progress bars and status indicators.
              </p>
            </div>
            <div className="card text-center card-hover">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Task Tracking</h3>
              <p className="text-gray-600">
                Monitor individual tasks, assignments, deadlines, and time tracking 
                with comprehensive task management features.
              </p>
            </div>
            <div className="card text-center card-hover">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reports</h3>
              <p className="text-gray-600">
                Generate insights with budget utilization, time tracking, and 
                performance analytics across all research activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Track Your Research?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive tracking system to monitor your 
            research projects and achieve better outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Get Started
            </a>
            <a href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tracking;
