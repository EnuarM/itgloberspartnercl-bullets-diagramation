import React, { PropsWithChildren } from 'react'
import { BulletsSchema } from './BulletTypes'
import { useDevice } from 'vtex.device-detector'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { getBulletsAsTSXList } from './modules/bulletsAsList'


export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProps>) => {

  const { isMobile } = useDevice()
  const { list } = useListContext() || []


  const bulletsGroup = getBulletsAsTSXList(bullets)
  const newListContextValue = list.concat(bulletsGroup)

  if (false) {
    console.log(children, list)
  }

  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
          ?
          <div>{bulletsGroup}</div>
          :
          children
      }
    </ListContextProvider>
  )
}
export default BulletGroup
