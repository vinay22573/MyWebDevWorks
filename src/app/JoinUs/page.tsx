import { section } from 'framer-motion/client'
import React from 'react'
import OurTeam from '@/components/OurTeam'
import OpenPositions from '@/components/OpenPositions'
function page() {
  return (
    <section>
        <OpenPositions />
        <OurTeam />
    </section>
  )
}

export default page