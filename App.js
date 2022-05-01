import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App(){
  return(
    <KeyboardAvoidingView style={Styles.background}>
      <View style={Styles.containerLogo}>
        <Image source={require('./assets/variedades.png')} />        
      </View>

      <View style={Styles.container}>
        <TextInput 
        style={Styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />
        <TextInput 
        style={Styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=> {}}
        />
      </View>

      <TouchableOpacity style={Styles.btnSubmit}>
        <Text style={Styles.submitText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.btnRegister}>
        <Text style={Styles.registerText}>Criar Conta Gratuita</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#27282D'
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 10,
    color: '#222',
    fontSize: 19,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#03989E',
    width: '80%',
    height: 40,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  },
  btnRegister:{
    marginTop: 10,
  },
  registerText:{
    color:'#FFF'
  }
  
});