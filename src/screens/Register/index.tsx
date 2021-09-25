import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { Header } from '../../components/Header';
import { Container, Form,Fields,TransactionsTypes } from './styles';


export function Register(){

  const [transactionType, setTransactionType] = useState('');

  function handleTransactionsTypeSelect(type: 'positive' | 'negative'){
    setTransactionType(type);
  }


  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title="Cadastro"/>
        <Form>
          <Fields>
            <Input placeholder="Nome"/>
            <Input placeholder="Preço"/>
            <TransactionsTypes>
            <TransactionTypeButton
                type="up"
                title="Income"
                onPress={() => handleTransactionsTypeSelect('positive')}
                isActive={transactionType === 'positive'}
              />
              <TransactionTypeButton
                type="down"
                title="Outcome"
                onPress={() => handleTransactionsTypeSelect('negative')}
                isActive={transactionType === 'negative'}
              />
            </TransactionsTypes>
          </Fields>
          <Button title="Enviar"/>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  )
}