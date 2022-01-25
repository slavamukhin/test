import { CheckOutline, DeleteOutline, TrashOutline } from '@inno/icons-kit'
import styled from 'styled-components'
import { FileZoneProps } from './types'

export const Input = styled.input`
  display: none;
`

export const FileZone = styled.label<FileZoneProps>`
  display: ${({ file }) => (!file ? 'flex' : 'none')};
  border: 1px dashed #b1b5bb;
  width: 100%;
  height: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const FileZoneText = styled.div`
  font-size: 14px;
  color: #0062ff;
`

export const FileZoneTextFormat = styled.div`
  font-size: 14px;
  color: #7b7e86;
`

export const WrapperFromat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f3f4f6;
  height: 56px;
  border-radius: 4px;
  padding: 19px;
`

export const WrapperFormatContent = styled.div`
  display: flex;
`

export const StyledTrashOutline = styled(TrashOutline)`
  margin-left: 10px;
  color: #7b7e86;
  cursor: pointer;
`

export const TextName = styled.div`
  margin-left: 10px;
`

export const TextSize = styled.div`
  color: #7b7e86;
`

export const StyledCheckOutline = styled(CheckOutline)`
  color: #1ba049;
`

export const StyledDeleteOutline = styled(DeleteOutline)`
  color: red;
`
