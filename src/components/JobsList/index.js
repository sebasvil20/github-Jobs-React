import { JobCard } from '../JobCard'
import {JobsContainer} from './styles'

export const JobsList = () => {
  return (
    <JobsContainer>
      {[0, 1].map((job) => (
        <JobCard />
      ))}
    </JobsContainer>
  )
}
