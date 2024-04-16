import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './estilo.js';

export default function Card(props) {
    return (
        <View style={estilo.cardTarefa}>
            <View style={{ marginLeft: 15, width: 150 }}>
                <Text style={estilo.tituloCard}>{props.titulo}</Text>
                <Text style={estilo.textoCard}>{props.descricao}</Text>
            </View>
            <Text style={{ fontSize: 25 }}>{props.porcentagem}</Text>
        </View>
    )
}