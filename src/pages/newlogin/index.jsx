import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api';
import {
  Column,
  Container,
  LoginText,
  Row,
  SubTitleLogin,
  TermsText,
  Title,
  TitleLogin,
  Wrapper,
  Text,
} from "./styles";

const schema = yup
  .object({
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
  })
  .required()

const NewLogin = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async formData => {
    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length === 1){
        navigate('/newlogin')
      }else {
        alert('Email ou senha inváido')
      }
    }catch{
      alert('Houve um erro, tente novamente.')
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome Completo" leftIcon={<MdPerson />}/>
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
              <Button title="Criar minha conta" variant="secondary" type="submit"/>
            </form>
            <Row>
              <TermsText>Ao clicar em "criar minha conta grátis", declaro que aceito as políticas de Privacidade e os Termos de Uso da DIO.</TermsText>
            </Row>
            <Row>
                <Text>Já tenho conta.</Text><LoginText>Fazer login</LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { NewLogin };
