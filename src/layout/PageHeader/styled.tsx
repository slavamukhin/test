import styled from 'styled-components'
import { BackButton } from '../BackButton'

export const Root = styled.div`
  margin-bottom: 40px;
`

export const Headline = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 12px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledBackButton = styled(BackButton)`
  margin-bottom: 8px;
`
