import styled from 'styled-components'
import { BsBriefcase } from 'react-icons/bs'

export const SearchBarContainer = styled.div`
  width: 80%;
  border-radius: 15px;
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
`

export const CaseIcon = styled(BsBriefcase)`
  padding: 0px 0px 0px 20px;
`

export const Bar = styled.input`
  width: 60%;
  padding: 20px;
  border: none;
  outline: none;

  @media only screen and (max-width: 1600px) {
    width: 50%;
  }
`

export const SearchButton = styled.button`
  width: 20%;
  color: white;
  background-color: #1e86ff;
  height: 100%;
  padding: 10px;
  margin-left: 5%;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`
