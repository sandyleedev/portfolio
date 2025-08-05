'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function ProjectDetail() {
  const params = useParams()
  const id = params.id // 'wishlist' 같은 값

  return (
    <>
      <Link href={'/projects'} className={'text-5xl'}>
        ◀️
      </Link>
      <div className={'mt-6 text-3xl font-extrabold'}>Detail of project: {id}</div>
    </>
  )
}
