import Image from 'next/image'
import { useTranslations } from 'next-intl'
import ButtonText from '@/components/ui/ButtonText'

export default function About() {
  const t = useTranslations('about')
  return (
    <>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <Image src={'/icons/apple.png'} width={100} height={100} alt={'apple'} className="my-4" />
        <h1 className="text-6xl font-bold mb-12">About</h1>
        <div>
          {/* Intro */}
          <section>
            <div className="break-all">{t('intro')}</div>
          </section>

          {/* Experience */}
          <section>
            <ButtonText>Experience</ButtonText>
            <div className="flex flex-col md:flex-row py-4 gap-10 mt-5">
              <div className="pt-2 shrink-0">
                <Image
                  src="/images/about/ponylink_logo.png"
                  alt="company_logo"
                  width={160}
                  height={20}
                />
              </div>
              <div>
                <div className="text-2xl font-semibold">{t('experience.ponylink.title')}</div>
                <div>{t('experience.ponylink.subtitle')}</div>
                <div className="mt-5 whitespace-pre-line">{t('experience.ponylink.desc')}</div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mt-5">
            <ButtonText>Education</ButtonText>
            {/* UoB */}
            <div className="flex flex-col md:flex-row py-4 gap-10 mt-5">
              <div className="w-[160px] flex md:justify-center">
                <Image src="/images/about/uob_logo.png" alt="uob_logo" width={100} height={100} />
              </div>
              <div>
                <div className="text-2xl font-semibold">{t('education.uob.title')}</div>
                <div>{t('education.uob.major')}</div>
                <div>{t('education.uob.date')}</div>
              </div>
            </div>

            {/* SNUE */}
            <div className="flex flex-col md:flex-row py-4 gap-10 mt-5">
              <div className="w-[160px] flex md:justify-center">
                <Image src="/images/about/snue_logo.png" alt="snue_logo" width={100} height={100} />
              </div>
              <div>
                <div className="text-2xl font-semibold">{t('education.snue.title')}</div>
                <div>{t('education.snue.major')}</div>
                <div>{t('education.snue.date')}</div>
              </div>
            </div>
          </section>

          {/* Certificate */}
          <section className="mt-10">
            <ButtonText>Certificate</ButtonText>
            {/* AWS SAA */}
            <div className="flex flex-col md:flex-row py-4 gap-10 mt-5">
              <div className="w-[160px] flex md:justify-center">
                <Image src="/images/about/aws_saa.png" alt="aws_saa" width={120} height={120} />
              </div>
              <div>
                <div className="text-2xl font-semibold">{t('certificate.aws.title')}</div>
                <div>{t('certificate.aws.institute')}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
