export const shareData = async (): Promise<void> => {
  console.log('Compartir')
  const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }
  try {
    const res = await navigator.share(shareData)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
