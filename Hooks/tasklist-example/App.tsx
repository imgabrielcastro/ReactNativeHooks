import { ThemeProvider } from "./src/contexts/ThemeContext";
import Home from "./src/components/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
