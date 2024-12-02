import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h2> Hi</h2>
      <Button>Jatin</Button>
      <Link href={'/dashboard'}>
      <Button>Dashboard</Button>
      </Link>
    </div>
  )
}

export default page
