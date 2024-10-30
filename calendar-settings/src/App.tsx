import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar'; 
import LeadPage from './components/LeadPage';
import Leads from './components/Leads';
import BuyCredits from './components/BuyCredits';
import PaymentMethod from './components/PaymentMethod';
import Loader from './components/Loader';
import Payment from './components/Payment';
import ProductDetails from './components/ProductDetails/ProductDetails';

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
          {/* Leads page */}
          <Route path="/leads" element={<Leads />} />
          {/*Buy Credits page */}
          <Route path="/buy-credits" element={<BuyCredits />} />
          {/* Payment page */}
          <Route path="/payment" element={<PaymentMethod />} />
          {/* Loader component */}
          <Route path="/loader" element={<Loader />} />
          {/* Payment */}
          <Route path="/pay" element={<Payment />} />
          {/* Product Details */}
          <Route path='/product-details' element={<ProductDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
