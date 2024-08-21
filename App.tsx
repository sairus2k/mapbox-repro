import { useRef } from 'react'
import { type Camera } from '@rnmapbox/maps'
import { Map } from './Map'

function App() {
  const cameraRef = useRef<Camera>(null)

  return <Map cameraRef={cameraRef} />
}

export default App
