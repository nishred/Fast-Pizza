import { useState } from 'react';

import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()




  function handleSubmit(e) {
    e.preventDefault();
 
    if(!username)
      return

    dispatch(updateName(username))

    navigate("/menu")

  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='text-sm mb-4 text-stone-500 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-64 rounded-full border border-stone-300 bg-stone-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-72 sm:focus:w-80 mb-4' 

      />

      {username !== '' && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
