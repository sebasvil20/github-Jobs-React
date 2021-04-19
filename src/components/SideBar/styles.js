import styled from 'styled-components'
import { BiWorld } from "react-icons/bi";

export const SideBarContainer = styled.div`
  width: 30%; 
  @media only screen and (max-width: 1250px){
    width: 100%;
    margin-bottom: 50px;
  }
`

export const CheckBoxFullTime = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #334680;
`

export const CheckBoxInput = styled.input`
  border: 20px solid red;
  margin: 0px 10px 0px 10px;
`

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #b9bdcf;
  margin-top: 20px;
`

export const LocationInput = styled.input`
  border: none;
  outline: none;
  color: #b9bdcf;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  min-width: 80%;
  height: 100%;

`

export const LocationContainer = styled.div`
  width: 90%;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  justify-content: start;
  height: 50px;
  align-items: center;
  margin-top: 20px;
  
  
  @media only screen and (max-width: 1250px){
    width: 100%;
  }
`

export const WorldIcon = styled(BiWorld)`
    color: #B9BDCF;
    margin: 0px 10px 0px 10px;
`
