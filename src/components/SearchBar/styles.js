import styled from 'styled-components'
import { BsBriefcase } from 'react-icons/bs'

export const SearchBarContainer = styled.div`
  width: 80%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: auto;
  height: 200px;
  background-image: url('https://i.ibb.co/S7bx1tz/background-Img.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CompleteBar = styled.div`
  width: 60%;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

  @media only screen and (max-width: 900px){
    width: 80%;
  }
`

export const CaseIcon = styled(BsBriefcase)`
  padding: 0px 0px 0px 20px;
`

export const Bar = styled.input`
  width: 90%;
  padding: 20px;
  border: none;
  outline: none;
  
  @media only screen and (max-width: 900px){
    width: 90%;
  }
`