import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';

export default function RegisterClinica() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [clinicName, setClinicName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            setLoading(false);
            return;
        }

        try {
            // Create user auth
            const { error: authError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (authError) throw authError;

            // In a real app we'd insert the user profile into a `clinics` table here:
            // await supabase.from('clinics').insert([{ user_id: authData.user?.id, name: clinicName }]);

            // Navigate to dashboard or generic confirmation page
            navigate('/');
        } catch (err: any) {
            setError(err.message || 'Erro ao criar conta.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-slate-50">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Cadastro de Clínica</CardTitle>
                    <CardDescription className="text-center">
                        Crie sua conta e monte os planos da sua clínica hoje mesmo.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleRegister}>
                    <CardContent className="space-y-4">
                        {error && (
                            <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <Label htmlFor="clinicName">Nome da Clínica</Label>
                            <Input
                                id="clinicName"
                                placeholder="Ex: Odonto Sorriso"
                                value={clinicName}
                                onChange={(e) => setClinicName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="clinica@exemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Crie uma senha forte"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirme a Senha</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Repita a senha criada"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Criando conta...' : 'Criar Conta'}
                        </Button>
                        <div className="text-sm text-center text-slate-500">
                            Já tem uma conta?{' '}
                            <Link to="/auth/login" className="font-medium text-primary hover:underline">
                                Faça o login
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
