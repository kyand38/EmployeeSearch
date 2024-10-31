import Candidate from '../interfaces/Candidate.interface';



const SavedCandidates = () => {
  const candidatesArray = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
  console.log("Over here!", candidatesArray);


  return (
    <>
      <h1>Potential Candidates</h1>
      <div>
        {candidatesArray.map((candidate: Candidate) => {
          {console.log('help!!!!!', candidate)}
        return (
        <tr className="table">
          <td>Image<img src={candidate.avatar_url || 'No image'} style={{ width: '40px' }}></img></td>
          <td>Name{candidate.login}</td>
          <td>Location{candidate.location || 'No location'}</td>
          <td>{candidate.email || 'no email'}</td>
          <td>{candidate.company || 'No company'}</td>
          <td>{candidate.bio || 'No bio'}</td>
          <td>-</td>
        </tr>)
        })}
      </div>
    </>
  );
};
// }
export default SavedCandidates;
