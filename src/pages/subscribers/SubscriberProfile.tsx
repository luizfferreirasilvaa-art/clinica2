import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Phone, Mail, MapPin, CreditCard, Clock, FileText, CheckCircle2 } from 'lucide-react';

export default function SubscriberProfile() {
    const { id } = useParams();

    // Simulated fetch based on ID
    const subscriber = {
        name: 'João Silva',
        cpf: '111.222.333-44',
        email: 'joao.silva@email.com',
        phone: '(11) 98765-4321',
        address: 'Rua das Flores, 123 - Centro, São Paulo/SP',
        plan: 'Plano Premium',
        status: 'Ativo',
        since: '15/01/2024',
        monthlyFee: 'R$ 120,00',
        nextDue: '15/04/2026',
        cardLast4: '4321'
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Header */}
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/assinantes" className="text-slate-500 hover:text-slate-900 font-medium text-sm">
                        ← Voltar para Lista
                    </Link>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <h1 className="font-bold text-lg leading-none">Perfil do Assinante</h1>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">Suspender Plano</Button>
                    <Button size="sm">Editar Cadastro</Button>
                </div>
            </header>

            <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-6">

                {/* Top Identification Card */}
                <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-3xl">
                        {subscriber.name.charAt(0)}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-slate-900">{subscriber.name}</h2>
                        <div className="text-slate-500 font-medium mt-1">CPF: {subscriber.cpf}</div>
                        <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                {subscriber.status}
                            </span>
                            <span className="text-sm text-slate-500 flex items-center gap-1">
                                <Clock className="w-4 h-4" /> Cliente desde {subscriber.since}
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-auto p-4 bg-slate-50 rounded-lg border text-center">
                        <div className="text-sm text-slate-500 font-medium mb-1">Assinatura Atual</div>
                        <div className="text-xl font-bold text-primary">{subscriber.plan}</div>
                        <div className="text-sm font-semibold mt-1">{subscriber.monthlyFee} / mês</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Left Column - Contact & Details */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Informações de Contato</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-slate-400 mt-0.5" />
                                    <div>
                                        <div className="text-sm text-slate-500">Celular / WhatsApp</div>
                                        <div className="font-medium">{subscriber.phone}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-slate-400 mt-0.5" />
                                    <div>
                                        <div className="text-sm text-slate-500">E-mail</div>
                                        <div className="font-medium">{subscriber.email}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                                    <div>
                                        <div className="text-sm text-slate-500">Endereço</div>
                                        <div className="font-medium text-sm leading-relaxed">{subscriber.address}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Forma de Pagamento</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between p-3 border rounded-lg bg-slate-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-6 bg-slate-200 rounded flex items-center justify-center">
                                            <CreditCard className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold">Cartão de Crédito</div>
                                            <div className="text-xs text-slate-500">Final {subscriber.cardLast4}</div>
                                        </div>
                                    </div>
                                    <Button variant="link" size="sm" className="text-primary h-auto p-0">Alterar</Button>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 mb-1">Próxima Cobrança:</div>
                                    <div className="font-semibold text-slate-900">{subscriber.nextDue}</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - History & Usage */}
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg">Histórico de Pagamentos</CardTitle>
                                <Button variant="outline" size="sm">Ver Faturas</Button>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[
                                        { month: 'Março 2026', date: '15/03/2026', status: 'Pago', amount: subscriber.monthlyFee },
                                        { month: 'Fevereiro 2026', date: '15/02/2026', status: 'Pago', amount: subscriber.monthlyFee },
                                        { month: 'Janeiro 2026', date: '15/01/2026', status: 'Pago', amount: subscriber.monthlyFee },
                                    ].map((invoice, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border-b last:border-0">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-slate-900">{invoice.month}</div>
                                                    <div className="text-xs text-slate-500">Pago em {invoice.date}</div>
                                                </div>
                                            </div>
                                            <div className="font-bold text-slate-700">{invoice.amount}</div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Documentos do Paciente</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="border border-slate-200 rounded-lg p-4 flex items-start gap-4 hover:border-primary cursor-pointer transition-colors">
                                        <div className="w-10 h-10 bg-primary/10 text-primary rounded flex items-center justify-center">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">Contrato de Adesão</div>
                                            <div className="text-xs text-slate-500 mb-2">Assinado em 15/01/2024</div>
                                            <Button variant="link" className="p-0 h-auto text-xs">Fazer Download</Button>
                                        </div>
                                    </div>
                                    <div className="border border-slate-200 rounded-lg p-4 flex items-start gap-4 hover:border-primary cursor-pointer transition-colors">
                                        <div className="w-10 h-10 bg-primary/10 text-primary rounded flex items-center justify-center">
                                            <CreditCard className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">Carteirinha Digital</div>
                                            <div className="text-xs text-slate-500 mb-2">Ativa</div>
                                            <Button variant="link" className="p-0 h-auto text-xs">Visualizar URL</Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>

            </main>
        </div>
    );
}
