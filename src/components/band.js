import React, { useState } from 'react';
import "../css/events.css"
import axios from 'axios';
import image from "../images/band1.jpg"; 

function Band() {
    const [participantName, setParticipantName] = useState('');
    const [teamName, setTeamName] = useState('');
    const [participantNumber, setParticipantNumber] = useState('');
    const [collegeId, setCollegeId] = useState('');
    const [participants, setParticipants] = useState([]); 

    const handleSubmit = async(e) => {
        console.log("clicked");
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:9000/Band/addTeam', {
            teamName,
            participantNumber,
            participants, // Send the array of participants
          });
    
            console.log('Response:', response.data);
            // Optionally, you can reset the form fields here
            setParticipantName('');
            setCollegeId('');
        } catch (error) {
            console.error('Error:', error);
        }      
    };
    const renderParticipantFields = () => {
        const participantFields = [];
    
        for (let i = 0; i < participantNumber; i++) {
          participantFields.push(
            <div key={i}>
              <h3>Team Member-{i + 1}</h3>
              <div className='input-label'>
                <input
                  type="text"
                  id={`participant-name-${i}`}
                  name={`participant-name-${i}`}
                  value={participants[i]?.name || ''}
                  onChange={(e) => handleParticipantChange(e, i, 'name')}
                  required
                />
                <label htmlFor={`participant-name-${i}`} className='l1'>
                  Participant Name
                </label>
              </div>
              <div className='input-label'>
                <input
                  type="url"
                  id={`college-id-${i}`}
                  name={`college-id-${i}`}
                  value={participants[i]?.collegeId || ''}
                  onChange={(e) => handleParticipantChange(e, i, 'collegeId')}
                  required
                />
                <label htmlFor={`college-id-${i}`} className='l3'>
                  College ID (Drive Link)
                </label>
              </div>
            </div>
          );
        }
    
        return participantFields;
      };
      const handleParticipantChange = (e, index, field) => {
        const updatedParticipants = [...participants];
        updatedParticipants[index] = {
          ...updatedParticipants[index],
          [field]: e.target.value,
        };
        setParticipants(updatedParticipants);
      };
  return (
    <>
       <section className="registration-form">
                <div className='main'>
                <div className='img'style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
                    <h2 id='info-title' >A quick go through before you register</h2>
                      <ul className='ulimg'>
        
                        <li className=''>Rules:WebFree. Welcome to CodePen. Sign Up with Google. Sign Up with GitHub. Sign Up with Facebook. </li>
                        <li className=''>Rules:Or, Sign Up with Email. By signing up, you agree to CodePen's Terms</li>
                        <li className=''>description:OOr, Sign Up with Email. By signing up, you agree to CodePen's Termsr, Sign Up with Email. By signing up, you agree to CodePen's Terms</li>
                        <li className=''><strong></strong></li>
                        </ul> 
                </div>
               
                <form onSubmit={handleSubmit} className="translucent-form">
                <h2>Rhythme Rebels</h2>
                <h3 id='title2'>~Unleash your inner beat</h3>
                <div className='input-label'>
                    <input
                        type="text"
                        id="participant-name"
                        name="participant-name"
                        value={participantName}
                        onChange={(e) => setParticipantName(e.target.value)}
                        required
                    />
                    <label className='l1' htmlFor="participant-name">Participant Name</label>
                    </div>
                    <div className='input-label'>
                    <select
    id="participant-number"
    name="participant-number"
    value={participantNumber}
    onChange={(e) => setParticipantNumber(e.target.value)}
    required
  >
    {[...Array(15).keys()].map((num) => (
      <option key={num + 1} value={(num + 1).toString()}>
        {num + 1}
      </option>
    ))}
  </select>
                      <label id="grpNo" htmlFor="participant-number" className='l2'>Participant Number</label>
                    </div>
                 
                    {renderParticipantFields()}
          <button type="submit" className='Sub'>Submit</button>
                </form>
                </div>
            </section>
    </>

  )
}

export default Band
