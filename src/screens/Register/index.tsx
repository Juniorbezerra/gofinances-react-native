import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { Header } from '../../components/Header';
import { Container, Form,Fields } from './styles';


export function Register(){
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title="Cadastro"/>
        <Form>
          <Fields>
            <Input placeholder="Nome"/>
            <Input placeholder="Preço"/>
          </Fields>
          <Button title="Enviar"/>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  )
}