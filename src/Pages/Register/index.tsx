import { FormContainer } from './styles';

import * as zod from 'zod';
import  { zodResolver } from '@hookform/resolvers/zod'
import { useForm} from 'react-hook-form';
import { useState } from 'react';

const DadosDeRegistroSchema = zod.object({
  name: zod.string().nonempty('Informe o seu  nome').transform(nome => {
    return nome.trim().split('').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join('')
  }),

  email: zod.string().email().toLowerCase(),
  password: zod.string().min(8),
  address: zod.string().min(5),
  city: zod.string().min(2).max(50),
  state: zod.string().min(2).max(50),
  zipCode: zod.string().min(5).max(10),
});

export type DadosDeRegistroDoUsuárioInterface = zod.infer<typeof DadosDeRegistroSchema>

export function Register() {
  const [output, setOutput] = useState('')
  const { register, reset, handleSubmit, formState: { errors } } = useForm<DadosDeRegistroDoUsuárioInterface>({
    resolver: zodResolver(DadosDeRegistroSchema),
    defaultValues: {
      name:'',
      email: '',
      password: '',
      address: '',
      city: '',
      state:'',
      zipCode: '',
    },
  });
    
  function registerUser(data: any){
    setOutput(JSON.stringify(data, null, 2))
  }

  return(
    
   
      <FormContainer >
             <h1>Registe a sua conta</h1>
              <form action="#" onSubmit={handleSubmit(registerUser)}>
              <input 
              type="text" 
              placeholder="Nome" 
              required 
              { ...register('name')}
              />
                {errors.name && <span>{errors.name.message}</span>}

              <input 
              type="email" 
              placeholder="Email" 
              required 
              {...register('email')}
              />
                {errors.email && <span>{errors.email.message}</span>}

              <input 
              type="password" 
              placeholder="Palavra-passe" 
              required
              {...register('password')}
              />

                {errors.password && <span>{errors.password.message}</span>}

              <input 
              type="text" 
              placeholder="Endereco" 
              required 
              {...register('address')}
              />

                {errors.address && <span>{errors.address.message}</span>} 
              <input 
              type="text" 
              placeholder="Cidade" 
              required 
              {...register('city')}
              />

                {errors.city && <span>{errors.city.message}</span>} 

              <input 
              type="text" 
              placeholder="Estado" 
              required 
              {...register('state')}
              />
                   {errors.state && <span>{errors.state.message}</span>}
              <input 
              type="text" 
              placeholder="Codigo Postal" 
              required 
              { ...register('zipCode')}
              />

                  {errors.zipCode && <span>{errors.zipCode.message}</span>}
              <button>Registrar</button>

        </form>
      </FormContainer>
  
  )
}  
