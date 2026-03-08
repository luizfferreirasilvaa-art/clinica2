import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function WizardStep1({ onNext }: { onNext: () => void }) {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Etapa 1: Orientações Gerais</CardTitle>
                    <CardDescription>
                        Assista estes 2 vídeos para descobrir como você vai montar seus planos aqui:
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">

                    {/* Video 1 */}
                    <div className="space-y-4">
                        <h3 className="font-medium text-lg">Vídeo 1: Entendendo a montagem do plano</h3>
                        <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300">
                            <span className="text-slate-500">Player de Vídeo 1 (Placeholder)</span>
                        </div>
                        <p className="text-sm text-slate-600">
                            Neste vídeo explicamos como se dará a montagem do plano no app.
                        </p>
                    </div>

                    {/* Video 2 */}
                    <div className="space-y-4">
                        <h3 className="font-medium text-lg">Vídeo 2: Tipos de Coberturas</h3>
                        <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300">
                            <span className="text-slate-500">Player de Vídeo 2 (Placeholder)</span>
                        </div>
                        <p className="text-sm text-slate-600">
                            Neste vídeo explicamos os tipos de coberturas que podem ser inseridas neste plano.
                        </p>
                    </div>

                    <div className="flex justify-end pt-4">
                        <Button onClick={onNext} size="lg">
                            Começar a Montar o Meu Plano
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
