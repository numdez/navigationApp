import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';



const RegisterScreen = ({ navigation }) => {
  const [registrationType, setRegistrationType] = useState('');
  const [showSelection, setShowSelection] = useState(true);

  const handleSelect = (type: string) => {
    setRegistrationType(type);
    setShowSelection(false);
  };

  const handleGoBack = () => {
    setShowSelection(true);
  };

  return (
    <View style={styles.container}>
      {showSelection ? (
        <>
          <Text style={styles.title}>Escolha o tipo de cadastro:</Text>
          <View style={styles.buttonGroup}>
            <Button title="Visitante" onPress={() => handleSelect('visitante')} />
            <View style={styles.buttonSpacer} />
            <Button title="Aluno" onPress={() => handleSelect('aluno')} />
            <View style={styles.buttonSpacer} />
            <Button title="Colaborador" onPress={() => handleSelect('colaborador')} />
          </View>
        </>
      ) : (
        <>
          {registrationType === 'visitante' && <VisitanteForm navigation={navigation} />}
          {registrationType === 'aluno' && <AlunoForm navigation={navigation} />}
          {registrationType === 'colaborador' && <ColaboradorForm navigation={navigation} />}
          <Button title="Voltar" onPress={handleGoBack} />
        </>
      )}
    </View>
  );
};

const VisitanteForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visitDate, setVisitDate] = useState('');

  const handleRegister = () => {
    // Lógica de registro para visitante
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Data de visita"
        style={styles.input}
        value={visitDate}
        onChangeText={setVisitDate}
      />
      <Button title="Registrar" onPress={handleRegister} />
      <View style={styles.buttonSpacer} />
    </View>
  );
};

const AlunoForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [course, setCourse] = useState('');
  const [period, setPeriod] = useState('');

  const handleRegister = () => {
    // Lógica de registro para aluno
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Curso"
        style={styles.input}
        value={course}
        onChangeText={setCourse}
      />
      <TextInput
        placeholder="Período"
        style={styles.input}
        value={period}
        onChangeText={setPeriod}
      />
      <Button title="Registrar" onPress={handleRegister} />
      <View style={styles.buttonSpacer} />
    </View>
  );
};

const ColaboradorForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessLevel, setAccessLevel] = useState('comum');

  const handleRegister = () => {
    // Lógica de registro para colaborador
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Nível de acesso (comum ou administrador)"
        style={styles.input}
        value={accessLevel}
        onChangeText={setAccessLevel}
      />
      <Button title="Registrar" onPress={handleRegister} />
      <View style={styles.buttonSpacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonGroup: {
    flexDirection: 'column',
    marginBottom: 16,
  },
  buttonSpacer: {
    height: 10,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  loginText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
