import * as SQLite from "expo-sqlite";

let db = null;

export const initDB = async () => {
  db = await SQLite.openDatabaseAsync("todos.db");

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT
    );
  `);
};

export const loadTodos = async () => {
  const result = await db.getAllAsync("SELECT * FROM todos;");
  return result;
};

export const addTodoOffline = async (title) => {
  await db.runAsync("INSERT INTO todos (title) VALUES (?);", [title]);
};

export const deleteTodoOffline = async (id) => {
  await db.runAsync("DELETE FROM todos WHERE id = ?;", [id]);
};
