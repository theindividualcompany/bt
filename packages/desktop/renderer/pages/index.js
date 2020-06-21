import Link from 'next/link'
import { useEffect } from 'react'
import ipc from '../utils/ipc'

export default () => {

  return (
    <>
      <span>This is Next.js speaking</span>
      <Link href='/another'>
        <a>another</a>
      </Link>
    </>
  )
}