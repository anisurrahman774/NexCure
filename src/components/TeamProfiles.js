import React, { useState } from 'react';
import { teamMembers } from '../data/teamData';

const TeamProfiles = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedMember = teamMembers.find(m => m.id === selectedId);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {teamMembers.map(member => (
          <button
            key={member.id}
            className={`px-4 py-2 rounded-lg font-medium shadow transition-colors duration-200 ${selectedId === member.id ? 'bg-primary-600 text-white' : 'bg-white text-primary-600 border border-primary-600 hover:bg-primary-50'}`}
            onClick={() => setSelectedId(member.id)}
          >
            {member.name}
          </button>
        ))}
      </div>
      {selectedMember && (
        <div className="bg-white rounded-lg shadow-lg p-8 mt-4">
          <div className="flex flex-col md:flex-row md:space-x-8 mb-4 items-center">
            <img src={selectedMember.image} alt={selectedMember.name} className="w-32 h-32 rounded-full object-cover border-4 border-primary-600 mb-4 md:mb-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
              <p className="text-lg text-primary-700 mb-1">{selectedMember.designation}</p>
              <p className="text-gray-600 mb-1">{selectedMember.researchField}</p>
              <p className="text-gray-700 mb-2">{selectedMember.bio}</p>
              <div className="flex space-x-4 mt-2">
                <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">LinkedIn</a>
                <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Twitter</a>
                <a href={selectedMember.social.googleScholar} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Scholar</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamProfiles;
