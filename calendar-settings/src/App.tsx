// src/App.tsx
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Calendar from './components/Calendar';
import LeadList from './components/Leadlist';
import Dashboard from './components/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import PurchasedLeads from './components/PurchasedLeads';
import Feedback from './components/Feedback';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import React from 'react';
import PaymentSuccess from './components/PaymentSuccess';


// Define your custom theme with the primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
  },
});

function App() {
  const [showSignUp, setShowSignUp] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets CSS defaults */}
      <Calendar />
      <LeadList/>
      <Dashboard/>
      <DashboardLayout/>
      <PurchasedLeads/>
      <Feedback/>
      <PaymentSuccess/>
    </ThemeProvider>
  );
}
export default App;

