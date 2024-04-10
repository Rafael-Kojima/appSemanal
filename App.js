import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import Card from './src/componentes/main/main';
import Header from './src/componentes/header/header';

export default function App() {
  return (
    <ScrollView>
      <View style={estilo.container}>

        <Header />

        <Card
          porcentagem='20%'
          titulo='Dormir'
          imagem='./imagens/dormindo.jpg'
          descricao='Descansar'
        />
        <Card
          porcentagem='20%'
          titulo='Estudar'
          imagem='./imagens/estudar.jpg'
          descricao='Estudar programação'
        />
        <Card
          porcentagem='10%'
          titulo='Treinar'
          imagem='./imagens/musculacao.jpg'
          descricao='Fazer exercícios físicos'

        />
        <Card
          porcentagem='20%'
          titulo='leitura'
          imagem='./imagens/leitura.jpg'
          descricao='Ler'

        />

        <Card
          porcentagem='10%'
          titulo='Cuidados pessoais'
          imagem='./imagens/cuidadosPessoais.jpg'
          descricao='cuidados pessoais'

        />

        <Card
          porcentagem='10%'
          titulo='Lazer'
          imagem='./imagens/lazer.png'
          descricao='Lazer'

        />
        <Card
          porcentagem='10%'
          titulo='Ir para igreja'
          imagem='./imagens/igreja.jpg'
          descricao='Ir para a igreja'

        />

      </View>
    </ScrollView>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }
});