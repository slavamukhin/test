import { ButtonGroup, DatePicker, Dropzone, Input, Select2 } from '@inno/ui-kit'
import styled from 'styled-components'

export const MainTitlt = styled.h4`
  margin-top: 72px;
  margin-bottom: 40px;
`
export const LabelField = styled.div`
  font-size: 14px;
  color: #7b7e86;
  margin-bottom: 5px;
`

export const FormSection = styled.div`
  margin-bottom: 40px;
`

export const LastFormSection = styled.div`
  margin-bottom: 52px;
`
export const FormLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 20px;
`
export const FormLineShort = styled(FormLine)`
  width: 48.5%;
`

export const FormLineShort2 = styled(FormLine)`
  width: 369px;
`

export const ApiCreateWrapper = styled.div`
  width: 784px;
`

export const StyledInput = styled(Input)`
  width: 48.5%;
`

export const StyledInputBig = styled(Input)`
  width: 330px;
`

export const StyledInputFull = styled(Input)`
  width: 100%;
`
export const Label = styled.div`
  line-height: 40px;
`
export const InputRate = styled(Input)`
  width: 35%;
`

export const InputPeriod = styled(Input)`
  width: 19%;
`
export const PeriodTime = styled(Select2)`
  width: 33%;
`

export const VersionSelect = styled(Select2)`
  width: 48.5%;
`

export const FullSelect = styled(Select2)`
  width: 100%;
`

export const StyledSelect = styled(Select2)`
  width: 48.5%;
`

export const WrapperColumn = styled.div`
  width: 48.5%;
`

export const VersionNameInput = styled(Input)`
  width: 52%;
`

export const StyledDatePicker = styled(DatePicker)`
  width: 45%;
`

export const StyledDatePickerSmall = styled(DatePicker)`
  width: 170px;
`

export const StyledButtonGroup = styled(ButtonGroup)`
  margin-bottom: 32px;
`

export const WrapperLoader = styled.div`
  height: 654px;
`
