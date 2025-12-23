import { View, Text, Button } from "react-native";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoDetailsScreen({ route, navigation }) {
  const { id, title } = route.params;
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleDelete = () => {
    removeTodo(id);      // 🔥 suppression globale
    navigation.goBack(); // 🔙 retour
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        {title}
      </Text>

      <Button
        title="Supprimer cette tâche"
        color="red"
        onPress={handleDelete}
      />
    </View>
  );
}
