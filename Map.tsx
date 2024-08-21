import { Camera, MapView } from '@rnmapbox/maps'
import type { CameraRef } from '@rnmapbox/maps/src/components/Camera'
import { RefObject } from 'react'

type Props = {
  cameraRef?: RefObject<CameraRef>
}

export function Map({ cameraRef }: Props) {
  return (
    <MapView>
      <Camera ref={cameraRef} />
    </MapView>
  )
}
