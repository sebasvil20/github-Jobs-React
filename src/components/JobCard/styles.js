import styled from 'styled-components'
import { BiWorld, BiTimeFive } from 'react-icons/bi'

export const CardContainer = styled.div`
  height: 120px;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 5px 15px;
  margin-top: 30px;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`

export const Image = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 4px;
`

export const Company = styled.p`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 14.06px;
  color: #334680;
`

export const Title = styled.h1`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  line-height: 21.09px;
  font-weight: 400;
  color: #334680;
`

export const Badge = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  padding: 10px;
  border: 1px solid #334680;
  border-radius: 4px;
  color: #334680;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding: 10px;
`

export const LabelContainer = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b9bdcf;
  flex-wrap: wrap;
  margin-top: 60px;
`
export const Label = styled.p`
  margin-left: 10px;
  min-width: 100px;
  display: flex;
  align-items: center;
`
export const WorldIcon = styled(BiWorld)`
  margin: 0px 10px 0px 10px;
  color: #b9bdcf;
`

export const TimeIcon = styled(BiTimeFive)`
  margin: 0px 10px 0px 10px;
  color: #b9bdcf;
`
