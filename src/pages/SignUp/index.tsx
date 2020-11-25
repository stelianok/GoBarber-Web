import React from 'react';
import {FiArrowLeft, FiMail,FiUser, FiLock} from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container,Background, Content } from './styles';
const SignUp: React.FC = () => {
    function handleSubmit(data: object): void {
        console.log(data);
    }
    return (
    <Container>
        <Background/>
        <Content>
            <img src={logoImg} alt="GoBarber"/>

            <Form initialData={{name: 'Kaua'}} onSubmit={handleSubmit}>
                <h1> Faça seu Cadastro </h1>
                <Input name="name" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail"/>
                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                <Button type="submit">cadastrar</Button>

                
            </Form>
            <a href="Login">
                <FiArrowLeft />
                Voltar para o logon
            </a>
        </Content>
    </Container>
    
    )
}
export default SignUp;