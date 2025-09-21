import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamData';
import TrackingSystem from '../components/TrackingSystem';

const Home = () => {
  const [counters, setCounters] = useState({
    workPending: 0,
    paperSubmitted: 0,
    paperPending: 0,
    tasks: 0,
    tasksCompleted: 0
  });

  const finalCounts = {
    workPending: 12,
    paperSubmitted: 8,
    paperPending: 15,
    tasks: 24,
    tasksCompleted: 18
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounters = () => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          workPending: Math.floor(finalCounts.workPending * progress),
          paperSubmitted: Math.floor(finalCounts.paperSubmitted * progress),
          paperPending: Math.floor(finalCounts.paperPending * progress),
          tasks: Math.floor(finalCounts.tasks * progress),
          tasksCompleted: Math.floor(finalCounts.tasksCompleted * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    // Start animation after a short delay
    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, [finalCounts.workPending, finalCounts.paperSubmitted, finalCounts.paperPending, finalCounts.tasks, finalCounts.tasksCompleted]);

  const statusCards = [
    {
      title: 'Work Pending',
      count: counters.workPending,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      icon: '⏳'
    },
    {
      title: 'Paper Submitted',
      count: counters.paperSubmitted,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      icon: '📄'
    },
    {
      title: 'Paper Pending',
      count: counters.paperPending,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      icon: '📋'
    },
    {
      title: 'Tasks',
      count: counters.tasks,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      icon: '📝'
    },
    {
      title: 'Tasks Completed',
      count: counters.tasksCompleted,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      icon: '✅'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Welcome to <span className="text-gradient">NexCure Lab</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up animate-delay-200">
              Pioneering the future of healthcare through cutting-edge AI research, 
              medical imaging, and bioinformatics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link to="/research" className="btn-primary text-lg px-8 py-3">
                Explore Our Research
              </Link>
              <Link to="/about" className="btn-secondary text-lg px-8 py-3">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Status Cards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lab Status Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {statusCards.map((card, index) => (
              <div
                key={card.title}
                className={`card ${card.bgColor} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <div className={`text-3xl font-bold ${card.color} mb-2 counter-animation`}>
                    {card.count}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Research Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience 
              in AI, medicine, and cutting-edge research to solve the world's 
              most challenging healthcare problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.slice(0, 8).map((member, index) => (
              <div
                key={member.id}
                className="card card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">👨‍🔬</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    <Link to={`/profile/${member.id}`} className="hover:underline text-primary-700">{member.name}</Link>
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.designation}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 bg-gray-100 rounded-full px-3 py-1 inline-block">
                    {member.researchField}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    </a>
                    <a
                      href={member.social.googleScholar}
                      className="text-gray-400 hover:text-green-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                    </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about" className="btn-primary text-lg px-8 py-3">
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Research Tracking System Preview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Tracking System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Monitor project progress, track tasks, and analyze research performance 
              with our comprehensive tracking platform.
            </p>
            <Link to="/tracking" className="btn-primary text-lg px-8 py-3">
              View Full Tracking System
            </Link>
          </div>
          
          {/* Tracking System Preview - Limited View */}
          <div className="bg-gray-50 rounded-lg p-6">
            <TrackingSystem />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in advancing healthcare through innovative AI research. 
            Let's work together to create a healthier future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Our Services
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
