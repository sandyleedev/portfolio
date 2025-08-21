'use client'

import { useCallback } from 'react'

export const useFileDownload = () => {
  const downloadFile = useCallback(async (url: string, filename: string) => {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error('Failed to fetch file')

      const blob = await res.blob()
      const blobUrl = window.URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = blobUrl
      a.download = filename
      document.body.appendChild(a)
      a.click()
      a.remove()

      window.URL.revokeObjectURL(blobUrl)
    } catch (err) {
      console.error(err)
      alert('An error occurred while downloading the file')
    }
  }, [])

  return { downloadFile }
}
