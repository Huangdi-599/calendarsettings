// src/App.tsx
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Calendar from './components/Calendar';
import LeadList from './components/Leadlist';
import Dashboard from './components/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import PurchasedLeads from './components/ PurchasedLeads';


// Define your custom theme with the primary color
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
      <CssBaseline /> {/* Resets CSS defaults */}
      <Calendar />
      <LeadList/>
      <Dashboard/>
      < DashboardLayout/>
      < PurchasedLeads/>
    </ThemeProvider>
  );
}

export default App;

