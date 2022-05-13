import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import {getGoals, reset} from '../features/goals/goalSlice'
import GoalItem from '../components/GoalItem'

function Dashboard() {
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.auth)
  const {goals, isLoading, isError, message } = useSelector((state)=> state.goals)
  const dispatch = useDispatch()

  useEffect(()=> {
    if (isError){
      console.log(message)
    }
    console.log('dashboard user:', user)
    if(!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    // アンマウントするときリセットする
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, dispatch, message])

  if (isLoading) {
    return <Spinner />
  }

  return <>
    <section className="heading">
      <h1>ようこそ{user && user.name}さん</h1>
      <p>ゴールダッシュボード</p>
    </section>

    <section className='content'>
      {goals.length > 0 ? (
        <div className="goals">
          {goals.map((goal) => (
            <GoalItem key={goal._id}  goal={goal} />
          ))}
        </div>
      ) : (
      <h3>You have not set any goals </h3>
      )}
    </section>

    <GoalForm />
    </>
}

export default Dashboard