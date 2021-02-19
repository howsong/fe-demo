import React from 'react';
import SparkMD5 from 'spark-md5'

const SliceUpload = () => {
  const handleChange = (e) => {
    const loadNext = () => {
      var start = currentChunk * chunkSize;
      var end = start + chunkSize > file.size ? file.size : (start + chunkSize);
      reader.readAsArrayBuffer(blobSlice.call(file, start, end));
    };
    const files = e.target.files
    const file = files[0]
    const size = file.size
    const chunkSize = 1024 * 1024
    const chunks = Math.ceil(size / chunkSize)
    console.log(chunks, '切片个数')
    const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
    const spark = new SparkMD5.ArrayBuffer()
    const reader = new FileReader()
    let currentChunk = 0
    reader.onload = function (e) {
      const result = e.target.result;
      spark.append(result);
      currentChunk++;
      if (currentChunk < chunks) {
        loadNext();
        console.log(`第${currentChunk}分片解析完成，开始解析${currentChunk + 1}分片`);
      } else {
        const md5 = spark.end();
        console.log('解析完成');
        console.log(md5);
      }
    };
    loadNext()
  }
  return (
    <div>
      <h3>切片上传</h3>
      <input type="file" onChange={handleChange} />
    </div>
  )
}

export default SliceUpload
