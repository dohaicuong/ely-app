import { css } from '../styled-system/css'
import { Button } from '@go1private/react'

function App() {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>
      <Button variant='primary'>
        hehe
      </Button>
    </div>
  )
}

export default App
