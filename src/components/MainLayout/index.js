import { JobsList } from '../JobsList'
import { SideBar } from '../SideBar'
import { MainContainer } from './styles'

export const MainLayout = () => {
  return (
    <MainContainer>
      <SideBar />
      <JobsList />
    </MainContainer>
  )
}
