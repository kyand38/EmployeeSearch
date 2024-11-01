import Candidate from '../interfaces/Candidate.interface';
import { useState } from 'react';
import '../styles/savedCandidates.css'

// Getting candidates from local storage
const SavedCandidates = () => {
  const [candidatesArray, setcandidatesArray] = useState<Candidate[]>(() => {
    return JSON.parse(localStorage.getItem('savedCandidates') || '[]');
  });
  console.log("Over here!", candidatesArray);

// Function to delete candidates form table
  const handleDelete = (id: number) => {
    const updatedList = candidatesArray.filter(candidate => candidate.id !== id);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedList));
    setcandidatesArray(updatedList);
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {candidatesArray.map((candidate: Candidate) => {
            { console.log('help!!!!!', candidate) }
            return (
              <tr key="">
                <td><img className='avatarImg' src={candidate.avatar_url || 'No image'} style={{ width: '7vh' }}></img></td>
                <td>{candidate.login}</td>
                <td>{candidate.location || 'No location'}</td>
                <td><a href={candidate.email}>{candidate.email || 'No Email'}</a></td>
                <td>{candidate.company || 'No company'}</td>
                <td>{candidate.bio || 'No bio'}</td>
                <td><button className='removeButton' onClick={() => handleDelete(candidate.id)}>-</button></td>
              </tr>)
          })}
        </tbody>
      </table>
    </>
  );
};
// }
export default SavedCandidates;
