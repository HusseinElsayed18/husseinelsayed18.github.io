import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace("https://hussein-elsayed.vercel.app/");
  }, []);

  return <p>Redirecting...</p>;
}

export default App;