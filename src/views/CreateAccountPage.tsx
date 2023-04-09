import React from 'react'
import { useCreateAccount } from '../hooks/useCreateAccount'
import BaseGenericForm from '../components/BaseGenericForm'
import CreateAccount from '../components/CreateAccount'
import ModalBasic from '../components/modals/ModalBasic'
import ModalSuccess from '../components/modals/ModalSuccess'
import successImg from '../assets/success_img.png'
import Loader from '../components/Loader'

const CreateAccountPage = () => {
  // let { handleChange, handleSubmit, errors } = useForm(validationForm);
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
            <button
              className='btn btn-success'
              onClick={() => setCreatedSuccess(false)}
            >
              Done
            </button>
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
