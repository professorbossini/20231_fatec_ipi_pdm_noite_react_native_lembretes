import { useState } from 'react'
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput, 
  View 
} from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState([])
  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }
  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      const aux = [lembrete, ...lembretes] //spread
      setLembrete('')
      return aux
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.lembreteView}>
        <TextInput 
          style={styles.lembreteTextInput}
          placeholder='Desejo lembrar...'
          onChangeText={capturarLembrete}
          value={lembrete} 
        />
        <Button 
          title="OK"
          onPress={adicionarLembrete}
        />
      </View>
      <FlatList 
        data={lembretes}
        renderItem={(lembrete) => (
          <View style={styles.itemNaLista}>
              <Text>{lembrete.item}</Text>
            </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    width: '100%'
  },
  lembreteView: {
    marginBottom: 4
  },
  lembreteTextInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    padding: 12,
    textAlign: 'center',
    outlineStyle: 'none',
    marginBottom: 4
  },
  itemNaLista: {
    padding: 12,
    borderColor: '#AAA',
    borderWidth: 1,
    backgroundColor: '#DDD',
    marginBottom: 4,
    textAlign: 'center',
    borderRadius: 4  
  }
})



    // <ScrollView>
    //     {/* [Comprar um abacate, ir ao cinema] => [<View><Text>Comprar um abacate</Text></View>, <View><Text>Ir ao cinema</Text></View>] */}
    //     {
    //       lembretes.map((l) => (
    //         <View style={styles.itemNaLista}><Text>{l}</Text></View>
    //       ))
    //     }
    // </ScrollView>