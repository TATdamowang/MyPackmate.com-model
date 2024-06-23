// components/ui/ImageUploader.tsx
import React from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onUpload }) => {
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};

export default ImageUploader;
