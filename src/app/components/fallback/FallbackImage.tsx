// components/shared/ImageWithFallback.tsx
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  fallbackSrc: string;
}

const ImageWithFallback = ({ fallbackSrc, src, alt, ...rest }: Props) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageWithFallback;
