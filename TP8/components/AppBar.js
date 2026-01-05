import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { AuthContext } from '../context/AuthContext';

const AppBar = ({ title, back }) => { 
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation(); 

  return (
    <View style={styles.appBar}>
      <View style={styles.leftContainer}>
   
        {back && (
          <View style={styles.backButton}>
        
            <Button title="<" color="#fff" onPress={() => navigation.goBack()} />
          </View>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      

      <Button title="Logout" color="#fff" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 40, 
    backgroundColor: '#6200ea',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10, 
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AppBar;