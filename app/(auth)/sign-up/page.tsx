
import AuthForm from '@/components/auth-form'
import { AuthType } from '@/constants'


const SignUp = async () => {
 
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AuthType.SignUp} />
    </section>
  )
}

export default SignUp