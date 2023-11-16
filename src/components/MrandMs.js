import React, { useState } from 'react';

function MrandMs() {
    const [participantName, setParticipantName] = useState('');
    const [participantNumber, setParticipantNumber] = useState('');
    const [collegeId, setCollegeId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here.
    };
  return (
    <div>
       <section className="registration-form">
                <div className='main'>
                <div className='img' >
                    <h2 id='info-title' >A quick go through before you register</h2>
                      <ul className='ulimg'>
        
                        <li className=''>Rules:WebFree. Welcome to CodePen. Sign Up with Google. Sign Up with GitHub. Sign Up with Facebook. </li>
                        <li className=''>Rules:Or, Sign Up with Email. By signing up, you agree to CodePen's Terms</li>
                        <li className=''>description:OOr, Sign Up with Email. By signing up, you agree to CodePen's Termsr, Sign Up with Email. By signing up, you agree to CodePen's Terms</li>
                        <li className=''><strong>Contact person:@Tejal-1234567890</strong></li>
                        </ul> 
                </div>
               
                <form onSubmit={handleSubmit} className="translucent-form">
                <h2>Mr and Ms. Prati</h2>
                <h3 id='title2'>~Show your inner beauty</h3>
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
                    <input
                        type="url"
                        id="college-id"
                        name="college-id"
                        value={collegeId}
                        onChange={(e) => setCollegeId(e.target.value)}
                        required
                    />
                    <label htmlFor="college-id" className='l3'>College ID (Drive Link)</label>
                    </div>

                    <button type="submit" className='Sub'>Submit</button>
                </form>
                </div>
            </section>
    </div>
  )
}

export default MrandMs
