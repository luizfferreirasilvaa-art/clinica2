import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
    Users,
    CreditCard,
    TrendingUp,
    Activity,
    PlusCircle,
    FileText,
    DollarSign
} from 'lucide-react';

export default function ClinicDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Top Header */}
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                        CQ
                    </div>
                    <div>
                        <h1 className="font-bold text-lg leading-none">Clínica Qualidade</h1>
                        <p className="text-sm text-slate-500">Painel de Gerenciamento</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/financeiro" className="hidden sm:inline-block">
                        <Button variant="outline" size="sm">
                            <DollarSign className="w-4 h-4 mr-2" />
                            Financeiro
                        </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                        <FileText className="w-4 h-4 mr-2" />
                        Relatórios
                    </Button>
                    <Link to="/wizard">
                        <Button size="sm">
                            <PlusCircle className="w-4 h-4 mr-2" />
                            Novo Plano
                        </Button>
                    </Link>
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium">
                        LU
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-8">

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">
                                Faturamento Mensal
                            </CardTitle>
                            <TrendingUp className="w-4 h-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">R$ 14.500,00</div>
                            <p className="text-xs text-green-600 mt-1 flex items-center">
                                +12% em relação ao mês anterior
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">
                                Assinantes Ativos
                            </CardTitle>
                            <Users className="w-4 h-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">342</div>
                            <p className="text-xs text-green-600 mt-1 flex items-center">
                                +18 novos este mês
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">
                                Inadimplência
                            </CardTitle>
                            <Activity className="w-4 h-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-600">4.2%</div>
                            <p className="text-xs text-slate-500 mt-1 flex items-center">
                                14 assinaturas pendentes
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">
                                Planos Ativos
                            </CardTitle>
                            <CreditCard className="w-4 h-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-slate-500 mt-1 flex items-center">
                                Básico, Premium e Ortodontia
                            </p>
                        </CardContent>
                    </Card>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Recent Patients Table (Spans 2 columns) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-xl font-bold tracking-tight">Últimas Assinaturas</h2>
                        <Card>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Paciente</th>
                                            <th className="px-6 py-3 font-medium">Plano</th>
                                            <th className="px-6 py-3 font-medium">Data</th>
                                            <th className="px-6 py-3 font-medium">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {[
                                            { name: 'João Silva', plan: 'Plano Premium', date: 'Hoje', status: 'Ativo' },
                                            { name: 'Maria Fernandes', plan: 'Ortodontia', date: 'Hoje', status: 'Ativo' },
                                            { name: 'Carlos Ribeiro', plan: 'Plano Básico', date: 'Ontem', status: 'Pendente' },
                                            { name: 'Ana Costa', plan: 'Plano Premium', date: 'Ontem', status: 'Ativo' },
                                            { name: 'Pedro Santos', plan: 'Plano Básico', date: '05 Mar', status: 'Ativo' },
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50">
                                                <td className="px-6 py-4 font-medium text-slate-900">{row.name}</td>
                                                <td className="px-6 py-4 text-slate-500">{row.plan}</td>
                                                <td className="px-6 py-4 text-slate-500">{row.date}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${row.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                                                        {row.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Ações Rápidas</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Link to="/assinantes" className="block w-full">
                                    <Button variant="outline" className="w-full justify-start cursor-pointer">
                                        <Users className="w-4 h-4 mr-2" />
                                        Gerenciar Assinantes
                                    </Button>
                                </Link>
                                <Link to="/inadimplencia" className="block w-full">
                                    <Button variant="outline" className="w-full justify-start cursor-pointer text-amber-600 border-amber-200 hover:bg-amber-50">
                                        Controle Inadimplência
                                    </Button>
                                </Link>
                                <Link to="/cashback" className="block w-full">
                                    <Button variant="outline" className="w-full justify-start cursor-pointer text-green-600 border-green-200 hover:bg-green-50">
                                        Cashback Ativo
                                    </Button>
                                </Link>
                                <Link to="/marketing" className="block w-full">
                                    <Button variant="outline" className="w-full justify-start cursor-pointer text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                                        Campanhas e Marketing
                                    </Button>
                                </Link>
                                <Link to="/configuracoes" className="block w-full">
                                    <Button variant="outline" className="w-full justify-start cursor-pointer text-slate-600 border-slate-200 hover:bg-slate-50">
                                        Configurações da Conta
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-primary text-primary-foreground border-none">
                            <CardHeader>
                                <CardTitle className="text-white">Loja de Planos</CardTitle>
                                <CardDescription className="text-primary-foreground/80">
                                    Seu link de vendas on-line
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-black/10 p-2 text-sm rounded mb-4 truncate text-white/90">
                                    app.clinicaplan.com/loja/clinica-qualidade
                                </div>
                                <Button variant="secondary" className="w-full">
                                    Copiar Link
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                </div>

            </main>
        </div>
    );
}
