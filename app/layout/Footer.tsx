import React from 'react'
import githubIcon from '../../public/github-icon.svg'
import linkedinIcon from '../../public/linkedin-icon.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-gray-800 text-white py-12 px-4'><div className='flex container justify-between'>
      <div className='flex flex-row items-center'>
        <div>
          <div className='text-2xl mb-3'>NEO</div>
          <div className='text-sm'>©  2023 NEO BLOG</div>
        </div>
      </div>
      <div className='flex'>
        <Link href='https://github.com/avr-varshan' target="_blank" className='mr-3'>
          <Image src={githubIcon} alt="github" width={32} height={32} />
        </Link>
        <Link href='https://www.linkedin.com/in/varshan-avr-554b8a248/' target="_blank">
          <Image src={linkedinIcon} alt="LinkedIn" width={32} height={32} className='rounded-full'/>
        </Link>
      </div>
    </div></div>
  )
}

export default Footer