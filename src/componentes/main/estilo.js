import { Text, StyleSheet, View, Image } from 'react-native';

const estilo = StyleSheet.create({
    cardTarefa: {
        marginTop: 20,
        backgroundColor: '#A8DADC',
        width: '100%',
        height: 125,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
        flexDirection: 'row',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    tituloCard: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#1d3557',
    },
    textoCard: {
        fontSize: 25,
        marginTop: 5,
    },
    imagemCard: {
        width: 105,
        height: 105,
        marginRight: 15,
        borderRadius: 10
    },
});

export default estilo;