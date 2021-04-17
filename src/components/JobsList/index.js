import { JobCard } from '../JobCard'

export const JobsList = () => {
  return (
    <>
      {[0, 1].map((job) => (
        <JobCard />
      ))}
    </>
  )
}
