import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertCircle, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const MOCK_DELINQUENT = [
    { id: '1', name: 'Carlos Ribeiro', cpf: '333.444.555-66', plan: 'Plano Básico', amount: 'R$ 79,90', daysLate: 15, contact: '(11) 99999-9999', status: 'Lembrete Enviado' },
    { id: '2', name: 'Ana Souza', cpf: '777.888.999-00', plan: 'Ortodontia', amount: 'R$ 250,00', daysLate: 5, contact: '(11) 98888-8888', status: 'Pendente' },
    { id: '3', name: 'Felipe Santos', cpf: '000.111.222-33', plan: 'Plano Premium', amount: 'R$ 120,00', daysLate: 30, contact: 'felipe@email.com', status: 'Negociando' },
];

export default function DelinquencyControl() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = MOCK_DELINQUENT.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.cpf.includes(searchTerm)
    );

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-slate-500 hover:text-slate-900 font-medium text-sm">
                        ← Voltar ao Dashboard
                    </Link>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <h1 className="font-bold text-lg leading-none">Controle de Inadimplência</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        <Send className="w-4 h-4 mr-2" />
                        Lembrete em Massa
                    </Button>
                </div>
            </header>

            <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-6">
                {/* Alerts & Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-red-100 bg-red-50/30">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                Atrasados Totais
                            </CardTitle>
                            <AlertCircle className="w-4 h-4 text-red-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-red-600">14</div>
                            <p className="text-xs text-red-600 mt-1 font-medium">
                                Pacientes com pendências
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-amber-100 bg-amber-50/30">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                Lembretes Enviados Hoje
                            </CardTitle>
                            <Send className="w-4 h-4 text-amber-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">5</div>
                            <p className="text-xs text-amber-600 mt-1 flex items-center gap-1 font-medium">
                                Via WhatsApp e Email
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-green-100 bg-green-50/30">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                Recuperados este Mês
                            </CardTitle>
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">8</div>
                            <p className="text-xs text-green-600 mt-1 font-medium flex items-center gap-1">
                                R$ 955,00 recuperados
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* List */}
                <div className="flex items-center gap-4">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                            placeholder="Buscar por nome ou CPF..."
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
                                    <th className="px-6 py-4 font-medium">Paciente</th>
                                    <th className="px-6 py-4 font-medium">Dias Lojas</th>
                                    <th className="px-6 py-4 font-medium">Valor Devido</th>
                                    <th className="px-6 py-4 font-medium">Status do Lembrete</th>
                                    <th className="px-6 py-4 font-medium text-right">Ação Rápida</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {filteredPatients.map((p) => (
                                    <tr key={p.id} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-900">{p.name}</div>
                                            <div className="text-xs text-slate-500">{p.plan} • {p.cpf}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-red-600 font-semibold">{p.daysLate} dias</span>
                                        </td>
                                        <td className="px-6 py-4 font-bold text-slate-900">{p.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold 
                        ${p.status === 'Lembrete Enviado' ? 'bg-amber-100 text-amber-700' :
                                                    p.status === 'Negociando' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-slate-100 text-slate-700'}`}>
                                                {p.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="sm" className="h-8 text-green-600 border-green-200 hover:bg-green-50">
                                                    <Phone className="w-3.5 h-3.5 mr-1.5" />
                                                    WhatsApp
                                                </Button>
                                                <Button variant="outline" size="sm" className="h-8">
                                                    <Mail className="w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredPatients.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                            Nenhum paciente inadimplente encontrado.
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
