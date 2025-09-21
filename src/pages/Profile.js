import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { teamMembers } from '../data/teamData';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = teamMembers.find(m => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
          <p className="text-gray-600 mb-6">The requested profile could not be found.</p>
          <button
            onClick={() => navigate('/about')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Team
          </button>
        </div>
      </div>
    );
  }

  // Academic profile data (mocked for demo)
  const publicationsData = require('../data/publicationData').publications;
  // Find publications for this member
  const allPubs = [...publicationsData.published, ...(publicationsData.underReview || [])];
  const memberPubs = allPubs.filter(pub => pub.authors.includes(member.name));
  // Co-authors
  const coAuthors = Array.from(new Set(memberPubs.flatMap(pub => pub.authors).filter(a => a !== member.name)));

  // Skills (mocked)
  //Deep Learning, Machine Learning, Data Science, IOT, NLP, Computer Vision, Block Chain
  // Use individual skills from teamData
  const skills = member.skills || [];

  // Network (mocked)
  const citedBy = ['Stanford University', 'MIT', 'Harvard Medical School'];
  const cites = ['Nature Medicine', 'IEEE', 'Bioinformatics'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Academic Profile Section */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover border-4 border-primary-600 mb-4 md:mb-0" />
            <div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
              <p className="text-lg text-primary-700 mb-1">{member.designation}</p>
              <p className="text-gray-600 mb-1">Department: {member.department}</p>
              <p className="text-gray-600 mb-1">University: {member.university}</p>
              <p className="text-gray-600 mb-1">Publications: {memberPubs.length}</p>
              <p className="text-gray-600 mb-1">Reads: 2,500+</p>
              <p className="text-gray-600 mb-1">Citations: 1,200+</p>
              
            </div>
          </div>

          {/* About */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">📌 About</h2>
            <p className="text-gray-700">
              {member.name} is a {member.designation} at NexCure. Their research mainly focuses on {member.researchField}. With {memberPubs.length} publications and 1,200+ citations, they have contributed significantly to the field of {member.researchField}.
            </p>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">📌 Skills & Expertise</h2>
            <ul className="list-disc pl-6 text-gray-700">
              {skills.length > 0 ? skills.map(skill => (
                <li key={skill}>{skill}</li>
              )) : <li>No skills listed.</li>}
            </ul>
          </div>

          {/* Current Institution */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">📌 Current Institution</h2>
            <p className="text-gray-700">NexCure</p>
            <p className="text-gray-700">Department of Research</p>
            <p className="text-gray-700">Current Position: {member.designation}</p>
          </div>

          {/* Co-authors */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">📌 Co-authors</h2>
            <ul className="list-disc pl-6 text-gray-700">
              {coAuthors.length > 0 ? coAuthors.map(a => (
                <li key={a}>{a} (NexCure)</li>
              )) : <li>No co-authors found.</li>}
            </ul>
          </div>

          {/* Publications (Sample) */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">📌 Publications (Sample)</h2>
            <ul className="list-disc pl-6 text-gray-700">
              {memberPubs.slice(0,3).map(pub => (
                <li key={pub.id}><strong>{pub.title}</strong> — {pub.year}, {pub.authors.join(', ')}</li>
              ))}
              {memberPubs.length === 0 && <li>No publications found.</li>}
            </ul>
          </div>

          {/* Network */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">📌 Network</h2>
            <p className="text-gray-700"><strong>Cited By:</strong> {citedBy.join(', ')}</p>
            <p className="text-gray-700"><strong>Cites:</strong> {cites.join(', ')}</p>
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">📌 Connect</h2>
            <div className="flex space-x-4">
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">LinkedIn</a>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Twitter</a>
              <a href={member.social.googleScholar} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Scholar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

