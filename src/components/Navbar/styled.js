import styled from 'styled-components'
import {Link as LinkComponent} from '@reach/router'

export const Nav = styled.div`
    width: 80%;
    padding: 30px 0px 30px;
    margin: auto;
`

export const Title = styled(LinkComponent)`
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
    color: black;
    line-height: 36px;
`

export const Jobs = styled.span`
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
`