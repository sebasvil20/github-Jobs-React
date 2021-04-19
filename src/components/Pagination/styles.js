import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: block;
  min-width: 100%;
  margin: auto;
  overflow-x: scroll;
`

export const PageNumber = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  outline: none;
  background-color: white;
  margin-left: 10px;
  cursor: pointer;
`

export const List = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  margin: auto;
  justify-content: center;
`
