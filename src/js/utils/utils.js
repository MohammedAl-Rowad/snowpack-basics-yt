export const onClick = () => {
  // * importing a package from node_modules
  import('canvas-confetti').then((confetti) => {
    confetti.create(document.getElementById('canvas'), {
      resize: false,
      useWorker: true,
    })({ particleCount: 200, spread: 100 })
  })
}

/*
or...
   export const onClick = async () => {
        const confetti = await import('canvas-confetti')
        confetti.create(document.getElementById('canvas'), {
            resize: false,
            useWorker: true,
        })({ particleCount: 200, spread: 100 })
    }
*/
