import React from 'react'
import { Link } from 'react-router-dom'
import { AppState } from '../interfaces/userInterface'
interface Props {
  newUser: AppState['createAccount']
  handleCreateAccount: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleIsAccept: () => void
  error: string
}

const CreateAccount = ({ handleCreateAccount, handleIsAccept, newUser, error }: Props) => {
  return (
    <>
      <div className='container__create'>
        <label htmlFor='user' className='label__login'>
          Name
        </label>
        <div className='container__messages'>
          <input
            type='text'
            autoComplete='off'
            className='input__login'
            name='nombre'
            id='name'
            value={newUser.nombre}
            placeholder='Enter your name'
            onChange={handleCreateAccount}
          />
          <p className='btn-check'>
            <i className='fa-solid fa-check' />
          </p>
        </div>
        <label htmlFor='user' className='label__login'>
          Nro Documento
        </label>
        <input
            type='text'
            autoComplete='off'
            className='input__login'
            name='nro_documento'
            id='nro_documento'
            value={newUser?.nro_documento}
            onChange={handleCreateAccount}
            placeholder='Enter your email address'
          />
       {/*  <div className='container__messages'>
          <input
            type='text'
            autoComplete='off'
            className='input__login'
            name='email'
            id='email'
            value={newUser?.email}
            onChange={handleCreateAccount}
            placeholder='Enter your email address'
          />
          <p className='btn-check'>
            <i className='fa-solid fa-check' />
          </p>
        </div> */}
          <div className='container__messages'>
        {/* <label htmlFor='password' className='label__login'>
          Enter your password
        </label>
          <input
            type='text'
            autoComplete='off'
            className='input__login'
            name='password'
            id='password'
            value={newUser.password}
            onChange={handleCreateAccount}
            placeholder='Enter your password'
          />
          <p className='btn-check'>
            <i className='fa-solid fa-check' />
          </p> */}
        </div>
        <label htmlFor='accept' className='container__accept'>
          <input
            type='checkbox'
            id='accept'
            name='accept'
            onChange={handleIsAccept}
          />
          <span className='terms'>
            By creating an account, you agree to our
          </span>
        </label>
        {error && <p>{error}</p>}
        <p>
          <Link to='/' className='font-terms'>
            Terms and conditions
          </Link>
        </p>
      </div>
      <input type='submit' value='Sign In' className='input__sign' />
    </>
  )
}

export default CreateAccount
