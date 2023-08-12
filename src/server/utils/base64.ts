const base64ToUint8 = (base64String: string): Uint8Array => {
  const binaryString = atob(base64String)
  const buffer = new Uint8Array(binaryString.length)

  for (let i = 0; i < binaryString.length; i++) {
    buffer[i] = binaryString.charCodeAt(i)
  }

  return buffer
}

export { base64ToUint8 }
