import { PaginationContainer, PageNumber, List } from './styles'

export const Pagination = ({
  jobsPerPage,
  totalJobs,
  paginate,
  setLoading,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <PaginationContainer>
      <List>
        {pageNumbers.map((number) => (
          <li key={number}>
            <PageNumber
              onClick={() => {
                paginate(number)
                setLoading(true)
              }}
            >
              {number}
            </PageNumber>
          </li>
        ))}
      </List>
    </PaginationContainer>
  )
}
