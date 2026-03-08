import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';

export default function WizardStep4({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Etapa 4: Visibilidade nas Ofertas</CardTitle>
                    <CardDescription>
                        Defina se este plano aparecerá para os pacientes na área de "Loja de Planos" do aplicativo e nos materiais de venda gerados.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">

                    <div className="flex items-center space-x-4 p-4 border rounded-lg bg-slate-50">
                        <div className="flex-1 space-y-1">
                            <Label className="text-base">Exibir nas Ofertas para Assinar?</Label>
                            <p className="text-sm text-slate-500">Se desativado, o plano só poderá ser assinado por link direto ou atribuído manualmente pela clínica.</p>
                        </div>
                        <div>
                            {/* Custom Toggle Switch */}
                            <button
                                type="button"
                                role="switch"
                                aria-checked={isVisible}
                                onClick={() => setIsVisible(!isVisible)}
                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${isVisible ? 'bg-primary' : 'bg-slate-200'}`}
                            >
                                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isVisible ? 'translate-x-5' : 'translate-x-0'}`} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between pt-4">
                        <Button variant="outline" onClick={onPrev}>Voltar</Button>
                        <Button onClick={onNext} size="lg">Avançar para Materiais</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
