import { useState, useContext, useEffect } from 'react'
import './App.css'
import { ContextApi } from './context/ContextApi'

function App() {
  const { data, loading } = useContext(ContextApi)
  const [gender, setGender] = useState('')
  const [name, setName] = useState({ first: "", last: "" });
  const [profile, setProfile] = useState('')
  const [number, setNumber] = useState('')

  const result = data?.results || [];

  if (!result) {
    return <p>No data available.</p>;
  }


  useEffect(() => {
    if (result && result.length > 0) {
      const user = result[0];
      setGender(user.gender);
      setName({ first: user.name.first, last: user.name.last });
      setProfile(user.picture.large)
      setNumber(user.cell)
    }
  }, [result]);

  console.log(data)

  if (loading) {
    return <div className="spinner-container">
      <div className="spinner"></div>
    </div>;
  }

  return (
    <>
      <div className=" card hover:scale-105 transition    relative w-max h-[160px] flex justify-center items-center  mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-xl blur-lg opacity-75"></div>
        <div className="relative bg-black text-white p-4 rounded-xl w-full h-full flex justify-center items-center">
          <div className="user-image p-2 w-max">
            <img src={profile} className="w-32 h-32 border rounded-full" alt="user-profile" />
          </div>
          <div className="user-detail flex flex-col justify-center p-2 items-start w-max">
            <div className="name flex w-max text-start">
              <span className="mx-2">first name - {name.first}</span>
              <span className="mx-2">last name - {name.last}</span>
            </div>
            <span className="m-2">gender - {gender}</span>
            <span className="m-2">phone number - {number}</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
