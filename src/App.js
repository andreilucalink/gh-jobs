import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs';
import Job from './Job';
import {Container} from 'react-bootstrap';
import {PacmanLoader} from 'react-spinners';
import JobsPagination from './JobsPagination';
// import SearchForm from './SearchForm';




function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page);

  /* function handleParamChange(e){
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams => {
      return {...prevParams, [param]: value}
    })
  } */

  return (
    <Container className="pt-5 pb-5">
        {!loading && <h1 className="app-title">GitHub Jobs App</h1> }
        {!loading && <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>}
        {/* {!loading && <SearchForm params={params} onParamChange={handleParamChange}/>} */}
        {loading && <div className="loader-box"><PacmanLoader color={'#f4f4f4'} className="loader" size={40}/></div>}
        {error && <h1>Something went wrong...</h1>}
        {jobs.map((job) => {

          return <Job key={job.id} job={job}/>

        })}
        {!loading && <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} blabla={setParams}/>}
    </Container>
      )
}

export default App;
