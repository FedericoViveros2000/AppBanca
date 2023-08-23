import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router-dom'

interface Props {
  viewNavigate: (newRoute: string) => void
}

export const useViewTransition = (): Props => {
  const navigate = useNavigate()

  const viewNavigate = (newRoute: string): void => {
    if (!document.startViewTransition) {
      navigate(newRoute); return
    }
    document.startViewTransition(() => { flushSync(() => { navigate(newRoute) }) })
  }

  return {
    viewNavigate
  }
}
