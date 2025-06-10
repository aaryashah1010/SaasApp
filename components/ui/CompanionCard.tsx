import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button'

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string; // Changed from 'colour' to 'color'
}

const CompanionCard = ({id, name, topic, subject, duration, color}: CompanionCardProps) => {
  return (
   <article className='companion-card' style={{backgroundColor: color}}>
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>
           {subject}
        </div>
        <button className='companion-bookmark'>
          <Image src='/icons/bookmark.svg'
            alt='bookmark icon'
           width={12.5}
           height={15}
          />
        </button>
      </div>
      <h2 className='text-2xl font-bold'>{name}</h2>
      <p className='text-sm'>{topic}</p>
      <div className='flex items-center gap-2 mt-2'>
          <Image src='/icons/clock.svg'
            alt='clock icon'
            width={16}
            height={16}
          />
          <p className='text-sm'>{duration} minutes</p> {/* Also fixed typo: 'texsm' to 'text-sm' */}
      </div>
      <Link href={`/companion/${id}`} className="w-full">
          <Button className='btn-primary w-full justify-center'>
            Launch Lesson
          </Button>
      </Link>
   </article>
  )
}

export default CompanionCard