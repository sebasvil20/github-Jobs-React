import styled from 'styled-components'
import { BiWorld, BiTimeFive } from 'react-icons/bi'

export const DetailContainer = styled.div`
  width: 70%;
`

export const TitleContainer = styled.div`
  display: flex;
`

export const JobTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28.13px;
  font-family: 'Roboto', sans-serif;
  color: #334680;
  margin-right: 25px;
`

export const CompanyName = styled.h2`
  color: #334680;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`

export const Location = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b9bdcf;
`

export const Badge = styled.p`
  max-width: 80px;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  padding: 10px;
  border: 1px solid #334680;
  border-radius: 4px;
  color: #334680;
`

export const Content = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #334680;
  margin-top: 50px;
`

export const Label = styled.p`
  min-width: 100px;
  display: flex;
  align-items: center;
  color: #b9bdcf;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`

export const WorldIcon = styled(BiWorld)`
margin: 0px 5px 0px 0px;
  color: #b9bdcf;
`

export const TimeIcon = styled(BiTimeFive)`
  margin: 0px 5px 0px 0px;
  color: #b9bdcf;
`

export const LogoImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 4px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`

export const Minicard = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  margin-top: 50px;
`
