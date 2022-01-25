import React, { FC, useRef, useState } from 'react'
import {
  Input,
  FileZone,
  FileZoneText,
  FileZoneTextFormat,
  WrapperFromat,
  WrapperFormatContent,
  StyledTrashOutline,
  TextName,
  TextSize,
  StyledCheckOutline,
  StyledDeleteOutline,
} from './StyledComponent'
import { InputFileProps } from './types'

export const InputFile: FC<InputFileProps> = ({ setError, setJsonContent }) => {
  const [file, setFile] = useState<File>()
  const [validationError, setValidationError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const uploadFile = (e: any) => {
    setValidationError(false)
    setError('')
    setFile(e.target.files[0])
    const reader = new FileReader()
    reader.readAsText(e.target.files[0], 'UTF-8')
    reader.onload = (e) => {
      try {
        JSON.parse(e.target?.result as string)
        setJsonContent(e.target?.result as string)
      } catch (e) {
        setValidationError(true)
        const error = e as Error
        setError(error.message as string)
        setJsonContent('')
      }
    }
  }

  const deleteFile = () => {
    //@ts-ignore
    inputRef.current.value = ''
    setFile(undefined)
  }

  return (
    <>
      <FileZone file={file}>
        <Input
          ref={inputRef}
          type='file'
          onChange={uploadFile}
          accept='.json'
        />
        <FileZoneText>Нажмите для загрузки</FileZoneText>
        <FileZoneTextFormat>Формат Json, не более 10 Мб</FileZoneTextFormat>
      </FileZone>
      {file && (
        <WrapperFromat>
          <WrapperFormatContent>
            {validationError ? <StyledDeleteOutline /> : <StyledCheckOutline />}
            <TextName>{file.name}</TextName>
          </WrapperFormatContent>
          <WrapperFormatContent>
            <TextSize>{Math.ceil(file.size / 1024)}Мб</TextSize>
            <StyledTrashOutline onClick={deleteFile} />
          </WrapperFormatContent>
        </WrapperFromat>
      )}
    </>
  )
}
