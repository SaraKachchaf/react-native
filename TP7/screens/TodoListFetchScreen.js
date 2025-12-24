import { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { fetchTodos } from "../services/api";
import { ThemeContext } from "../context/ThemeContext";

export default function TodoListFetchScreen() {
  const [todos, setTodos] = useState([]);
  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  return (
    <View>
      <Button title="Changer le thème" onPress={toggleTheme} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
