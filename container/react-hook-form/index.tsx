import React from 'react'
import { useForm , SubmitHandler } from 'react-hook-form'


interface IFormInputs {
  email : string,
  password : string,
}


const ReactHookFormContainer = () => {

  const { 
    register , 
    handleSubmit , 
    watch , 
    formState : {errors} 
  } = useForm<IFormInputs>()

  return (
    <div>
      <form>
        <input defaultValue={"example@leo.test.com"} {...register('email')}/>
        <br />
        <br />
        <input defaultValue={"example@leo.test.com"} {...register('password')}/>
        <br />
        <br />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default ReactHookFormContainer