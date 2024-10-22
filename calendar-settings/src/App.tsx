import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar'; 
import LeadPage from './components/LeadPage';

// Define the primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Calendar page (default) */}
          <Route path="/" element={<Calendar />} />
          {/* LeadPage component */}
          <Route path="/leadpage" element={<LeadPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
