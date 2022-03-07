import React, { FC, useCallback } from 'react'
import { UploadChangeParam } from '@inno/ui-kit/lib/Dropzone/types'
import { StyledDropzone, Error } from './styled'

interface SpecificationFieldProps {
  onChange: (value: string) => void
  error?: string
}

export const SpecificationField: FC<SpecificationFieldProps> = ({
  onChange,
  error,
}) => {
  const handleChange = useCallback((info: UploadChangeParam) => {
    const reader = new FileReader()

    reader.readAsText(info.file.originalFile as Blob, 'UTF-8')
    reader.onload = (e) => onChange(e.target?.result as string)
    reader.onerror = (e) => console.error(e.target?.error?.message)
  }, [])

  return (
    <>
      <StyledDropzone
        single
        subLabel='Файл json не более 10 Мб'
        accept='application/json'
        validation={{
          types: ['application/json'],
          size: 10,
        }}
        onChange={handleChange}
        customRequest={({ onSuccess }) =>
          setTimeout(
            () => onSuccess && onSuccess('ok', {} as XMLHttpRequest),
            0
          )
        }
      />
      {error && <Error>{error}</Error>}
    </>
  )
}
