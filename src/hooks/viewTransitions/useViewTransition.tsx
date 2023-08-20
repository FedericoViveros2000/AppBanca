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
    return document.startViewTransition(() => { navigate(newRoute) })
  }

  return {
    viewNavigate
  }
}
