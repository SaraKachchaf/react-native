import { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import {
  initDB,
  loadTodos,
  addTodoOffline,
  deleteTodoOffline,
} from "../services/database";

export default function TodoListOfflineScreen() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const refreshTodos = async () => {
    const data = await loadTodos();
    setTodos(data);
  };

  useEffect(() => {
    const init = async () => {
      await initDB();
      await refreshTodos();
    };
    init();
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Nouvelle tâche"
        value={title}
        onChangeText={setTitle}
      />

      <Button
        title="Ajouter"
        onPress={async () => {
          if (!title.trim()) return;
          await addTodoOffline(title);
          setTitle("");
          refreshTodos();
        }}
      />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title="🗑 Supprimer"
              onPress={async () => {
                await deleteTodoOffline(item.id);
                refreshTodos();
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
