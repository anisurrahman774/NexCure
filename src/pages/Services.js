import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Research Collaboration',
      icon: '🤝',
      description: 'Partner with our team of experts on cutting-edge research projects in AI and healthcare.',
      features: [
        'Joint research initiatives',
        'Data sharing agreements',
        'Co-publication opportunities',
        'Grant writing support',
        'Technical consultation'
      ],
      color: 'bg-blue-100 text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      title: 'AI Model Development',
      icon: '🧠',
      description: 'Custom AI model development tailored to your specific healthcare or research needs.',
      features: [
        'Deep learning model design',
        'Medical image analysis models',
        'Natural language processing',
        'Predictive analytics',
        'Model optimization & deployment'
      ],
      color: 'bg-purple-100 text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      id: 3,
      title: 'Data Analysis',
      icon: '📊',
      description: 'Comprehensive data analysis services for medical, genomic, and research datasets.',
      features: [
        'Statistical analysis',
        'Genomic data processing',
        'Clinical data mining',
        'Biomarker discovery',
        'Data visualization'
      ],
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-200'
    },
    {
      id: 4,
      title: 'Journal Paper Assistance',
      icon: '📝',
      description: 'Professional assistance with academic writing, peer review, and publication support.',
      features: [
        'Manuscript writing',
        'Peer review services',
        'Statistical review',
        'Publication strategy',
        'Journal selection guidance'
      ],
      color: 'bg-yellow-100 text-yellow-600',
      borderColor: 'border-yellow-200'
    },
    {
      id: 5,
      title: 'Workshops & Training',
      icon: '🎓',
      description: 'Educational workshops and training programs on AI in healthcare and research methodologies.',
      features: [
        'AI in healthcare workshops',
        'Machine learning training',
        'Bioinformatics courses',
        'Research methodology training',
        'Software tool tutorials'
      ],
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-200'
    },
    {
      id: 6,
      title: 'Consulting Services',
      icon: '💼',
      description: 'Expert consulting for healthcare organizations and research institutions.',
      features: [
        'AI strategy development',
        'Technology assessment',
        'Implementation planning',
        'Performance optimization',
        'Risk evaluation'
      ],
      color: 'bg-indigo-100 text-indigo-600',
      borderColor: 'border-indigo-200'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your requirements, goals, and project scope to understand your needs.',
      icon: '💬'
    },
    {
      step: 2,
      title: 'Proposal & Planning',
      description: 'We create a detailed proposal with timeline, deliverables, and cost estimation.',
      icon: '📋'
    },
    {
      step: 3,
      title: 'Project Execution',
      description: 'Our team works closely with you to deliver high-quality results on schedule.',
      icon: '⚙️'
    },
    {
      step: 4,
      title: 'Delivery & Support',
      description: 'We deliver the final results and provide ongoing support and maintenance.',
      icon: '🎯'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Jennifer Martinez',
      title: 'Director of Research',
      organization: 'City Medical Center',
      content: 'NexCure Lab\'s AI model development service transformed our diagnostic capabilities. Their expertise and attention to detail exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Prof. Michael Chen',
      title: 'Head of Bioinformatics',
      organization: 'University Research Lab',
      content: 'The collaborative research project with NexCure Lab resulted in breakthrough findings. Their team\'s knowledge and dedication are exceptional.',
      rating: 5
    },
    {
      name: 'Dr. Sarah Williams',
      title: 'Clinical Researcher',
      organization: 'National Health Institute',
      content: 'Their data analysis services helped us uncover insights we never would have found on our own. Highly professional and thorough work.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We offer comprehensive AI and research services to help organizations 
              leverage cutting-edge technology for healthcare innovation and research advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`card card-hover border-l-4 ${service.borderColor} group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                            {feature}
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

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
                    {step.icon}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-200 transform translate-x-8"></div>
                  )}
                </div>
                <div className="bg-primary-100 text-primary-800 w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-primary-600 font-medium">{testimonial.title}</p>
                  <p className="text-gray-600 text-sm">{testimonial.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every project is unique. Contact us for a customized quote and timeline 
              that fits your specific requirements and budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Fair and transparent pricing based on project scope and complexity.</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Efficient project management ensuring timely delivery of results.</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">High-quality deliverables with ongoing support and revisions.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg px-8 py-3">
                Get a Quote
              </a>
              <a href="/research" className="btn-secondary text-lg px-8 py-3">
                View Our Research
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
