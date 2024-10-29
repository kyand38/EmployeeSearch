import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
// Create a state variable to hold the list of candidates retrieved from GitHub.
const [candidates, setCandidates] = useState([]);

  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
