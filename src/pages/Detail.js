import { useParams } from '@reach/router'
import { useState, useEffect } from 'react'
import { DetailedJob } from '../components/DetailedJob'
import jobsJSON from '../FakeApi'

export const Detail = () => {
  const [job, setJob] = useState([])
  const [loading, setLoading] = useState(true)

  const params = useParams()

  const FETCH_URL = `${params.jobId}`

  useEffect(() => {
    const setData = async () => {
      const fetchedJob = jobsJSON.filter((job) => job.id === FETCH_URL)
      console.log(fetchedJob)
      setJob(fetchedJob[0])
      setLoading(false)
    }
    setData()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <DetailedJob
          jobId={FETCH_URL}
          jobType={job.type}
          company={job.company}
          companyUrl={job.company_url}
          jobLocation={job.location}
          jobTitle={job.title}
          jobDescription={job.description}
          jobTime={job.created_at}
          howToApply={job.how_to_apply}
          companyImage={job.company_logo}
        />
      )}
    </>
  )
}
