import React from 'react'
import Image from 'next/image'


const ImageLayout = ({ src, alt, width, height, className}) => {
  return <Image 
  src={src}
  alt={alt}
  width={width} 
  height={height} 
  className={className}
priority
  />
}
export default ImageLayout;