import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { OutlineLink } from '../../components/OutlineLink';
import './styles.scss';

export const LoginScreen = ({ handleChange, handleSignInSubmit }) => {
    return <main className='login__container'>
        <section className='login-form__container'>
                <h1>Login</h1>
            <form onSubmit={handleSignInSubmit}>
                <Input
                    title='Email'
                    placeholder='Digite o email cadastrado'
                    handleChange={(event) => handleChange('email', event)}
                />
                <Input
                    title='Senha'
                    placeholder='Digite a sua senha'
                    type='password'
                    handleChange={(event) => handleChange('password', event)}
                />
                <Button label='Entrar' type='submit'/>
                <OutlineLink to='/authentication/register' label='Criar uma conta'/>
            </form>
        </section>
    </main>
}