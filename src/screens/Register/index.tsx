import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Input } from '../../components/Forms/Input';
import { Header } from '../../components/Header';
import { Container, Form } from './styles';


export function Register(){
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title="Cadastro"/>
        <Form>
          <Input placeholder="Nome"/>
          <Input placeholder="Preço"/>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  )
}