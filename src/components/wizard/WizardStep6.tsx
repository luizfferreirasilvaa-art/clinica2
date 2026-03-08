import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function WizardStep6({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Etapa 6: Treinamento de Vendas</CardTitle>
                    <CardDescription>
                        Assista a estes vídeos rápidos para preparar sua equipe para vender os planos que você acabou de criar.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Video 1 */}
                        <div className="space-y-4">
                            <h3 className="font-medium text-lg">Módulo 1: Venda Passiva</h3>
                            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300 relative group cursor-pointer overflow-hidden">
                                <span className="text-slate-500 z-10">Play (Placeholder)</span>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                            </div>
                            <p className="text-sm text-slate-600">
                                Como abordar o paciente na recepção e converter orçamentos perdidos em planos.
                            </p>
                        </div>

                        {/* Video 2 */}
                        <div className="space-y-4">
                            <h3 className="font-medium text-lg">Módulo 2: Venda Ativa e Parcerias</h3>
                            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300 relative group cursor-pointer overflow-hidden">
                                <span className="text-slate-500 z-10">Play (Placeholder)</span>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                            </div>
                            <p className="text-sm text-slate-600">
                                Como prospectar empresas da região e oferecer planos corporativos em lote.
                            </p>
                        </div>

                    </div>

                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">💡 Dica de Sucesso</h4>
                        <p className="text-sm text-blue-800">
                            Imprima a <span className="font-semibold">Lâmina de Vendas</span> (gerada na etapa anterior) e deixe algumas cópias físicas na recepção. O visual tangível aumenta a chance de fechamento na hora do orçamento odontológico.
                        </p>
                    </div>

                    <div className="flex justify-between pt-4">
                        <Button variant="outline" onClick={onPrev}>Voltar</Button>
                        <Button onClick={onNext} size="lg">Avançar para Atração (Google Ads)</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
