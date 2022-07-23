
import { Provider } from 'react-redux'
import {store} from './state/store'
import {Display} from "./pages/Display"
import {Box} from "@mui/material"
function App() {
  return (
    <Provider store={store}>
    <div>
    <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
>
      <Display/></Box>
      </div>
    </Provider>
  );
}

export default App;
