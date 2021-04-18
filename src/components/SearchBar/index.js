import { SearchBarContainer, Bar, CompleteBar, CaseIcon } from './styles'

export const SearchBar = ({handleSearch}) => {
  return (
    <SearchBarContainer>
      <CompleteBar>
          <CaseIcon size={20}/>
        <Bar placeholder='Title, companies, expertise or benefits' onChange={(e) => handleSearch(e)}/>
      </CompleteBar>
    </SearchBarContainer>
  )
}
