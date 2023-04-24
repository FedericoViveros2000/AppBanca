import { Link } from 'react-router-dom'
import BaseGenericForm from './BaseGenericForm'
import { useFetch, fetchData } from '../hooks/useFetch'
import Loader from './Loader'
import { validationLogin } from './validations/validationLogin'
import { Form } from '../interfaces/loginTypes'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const { isFetching }: fetchData = useFetch('clientes')

  const { formLogin, handleChangeLogin, handleLogin, errors }: Form =
    useLogin(validationLogin)

  if (isFetching) return <Loader />

  return (
    <BaseGenericForm
      navTitle='Sign In'
      urlBack='/'
      titleForm='Welcome Back'
      subTitleForm='Hello there, sign in to continue'
      handleSubmit={handleLogin}
    >
      <>
        <label htmlFor='user' className='label__login'>
          User or email
        </label>
        <div className='container__messages'>
          <input
            type='text'
            autoComplete='off'
            className='input__login'
            name='user'
            id='user'
            disabled={isFetching}
            placeholder='Enter your username or email'
            onChange={handleChangeLogin}
          />
          {/* <p className="btn">
            <i className="fa-solid fa-check"></i>
          </p> */}
        </div>
        {errors.user && <p>{errors.user}</p>}
        <label htmlFor='password' className='label__login'>
          Password
        </label>
        <div className='container__messages'>
          <input
            className='input__login input__login--password'
            autoComplete='off'
            name='password'
            id='password'
            type='password'
            disabled={isFetching}
            placeholder='Enter your password'
            onChange={handleChangeLogin}
          />
          {/* {
            showSuccess &&
            <p className="btn">
              <i className="fa-solid fa-check"></i>
            </p>
          }  */}
        </div>
        {errors.password && <p>{errors.password}</p>}
        <p>
          <a href='#' className='forgot__password'>
            Forgot your password?
          </a>
        </p>
        <input
          type='submit'
          className='input__sign'
          value='Sign In'
          disabled={isFetching}
        />
        <p className='signup'>
          Don't have an account?{' '}
          <Link to='/createAccount' className='font-link'>
            Sign up
          </Link>
        </p>
      </>
    </BaseGenericForm>
  )
}

export default Login
