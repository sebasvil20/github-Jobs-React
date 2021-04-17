import { SideBarContainer, CheckBoxFullTime, CheckBoxInput, LocationInput, LocationContainer, Title, WorldIcon } from './styles'

export const SideBar = () => {
  return (
    <SideBarContainer>
      <div>
          <CheckBoxInput type="checkbox" value="fullTime" id="fullTime"/> 
          <CheckBoxFullTime for="fullTime">Full Time</CheckBoxFullTime>
      </div>
      <div>
          <Title>
              Location
          </Title>
          <LocationContainer>
              <WorldIcon />
          <LocationInput placeholder="City, state, Zip code or country" />
          </LocationContainer>
      </div>
    </SideBarContainer>
  )
}
