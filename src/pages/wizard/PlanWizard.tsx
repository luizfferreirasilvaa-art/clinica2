import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WizardStep1 from '../../components/wizard/WizardStep1';
import WizardStep2 from '../../components/wizard/WizardStep2';
import WizardStep3 from '../../components/wizard/WizardStep3';
import WizardStep4 from '../../components/wizard/WizardStep4';
import WizardStep5 from '../../components/wizard/WizardStep5';
import WizardStep6 from '../../components/wizard/WizardStep6';
import WizardStep7 from '../../components/wizard/WizardStep7';

export default function PlanWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => Math.max(1, prev - 1));
    const finishWizard = () => {
        // Here we would typically save the plan data to Supabase
        // And then redirect to the clinic dashboard
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8">
                {/* Simple Progress Bar */}
                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-3xl font-bold text-slate-900">Montagem do Plano</h1>
                    <span className="text-sm font-medium bg-primary/10 text-primary py-1 px-3 rounded-full">
                        Passo {currentStep} de 7
                    </span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-primary h-full transition-all duration-300"
                        style={{ width: `${(currentStep / 7) * 100}%` }}
                    />
                </div>
            </div>

            <div className="w-full">
                {currentStep === 1 && <WizardStep1 onNext={nextStep} />}
                {currentStep === 2 && <WizardStep2 onNext={nextStep} onPrev={prevStep} />}
                {currentStep === 3 && <WizardStep3 onNext={nextStep} onPrev={prevStep} />}
                {currentStep === 4 && <WizardStep4 onNext={nextStep} onPrev={prevStep} />}
                {currentStep === 5 && <WizardStep5 onNext={nextStep} onPrev={prevStep} />}
                {currentStep === 6 && <WizardStep6 onNext={nextStep} onPrev={prevStep} />}
                {currentStep === 7 && <WizardStep7 onFinish={finishWizard} onPrev={prevStep} />}
            </div>
        </div>
    );
}
