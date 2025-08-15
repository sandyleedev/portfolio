import Image from 'next/image'

export default function AboutSection() {
  return (
    <>
      <div className="w-[300vw] h-screen px-40 py-10">
        <div className="text-9xl flex items-center gap-5">
          <Image src="/icons/home.png" alt="home-icon" width={180} height={180} />
          About
        </div>
        <div>
          timeline. animation line draw. ponylink. education. think bubbles. interests (cloud).
          future goal. open worldwide<br/>
          put cert here. make like timeline as well. spot them and decorate with square paper-like image with interaction
        </div>
      </div>
    </>
  )
}
