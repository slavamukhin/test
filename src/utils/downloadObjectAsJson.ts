export const downloadObjectAsJson = (object: any, fileName: string): void => {
  const blob = new Blob([JSON.stringify(object, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.setAttribute('href', url)
  link.setAttribute('download', fileName)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
