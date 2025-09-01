import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function AboutCard() {

  return (
    <>
      <Card className="flex w-full h-full flex-col overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer gap-1">
        <div className="relative w-full h-40 mb-6">
          image
        </div>

        <CardHeader className="gap-0">
          <CardTitle className="text-[100%] px-1 line-clamp-2 overflow-hidden h-[3em]">
            title
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col">
          desc
        </CardContent>
      </Card>
    </>
  )
}
