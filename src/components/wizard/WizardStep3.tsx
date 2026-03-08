import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function WizardStep3({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
    const [pricingMethod, setPricingMethod] = useState<'basico' | 'premium' | 'tratamento'>('basico');

    // Basic Method State
    const [basicPrice, setBasicPrice] = useState('');
    const [basicQuota, setBasicQuota] = useState('');

    // Premium Method State
    const [premiumBase, setPremiumBase] = useState('');
    const [clinicHourCost, setClinicHourCost] = useState('');
    const [procedureHours, setProcedureHours] = useState('');
    const [premiumQuota, setPremiumQuota] = useState('');

    // Treatment Method State
    const [treatmentPrice, setTreatmentPrice] = useState('');
    const [treatmentQuota, setTreatmentQuota] = useState('');

    // Common State
    const [finalPrice, setFinalPrice] = useState('');

    // Calculate Sugested Price
    const calculateBasic = () => {
        const p = parseFloat(basicPrice) || 0;
        const q = parseFloat(basicQuota) || 0;
        return ((p * q) * 0.85 / 12).toFixed(2); // Minus 15% divided by 12
    };

    const calculatePremium = () => {
        const base = parseFloat(premiumBase) || 0;
        const cost = parseFloat(clinicHourCost) || 0;
        const hours = parseFloat(procedureHours) || 0;
        const quota = parseFloat(premiumQuota) || 0;
        return (base + (cost * hours) * quota).toFixed(2);
    };

    const calculateTreatment = () => {
        const p = parseFloat(treatmentPrice) || 0;
        const q = parseFloat(treatmentQuota) || 0;
        return ((p * q) * 0.85 / 12).toFixed(2);
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">

            <Card>
                <CardHeader>
                    <CardTitle>Etapa 3: Definição dos Preços de Mensalidades</CardTitle>
                    <CardDescription>
                        Escolha o método que vai utilizar, de acordo com o tipo de plano que está criando.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label className={`cursor-pointer p-4 border rounded-lg text-center ${pricingMethod === 'basico' ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'bg-white'}`}>
                            <input type="radio" value="basico" checked={pricingMethod === 'basico'} onChange={() => setPricingMethod('basico')} className="sr-only" />
                            <div className="font-semibold mb-2">Método Plano Básico</div>
                            <div className="text-sm text-slate-500">Para planos com apenas 1 procedimento principal na Cobertura Integral.</div>
                        </label>
                        <label className={`cursor-pointer p-4 border rounded-lg text-center ${pricingMethod === 'premium' ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'bg-white'}`}>
                            <input type="radio" value="premium" checked={pricingMethod === 'premium'} onChange={() => setPricingMethod('premium')} className="sr-only" />
                            <div className="font-semibold mb-2">Método Plano Premium</div>
                            <div className="text-sm text-slate-500">Para planos com mais de 1 procedimento na Cobertura Integral.</div>
                        </label>
                        <label className={`cursor-pointer p-4 border rounded-lg text-center ${pricingMethod === 'tratamento' ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'bg-white'}`}>
                            <input type="radio" value="tratamento" checked={pricingMethod === 'tratamento'} onChange={() => setPricingMethod('tratamento')} className="sr-only" />
                            <div className="font-semibold mb-2">Método Plano Tratamento</div>
                            <div className="text-sm text-slate-500">Para coberturas de um tratamento específico recorrente.</div>
                        </label>
                    </div>

                    <div className="p-6 bg-slate-50 border rounded-lg">
                        {pricingMethod === 'basico' && (
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-primary">Precificação: Plano Básico</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Preço particular do procedimento principal</Label>
                                        <Input type="number" placeholder="R$ 0,00" value={basicPrice} onChange={e => setBasicPrice(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Cota máxima por ano (Qtd)</Label>
                                        <Input type="number" placeholder="Ex: 2" value={basicQuota} onChange={e => setBasicQuota(e.target.value)} />
                                    </div>
                                </div>
                                <div className="p-4 bg-primary/10 rounded-md border border-primary/20 text-center">
                                    <div className="text-sm text-primary mb-1">Valor Sugerido Mensalidade</div>
                                    <div className="text-3xl font-bold text-primary">R$ {calculateBasic()}</div>
                                </div>
                            </div>
                        )}

                        {pricingMethod === 'premium' && (
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-primary">Precificação: Plano Premium</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Valor do Plano Básico</Label>
                                        <Input type="number" placeholder="R$ 0,00" value={premiumBase} onChange={e => setPremiumBase(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Seu Custo Hora Clínica</Label>
                                        <Input type="number" placeholder="R$ 0,00" value={clinicHourCost} onChange={e => setClinicHourCost(e.target.value)} />
                                        <a href="#" className="text-xs text-primary hover:underline">Não sei meu custo hora</a>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Duração do procedimento mais longo (Horas)</Label>
                                        <Input type="number" placeholder="Ex: 1.5" value={procedureHours} onChange={e => setProcedureHours(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Cota Máxima deste proced. por mês</Label>
                                        <Input type="number" placeholder="Ex: 1" value={premiumQuota} onChange={e => setPremiumQuota(e.target.value)} />
                                    </div>
                                </div>
                                <div className="p-4 bg-primary/10 rounded-md border border-primary/20 text-center">
                                    <div className="text-sm text-primary mb-1">Valor Sugerido Mensalidade</div>
                                    <div className="text-3xl font-bold text-primary">R$ {calculatePremium()}</div>
                                </div>
                            </div>
                        )}

                        {pricingMethod === 'tratamento' && (
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-primary">Precificação: Plano Tratamento</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Preço particular do tratamento</Label>
                                        <Input type="number" placeholder="R$ 0,00" value={treatmentPrice} onChange={e => setTreatmentPrice(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Vezes a ser realizado por ano</Label>
                                        <Input type="number" placeholder="Ex: 2" value={treatmentQuota} onChange={e => setTreatmentQuota(e.target.value)} />
                                    </div>
                                </div>
                                <div className="p-4 bg-primary/10 rounded-md border border-primary/20 text-center">
                                    <div className="text-sm text-primary mb-1">Valor Sugerido Mensalidade</div>
                                    <div className="text-3xl font-bold text-primary">R$ {calculateTreatment()}</div>
                                </div>
                            </div>
                        )}

                        <div className="mt-8 border-t pt-6 space-y-2 max-w-sm mx-auto">
                            <Label className="text-center block text-lg">Qual será o Valor Oficial Mensal?</Label>
                            <Input type="number" placeholder="Digite o valor final escolhido (R$)" value={finalPrice} onChange={e => setFinalPrice(e.target.value)} className="text-lg text-center h-12" />
                        </div>

                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onPrev}>Voltar</Button>
                <Button onClick={onNext} size="lg">Avançar para Visibilidade</Button>
            </div>

        </div>
    );
}
