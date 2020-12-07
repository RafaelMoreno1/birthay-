import React,{useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import firebase from "./src/utils/firebase";
import 'firebase/auth';

export default function App(){
   const [state, setstate] = useState(undefined)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      console.log('Usuario logeado',response)
    });
  }, []);

  return (
    
      <SafeAreaView>
     <Text>rafaeel</Text>
      </SafeAreaView>
  );
}
