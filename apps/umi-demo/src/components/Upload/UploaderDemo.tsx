import { parse } from 'qs';
import React, { useState, useEffect } from 'react';
import CommonUploader from './Uploader'
import FileItem from './FileItem'

const UploaderDemo = () => {
  const [files, setFiles] = useState([])
  const [uploader, setUploader] = useState(null)
  useEffect(() => {
    setUploader(new CommonUploader({
      url: 'https://crm-dev.itslaw.com/file/standard/upload',
      onChange: (files) => {
        setFiles({ ...files })
      }
    }))
  }, [])
  const getFlie = (e) => {
    const files = e.target.files
    setFiles(files)
    uploader.upload(files)
  }
  return (
    <>
      <input type="file" multiple="multiple" onChange={(e) => { getFlie(e) }} ></input>
      {[].map.call(files, ((v, i) => {
        return (
          <FileItem key={`${v.fileId}${i}`} {...v} />
        )
      }))}
    </>
  )
}

export default UploaderDemo
