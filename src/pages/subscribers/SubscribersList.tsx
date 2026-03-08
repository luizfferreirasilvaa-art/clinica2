import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Filter, MoreVertical, FileText } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';

// Mock data for subscribers
const MOCK_SUBSCRIBERS = [
    { id: '1', name: 'João Silva', cpf: '111.222.333-44', plan: 'Plano Premium', status: 'Ativo', since: '15/01/2024' },
    { id: '2', name: 'Maria Fernandes', cpf: '222.333.444-55', plan: 'Ortodontia', status: 'Ativo', since: '02/02/2024' },
    { id: '3', name: 'Carlos Ribeiro', cpf: '333.444.555-66', plan: 'Plano Básico', status: 'Inadimplente', since: '10/11/2023' },
    { id: '4', name: 'Ana Costa', cpf: '444.555.666-77', plan: 'Plano Premium', status: 'Ativo', since: '20/12/2023' },
    { id: '5', name: 'Pedro Santos', cpf: '555.666.777-88', plan: 'Plano Básico', status: 'Cancelado', since: '05/05/2023' },
];

export default function SubscribersList() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSubscribers = MOCK_SUBSCRIBERS.filter(sub =>
        sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.cpf.includes(searchTerm)
    );

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Top Header */}
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-slate-500 hover:text-slate-900 font-medium text-sm">
                        ← Voltar ao Dashboard
                    </Link>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <h1 className="font-bold text-lg leading-none">Assinantes</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/assinantes/novo">
                        <Button size="sm">
                            <Plus className="w-4 h-4 mr-2" />
                            Novo Assinante
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-6">

                {/* Filters & Search */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                            placeholder="Buscar por nome ou CPF..."
                            className="pl-9 w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-auto">
                            <Filter className="w-4 h-4 mr-2" />
                            Filtros
                        </Button>
                    </div>
                </div>

                {/* List */}
                <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Paciente</th>
                                    <th className="px-6 py-4 font-medium">CPF</th>
                                    <th className="px-6 py-4 font-medium">Plano Atual</th>
                                    <th className="px-6 py-4 font-medium">Cliente Desde</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {filteredSubscribers.map((sub) => (
                                    <tr key={sub.id} className="hover:bg-slate-50/50 group transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                                    {sub.name.charAt(0)}
                                                </div>
                                                <div className="font-medium text-slate-900">{sub.name}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">{sub.cpf}</td>
                                        <td className="px-6 py-4 text-slate-600 font-medium">{sub.plan}</td>
                                        <td className="px-6 py-4 text-slate-500">{sub.since}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold 
                        ${sub.status === 'Ativo' ? 'bg-green-100 text-green-700' :
                                                    sub.status === 'Inadimplente' ? 'bg-red-100 text-red-700' :
                                                        'bg-slate-100 text-slate-700'}`}>
                                                {sub.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link to={`/assinantes/${sub.id}`}>
                                                    <Button variant="outline" size="sm" className="h-8 bg-white">
                                                        <FileText className="w-3.5 h-3.5 mr-1.5" />
                                                        Ficha
                                                    </Button>
                                                </Link>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                                                    <MoreVertical className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                                {filteredSubscribers.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                            Nenhum assinante encontrado para "{searchTerm}".
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
