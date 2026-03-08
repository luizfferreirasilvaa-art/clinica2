import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    DollarSign,
    ArrowUpRight,
    ArrowDownRight,
    CreditCard,
    Building,
    Smartphone,
    AlertCircle,
    Download,
    Settings
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

// Mock data for transactions
const MOCK_TRANSACTIONS = [
    { id: '1', name: 'João Silva', plan: 'Plano Premium', date: '15/03/2026', amount: 'R$ 120,00', status: 'Pago', method: 'Cartão de Crédito', icon: CreditCard },
    { id: '2', name: 'Maria Fernandes', plan: 'Ortodontia', date: '12/03/2026', amount: 'R$ 250,00', status: 'Pago', method: 'PIX', icon: Smartphone },
    { id: '3', name: 'Carlos Ribeiro', plan: 'Plano Básico', date: '10/03/2026', amount: 'R$ 79,90', status: 'Atrasado', method: 'Boleto', icon: Building },
    { id: '4', name: 'Ana Costa', plan: 'Plano Premium', date: '08/03/2026', amount: 'R$ 120,00', status: 'Pago', method: 'Cartão de Crédito', icon: CreditCard },
    { id: '5', name: 'Pedro Santos', plan: 'Plano Básico', date: '05/03/2026', amount: 'R$ 79,90', status: 'Pendente', method: 'Boleto', icon: Building },
];

export default function FinanceDashboard() {
    const [activeTab, setActiveTab] = useState('todas');

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Top Header */}
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-slate-500 hover:text-slate-900 font-medium text-sm">
                        ← Voltar ao Dashboard
                    </Link>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <h1 className="font-bold text-lg leading-none">Financeiro & ASAAS</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="hidden sm:flex">
                        <Download className="w-4 h-4 mr-2" />
                        Exportar Relatório
                    </Button>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                        <Settings className="w-4 h-4 mr-2" />
                        Configurações ASAAS
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-8">

                {/* Integration Alert */}
                <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 text-indigo-700 font-bold rounded flex items-center justify-center flex-shrink-0">
                        A
                    </div>
                    <div>
                        <h3 className="font-semibold text-indigo-900">Integração ASAAS Ativa</h3>
                        <p className="text-sm text-indigo-800 mt-1">
                            Sua conta está conectada. As cobranças recorrentes via Cartão de Crédito, PIX e Boleto estão sendo processadas automaticamente.
                        </p>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <Card className="border-green-100 bg-green-50/30">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                Receita Confirmada (Este Mês)
                            </CardTitle>
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <ArrowUpRight className="w-4 h-4 text-green-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">R$ 12.450,00</div>
                            <p className="text-xs text-green-600 mt-1 font-medium">
                                114 pagamentos processados
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-amber-100 bg-amber-50/30">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                A Receber (Previsão)
                            </CardTitle>
                            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                <DollarSign className="w-4 h-4 text-amber-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">R$ 4.800,00</div>
                            <p className="text-xs text-amber-600 mt-1 font-medium">
                                42 cobranças aguardando
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-red-100 bg-red-50/30">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                Inadimplência
                            </CardTitle>
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                <ArrowDownRight className="w-4 h-4 text-red-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-red-600">R$ 1.250,90</div>
                            <p className="text-xs text-red-600 mt-1 font-medium flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> 14 assinantes em atraso
                            </p>
                        </CardContent>
                    </Card>

                </div>

                {/* Transactions Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900">Movimentações Recentes</h2>

                        <div className="flex bg-slate-100 p-1 rounded-lg">
                            {['todas', 'cartao', 'pix', 'boleto'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-1.5 text-sm font-medium rounded-md capitalize transition-colors ${activeTab === tab
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-900'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Card className="overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Data</th>
                                        <th className="px-6 py-4 font-medium">Paciente</th>
                                        <th className="px-6 py-4 font-medium">Método</th>
                                        <th className="px-6 py-4 font-medium text-right">Valor</th>
                                        <th className="px-6 py-4 font-medium text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {MOCK_TRANSACTIONS.map((tx) => (
                                        <tr key={tx.id} className="hover:bg-slate-50/50 group transition-colors">
                                            <td className="px-6 py-4 text-slate-500">{tx.date}</td>
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-slate-900">{tx.name}</div>
                                                <div className="text-xs text-slate-500">{tx.plan}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-slate-600">
                                                    <tx.icon className="w-4 h-4 text-slate-400" />
                                                    {tx.method}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium text-slate-900">
                                                {tx.amount}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                          ${tx.status === 'Pago' ? 'bg-green-100 text-green-800' :
                                                        tx.status === 'Atrasado' ? 'bg-red-100 text-red-800' :
                                                            'bg-yellow-100 text-yellow-800'}`}>
                                                    {tx.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>

            </main>
        </div>
    );
}
