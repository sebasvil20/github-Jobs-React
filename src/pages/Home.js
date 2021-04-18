import { useState, useEffect } from 'react'
import { MainLayout } from '../components/MainLayout'
import { SearchBar } from '../components/SearchBar'
import jobsJSON from '../FakeApi'

export const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState('')

  const [jobs, setJobs] = useState([])
  const [jobsToPrint, setJobsToPrint] = useState([])
  const [loading, setLoading] = useState(true)

  const jsonToJobs = []

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value)
  }

  const setData = async () => {
    await jobsJSON.map((job) => jsonToJobs.push(job))
    setJobs(jsonToJobs)
    setJobsToPrint(jsonToJobs)
    setLoading(false)
  }

  //Filter Jobs
  const filter = async () => {
    const filtered = await jobs.filter((job) => {
      return (
        job.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.company.toLowerCase().includes(searchKeyword.toLowerCase()) 
      )
    })
    setJobsToPrint(filtered)
    setLoading(false)
  }

  useEffect(() => {
    if (searchKeyword === '') {
      setData()
    } else {
      setLoading(true)
      filter()
    }

    //eslint-disable-next-line
  }, [searchKeyword])

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <MainLayout
        jobs={jobsToPrint}
        loading={loading}
        setLoading={setLoading}
        keyword={searchKeyword}
      />
    </>
  )
}
