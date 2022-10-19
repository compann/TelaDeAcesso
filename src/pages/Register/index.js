import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

export default function Register() {
    const navigation = useNavigation();
 return (
   <View style={styles.container}>
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>
            Registrar-se
        </Text>

    </Animatable.View>
    
    <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
        <Text style={styles.id}>
            Email
        </Text>

       

        <TextInput 
        placeholder="Digite um Email..."
        style={styles.input}
        >
        </TextInput>

        <Text style={styles.id}>
            Senha
        </Text>

        <TextInput 
        placeholder="Digite sua Senha..."
        style={styles.input}
        >

        </TextInput>

        <Text style={styles.id}>
            Confirmar Senha
        </Text>

        <TextInput 
        placeholder="Repita sua Senha..."
        style={styles.input}
        >

        </TextInput>


        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                Cadastrar
            </Text>
        </TouchableOpacity>

    </Animatable.View>


   

   </View>
  );
}



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#38a69d',
    },
    containerHeader:{
    marginTop: '18%',
    marginBottom: '8%',
    paddingStart: '5%',
    },
    message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    },

    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        PaddingEnd: '5%',
        
    },
    id: {
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12 ,
        fontSize: 16,
    },
    button:{

        backgroundColor: '#38a69d',
        width: '90%',
        borderRadius: 2 ,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    }

})