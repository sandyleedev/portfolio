import Starburst from '@/components/ui/Starburst'

export default function MobileMain() {
  return (
    <>
      <div className="w-screen h-screen text-black flex items-center justify-center bg-green-500 text-white p-4 flex flex-col gap-10">
        <div className="w-[128px] h-[128px] animate-rotate">
          <Starburst />
        </div>
        <div className="text-center text-[8vw]">
          Mobile Page
          <br />
          in progress
        </div>
      </div>
    </>
  )
}
