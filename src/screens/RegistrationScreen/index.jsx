import { AuthCard } from '../../components/AuthCard';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { OutlineLink } from '../../components/OutlineLink';
import { Select } from '../../components/Select';
import { genderOptions } from '../../core/mock-options/gender';
import './styles.scss';

export const RegistrationScreen = ({ currentUserType, registerInputValues, handleRegisterSubmit, handleChangeUserType, handleChangeInputValues }) => {
    return <main className='register__container'>
        <AuthCard>
            <h1>Cadastro</h1>
            <div className='user-type-button__container'>
                <button
                    onClick={() => handleChangeUserType('client')}
                    className={currentUserType === 'client' ? 'selected' : ''}
                >
                    Sou Cliente
                </button>
                <button
                    onClick={() => handleChangeUserType('architect')}
                    className={currentUserType === 'architect' ? 'selected' : ''}
                >
                    Sou Arquiteto
                </button>
            </div>       
            <form onSubmit={handleRegisterSubmit}>
                <Input
                    title='Nome Completo'
                    value={registerInputValues?.fullname}
                    placeholder='Digite o seu nome completo'
                    handleChange={(event) => handleChangeInputValues('fullname', event)}
                />
                <Input
                    title='Email'
                    value={registerInputValues?.email}
                    placeholder='Digite o seu email'
                    handleChange={(event) => handleChangeInputValues('email', event)}
                />
                <Input
                    title='Telefone'
                    value={registerInputValues?.phone}
                    placeholder='Digite o seu número de telefone'
                    handleChange={(event) => handleChangeInputValues('phone', event)}
                />
                <Select
                    options={genderOptions}
                    value={registerInputValues?.gender}
                    handleChangeSelect={(event) => handleChangeInputValues('gender', event)}
                    title='Gênero'
                    name='gender'
                />
                <Input
                    title='Idade'
                    value={registerInputValues?.age}
                    type='number'
                    min='0'
                    max='120'
                    placeholder='Digite a sua idade'
                    handleChange={(event) => handleChangeInputValues('age', event)}
                />
                <Input
                    title='Senha'
                    value={registerInputValues?.password}
                    placeholder='Digite a sua senha'
                    type='password'
                    handleChange={(event) => handleChangeInputValues('password', event)}
                />
                <Input
                    title='Confirme a Senha'
                    placeholder='Confirme a sua senha'
                    type='password'
                    handleChange={(event) => handleChangeInputValues('confirmPassword', event)}
                />
                {
                    currentUserType === 'architect' && (
                        <Input
                            title='Informe o seu credenciamento (CAU)'
                            value={registerInputValues?.cau}
                            placeholder='Registro de ARQUITETURA E URBANISMO'
                            handleChange={(event) => handleChangeInputValues('cau', event)}
                        />
                    )
                }
                <Button label='Criar conta' type='submit'/>
                <OutlineLink to='/authentication/login' label='Login'/>
            </form>
        </AuthCard>
    </main>
}