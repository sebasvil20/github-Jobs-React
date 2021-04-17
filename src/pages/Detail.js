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
      jobDescription={
        '<h3>General</h3>\n<ul>\n<li>We only accept direct applications at this time. No recruiters please.</li>\n<li>We are currently working from home, but when appropriate, successful applicants are expected to work - at least partially - at our offices in South West London, UK.</li>\n<li>We are able to sponsor T2 visas for international applicants.</li>\n<li><a href="https://docs.google.com/document/d/1I1i9ORg3yQFEYjNH81G3T1qbG72QaxQ0zUFXCOlPUR8/">Privacy notice</a></li>\n<li>We closed our <a href="https://https://www.eu-startups.com/2020/07/uk-startup-numbereight-raises-a-e2-million-seed-round-to-predict-consumer-behaviour/">second round of funding</a> in the middle of the pandemic from a highly reputable Series A investor.</li>\n<li>We have received significant market traction from our beachhead customers in digital audio, mobile advertising, mobile gaming, and are now looking to scale up fast.</li>\n</ul>\n'
      }
      jobTime={'5 days ago'}
      howToApply={'Llamar aki'}
      companyImage={
        'https://images.unsplash.com/photo-1585842630354-c6766ebf210d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    />
  )
}
