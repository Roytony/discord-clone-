import React from 'react'
import Image from 'next/image'

type ServerProps = {
  img: string
  name: string
  onClick: () => void
}

const Server = ({ img, name, onClick }: ServerProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={onClick} onKeyDown={onClick} className="group flex flex-col items-center">
      <Image
        className="cursor-pointer hover:scale-110 duration-100 ease-out"
        width={40}
        height={40}
        src={img}
        alt={name}
      />
      <span className="invisible text-gray-200 p-2 text-xs font-bold transition-all ease-out duration-100  group-hover:visible">
        {name}
      </span>
    </div>
  )
}

export default Server
