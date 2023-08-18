import { useNavigate } from 'react-router-dom'

export const useViewTransition = () => {
  const navigate = useNavigate()

  const viewNavigate = (newRoute: string) => {
    if (!document.startViewTransition) {
      navigate(newRoute); return
    }
    return document.startViewTransition(() => {
      navigate(newRoute)
    })
  }

  return {
    viewNavigate
  }
}
