import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </BrowserRouter>
  );
}
