import React from 'react'
import { configuration } from '../components/data/configuration'
import { ButtonSecondary } from '../components/buttons/ButtonSecondary'
import {
  LOCALSTORAGE,
  SESSIONSTORAGE
} from '../interfaces/enums/storage/index.d.ts'
import { useNavigate } from 'react-router-dom'
import { ROUTE } from '../interfaces/enums/routes/index.d.ts'
import { useAuthContext } from '../context/AuthContext'

const ConfigurationPage: React.FC = () => {
  const { setAuth } = useAuthContext()

  const navigate = useNavigate()

  const closeSession = (): void => {
    sessionStorage.removeItem(SESSIONSTORAGE.USER_DATA)
    localStorage.removeItem(LOCALSTORAGE.ID_USER)
    setAuth(null)
    navigate(ROUTE.LOGINPAGE)
  }

  return (
    <main className='px-1-5'>
      <section className="container">
          <ButtonSecondary
            isFetching={false}
            styleAdd='absolute left-0 bottom-2'
            title={configuration[0]?.title}
            handleChange={closeSession}
          />
      </section>
    </main>
  )
}

export default ConfigurationPage
