import React from "react";
import { View, Text, Button, StyleSheet, Switch } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        theme === "dark" ? styles.darkBackground : styles.lightBackground,
      ]}
    >
      <Text
        style={[
          styles.text,
          theme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        {theme === "dark" ? "Dark Theme" : "Light Theme"}
      </Text>

      <Switch value={isDark} 
      onValueChange={toggleTheme} 
      thumbColor={isDark ? "#fff" : "#000"}
      ios_backgroundColor={"gray"}
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  lightBackground: { backgroundColor: "#f5f5f5" },
  darkBackground: { backgroundColor: "#121212" },

  lightText: { color: "#000" },
  darkText: { color: "#fff" },

  text: { fontSize: 50, marginBottom: 20 },
});
