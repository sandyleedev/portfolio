'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Keyboard, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Lightbox
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

export default function ProjectMediaCarousel({
                                               title,
                                               images,
                                             }: {
  title: string
  images: string[]
}) {
  const [index, setIndex] = useState<number>(-1)

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
          0: { slidesPerView: 1, centeredSlides: false },
          768: { slidesPerView: 'auto', centeredSlides: false },
        }}
        className="rounded-xl overflow-visible"
      >
        {images.map((url, i) => (
          <SwiperSlide
            key={i}
            className="w-full md:!w-[360px] cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <div className="relative w-full h-64 md:h-96 bg-muted/50 rounded-lg overflow-hidden">
              <Image
                src={url}
                alt={`${title} ${i + 1}`}
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((url, i) => ({
          src: url,
          description: `${title} — Image ${i + 1}`,
        }))}
        plugins={[Zoom]}
      />
    </div>
  )
}
