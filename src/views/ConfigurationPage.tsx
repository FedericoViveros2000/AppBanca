import React from 'react'
import { configuration } from '../components/data/configuration'
import { ButtonSecondary } from '../components/buttons/ButtonSecondary'
import {
  SESSIONSTORAGE
} from '../interfaces/enums/storage/index.js'
import { ROUTE } from '../router/router'
import { useAuthContext } from '../context/AuthContext'
import { useViewTransition } from '../hooks/viewTransitions/useViewTransition'
import NavBar from '../components/navigation/NavBar'

const ConfigurationPage: React.FC = () => {
  const { setAuth } = useAuthContext()

  const { viewNavigate } = useViewTransition()

  const closeSession = (): void => {
    sessionStorage.removeItem(SESSIONSTORAGE.USER_DATA)
    // localStorage.removeItem(LOCALSTORAGE.ID_USER)
    if (setAuth !== null) {
      setAuth(null)
    }
    viewNavigate(ROUTE.LOGIN)
  }

  return (<>
    <NavBar
      title='Back'
      urlBack={ROUTE.HOME}
    />
    <main className='px-1-5'>
      <section className="container">
          <ButtonSecondary
            isFetching={false}
            styleAdd='absolute left-0'
            title={configuration[0]?.title}
            handleChange={closeSession}
          />
      </section>
    </main>
  </>
  )
}

export default ConfigurationPage
