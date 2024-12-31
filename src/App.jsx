import { useReducer, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import { BooksContext, TeamContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <>
      <TeamContext.Provider
        value={{
          darkMode,
          setDarkMode,
        }}
      >
        <BooksContext.Provider value={{
          state,
          dispatch
        }}>
          <Main />
          <ToastContainer/>
        </BooksContext.Provider>
      </TeamContext.Provider>
    </>
  );
}

export default App;
