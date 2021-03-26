import React, { useState } from 'react'

const MyComponent = () => {
  const [state, setState] = useState(Date.now())
  return (
    <section>
      <button onClick={() => setState(Date.now())}>{state}</button>
    </section>
  )
}

export default MyComponent
