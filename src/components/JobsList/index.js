import { JobCard } from '../JobCard'
import { JobsContainer } from './styles'

export const JobsList = ({ jobs }) => {
  return (
    <JobsContainer>
      {jobs.map((job) => (
        <JobCard 
          img={job.company_logo}
          title={job.title}
          company={job.company}
          badge={job.type}
          time={job.created_at}
          location={job.location}
        />
      ))}
    </JobsContainer>
  )
}
