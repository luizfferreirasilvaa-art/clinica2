import { Link } from 'react-router-dom';
import { ChevronLeft, Info, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { useBrand } from '../../contexts/BrandContext';

export default function PlanCoverage() {
    const { brand } = useBrand();

    return (
        <div className="min-h-screen bg-slate-50 pb-12">

            {/* Header */}
            <header className="bg-white border-b px-4 py-4 flex items-center sticky top-0 z-20 shadow-sm">
                <Link to="/assinante/dashboard" className="w-10 h-10 flex items-center justify-center -ml-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                </Link>
                <h1 className="font-bold text-lg ml-2">Coberturas do Plano</h1>
            </header>

            <main className="p-4 max-w-lg mx-auto space-y-6 mt-4">

                <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl flex items-start gap-3 text-indigo-800">
                    <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-600" />
                    <p className="text-sm">
                        Aqui você encontra todos os procedimentos inclusos no seu <strong>Plano Básico</strong> e os valores de coparticipação (se houver).
                    </p>
                </div>

                <div className="space-y-4 mt-6">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" /> Consultas Médicas
                    </h2>

                    <Card className="shadow-sm border-0 ring-1 ring-slate-200">
                        <CardContent className="p-0">
                            <ul className="divide-y divide-slate-100">
                                <li className="p-4 flex justify-between items-center bg-white hover:bg-slate-50">
                                    <div>
                                        <span className="font-medium text-slate-800 block">Clínica Geral</span>
                                        <span className="text-xs text-slate-500">Ilimitado</span>
                                    </div>
                                    <span className="font-bold text-green-600 text-sm bg-green-50 px-2 py-1 rounded">Grátis</span>
                                </li>
                                <li className="p-4 flex justify-between items-center bg-white hover:bg-slate-50">
                                    <div>
                                        <span className="font-medium text-slate-800 block">Pediatria</span>
                                        <span className="text-xs text-slate-500">1x ao mês</span>
                                    </div>
                                    <span className="font-bold text-slate-700 text-sm bg-slate-100 px-2 py-1 rounded">R$ 30 copart.</span>
                                </li>
                                <li className="p-4 flex justify-between items-center bg-white hover:bg-slate-50">
                                    <div>
                                        <span className="font-medium text-slate-800 block">Ginecologia</span>
                                        <span className="text-xs text-slate-500">2x ao ano</span>
                                    </div>
                                    <span className="font-bold text-green-600 text-sm bg-green-50 px-2 py-1 rounded">Grátis</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" /> Procedimentos Odontológicos
                    </h2>

                    <Card className="shadow-sm border-0 ring-1 ring-slate-200">
                        <CardContent className="p-0">
                            <ul className="divide-y divide-slate-100">
                                <li className="p-4 flex justify-between items-center bg-white hover:bg-slate-50">
                                    <div>
                                        <span className="font-medium text-slate-800 block">Limpeza e Profilaxia</span>
                                        <span className="text-xs text-slate-500">A cada 6 meses</span>
                                    </div>
                                    <span className="font-bold text-green-600 text-sm bg-green-50 px-2 py-1 rounded">Grátis</span>
                                </li>
                                <li className="p-4 flex justify-between items-center bg-white hover:bg-slate-50">
                                    <div>
                                        <span className="font-medium text-slate-800 block">Extração Simples</span>
                                        <span className="text-xs text-slate-500">Conforme necessidade</span>
                                    </div>
                                    <span className="font-bold text-slate-700 text-sm bg-slate-100 px-2 py-1 rounded">R$ 50 copart.</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-500" /> Carências Ativas
                    </h2>

                    <Card className="shadow-sm border-0 bg-amber-50 ring-1 ring-amber-200">
                        <CardContent className="p-4 space-y-3">
                            <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                                <span className="text-amber-900 font-medium text-sm">Cirurgias Simples</span>
                                <span className="text-xs font-bold text-amber-700 bg-amber-200/50 px-2 py-1 rounded">12 dias restantes</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-900 font-medium text-sm">Prótese Dentária</span>
                                <span className="text-xs font-bold text-amber-700 bg-amber-200/50 px-2 py-1 rounded">90 dias restantes</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="pt-6">
                    <Card className="shadow-none border border-slate-200 bg-slate-50 text-center">
                        <CardHeader className="p-4">
                            <CardTitle className="text-base">Dúvidas sobre sua cobertura?</CardTitle>
                            <CardDescription>Fale com nossa central de atendimento especializada.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <Button variant="outline" className="w-full gap-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50" style={{ borderColor: brand.primaryColor, color: brand.primaryColor }}>
                                <Phone className="w-4 h-4" /> Entrar em contato
                            </Button>
                        </CardContent>
                    </Card>
                </div>

            </main>
        </div>
    );
}
