import Image from 'next/image'
import HeroSection from './Home/HeroSection'
import Posts from './Home/Posts'
import CalloutSection from './Home/CalloutSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='container'>
        <Posts />
      </div>
      <CalloutSection />
    </>
  )
}