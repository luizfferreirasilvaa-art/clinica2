import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const materialsList = [
    { id: 'carteirinha', title: 'Carteirinha Digital do Paciente', description: 'Modelo personalizado com sua logo e dados.' },
    { id: 'apresentacao', title: 'Apresentação para Empresas', description: 'PDF comercial para fechar parcerias B2B.' },
    { id: 'banner', title: 'Banner para Sala de Espera', description: 'Divulgue os planos a partir de R$ X,XX na sua recepção.' },
    { id: 'lamina', title: 'Lâmina de Vendas', description: 'Material de apoio para vender os planos presencialmente.' },
    { id: 'contrato_paciente', title: 'Modelo de Contrato (Termos de Uso)', description: 'Termos a serem aceitos pelo assinante final.' },
    { id: 'contrato_empresa', title: 'Contrato Parceria Empresas', description: 'Documento para firmar parceria com empresas.' },
];

export default function WizardStep5({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>(materialsList.map(m => m.id));

    const toggleMaterial = (id: string) => {
        setSelectedMaterials(prev =>
            prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
        );
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">

            <Card>
                <CardHeader>
                    <CardTitle>Etapa 5: Montagem dos Materiais do Plano</CardTitle>
                    <CardDescription>
                        Aqui vamos gerar automaticamente os materiais do seu plano, personalizados com sua identidade visual e os dados configurados nas etapas anteriores.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg flex items-start gap-4">
                        <div className="w-16 h-16 bg-white border border-dashed border-slate-300 rounded-md flex items-center justify-center flex-shrink-0 text-slate-400">
                            Logo
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary">Identidade Visual Configurável</h4>
                            <p className="text-sm text-slate-600 mb-2">Faça o upload da sua logo e escolha as cores do seu tema nas configurações do aplicativo. Eles serão aplicados em todos os materiais abaixo.</p>
                            <Button variant="outline" size="sm">Ajustar Identidade Visual</Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4">Selecione os materiais que deseja gerar e personalizar:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {materialsList.map((mat) => (
                                <label key={mat.id} className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${selectedMaterials.includes(mat.id) ? 'border-primary bg-primary/5' : 'hover:bg-slate-50'}`}>
                                    <input
                                        type="checkbox"
                                        className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                                        checked={selectedMaterials.includes(mat.id)}
                                        onChange={() => toggleMaterial(mat.id)}
                                    />
                                    <div>
                                        <div className="font-medium">{mat.title}</div>
                                        <div className="text-sm text-slate-500">{mat.description}</div>
                                        <div className="flex gap-2 mt-2">
                                            <Button variant="link" className="p-0 h-auto text-xs">Visualizar Prévia</Button>
                                            <span className="text-slate-300">|</span>
                                            <Button variant="link" className="p-0 h-auto text-xs">Fazer Upload de Modelo Próprio</Button>
                                        </div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between pt-4 border-t">
                        <Button variant="outline" onClick={onPrev}>Voltar</Button>
                        <Button onClick={onNext} size="lg">Avancar para Treinamento</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
