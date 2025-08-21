import { useTranslations } from 'next-intl'

export default function AboutSection() {
  const t = useTranslations('about')

  return (
    <>
      <div className="h-screen px-20 py-5 flex flex-col">
        <div className="text-8xl flex items-center gap-5">
          <img src="/icons/home.png" alt="home-icon" className="w-[140px]" />
          About
        </div>
        {/*timeline. animation line draw. ponylink. education. think bubbles. interests (cloud).*/}
        {/*future goal. open worldwide<br/>*/}
        {/*put cert here. make like timeline as well. spot them and decorate with square paper-like image with interaction*/}
        <div className="flex-1 flex items-start mt-10 ml-6 gap-10">
          <div className="w-[45vw] flex flex-col items-center text-xl">
            <div className="border border-black rounded-md w-[100%] h-[90%] p-2">
              <div className="bg-green-500 text-white inline-block px-3 py-1 rounded-full font-semibold">
                {t('experience.ponylink.title')}
              </div>
              <div className="p-2">
                <div className="text-gray-500 mb-1">{t('experience.ponylink.subtitle')}</div>
                <div className="whitespace-pre-line">{t('experience.ponylink.desc')}</div>
              </div>
            </div>
          </div>

          {/*<div className="w-[30vw] flex flex-col items-center text-xl">*/}
          {/*  <div className="border border-black rounded-md w-[100%] h-[90%] p-2">*/}
          {/*    <div className="bg-blue-500 text-white inline-block px-3 py-1 rounded-full font-semibold">*/}
          {/*      Certificate*/}
          {/*    </div>*/}
          {/*    <div className="p-2">*/}
          {/*      <div className="whitespace-pre-line">{t('certificate.summary')}</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="w-[30vw] flex flex-col items-center text-xl">
            <div className="border border-black rounded-md w-[100%] h-[90%] p-2">
              <div className="bg-blue-500 text-white inline-block px-3 py-1 rounded-full font-semibold">
                {t('certificate.aws.title')}
              </div>
              <div className="p-2">
                <div className="text-gray-500 mb-1">
                  {t('certificate.aws.institute')} | {t('certificate.aws.date')}
                </div>
                <div className="whitespace-pre-line">{t('certificate.aws.desc')}</div>
              </div>
            </div>
          </div>

          <div className="w-[30vw] flex flex-col items-center text-xl">
            <div className="border border-black rounded-md w-[100%] h-[90%] p-2">
              <div className="bg-blue-500 text-white inline-block px-3 py-1 rounded-full font-semibold">
                {t('certificate.sqld.title')}
              </div>
              <div className="p-2">
                <div className="text-gray-500 mb-1">
                  {t('certificate.sqld.institute')} | {t('certificate.sqld.date')}
                </div>
                <div className="whitespace-pre-line">{t('certificate.sqld.desc')}</div>
              </div>
            </div>
          </div>

          <div className="w-[40vw] flex flex-col items-center text-xl">
            <div className="border border-black rounded-md w-[100%] h-[90%] p-2">
              <div className="bg-blue-500 text-white inline-block px-3 py-1 rounded-full font-semibold">
                {t('certificate.eip.title')}
              </div>
              <div className="p-2">
                <div className="text-gray-500 mb-1">
                  {t('certificate.eip.institute')} | {t('certificate.eip.date')}
                </div>
                <div className="whitespace-pre-line">{t('certificate.eip.desc')}</div>
              </div>
            </div>
          </div>

          <div className="w-[40vw] flex flex-col items-center text-xl">
            <div className="border border-black rounded-md w-[100%] h-[90%] p-2">
              <div className="bg-blue-500 text-white inline-block px-3 py-1 rounded-full font-semibold">
                {t('certificate.linux.title')}
              </div>
              <div className="p-2">
                <div className="text-gray-500 mb-1">
                  {t('certificate.linux.institute')} | {t('certificate.linux.date')}
                </div>
                <div className="whitespace-pre-line">{t('certificate.linux.desc')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
