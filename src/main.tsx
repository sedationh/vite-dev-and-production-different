import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import * as x from "build"

console.log("sedationh x", x)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
