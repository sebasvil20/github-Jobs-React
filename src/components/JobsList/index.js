import { JobCard } from '../JobCard'
import {JobsContainer} from './styles'

export const JobsList = () => {
  return (
    <JobsContainer>
      {[0, 1, 2, 3, 4].map((job) => (
        <JobCard />
      ))}
    </JobsContainer>
  )
}
