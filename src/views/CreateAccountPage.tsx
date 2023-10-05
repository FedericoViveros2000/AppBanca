import React from 'react'
import { useCreateAccount } from '../hooks/useCreateAccount'
import BaseGenericForm from '../components/forms/BaseGenericForm'
import CreateAccount from '../components/CreateAccount'
import ModalBasic from '../components/modals/ModalBasic'
import ModalSuccess from '../components/modals/ModalSuccess'
import successImg from '../assets/success_img.png'
import Loader from '../components/loaders/Loader'
import { Link } from 'react-router-dom'
import { useViewTransition } from '../hooks/viewTransitions/useViewTransition'
import { ROUTE } from '../router/router'

const CreateAccountPage: React.FC = () => {
  const { viewNavigate } = useViewTransition()
  const {
    newUser,
    isLoading,
    error,
    handleCreateAccount,
    handleIsAccept,
    createdSuccess,
    setCreatedSuccess,
    createAccount
  } = useCreateAccount()

  if (isLoading) return <Loader />

  return (
    <>
      {createdSuccess && (
        <ModalBasic>
          <ModalSuccess
            title='El nuevo usuario se ha creado exitosamente'
            image={successImg}
          >
            <Link
              className='btn btn-success link'
              to="/"
              onClick={() => {
                setCreatedSuccess(false)
                viewNavigate(ROUTE.LOGIN)
              }}
            >
              Done
            </Link>
          </ModalSuccess>
        </ModalBasic>
      )}

      <BaseGenericForm
        navTitle='Create Account'
        urlBack='/'
        titleForm='Welcome'
        subTitleForm='Hello there, sign up to continue'
        handleSubmit={createAccount}
      >
        <CreateAccount
          handleCreateAccount={handleCreateAccount}
          handleIsAccept={handleIsAccept}
          newUser={newUser}
          error={error}
        />
      </BaseGenericForm>
    </>
  )
}

export default CreateAccountPage
