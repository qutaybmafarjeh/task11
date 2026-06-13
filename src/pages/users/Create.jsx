import React from 'react'
import { useForm } from 'react-hook-form'

export default function Create() {

    const { register, handleSubmit } = useForm();
    const createUser = (data)=>{
        console.log(data)
    }

  return (
    <div>

      <h1>Create User</h1>
      <form onSubmit={handleSubmit(createUser)}>
        <div>
            <label>Name:</label>
            <input type="text" {...register("name")} />
            </div>
            <div>
            <label>Email:</label>
            <input type="email" {...register("email")} />
            </div>
            <div>
            <label>Age:</label>
            <input type="number" {...register("age")} />

            </div>
            <button type="submit">Create</button>

      </form>
    </div>
  )
}
