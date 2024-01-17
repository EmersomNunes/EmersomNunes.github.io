import React from 'react'
import Link from 'next/link'

const register = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[60%]'>
        <form className="flex flex-col rounded-2xl mt-5 lg:mt-20 p-4 lg:h-[280px] px-60">
          <div className=''>
            <h1 className="text-3xl text-purple-800 text-center mb-4 lg:mb-8">Criar conta</h1>

            <label className="flex flex-col ml-4 text-xl mb-1">Nome</label>
            <input 
              type='text' 
              placeholder='Digite seu nome' 
              name='name'
              className="border border-black w-[95%] ml-3 rounded-md p-[4px] px-2 mb-6" />

            <label className="flex flex-col ml-4 text-xl mb-1 mt-3">e-mail</label>
            <input
              type="email"
              name='email'
              className="border border-black w-[95%] ml-3 rounded-md p-[4px] px-2"
              placeholder="digite seu email..." />

            <label className="flex flex-col ml-4 text-xl mb-1">senha</label>
            <input 
                type="password"
                name='password'
                className="border border-black w-[95%] ml-3 rounded-md p-[4px] px-2 mb-6" 
                placeholder="digite sua senha..." />

            <label className="flex flex-col ml-4 text-xl mb-1 mt-3">Repita sua senha</label>
            <input 
                type="password"
                name='repeatPassword'
                className="border border-black w-[95%] ml-3 rounded-md p-[4px] px-2 mb-6" 
                placeholder="Repita sua senha novamente..." />
          </div>

          <div className='flex justify-center'>
            <button type='submit' className='bg-purple-600 rounded-lg p-2 w-[50%] text-white'>Cadastrar</button>
            <Link href="/login"
              className="ml-36 text-sm text-sky-600 underline cursor-pointer">
              Já pussui conta?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default register