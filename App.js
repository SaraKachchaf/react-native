import { useEffect, useState, useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { ThemeProvider, ThemeContext } from "./src/context/ThemeContext";
import TodoListOfflineScreen from "./src/screens/TodoListOfflineScreen";
import { initDB } from "./src/services/database";

function MainApp() {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        theme === "dark" ? styles.dark : styles.light,
      ]}
    >
      <TodoListOfflineScreen />
    </View>
  );
}

export default function App() {
  const [dbReady, setDbReady] = useState(false);

  useEffect(() => {
    const prepareDb = async () => {
      await initDB();
      setDbReady(true);
    };
    prepareDb();
  }, []);

  if (!dbReady) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  light: {
    backgroundColor: "#ffffff",
  },
  dark: {
    backgroundColor: "#121212",
  },
});
