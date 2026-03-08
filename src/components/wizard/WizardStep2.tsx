import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function WizardStep2({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
    // We're creating a summarized version of Step 2 first. It's quite large.
    const [services, setServices] = useState<string[]>(['Odontologia', 'Medicina']);
    const [newService, setNewService] = useState('');

    const addService = () => {
        if (newService.trim()) {
            setServices([...services, newService]);
            setNewService('');
        }
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">

            {/* Instructions & Videos */}
            <Card>
                <CardHeader>
                    <CardTitle>Etapa 2: Montagem dos Planos</CardTitle>
                    <CardDescription>
                        Assista estes 2 vídeos para descobrir quais os tipos de planos sugerimos que você monte para ter mais resultados e como montá-los aqui:
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300">
                        <span className="text-slate-500 text-sm">Quais planos montar?</span>
                    </div>
                    <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300">
                        <span className="text-slate-500 text-sm">Tutorial na prática</span>
                    </div>
                </CardContent>
            </Card>

            {/* Main Builder Form */}
            <h2 className="text-2xl font-bold pt-4 text-center">Vamos Criar um NOVO PLANO</h2>

            <Card>
                <CardHeader>
                    <CardTitle>1. Dados da sua Clínica (Opcional)</CardTitle>
                    <CardDescription>Estes dados constarão nos contratos e carteirinhas.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Nome da clínica</Label>
                        <Input placeholder="Ex: Clínica Sorriso" />
                    </div>
                    <div className="space-y-2">
                        <Label>CNPJ</Label>
                        <Input placeholder="00.000.000/0001-00" />
                    </div>
                    <div className="space-y-2">
                        <Label>Nome do Proprietário</Label>
                        <Input placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                        <Label>Telefone / WhatsApp</Label>
                        <Input placeholder="(00) 00000-0000" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>2. Quais serviços são prestados?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {services.map((svc, i) => (
                            <span key={i} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm">
                                {svc}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-end gap-2 max-w-md">
                        <div className="space-y-2 flex-1">
                            <Label>Adicionar novo serviço</Label>
                            <Input
                                value={newService}
                                onChange={(e) => setNewService(e.target.value)}
                                placeholder="Ex: Fisioterapia"
                            />
                        </div>
                        <Button type="button" variant="outline" onClick={addService}>Adicionar</Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>3. Definições do Plano</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2 max-w-md">
                        <Label>Nome do Plano</Label>
                        <Input placeholder="Ex: Plano Ouro" />
                    </div>
                    <div className="space-y-2">
                        <Label>Tipo de Plano</Label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-md flex-1 bg-slate-50">
                                <input type="radio" name="planType" value="pago" defaultChecked className="w-4 h-4 text-primary" />
                                <span>Plano Pago (Com Mensalidade)</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-md flex-1">
                                <input type="radio" name="planType" value="gratuito" className="w-4 h-4 text-primary" />
                                <span>Plano Gratuito / Corporativo</span>
                            </label>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onPrev}>Voltar</Button>
                <Button onClick={onNext} size="lg">Avançar para Coberturas</Button>
            </div>

        </div>
    );
}
