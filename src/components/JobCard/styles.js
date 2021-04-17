import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 70%;
  height: 120px;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 5px 15px;
  margin-top: 30px;
  background: white;
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
`

export const Title = styled.h1`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  line-height: 21.09px;
  font-weight: 400;
`

export const Badge = styled.p`
font-size: 12px;
font-weight: 700;
line-height: 14.06px;
padding: 10px;
border: 1px solid #334680;
border-radius: 4px;

`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  padding: 10px;
`
