import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AppContainer } from "./styles/AppStyles";


export function App() {
  return (
   <BrowserRouter>
   <AppContainer>
      <Router /> 
   </AppContainer>  
   </BrowserRouter>
  )
}
