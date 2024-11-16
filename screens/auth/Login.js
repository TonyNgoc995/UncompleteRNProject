import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import InputBox from '../../components/form/inbpubox';
import SubmitButton from '../../components/form/SubmitButton';

const Login = ({navigation}) => {
    // state

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    // function
     // btn function
      const handleSubmit = () =>{
         try {
            setLoading(true);
            if(  !email || !password){
                Alert.alert(' Please Fill All Fields')
                setLoading(false);
                return;
            }
            setLoading(false);
            console.log(" Login Data ==>", { email, password})
         } catch(error){
            setLoading(false);
            console.log(error);
         }   
      }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View>
      
         <InputBox 
           inputTitle= 'Email'
           keyBT= "email-address"
           autoComplete= "email"
           value = {email}
           setValue = {setEmail}

         />
         <InputBox 
            inputTitle= 'Password'
            sTE = {true}
            autoComplete= "password"
            value = {password}
            setValue = {setPassword}
           />
      </View>
      {/* <Text> {JSON.stringify({name, email, password}, null, 4)}</Text> */}
       <SubmitButton
          btnTitle="Login" 
          loading={loading}
          handleSubmit={handleSubmit}
          />
        <Text style ={styles.linkText}>
            Not a User Please {" "}
            <Text style ={styles.link}
                  onPress={()=>navigation.navigate("Register")}
            > REGISTER</Text>{""}
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#e1d5c9'
    },
    pageTitle: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#1e2225',
      marginBottom: 20,
    },
    inputBox: {
     height: 40,
     marginBottom:20,
     backgroundColor: '#ffffff',
     borderRadius: 10,
     marginTop: 10,
     paddingLeft: 10,
     color: '#af9f85',
    },
    linkText:{
      textAlign: "center"
 
    },
    link: {
        color: "red" 
    },
 });
export default Login