import React from 'react'
import { configuration } from '../components/data/configuration'
import { ButtonSecondary } from '../components/buttons/ButtonSecondary'
import {
  LOCALSTORAGE,
  SESSIONSTORAGE
} from '../interfaces/enums/storage/index.d.ts'
import { ROUTE } from '../interfaces/enums/routes/index.d.ts'
import { useAuthContext } from '../context/AuthContext'
import { useViewTransition } from '../hooks/viewTransitions/useViewTransition'

const ConfigurationPage: React.FC = () => {
  const { setAuth } = useAuthContext()

  const { viewNavigate } = useViewTransition()

  const closeSession = (): void => {
    sessionStorage.removeItem(SESSIONSTORAGE.USER_DATA)
    localStorage.removeItem(LOCALSTORAGE.ID_USER)
    setAuth(null)
    viewNavigate(ROUTE.LOGINPAGE)
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
