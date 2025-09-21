import React from 'react';
import { teamMembers } from '../data/teamData';
import { Link } from 'react-router-dom';

const About = () => {
  const achievements = [
    {
      icon: '🏆',
      title: '50+ Research Papers',
      description: 'Published in top-tier journals and conferences'
    },
    {
      icon: '🔬',
      title: '15+ Active Projects',
      description: 'Ongoing research initiatives across multiple domains'
    },
    {
      icon: '🌍',
      title: 'Global Collaborations',
      description: 'Partnerships with leading institutions worldwide'
    },
    {
      icon: '💡',
      title: '10+ Patents',
      description: 'Innovative technologies and methodologies'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in research quality and innovation.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and interdisciplinary research.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible in AI and healthcare.',
      icon: '💡'
    },
    {
      title: 'Impact',
      description: 'Our research aims to create real-world solutions for global health challenges.',
      icon: '🌍'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">NexCure Lab</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Founded in 2020, NexCure Lab is a leading research laboratory dedicated to 
              advancing healthcare through artificial intelligence, machine learning, and 
              cutting-edge computational methods.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="card text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize healthcare through innovative AI research, developing 
                intelligent systems that enhance medical diagnosis, treatment, and patient 
                care while advancing the frontiers of computational medicine.
              </p>
            </div>

            {/* Vision */}
            <div className="card text-center">
              <div className="text-6xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's premier research laboratory in AI-driven healthcare, 
                creating a future where precision medicine is accessible to all, and 
                where artificial intelligence works seamlessly with healthcare professionals 
                to save lives and improve quality of care.
              </p>
            </div>

            {/* Goals */}
            <div className="card text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goals</h3>
              <ul className="text-gray-600 text-left space-y-2">
                <li>• Develop breakthrough AI technologies for healthcare</li>
                <li>• Foster interdisciplinary collaboration</li>
                <li>• Train the next generation of AI researchers</li>
                <li>• Bridge the gap between research and clinical practice</li>
                <li>• Create open-source tools for the research community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lab History */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Journey
            </h2>
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
              
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="card">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2020 - Foundation</h3>
                      <p className="text-gray-600">
                        NexCure Lab was established with a vision to revolutionize healthcare 
                        through AI. Started with 5 founding members and 3 initial research projects.
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8">
                    <div className="card">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2021 - First Breakthrough</h3>
                      <p className="text-gray-600">
                        Published our first major paper on medical AI in Nature Medicine. 
                        Expanded team to 12 researchers across 4 different research areas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="card">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2022 - Global Recognition</h3>
                      <p className="text-gray-600">
                        Received international recognition for cancer detection AI. 
                        Established partnerships with 5 leading medical institutions worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8">
                    <div className="card">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2023 - Expansion</h3>
                      <p className="text-gray-600">
                        Launched new research areas in agricultural AI and robotics. 
                        Team grew to 25 researchers with 15 active projects.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="card">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2024 - Today</h3>
                      <p className="text-gray-600">
                        Leading the field with 50+ publications, 10+ patents, and 
                        a team of 30+ world-class researchers working on cutting-edge projects.
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="card text-center card-hover">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Complete Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of 30+ researchers brings together expertise from 
              various fields to tackle complex healthcare challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="card card-hover group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    <Link to={`/profile/${member.id}`} className="hover:underline text-primary-700">{member.name}</Link>
                  </h3>
                  <p className="text-primary-600 font-medium mb-2 text-sm">
                    {member.designation}
                  </p>
                  <p className="text-xs text-gray-600 mb-4 bg-gray-100 rounded-full px-3 py-1 inline-block">
                    {member.researchField}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
