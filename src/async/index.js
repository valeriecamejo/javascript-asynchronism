const resolveAfter2Secondes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved')
      //reject(new Error('Internal server error'))
    }, 2000)
  })
}

const asyncCall = async () => {
  try {
    const result = await resolveAfter2Secondes()
    console.log(result)
  } catch (err) {
    console.error(err)
  }
}

asyncCall()