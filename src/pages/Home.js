import { useState, useEffect } from 'react'
import { MainLayout } from '../components/MainLayout'
import { SearchBar } from '../components/SearchBar'
import jobsJSON from '../FakeApi'

export const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchLocation, setSearchLocation] = useState('')
  const [checked, setChecked] = useState(false)

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
      return searchKeyword !== '' && searchLocation !== '' && checked
        ? (job.description
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) &&
            job.type === 'Full Time' &&
            job.location
              .toLowerCase()
              .includes(searchLocation.toLowerCase())) ||
            (job.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
              job.type === 'Full Time' &&
              job.location
                .toLowerCase()
                .includes(searchLocation.toLowerCase())) ||
            (job.company.toLowerCase().includes(searchKeyword.toLowerCase()) &&
              job.type === 'Full Time' &&
              job.location.toLowerCase().includes(searchLocation.toLowerCase()))
        : searchKeyword !== '' && checked
        ? (job.description
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) &&
            job.type === 'Full Time') ||
          (job.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
            job.type === 'Full Time') ||
          (job.company.toLowerCase().includes(searchKeyword.toLowerCase()) &&
            job.type === 'Full Time')
        : searchKeyword !== '' && searchLocation !== ''
        ? (job.description
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) &&
            job.location
              .toLowerCase()
              .includes(searchLocation.toLowerCase())) ||
          (job.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
            job.location
              .toLowerCase()
              .includes(searchLocation.toLowerCase())) ||
          (job.company.toLowerCase().includes(searchKeyword.toLowerCase()) &&
            job.location.toLowerCase().includes(searchLocation.toLowerCase()))
        : searchLocation !== '' && checked
        ? job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
          job.type === 'Full Time'
        : checked
        ? job.type === 'Full Time'
        : searchLocation !== ''
        ? job.location.toLowerCase().includes(searchLocation.toLowerCase())
        : searchKeyword !== ''
        ? job.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          job.company.toLowerCase().includes(searchKeyword.toLowerCase())
        : null
    })
    setJobsToPrint(filtered)
    setLoading(false)
  }

  useEffect(() => {
    if (searchKeyword === '' && checked === false && searchLocation === '') {
      setData()
    } else {
      setLoading(true)
      filter()
    }
    //eslint-disable-next-line
  }, [searchKeyword, checked, searchLocation])

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <MainLayout
        jobs={jobsToPrint}
        loading={loading}
        setLoading={setLoading}
        keyword={searchKeyword}
        setChecked={setChecked}
        setSearchLocation={setSearchLocation}
        searchLocation={searchLocation}
      />
    </>
  )
}
