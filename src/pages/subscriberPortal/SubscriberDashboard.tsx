import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { HeartPulse, LogOut, CheckCircle2, AlertTriangle, CreditCard, ChevronRight, Gift, Activity } from 'lucide-react';
import { useBrand } from '../../contexts/BrandContext';

export default function SubscriberDashboard() {
    const { brand } = useBrand();

    // Mock data for the subscriber
    const subscriber = {
        name: 'João da Silva',
        planName: 'Plano Familiar Premium',
        status: 'active', // 'active' | 'overdue' | 'cancelled'
        overdueAmount: 0,
        cashbackBalance: 45.50,
        dependents: 3
    };

    // Mock scenario: Let's pretend they have a pending invoice for demonstration 
    // if you want to test the 'overdue' state, change status to 'overdue' and overdueAmount to 120.00
    // subscriber.status = 'overdue';
    // subscriber.overdueAmount = 120.00;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col pb-20">

            {/* Mobile-friendly Header */}
            <header
                className="text-white px-6 pt-12 pb-6 rounded-b-3xl shadow-md relative overflow-hidden"
                style={{ backgroundColor: brand.primaryColor }}
            >
                <div className="absolute inset-0 bg-black/10 z-0"></div>
                <div className="relative z-10 flex justify-between items-start">
                    <div>
                        <p className="text-white/80 text-sm font-medium mb-1">Olá,</p>
                        <h1 className="text-2xl font-bold">{subscriber.name}</h1>
                    </div>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                        <LogOut className="w-5 h-5" />
                    </Button>
                </div>
            </header>

            <main className="flex-1 px-4 -mt-4 relative z-20 max-w-md mx-auto w-full space-y-4">

                {/* Status Card (Active vs Overdue) */}
                {subscriber.status === 'overdue' ? (
                    <Card className="border-red-200 shadow-sm overflow-hidden">
                        <div className="bg-red-500 p-3 flex items-center gap-2 text-white">
                            <AlertTriangle className="w-5 h-5" />
                            <span className="font-bold">Atenção ao seu plano</span>
                        </div>
                        <CardContent className="p-4 bg-white">
                            <p className="text-sm text-slate-600 mb-3">
                                Identificamos uma mensalidade em atraso no valor de <strong className="text-red-600">R$ {subscriber.overdueAmount.toFixed(2)}</strong>.
                            </p>
                            <Button className="w-full bg-red-600 hover:bg-red-700 h-11">
                                Acerte Agora com PIX
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="border-green-200 shadow-sm overflow-hidden text-center">
                        <div className="bg-green-500 py-2 flex items-center justify-center gap-2 text-white">
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="font-semibold text-sm">Plano Ativo e Regular</span>
                        </div>
                        <CardContent className="p-5 bg-white space-y-2">
                            <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">{subscriber.planName}</div>
                            <div className="font-bold text-slate-800 flex items-center justify-center gap-2">
                                <Activity className="w-4 h-4 text-green-500" /> Cobertura Liberada
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Quick Actions Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <Link to="/assinante/carteira" className="block">
                        <Card className="hover:border-indigo-300 transition-colors cursor-pointer shadow-sm h-full">
                            <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-1">
                                    <CreditCard className="w-6 h-6 text-indigo-600" style={{ color: brand.primaryColor }} />
                                </div>
                                <span className="font-medium text-slate-800 text-sm">Carteirinha Digital</span>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link to="/assinante/cobertura" className="block">
                        <Card className="hover:border-indigo-300 transition-colors cursor-pointer shadow-sm h-full">
                            <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-1">
                                    <HeartPulse className="w-6 h-6 text-indigo-600" style={{ color: brand.primaryColor }} />
                                </div>
                                <span className="font-medium text-slate-800 text-sm">Cobertura do Plano</span>
                            </CardContent>
                        </Card>
                    </Link>
                </div>

                <Link to="/assinante/loja" className="block">
                    <Card className="hover:border-indigo-300 transition-colors cursor-pointer shadow-sm bg-gradient-to-r from-indigo-50 to-white">
                        <CardContent className="p-4 flex items-center justify-between text-left">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                                    <Activity className="w-5 h-5" style={{ color: brand.primaryColor }} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-sm">Loja de Planos</h3>
                                    <p className="text-xs text-slate-500">Conheça outras opções</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-400" />
                        </CardContent>
                    </Card>
                </Link>

                {/* Cashback Widget */}
                <Card className="shadow-sm border-slate-200 overflow-hidden">
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base flex items-center justify-between">
                            <span className="flex items-center gap-2 text-slate-800">
                                <Gift className="w-5 h-5 text-amber-500" />
                                Seu Cashback
                            </span>
                            <span className="text-lg font-bold text-green-600">R$ {subscriber.cashbackBalance.toFixed(2).replace('.', ',')}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                        <p className="text-xs text-slate-500 mb-3">
                            Gere um voucher de desconto para usar na sua próxima consulta particular ou procedimento estético na clínica.
                        </p>
                        <Button variant="outline" className="w-full text-xs h-9 justify-between" style={{ borderColor: brand.primaryColor, color: brand.primaryColor }}>
                            Gerar Voucher de Desconto <ChevronRight className="w-4 h-4" />
                        </Button>
                    </CardContent>
                </Card>

                {/* Family/Dependents */}
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between border-b pb-3 mb-3">
                        <CardTitle className="text-base text-slate-800 font-bold text-md">Meus Dependentes</CardTitle>
                        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-xs font-bold">{subscriber.dependents} cadastrados</span>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 space-y-3">
                        {['Maria da Silva', 'Pedro da Silva', 'Ana da Silva'].map((dep, idx) => (
                            <div key={idx} className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <span className="text-sm font-medium text-slate-700">{dep}</span>
                                <Button variant="ghost" size="sm" className="h-7 text-xs px-2 text-slate-500" style={{ color: brand.primaryColor }}>
                                    Ver Carteirinha
                                </Button>
                            </div>
                        ))}
                        <Button variant="link" className="w-full text-xs h-auto p-0 mt-2 text-slate-500">
                            + Adicionar novo dependente
                        </Button>
                    </CardContent>
                </Card>

            </main>

            {/* Floating WhatsApp Support Button */}
            <a
                href="#"
                className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
            >
                <svg xmlns="http://www.未来的.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
            </a>

        </div>
    );
}
