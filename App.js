import React from "react";
import {
  ScrollView,Text,StyleSheet,View,Image,FlatList,
} from "react-native";
import Card from "./src/componentes/main/main";
import Header from "./src/componentes/header/header";
import DATA from "./data/index.js";

export default function App() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Header />
       
          <FlatList style = {estilo.rotina}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
              imagem={item.imagem}
              titulo={item.titulo}
              descricao={item.descricao}
              porcentagem={item.porcentagem}
            />
            )}
          />
      </View>
    </ScrollView>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#CAF0F8",
    borderColor: "#90E0EF",
    paddingHorizontal: 20,
  },
  rotina: {
    width: '100%'
  },
});