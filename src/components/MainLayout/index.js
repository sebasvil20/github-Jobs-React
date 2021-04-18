import { useState } from 'react'
import { useEffect } from 'react'
import { JobsList } from '../JobsList'
import { Pagination } from '../Pagination'
import { SideBar } from '../SideBar'
import { MainContainer } from './styles'

import jobsJSON from '../../FakeApi'

export const MainLayout = ({searchKeyword}) => {
  const [jobs, setJobs] = useState([jobsJSON[0]])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [jobsPerPage] = useState(5)

  const jsonToJobs = []

  useEffect(() => {
    const setData = async () => {
      await jobsJSON.map((job) => jsonToJobs.push(job))
      setJobs(jsonToJobs)
      setLoading(false)
    }
    setData();
    //eslint-disable-next-line
  }, [])

  //Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)

  const paginate = async (pageNumber) => {
    await setCurrentPage(pageNumber)
    setLoading(false)
  }

  //Filter Jobs
  const filterJobs = () =>{
    
  }

  return (
    <MainContainer>
      <SideBar />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <JobsList jobs={currentJobs} />
          <Pagination
            jobsPerPage={jobsPerPage}
            totalJobs={jobs.length}
            paginate={paginate}
            setLoading={setLoading}
          />
        </>
      )}
    </MainContainer>
  )
}
