import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({inputTitle, keyBT, autoComplete, sTE = false, value, setValue}) => {
  return (
    <View>
        <View>
          <Text> {inputTitle} </Text>
          <TextInput style={styles.inputBox}
            autoCorrect = {false}
            keyboardType= {keyBT}
            autoComplete= {autoComplete}
            secureTextEntry = {sTE}
            value = {value}
            onChangeText={(text) => setValue(text)}
          />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    inputBox: {
     height: 40,
     marginBottom:20,
     backgroundColor: '#ffffff',
     borderRadius: 10,
     marginTop: 10,
     paddingLeft: 10,
     marginLeft: 10,
     color: '#af9f85',
    },
 });

export default InputBox;