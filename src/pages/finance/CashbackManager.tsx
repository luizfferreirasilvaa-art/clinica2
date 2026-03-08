import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Gift, TrendingUp, Download, Settings } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const MOCK_CASHBACK = [
    { id: '1', name: 'João Silva', date: 'Hoje', amount: 'R$ 15,00', available: 'R$ 85,00', type: 'Gerado (Assinatura Premium)' },
    { id: '2', name: 'Maria Fernandes', date: 'Ontem', amount: 'R$ 50,00', available: 'R$ 0,00', type: 'Resgatado (Consulta)' },
    { id: '3', name: 'Ana Costa', date: '10/03/2026', amount: 'R$ 10,00', available: 'R$ 10,00', type: 'Gerado (Plano Ortodontia)' },
];

export default function CashbackManager() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCashbacks = MOCK_CASHBACK.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-slate-500 hover:text-slate-900 font-medium text-sm">
                        ← Voltar ao Dashboard
                    </Link>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <h1 className="font-bold text-lg leading-none">Gerenciamento de Cashback</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Regras de Cashback
                    </Button>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                        <Download className="w-4 h-4 mr-2" />
                        Baixar Relatório
                    </Button>
                </div>
            </header>

            <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="border-indigo-100 bg-indigo-50/30">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-indigo-900">
                                Cashback Ativo no Mercado
                            </CardTitle>
                            <Gift className="w-4 h-4 text-indigo-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-indigo-700">R$ 4.250,00</div>
                            <p className="text-xs text-indigo-600 mt-1 font-medium">
                                Pode ser resgatado a qualquer momento
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-green-100 bg-green-50/30">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                Cashback Resgatado (Mês)
                            </CardTitle>
                            <TrendingUp className="w-4 h-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">R$ 1.840,00</div>
                            <p className="text-xs text-green-600 mt-1 flex items-center gap-1 font-medium">
                                Retorno de pacientes fiéis
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* List */}
                <div className="flex items-center gap-4">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                            placeholder="Buscar paciente..."
                            className="pl-9 w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Data</th>
                                    <th className="px-6 py-4 font-medium">Paciente</th>
                                    <th className="px-6 py-4 font-medium">Evento</th>
                                    <th className="px-6 py-4 font-medium">Transação</th>
                                    <th className="px-6 py-4 font-medium text-right">Saldo Atual</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {filteredCashbacks.map((c) => (
                                    <tr key={c.id} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-4 text-slate-500">{c.date}</td>
                                        <td className="px-6 py-4 font-medium text-slate-900">{c.name}</td>
                                        <td className="px-6 py-4">
                                            {c.type.includes('Gerado') ? (
                                                <span className="text-green-600 font-medium flex items-center gap-1">
                                                    <TrendingUp className="w-3 h-3" /> {c.type}
                                                </span>
                                            ) : (
                                                <span className="text-amber-600 font-medium flex items-center gap-1">
                                                    <TrendingUp className="w-3 h-3 rotate-180" /> {c.type}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 font-bold text-slate-900">
                                            {c.type.includes('Gerado') ? '+' : '-'}{c.amount}
                                        </td>
                                        <td className="px-6 py-4 text-right font-medium text-slate-700">
                                            {c.available}
                                        </td>
                                    </tr>
                                ))}
                                {filteredCashbacks.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                            Nenhum histórico encontrado.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </main>
        </div>
    );
}
