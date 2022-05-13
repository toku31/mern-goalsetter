import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const navigate = useNavigate()  // 52
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth)


  useEffect(()=> {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user){
      console.log("isSuccess", isSuccess)
      console.log("user", user)
      console.log("pass")
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])


  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit =(e) => {
    e.preventDefault()
    console.log("ok")
    if (password !== password2) {
      toast.error('Password do not match')
    }else {
      const userData = {
        name,
        email,
        password,
      }
      console.log(userData)
      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return <>
    <section className="heading">
      <h1>
        <FaUser /> 登録
      </h1>
      <p>アカウントを作成してください</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type='text' className='form-control' id='name' name='name' value={name}
          placeholder='名前を入力' onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input type='email' className='form-control' id='email' name='email' value={email}
          placeholder='メールアドレスを入力' onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input type='password' className='form-control' id='password' name='password' value={password}
          placeholder='パスワードを入力' onChange={onChange}
          />
        </div>
        <div className="form-group">
        <input type='password' className='form-control' id='password2' name='password2' value={password2}
          placeholder='確認用パスワードを入力' onChange={onChange}
          />
        </div>
        <div className="form-group">
        <button type='submit' className='btn btn-block'>送信</button>
        </div>
      </form>
    </section>
  </>
}

export default Register