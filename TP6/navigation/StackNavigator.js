import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoListScreen from "../screens/TodoListScreen";
import TodoDetailsScreen from "../screens/TodoDetailsScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Liste"
        component={TodoListScreen}
        options={{ title: "Mes tâches" }}
      />
      <Stack.Screen
        name="Details"
        component={TodoDetailsScreen}
        options={{ title: "Détails de la tâche" }}
      />
    </Stack.Navigator>
  );
}
