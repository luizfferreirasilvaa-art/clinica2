import { Link } from 'react-router-dom';
import { Send, Smartphone, Mail, Users, Filter, FileText } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';

export default function MarketingCampaigns() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-slate-500 hover:text-slate-900 font-medium text-sm">
                        ← Voltar ao Dashboard
                    </Link>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <h1 className="font-bold text-lg leading-none">Campanhas e Marketing</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                        <Send className="w-4 h-4 mr-2" />
                        Nova Campanha
                    </Button>
                </div>
            </header>

            <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* New Campaign Creation */}
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Criar Disparo</CardTitle>
                                <CardDescription>Envie mensagens em massa para sua base de assinantes.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-slate-700">Público Alvo</label>
                                    <div className="flex flex-wrap gap-2">
                                        <Button variant="outline" className="border-indigo-600 text-indigo-700 bg-indigo-50">
                                            <Users className="w-4 h-4 mr-2" />
                                            Todos Assinantes
                                        </Button>
                                        <Button variant="outline">
                                            Inadimplentes
                                        </Button>
                                        <Button variant="outline">
                                            Aniversariantes do Mês
                                        </Button>
                                        <Button variant="outline" className="ml-auto">
                                            <Filter className="w-4 h-4 mr-2" />
                                            FiltroAvançado
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-slate-700">Canal de Envio</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Card className="cursor-pointer border-green-500 bg-green-50">
                                            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                                                <Smartphone className="w-8 h-8 text-green-600 mb-2" />
                                                <span className="font-bold text-green-700">WhatsApp</span>
                                                <span className="text-xs text-green-600 mt-1">Alta taxa de abertura</span>
                                            </CardContent>
                                        </Card>
                                        <Card className="cursor-pointer hover:border-slate-400 transition-colors">
                                            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                                                <Mail className="w-8 h-8 text-slate-400 mb-2" />
                                                <span className="font-bold text-slate-700">E-mail</span>
                                                <span className="text-xs text-slate-500 mt-1">Melhor para informativos longos</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-slate-700">Mensagem</label>
                                    <textarea
                                        className="w-full min-h-[150px] p-3 rounded-md border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-y"
                                        placeholder="Olá {{nome_paciente}}, confira nossa novidade especial para clientes do plano {{nome_plano}}..."
                                    />
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <span className="font-semibold text-slate-700">Variáveis disponíveis:</span>
                                        <span className="bg-slate-100 px-1 py-0.5 rounded">{'{{nome_paciente}}'}</span>
                                        <span className="bg-slate-100 px-1 py-0.5 rounded">{'{{nome_plano}}'}</span>
                                        <span className="bg-slate-100 px-1 py-0.5 rounded">{'{{link_carteirinha}}'}</span>
                                    </div>
                                </div>

                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 h-12 text-md">
                                    Programar / Enviar Disparo Agora
                                </Button>

                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Histórico de Campanhas</CardTitle>
                                <CardDescription>Acompanhe os resultados práticos.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { title: 'Promoção Limpeza', date: '10/03/2026', type: 'WhatsApp', sent: 142, opened: '98%' },
                                    { title: 'Aviso Novo Convênio', date: '01/02/2026', type: 'Email', sent: 310, opened: '45%' },
                                    { title: 'Feliz Natal Especial', date: '25/12/2025', type: 'WhatsApp', sent: 290, opened: '95%' }
                                ].map((c, i) => (
                                    <div key={i} className="border rounded-lg p-3 hover:bg-slate-50">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-sm text-slate-900">{c.title}</span>
                                            <span className="text-xs text-slate-500">{c.date}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-slate-600">
                                            <span className="flex items-center gap-1">
                                                {c.type === 'WhatsApp' ? <Smartphone className="w-3 h-3 text-green-600" /> : <Mail className="w-3 h-3 text-slate-400" />} {c.sent} enviados
                                            </span>
                                            <span className="font-medium text-slate-800">Abertura: {c.opened}</span>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="outline" className="w-full text-xs">
                                    Ver Histórico Completo
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-indigo-50 border-indigo-100">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-indigo-900 text-sm flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-indigo-600" />
                                    Modelos Prontos
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button variant="link" className="text-indigo-700 p-0 h-auto text-sm block hover:underline">1. Modelo "Feliz Aniversário"</Button>
                                <Button variant="link" className="text-indigo-700 p-0 h-auto text-sm block hover:underline">2. Modelo "Alerta de Inadimplência Suave"</Button>
                                <Button variant="link" className="text-indigo-700 p-0 h-auto text-sm block hover:underline">3. Modelo "Oferta Upgrade de Plano"</Button>
                            </CardContent>
                        </Card>
                    </div>

                </div>

            </main>
        </div>
    );
}
