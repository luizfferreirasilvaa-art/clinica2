import { Routes, Route } from 'react-router-dom';

// Pages - Clinic Auth
import LoginClinica from './pages/auth/Login';
import RegisterClinica from './pages/auth/Register';
import RecoverPassword from './pages/auth/RecoverPassword';

// Pages - Clinic App
import PlanWizard from './pages/wizard/PlanWizard';
import ClinicDashboard from './pages/dashboard/ClinicDashboard';
import SubscribersList from './pages/subscribers/SubscribersList';
import SubscriberProfile from './pages/subscribers/SubscriberProfile';
import FinanceDashboard from './pages/finance/FinanceDashboard';
import DelinquencyControl from './pages/finance/DelinquencyControl';
import CashbackManager from './pages/finance/CashbackManager';
import WhiteLabelConfig from './pages/settings/WhiteLabelConfig';
import MarketingCampaigns from './pages/marketing/MarketingCampaigns';

// Pages - Subscriber Auth
import SubscriberLogin from './pages/subscriberAuth/SubscriberLogin';
import SubscriberRegister from './pages/subscriberAuth/SubscriberRegister';

// Pages - Subscriber Portal
import SubscriberDashboard from './pages/subscriberPortal/SubscriberDashboard';
import DigitalCard from './pages/subscriberPortal/DigitalCard';
import PlanCoverage from './pages/subscriberPortal/PlanCoverage';
import PlanStore from './pages/subscriberPortal/PlanStore';
import ContractPdf from './pages/subscriberPortal/ContractPdf';

function App() {
  return (
    <Routes>
      {/* Clinic Auth Routes */}
      <Route path="/auth/login" element={<LoginClinica />} />
      <Route path="/auth/registro" element={<RegisterClinica />} />
      <Route path="/auth/recuperar-senha" element={<RecoverPassword />} />

      {/* Main Clinic App Routes */}
      <Route path="/" element={<ClinicDashboard />} />
      <Route path="/assinantes" element={<SubscribersList />} />
      <Route path="/assinantes/:id" element={<SubscriberProfile />} />
      <Route path="/financeiro" element={<FinanceDashboard />} />
      <Route path="/inadimplencia" element={<DelinquencyControl />} />
      <Route path="/cashback" element={<CashbackManager />} />
      <Route path="/configuracoes" element={<WhiteLabelConfig />} />
      <Route path="/marketing" element={<MarketingCampaigns />} />

      {/* Plan Wizard */}
      <Route path="/wizard" element={<PlanWizard />} />

      {/* Subscriber Auth */}
      <Route path="/assinante/login" element={<SubscriberLogin />} />
      <Route path="/assinante/cadastro" element={<SubscriberRegister />} />

      {/* Subscriber Area Routes */}
      <Route path="/assinante" element={<SubscriberDashboard />} />
      <Route path="/assinante/carteira" element={<DigitalCard />} />
      <Route path="/assinante/cobertura" element={<PlanCoverage />} />
      <Route path="/assinante/loja" element={<PlanStore />} />
      <Route path="/assinante/contrato" element={<ContractPdf />} />
      <Route path="/assinante/*" element={<SubscriberDashboard />} />
    </Routes>
  );
}

export default App;
