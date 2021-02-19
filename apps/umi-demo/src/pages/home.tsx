import React from "react";
import styles from "./home.less";
import SliceUpload from '@/components/SliceUpload'
import SliceUploadDemo from '@/components/SliceUpload/SliceUploadDemo'

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page home</h1>
      <SliceUpload />

      <SliceUploadDemo />
    </div>
  );
};
