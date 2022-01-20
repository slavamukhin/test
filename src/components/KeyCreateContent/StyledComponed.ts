import styled from 'styled-components'
import { Input, Select2 } from '@inno/ui-kit'

export const KeyCreateContentWrapper = styled.div`
  max-width: 592px;
  padding: 28px 40px 32px 40px;
  border: 1px solid #d5d8de;
`

export const MainTitle = styled.h4`
  margin-bottom: 16px;
`

export const Title = styled.h6`
  margin-bottom: 20px;
`

export const FormPartLimit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-right: 143px;
`
export const InputFirst = styled(Input)`
  width: 120px;
`

export const InputSecond = styled(Input)`
  width: 70px;
  margin-top: 25px;
`

export const StyledSelect = styled(Select2)`
  width: 126px;
  margin-top: 4px;
`

export const InputAuth = styled(Input)`
  width: 250px;
`

export const FormHorizantal = styled.div`
  margin-bottom: 40px;
`

export const FromPartAuth = styled(FormPartLimit)`
  padding-right: 0;
  margin-bottom: 32px;
`
export const Label = styled.div`
  line-height: 40px;
`
export const FormLine = styled.div`
  margin-bottom: 16px;
`