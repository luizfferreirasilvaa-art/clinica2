import { Link } from 'react-router-dom';
import { Palette, Upload, Eye } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';

export default function WhiteLabelConfig() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-slate-500 hover:text-slate-900 font-medium text-sm">
                        ← Voltar ao Dashboard
                    </Link>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <h1 className="font-bold text-lg leading-none">Personalização (White-Label)</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Visualizar Portal do Assinante
                    </Button>
                    <Button size="sm">
                        Salvar Alterações
                    </Button>
                </div>
            </header>

            <main className="flex-1 p-6 max-w-4xl mx-auto w-full space-y-8">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-slate-900">Sua Marca no App</h2>
                    <p className="text-slate-600 mt-1">Configure as cores e logotipo para que seus pacientes visualizem a sua marca, não a nossa.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Palette className="w-5 h-5 text-slate-500" />
                                    Cores do Tema
                                </CardTitle>
                                <CardDescription>Escolha a cor predominante da sua clínica.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Cor Primária (HEX)</Label>
                                    <div className="flex items-center gap-3">
                                        <Input type="color" className="w-16 h-10 p-1 cursor-pointer" defaultValue="#0f172a" />
                                        <Input placeholder="#0F172A" defaultValue="#0F172A" className="flex-1" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Cor Secundária / Acentos (HEX)</Label>
                                    <div className="flex items-center gap-3">
                                        <Input type="color" className="w-16 h-10 p-1 cursor-pointer" defaultValue="#3b82f6" />
                                        <Input placeholder="#3B82F6" defaultValue="#3B82F6" className="flex-1" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Upload className="w-5 h-5 text-slate-500" />
                                    Logotipo
                                </CardTitle>
                                <CardDescription>O logo aparecerá no app dos assinantes.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                        <Upload className="w-6 h-6 text-slate-400" />
                                    </div>
                                    <div className="text-sm font-medium text-slate-900">Clique para enviar ou arraste a imagem</div>
                                    <div className="text-xs text-slate-500 mt-1">PNG, JPG transparente recomendado (máx. 2MB)</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Dados do Portal</CardTitle>
                                <CardDescription>Informações que aparecem centralizadas.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Nome de Exibição do Plano</Label>
                                    <Input placeholder="Ex: OdontoPlus Premium" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Título na Tela Inicial do Paciente</Label>
                                    <Input placeholder="Bem-vindo ao seu plano..." />
                                </div>
                                <div className="space-y-2">
                                    <Label>Mensagem de Suporte (WhatsApp)</Label>
                                    <Input placeholder="Dúvidas? Fale conosco! (11) 90000-0000" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 text-white border-slate-800">
                            <CardHeader>
                                <CardTitle className="text-white">Pré-visualização</CardTitle>
                                <CardDescription className="text-slate-400">Assim seus pacientes o verão.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200 aspect-[9/16] w-64 mx-auto shadow-inner relative flex flex-col">
                                    <div className="h-16 bg-[#0f172a] flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">Sua Clínica</span>
                                    </div>
                                    <div className="p-4 flex-1 bg-slate-100">
                                        <div className="w-full h-24 bg-white rounded shadow-sm mb-4"></div>
                                        <div className="w-full h-12 bg-white rounded shadow-sm mb-2"></div>
                                        <div className="w-full h-12 bg-white rounded shadow-sm"></div>
                                    </div>
                                    <div className="h-12 bg-[#3b82f6] text-white flex items-center justify-center text-xs font-medium">
                                        Agendar Consulta
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
