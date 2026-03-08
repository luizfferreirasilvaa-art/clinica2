import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { HeartPulse, Loader2, AlertCircle } from 'lucide-react';
import { useBrand } from '../../contexts/BrandContext';

export default function SubscriberLogin() {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { brand } = useBrand();

    // Basic CPF mask for visual effect
    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        // Apply mask (000.000.000-00)
        let maskedValue = value;
        if (value.length > 9) {
            maskedValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        } else if (value.length > 6) {
            maskedValue = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
        } else if (value.length > 3) {
            maskedValue = value.replace(/(\d{3})(\d{1,3})/, "$1.$2");
        }
        setCpf(maskedValue);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Temporary validation for demo
            if (cpf.length < 14 || password.length < 6) {
                throw new Error('CPF inválido ou senha incorreta.');
            }

            navigate('/assinante/dashboard');
        } catch (err: any) {
            setError(err.message || 'Erro ao fazer login. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-slate-50">

            {/* Left Cover Image/Branding */}
            <div
                className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 text-white relative overflow-hidden"
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
                <div className="relative z-10 max-w-md">
                    <h1 className="text-4xl font-bold mb-4 leading-tight">
                        Seu portal de saúde e benefícios.
                    </h1>
                    <p className="text-white/80 text-lg">
                        Acesse suas coberturas, acompanhe agendamentos e aproveite as vantagens de ser um assinante ativo.
                    </p>
                </div>
            </div>

            {/* Right Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8">

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
                            <CardTitle className="text-2xl tracking-tight text-slate-900">Entrar na minha conta</CardTitle>
                            <CardDescription className="text-slate-500">
                                Digite seu CPF e senha para acessar o portal.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 pb-0">
                            <form onSubmit={handleLogin} className="space-y-4">

                                {error && (
                                    <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                        <span>{error}</span>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <Label htmlFor="cpf">CPF</Label>
                                    <Input
                                        id="cpf"
                                        placeholder="000.000.000-00"
                                        value={cpf}
                                        onChange={handleCpfChange}
                                        required
                                        className="h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Senha</Label>
                                        <Link to="/assinante/recuperar-senha" className="text-sm font-medium hover:underline" style={{ color: brand.primaryColor }}>
                                            Esqueceu a senha?
                                        </Link>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Sua senha secreta"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="h-12"
                                    />
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
                                            Entrando...
                                        </>
                                    ) : 'Entrar no Portal'}
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter className="px-0 pt-6 justify-center">
                            <div className="text-center text-sm text-slate-600">
                                Não tem uma conta?{' '}
                                <Link to="/assinante/cadastro" className="font-semibold hover:underline" style={{ color: brand.primaryColor }}>
                                    Cadastre-se grátis
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>

        </div>
    );
}
