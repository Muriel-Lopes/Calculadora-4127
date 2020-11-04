import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const buttons = ['C', 'DEL','','X', 7, 8, 9, '/', 4, 5, 6, '-', 3, 2, 1, '+', '.', 0, '='] 
  const [novoNumero, setNovoNumero] = useState("")
  const [velhoNumero, setVelhoNumero] = useState("")

  function calcular(){
    const splitNumbers = novoNumero.split(' ')
    const primeiroNumero = parseFloat(splitNumbers[0])
    const velhoNumero = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator){
      case '+':
        setNovoNumero((primeiroNumero + velhoNumero).toString())
        return
      case '-': 
      setNovoNumero((primeiroNumero - velhoNumero).toString())
        return
      case 'X':
        setNovoNumero((primeiroNumero * velhoNumero).toString())
        return
      case '/': 
      setNovoNumero((primeiroNumero / velhoNumero).toString())
        return
    }
  }

  function handleInput(buttonPressed){
    console.log(buttonPressed)
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "X" | buttonPressed === "/" ){
      setNovoNumero(novoNumero + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setNovoNumero(novoNumero.substring(0, (novoNumero.length -1)))
        return
      case 'C':
        setVelhoNumero("")
        setNovoNumero("")
        return
      case '=':
        setVelhoNumero(novoNumero + " = ")
        calcular()
        return
    }
    setNovoNumero(novoNumero + buttonPressed)
  }

  return (
    <View style={styles.container}>
      <LinearGradient
                // Background Linear Gradient
                colors={['#1C86EE', '#3A5FCD', '#0000FF']}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 696,
                }}
              />
    <View>
      <View style={styles.resultado}>
        <Text style={styles.historicoCima}>{velhoNumero}</Text>
        <Text style={styles.resultadoCima}>{novoNumero}</Text>
      </View>
      <View style={styles.buttons}>

      
          {buttons.map((button) => 
          button === '=' ?
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.ident2}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        
          :

          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.ident1}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          
        )}
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultado: {
    backgroundColor: "#FAFAFA",
     width: '100%',
    height: 130,
    width: 334,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 10,
  },
  resultadoCima: {
    color: "#282F38",
    margin: 10,
    fontSize: 40
  },

   historicoCima:{
    color: "#282F38",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  textButton: {
    color: "#000",
    fontSize: 20,  
  }, 
  ident1: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 65,
    height: 60,
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    margin: 12,
    marginVertical: 15
  },
  ident2: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 157,
    height: 60,
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    margin: 10,
  },
});