import { useParams } from '@reach/router'
import { DetailedJob } from '../components/DetailedJob'

export const Detail = () => {
  const params = useParams()

  const FETCH_URL = `${params.jobId}`

  return (
    <DetailedJob
      jobId={FETCH_URL}
      jobType={'Full time'}
      company={'Microsoft'}
      companyUrl={'www.google.com'}
      jobLocation={'Germany'}
      jobTitle={'PHP Senior'}
      jobDescription={'Hello'}
    />
  )
}
