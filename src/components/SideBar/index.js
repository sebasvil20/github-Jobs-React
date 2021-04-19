import {
  SideBarContainer,
  CheckBoxFullTime,
  CheckBoxInput,
  LocationInput,
  LocationContainer,
  Title,
  WorldIcon,
} from './styles'

export const SideBar = ({ setChecked, setSearchLocation, searchLocation }) => {
  return (
    <SideBarContainer>
      <div>
        <CheckBoxInput
          type='checkbox'
          value='fullTime'
          id='fullTime'
          onChange={(e) => {
            setChecked(e.currentTarget.checked)
          }}
        />
        <CheckBoxFullTime htmlFor='fullTime'>Full Time</CheckBoxFullTime>
      </div>
      <div>
        <Title>Location</Title>
        <LocationContainer>
          <WorldIcon />
          <LocationInput
            placeholder='City, state, Zip code or country'
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </LocationContainer>
      </div>
    </SideBarContainer>
  )
}
