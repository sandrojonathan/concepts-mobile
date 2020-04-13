import React, { useEffect, useState } from 'react';
import { 
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  StatusBar } from 'react-native';

import api from './services/api'

/**
 * FlatList : melhor para lista, performatico
 */

/**
 * Não possuem valor semântico(significado)
 * Não possuem estilização própria
 * Todos components vem com "display: flex"
 * Não tem herança de estilo
 * 
 * View : div, footer, header, main, aside, section
 * Text : p, span, strong, h1, h2, h3
 */

export default function App() {

  const [projects, setProjects] = useState([]);

  useEffect( () => {
    api.get('projects').then(response => {
      setProjects(response.data);
      console.log(response.data)
    })
  }, [] )

  async function handleAddProject() {
    const response = await api.post('/projects',{
      title:`Novo projeto ${Date.now()}`,
      owner: 'Sandro Jonathan'
    })

    const project= response.data;

    setProjects([... projects, project])
  }

  return (
    <>
    <StatusBar barStyle="light-content" />

    <SafeAreaView style={styles.container}>
      
      <FlatList 
        data={projects}
        keyExtractor={project => project.id }
        renderItem={ ( { item : project } ) => (
          <Text style={styles.project} > { project.title  } </Text> 
        )} />

      <TouchableOpacity 
        onPress={handleAddProject} 
        activeOpacity={0.6} 
        style={styles.button}>
          <Text style={styles.buttonText}> Adicionar projeto </Text>
      </TouchableOpacity>

    </SafeAreaView>
    
    
    {
    /* 
    <View style={styles.container} >
      { projects.map( project => 
        <Text style={styles.project} key={project.id} > { project.title  } </Text> 
      )}
    </View> 
    */
    }


    </>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#7159c1', 
  },
  project: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button :{
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 20,
    height: 50, 
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})