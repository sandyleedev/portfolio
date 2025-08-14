import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <Image src={'/icons/apple.png'} width={100} height={100} alt={'apple'} className="my-4" />
        <h1 className="text-6xl font-bold mb-12">Contact</h1>

          <div className="flex gap-2 items-center">
              <div className="border border-black rounded-full inline-block px-10 py-2 text-xl cursor-pointer">
                  jennaleework@gmail.com
              </div>
              <div className="border border-black rounded-full inline-block px-10 py-2 text-xl cursor-pointer">
                  copy
              </div>
          </div>
      </div>
    </>
  )
}
