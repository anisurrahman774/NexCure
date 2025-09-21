import React from 'react';

const Research = () => {
  const researchAreas = [
    {
      id: 1,
      title: 'Medical AI',
      icon: '🏥',
      description: 'Developing artificial intelligence systems for medical diagnosis, treatment planning, and patient care optimization.',
      applications: [
        'Medical image analysis',
        'Clinical decision support',
        'Drug discovery',
        'Personalized medicine'
      ],
      color: 'bg-blue-100 text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      title: 'Bioinformatics',
      icon: '🧬',
      description: 'Computational analysis of biological data including genomics, proteomics, and molecular biology.',
      applications: [
        'Genomic variant analysis',
        'Protein structure prediction',
        'Pathway analysis',
        'Evolutionary biology'
      ],
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-200'
    },
    {
      id: 3,
      title: 'Deep Learning',
      icon: '🧠',
      description: 'Advanced neural network architectures and machine learning algorithms for complex pattern recognition.',
      applications: [
        'Computer vision',
        'Natural language processing',
        'Reinforcement learning',
        'Generative models'
      ],
      color: 'bg-purple-100 text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      id: 4,
      title: 'Cancer Detection',
      icon: '🔬',
      description: 'AI-powered systems for early cancer detection, diagnosis, and treatment monitoring.',
      applications: [
        'Radiology analysis',
        'Pathology screening',
        'Biomarker discovery',
        'Treatment response prediction'
      ],
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-200'
    },
    {
      id: 5,
      title: 'Agriculture AI',
      icon: '🌱',
      description: 'Smart farming solutions using AI for crop monitoring, disease detection, and yield optimization.',
      applications: [
        'Plant disease detection',
        'Precision farming',
        'Crop yield prediction',
        'Soil analysis'
      ],
      color: 'bg-yellow-100 text-yellow-600',
      borderColor: 'border-yellow-200'
    },
    {
      id: 6,
      title: 'Medical Imaging',
      icon: '📊',
      description: 'Advanced image processing and analysis techniques for medical imaging modalities.',
      applications: [
        'MRI analysis',
        'CT scan interpretation',
        'Ultrasound processing',
        '3D reconstruction'
      ],
      color: 'bg-indigo-100 text-indigo-600',
      borderColor: 'border-indigo-200'
    },
    {
      id: 7,
      title: 'Natural Language Processing',
      icon: '💬',
      description: 'Processing and understanding human language in medical and scientific contexts.',
      applications: [
        'Clinical text analysis',
        'Medical literature mining',
        'Patient report generation',
        'Drug interaction detection'
      ],
      color: 'bg-pink-100 text-pink-600',
      borderColor: 'border-pink-200'
    },
    {
      id: 8,
      title: 'Robotics & Surgical AI',
      icon: '🤖',
      description: 'Intelligent robotic systems for surgical assistance and medical procedures.',
      applications: [
        'Surgical planning',
        'Robot-assisted surgery',
        'Rehabilitation robotics',
        'Medical device automation'
      ],
      color: 'bg-gray-100 text-gray-600',
      borderColor: 'border-gray-200'
    },
    {
      id: 9,
      title: 'Neuroscience AI',
      icon: '🧠',
      description: 'AI applications in brain research, neural imaging, and neurological disorder analysis.',
      applications: [
        'Brain imaging analysis',
        'Neural signal processing',
        'Cognitive modeling',
        'Neurological disorder detection'
      ],
      color: 'bg-teal-100 text-teal-600',
      borderColor: 'border-teal-200'
    },
    {
      id: 10,
      title: 'Drug Discovery',
      icon: '💊',
      description: 'Computational methods for drug design, molecular property prediction, and pharmaceutical research.',
      applications: [
        'Molecular design',
        'Drug-target interaction',
        'ADMET prediction',
        'Virtual screening'
      ],
      color: 'bg-orange-100 text-orange-600',
      borderColor: 'border-orange-200'
    }
  ];

  const currentProjects = [
    {
      title: 'AI-Powered Early Cancer Detection',
      description: 'Developing deep learning models for early detection of various cancer types using multi-modal imaging data.',
      status: 'Active',
      progress: 75,
      team: ['Dr. Sarah Chen', 'Dr. Emily Watson', 'Dr. Lisa Kumar']
    },
    {
      title: 'Genomic Variant Analysis Pipeline',
      description: 'Building automated bioinformatics pipelines for analyzing genomic variants and their clinical significance.',
      status: 'Active',
      progress: 60,
      team: ['Dr. Michael Rodriguez', 'Dr. Maria Garcia']
    },
    {
      title: 'Smart Agriculture Monitoring System',
      description: 'IoT-enabled AI system for real-time plant disease detection and agricultural optimization.',
      status: 'Active',
      progress: 45,
      team: ['Dr. Alex Thompson', 'Dr. David Kim']
    },
    {
      title: 'Robotic Surgery AI Assistant',
      description: 'AI-powered robotic system for enhancing precision in minimally invasive surgical procedures.',
      status: 'Active',
      progress: 30,
      team: ['Dr. Robert Zhang', 'Dr. Jennifer Lee']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Research Areas</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We conduct cutting-edge research across multiple domains, pushing the boundaries 
              of artificial intelligence and its applications in healthcare, agriculture, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Research Domains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={area.id}
                className={`card card-hover border-l-4 ${area.borderColor} group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${area.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Key Applications:</h4>
                      <ul className="space-y-1">
                        {area.applications.map((app, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Current Research Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Team Members */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Team Members:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.team.map((member, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Statistics */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Research Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">Research Domains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
              <div className="text-gray-600">Research Collaborations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Collaborating?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We welcome collaboration opportunities with researchers, institutions, 
            and industry partners. Let's work together to advance the field of AI in healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Start Collaboration
            </a>
            <a href="/publications" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              View Publications
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
