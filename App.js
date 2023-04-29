import { useState } from 'react'
import {
  Button,
  StyleSheet,
  TextInput, 
  View 
} from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }
  const adicionarLembrete = () => {
    console.log(lembrete)
  }
  return (
    <View style={styles.container}>
      <View>
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
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    width: '100%'
  },
  lembreteTextInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    padding: 12,
    textAlign: 'center',
    outlineStyle: 'none',
    marginBottom: 4
  }
})


