import axios from 'axios'
interface FileObj {
  name: string
  complete?: number // 上传进度
  uploading?: boolean // 是否正在上传
  susscess?: boolean // 是否上传成功
}
interface FileObjP {
  file: FileObj
}
interface Options {
  url: string
  onChange?: (files: any) => void
}
export default class CommonUploader {
  url: string
  fileData: any
  onChange?: (files: any) => void
  constructor(options: Options) {
    this.url = options.url
    this.onChange = options.onChange
  }
  upload(fileData: any) {
    this.fileData = fileData
    this.onChange && this.onChange(fileData)
    if (fileData?.length > 0) {
      ;[].map.call(fileData, (v: any) => {
        this.simgleUplaod(v)
      })
    } else {
      this.simgleUplaod(fileData[0])
    }
  }
  // 单个文件上传
  simgleUplaod(fileObj: any) {
    const formData = new FormData()
    formData.set('file', fileObj)
    fileObj.uploading = true
    axios({
      url: this.url,
      withCredentials: false,
      method: 'post',
      headers: { 'Content-type': 'multipart/form-data' },
      data: formData,
      onUploadProgress: (progressEvent: any) => {
        const complete = Number(
          ((progressEvent.loaded / progressEvent.total) * 100 || 0).toFixed(1)
        )
        fileObj.complete = complete > 98 ? 98 : complete
        this.onChange && this.onChange(this.fileData)
      }
    })
      .then((res: any) => {
        const n = res.data||{}
        if (n.code === 0) {
          fileObj.complete = 100
          fileObj.uploading = false
          fileObj.susscess = true
          fileObj.fileId = n.data?.fileId
          fileObj.suffix = n.data?.suffix
        } else {
          fileObj.uploading = false
          fileObj.susscess = false
        }
        this.onChange && this.onChange(this.fileData)
      })
      .catch(() => {
        fileObj.uploading = false
        fileObj.susscess = false
        this.onChange && this.onChange(this.fileData)
      })
  }
}
