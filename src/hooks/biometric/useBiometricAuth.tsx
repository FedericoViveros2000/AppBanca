import {
  browserSupportsWebAuthn,
  platformAuthenticatorIsAvailable
} from '@simplewebauthn/browser'
import { useState, useEffect } from 'react'
let avaible = false
const useBiometricAuth = () => {
  const [isAvaible, setIsAvaible] = useState(avaible)
  const [biometricUse, setBiometricUse] = useState(false)

  const biometricAvaible = async (): Promise<void> => {
    if (browserSupportsWebAuthn()) {
      avaible = await platformAuthenticatorIsAvailable()
      setIsAvaible(true)
    } else {
      setIsAvaible(avaible)
    }
  }

  useEffect(() => {
    const permission = localStorage.getItem('biometricAuth')
    if (permission === null) {
      biometricAvaible()
    } else {
      setBiometricUse(JSON.parse(permission))
    }
  }, [biometricUse])

  return {
    isAvaible,
    setIsAvaible,
    setBiometricUse,
    biometricUse
  }
}

export { useBiometricAuth }
