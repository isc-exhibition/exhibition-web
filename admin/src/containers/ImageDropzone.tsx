import React, { memo } from 'react';
import { useDropzone } from 'react-dropzone';
import { COLORS } from 'utils/theme';
import { css } from '@emotion/react';
import { ImageFile } from 'utils/types';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { Heading04 } from 'components/Heading/Heading04';
import { Heading01 } from 'components/Heading/Heading01';

interface Props {
  handleImageUpload: (images: ImageFile[]) => void;
  uploadedImage: ImageFile[];
  register?: UseFormRegister<FieldValues>;
  required?: boolean;
  name?: string;
  className?: string;
}

function ImageDropzone({
  handleImageUpload, uploadedImage, className,
}: Props) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const reader = new FileReader();
      reader.onload = () => {
        const imageBinaryString = reader.result;

        const uploadedImages = acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file),
          imageData: imageBinaryString,
        })) as ImageFile[];

        if (uploadedImages) {
          handleImageUpload(uploadedImages);
        }
      };
      reader.readAsDataURL(acceptedFiles[0]);
    },
    disabled: false,
    maxSize: 1e+7, // 10MB
  });

  const thumb = () => (
    <img
      src={uploadedImage[0]?.preview}
      alt={uploadedImage[0]?.name}
      width="100%"
      height="100%"
      css={css`
          object-fit: cover;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;`}
    />
  );

  return (
    <div
      {...getRootProps({ className: 'Image Dropzone' })}
      css={css`
        width: 132px;
        height: 132px;
        background-color: ${COLORS.lightGray};

        display: flex;
        align-items: center;
        justify-content: center;
        margin: 16px 0;
        `}
    >
      <input className={className} type="file" {...getInputProps()} />
      {uploadedImage?.length ? thumb()
        : (
          <Heading01 css={css`
            border: 1px solid ${COLORS.gray};
            border-radius: 50%; width: 30px;
            height: 30px; 
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center
            `}
          >
            +
          </Heading01>
        )}
    </div>
  );
}

export default memo(ImageDropzone);
