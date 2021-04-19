import { JobCard } from '../JobCard'
import { JobsContainer, NoData } from './styles'

export const JobsList = ({ jobs }) => {
  return (
    <JobsContainer>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            key={job.id}
            img={job.company_logo}
            title={job.title}
            company={job.company}
            badge={job.type}
            time={job.created_at}
            location={job.location}
            id={job.id}
          />
        ))
      ) : (
        <NoData>No data to show here :(</NoData>
      )}
    </JobsContainer>
  )
}
