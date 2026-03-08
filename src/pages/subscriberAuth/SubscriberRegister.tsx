import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { HeartPulse, Loader2, AlertCircle } from 'lucide-react';
import { useBrand } from '../../contexts/BrandContext';

export default function SubscriberRegister() {
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        acceptLgpd: false
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { brand } = useBrand();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Simplistic CPF mask for form
    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        let maskedValue = value;
        if (value.length > 9) maskedValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        else if (value.length > 6) maskedValue = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
        else if (value.length > 3) maskedValue = value.replace(/(\d{3})(\d{1,3})/, "$1.$2");

        setFormData(prev => ({ ...prev, cpf: maskedValue }));
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        if (!formData.acceptLgpd) {
            setError('Você deve aceitar os Termos de Uso e Política de Privacidade.');
            return;
        }

        if (formData.cpf.length < 14) {
            setError('CPF inválido.');
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call for registration
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Navigate to dashboard or plan store
            navigate('/assinante/dashboard');
        } catch (err: any) {
            setError(err.message || 'Erro ao criar conta. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-slate-50">

            {/* Left Branding Area */}
            <div
                className="hidden lg:flex lg:w-1/3 xl:w-2/5 flex-col justify-between p-12 text-white relative overflow-hidden flex-shrink-0"
                style={{ backgroundColor: brand.primaryColor }}
            >
                <div className="absolute inset-0 bg-black/10 z-0"></div>
                <div className="relative z-10 flex items-center gap-2">
                    {brand.logoUrl ? (
                        <img src={brand.logoUrl} alt="Logo da Clínica" className="h-8 object-contain" />
                    ) : (
                        <>
                            <HeartPulse className="h-8 w-8" />
                            <span className="text-2xl font-bold tracking-tight">{brand.clinicName}</span>
                        </>
                    )}
                </div>
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-4 leading-tight">
                        Crie sua conta e tenha acesso ao nosso Plano de Benefícios.
                    </h1>
                    <ul className="space-y-3 mt-8">
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">1</div>
                            <span>Cadastre-se gratuitamente</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">2</div>
                            <span>Escolha o plano ideal na vitrine</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">3</div>
                            <span>Acesse sua carteirinha na hora</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Registration Form */}
            <div className="w-full lg:w-2/3 xl:w-3/5 flex justify-center py-12 px-6 sm:px-12 overflow-y-auto">
                <div className="w-full max-w-xl">

                    <div className="text-center lg:hidden flex flex-col items-center gap-2 mb-8">
                        {brand.logoUrl ? (
                            <img src={brand.logoUrl} alt="Logo da Clínica" className="h-10 object-contain mx-auto" />
                        ) : (
                            <div className="flex items-center justify-center gap-2" style={{ color: brand.primaryColor }}>
                                <HeartPulse className="h-8 w-8" />
                                <span className="text-2xl font-bold tracking-tight">{brand.clinicName}</span>
                            </div>
                        )}
                    </div>

                    <Card className="border-0 shadow-none bg-transparent">
                        <CardHeader className="px-0 pt-0">
                            <CardTitle className="text-2xl tracking-tight text-slate-900">Cadastro do Paciente</CardTitle>
                            <CardDescription className="text-slate-500">
                                Preencha seus dados para criar sua conta no portal.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 pb-0">
                            <form onSubmit={handleRegister} className="space-y-4">

                                {error && (
                                    <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                        <span>{error}</span>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Nome Completo</Label>
                                        <Input
                                            id="name" name="name"
                                            placeholder="Ex: João da Silva"
                                            value={formData.name} onChange={handleInputChange}
                                            required className="h-11"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cpf">CPF</Label>
                                        <Input
                                            id="cpf" name="cpf"
                                            placeholder="000.000.000-00"
                                            value={formData.cpf} onChange={handleCpfChange}
                                            required className="h-11"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">E-mail</Label>
                                        <Input
                                            id="email" name="email" type="email"
                                            placeholder="seu@email.com"
                                            value={formData.email} onChange={handleInputChange}
                                            required className="h-11"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Celular (WhatsApp)</Label>
                                        <Input
                                            id="phone" name="phone"
                                            placeholder="(00) 00000-0000"
                                            value={formData.phone} onChange={handleInputChange}
                                            className="h-11"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Criar Senha</Label>
                                        <Input
                                            id="password" name="password" type="password"
                                            placeholder="Mínimo 6 caracteres"
                                            value={formData.password} onChange={handleInputChange}
                                            required className="h-11"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                                        <Input
                                            id="confirmPassword" name="confirmPassword" type="password"
                                            placeholder="Repita a senha"
                                            value={formData.confirmPassword} onChange={handleInputChange}
                                            required className="h-11"
                                        />
                                    </div>
                                </div>

                                {/* LGPD Consent */}
                                <div className="flex items-start gap-3 p-4 bg-slate-100 rounded-lg mt-6">
                                    <input
                                        type="checkbox"
                                        id="acceptLgpd"
                                        name="acceptLgpd"
                                        checked={formData.acceptLgpd}
                                        onChange={handleInputChange}
                                        className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <Label htmlFor="acceptLgpd" className="text-sm font-normal text-slate-700 leading-snug cursor-pointer">
                                        Estou ciente e concordo com a <a href="#" className="font-semibold underline hover:text-slate-900">Política de Privacidade</a> e <a href="#" className="font-semibold underline hover:text-slate-900">Termos de Uso</a>, permitindo o tratamento dos meus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD) para fins de prestação de serviços de saúde.
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 text-md mt-6"
                                    style={{ backgroundColor: brand.primaryColor }}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Criando conta...
                                        </>
                                    ) : 'Concluir Cadastro Grátis'}
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter className="px-0 pt-6 justify-center">
                            <div className="text-center text-sm text-slate-600">
                                Já tem cadastro?{' '}
                                <Link to="/assinante/login" className="font-semibold hover:underline" style={{ color: brand.primaryColor }}>
                                    Fazer login
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>

        </div>
    );
}
