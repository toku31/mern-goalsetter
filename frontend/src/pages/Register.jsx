import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

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
        <FaUser /> 登録
      </h1>
      <p>アカウントを作成してください</p>
    </section>
    <section className="form">
      <form>
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
        <button type='submit' className='btn btn-block'  onChange={onSubmit}>送信</button>
        </div>
      </form>
    </section>
  </>
}

export default Register