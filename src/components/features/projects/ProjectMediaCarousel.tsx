import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Keyboard, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ProjectMediaCarousel({
  title,
  images,
}: {
  title: string
  images: string[]
}) {
  return (
    <div className="w-full mb-6 relative">
      <Swiper
        modules={[Pagination, Keyboard, A11y]}
        spaceBetween={16}
        freeMode={false}
        watchOverflow={true}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          // 모바일: 한 장씩 꽉 채움
          0: { slidesPerView: 1, centeredSlides: false },
          // 태블릿 이상: 콘텐츠 카드 방식
          768: { slidesPerView: 'auto', centeredSlides: false },
        }}
        className="rounded-xl overflow-visible"
      >
        {images.map((url, i) => (
          <SwiperSlide
            key={i}
            className="w-full md:!w-[360px]" // 모바일 w-full, md부터 고정폭
          >
            <div className="relative w-full h-64 md:h-96 bg-muted/50 rounded-lg overflow-hidden">
              <Image src={url} alt={`${title} ${i + 1}`} fill className="object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
