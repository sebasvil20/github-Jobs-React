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
      jobTime={'5 days ago'}
      companyImage={'https://images.unsplash.com/photo-1585842630354-c6766ebf210d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}
    />
  )
}
