import { SearchBarContainer, Bar, CompleteBar, CaseIcon, SearchButton } from './styles'

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <CompleteBar>
          <CaseIcon size={20}/>
        <Bar placeholder='Title, companies, expertise or benefits' />
        <SearchButton type="button">Search</SearchButton>
      </CompleteBar>
    </SearchBarContainer>
  )
}
