import { useState } from 'react'
import { JobsList } from '../JobsList'
import { Pagination } from '../Pagination'
import { SideBar } from '../SideBar'
import { MainContainer } from './styles'


export const MainLayout = ({jobs, loading, setLoading}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [jobsPerPage] = useState(5)


  //Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)

  const paginate = async (pageNumber) => {
    await setCurrentPage(pageNumber)
    setLoading(false)
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
