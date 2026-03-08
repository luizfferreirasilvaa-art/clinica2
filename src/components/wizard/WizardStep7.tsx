import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function WizardStep7({ onFinish, onPrev }: { onFinish: () => void, onPrev: () => void }) {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Etapa 7: Automação de Google Ads</CardTitle>
                    <CardDescription>
                        Tudo pronto! Seu plano está configurado e os materiais gerados. Queremos te ajudar a atrair pessoas pesquisando por planos na sua cidade.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="flex-1 space-y-4">
                            <h3 className="text-xl font-bold text-slate-900">Integração com IA Parceira</h3>
                            <p className="text-slate-600">
                                Em vez de contratar uma agência, você pode conectar sua conta do Google Ads a nossa IA parceira. Ela vai criar automaticamente as campanhas de pesquisa baseadas nos planos que você acabou de formatar.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                                <li>Criação automática de anúncios na rede de pesquisa.</li>
                                <li>Palavras-chave focadas na sua região.</li>
                                <li>Otimização diária de orçamento via robô.</li>
                            </ul>
                            <div className="pt-2">
                                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                    Saber mais sobre a IA Google Ads
                                </Button>
                            </div>
                        </div>

                        <div className="w-full md:w-64 aspect-square bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300">
                            <span className="text-slate-500 text-center px-4">
                                Ilustração: <br />Robô configurando Google Ads
                            </span>
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Parabéns! Requisitos do Plano Concluídos.</h3>
                        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                            Seu plano já está salvo no sistema. Os links para assinatura já estão disponíveis no seu Painel de Gerenciamento.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button variant="outline" onClick={onPrev} size="lg">Voltar e Revisar</Button>
                            <Button onClick={onFinish} size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                                Concluir e Ir para o Painel
                            </Button>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
