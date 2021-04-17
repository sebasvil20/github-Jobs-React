import {useState} from 'react'
import { JobCard } from '../JobCard'
import {JobsContainer} from './styles'

export const JobsList = () => {

  const [jobs, setJobs] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])
  const [jobsToPrint, setJobsToPrint] = useState(jobs.slice(0,5))


  return (
    <JobsContainer>
      {jobsToPrint.map((job) => (
        <JobCard />
      ))}
    </JobsContainer>
  )
}
