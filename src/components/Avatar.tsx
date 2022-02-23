import React from 'react'
import Image from 'next/image'

type AvatarProps = {
  src: string
  alt: string
}

const Avatar = ({ src, alt }: AvatarProps) => {
  return <Image className="rounded-full" src={src} alt={alt} width={40} height={40} />
}

export default Avatar
