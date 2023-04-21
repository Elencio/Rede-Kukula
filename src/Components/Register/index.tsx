import { FormContainer, Overlay, OverlayContainer, OverlayFix, PrincipalContainer, } from './styles';

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

export type DadosDeRegistroDoUsuarioInterface = zod.infer<typeof DadosDeRegistroSchema>

export function Register() {
  const [output, setOutput] = useState('')
  const { register, reset, handleSubmit, formState: { errors } } = useForm<DadosDeRegistroDoUsuarioInterface>({
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
    <PrincipalContainer>
      <FormContainer >
        <form action="#" onSubmit={handleSubmit(registerUser)}>
              <h1>Register sua conta</h1>
           
              <input 
              type="text" 
              placeholder="Name" 
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
              placeholder="Password" 
              required
              {...register('password')}
              />

                {errors.password && <span>{errors.password.message}</span>}

              <input 
              type="text" 
              placeholder="Address" 
              required 
              {...register('address')}
              />

                {errors.address && <span>{errors.address.message}</span>} 
              <input 
              type="text" 
              placeholder="City" 
              required 
              {...register('city')}
              />

                {errors.city && <span>{errors.city.message}</span>} 

              <input 
              type="text" 
              placeholder="State" 
              required 
              {...register('state')}
              />
                   {errors.state && <span>{errors.state.message}</span>}
              <input 
              type="text" 
              placeholder="Zip Code" 
              required 
              { ...register('zipCode')}
              />

                  {errors.zipCode && <span>{errors.zipCode.message}</span>}
              <button>Register</button>

        </form>
      </FormContainer>
      <OverlayContainer>
        <Overlay >
            <OverlayFix>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
            </OverlayFix>
        </Overlay>
      </OverlayContainer>
    </PrincipalContainer>
  )
}  
