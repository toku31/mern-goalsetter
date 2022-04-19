import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit =(e) => {
    e.preventDefault()
  }

  return <>
    <section className="heading">
      <h1>
        <FaSignInAlt /> ログイン
      </h1>
      <p>ログインしてゴール設定を開始</p>
    </section>
    <section className="form">
      <form>
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
        <button type='submit' className='btn btn-block'  onChange={onSubmit}>送信</button>
        </div>
      </form>
    </section>
  </>
}

export default Login