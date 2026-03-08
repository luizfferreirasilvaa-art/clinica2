import { Link } from 'react-router-dom';
import { ChevronLeft, Check, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { useBrand } from '../../contexts/BrandContext';

export default function PlanStore() {
    const { brand } = useBrand();

    const plans = [
        {
            id: 1,
            name: 'Básico',
            price: 29.90,
            description: 'Ideal para prevenção e consultas de rotina.',
            features: ['Consulta Clínica Geral', 'Limpeza Odontológica', 'Acesso à Rede com Desconto'],
            popular: false
        },
        {
            id: 2,
            name: 'Premium Familiar',
            price: 89.90,
            description: 'Cobertura completa para você e mais 3 dependentes.',
            features: ['Todas as vantagens do Básico', 'Especialistas Inclusos', 'Carência Zero', 'Até 3 Dependentes'],
            popular: true
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-12">

            {/* Header */}
            <header className="bg-white border-b px-4 py-4 flex items-center sticky top-0 z-20 shadow-sm">
                <Link to="/assinante/dashboard" className="w-10 h-10 flex items-center justify-center -ml-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                </Link>
                <h1 className="font-bold text-lg ml-2">Loja de Planos</h1>
            </header>

            <main className="p-4 max-w-lg mx-auto space-y-8 mt-4">

                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Evolua seu cuidado</h2>
                    <p className="text-slate-500 text-sm">Escolha o plano que melhor atende às necessidades da sua família.</p>
                </div>

                <div className="space-y-6">
                    {plans.map((plan) => (
                        <Card key={plan.id} className={`relative overflow-hidden transition-all ${plan.popular ? 'border-2 shadow-lg scale-[1.02]' : 'border-slate-200'}`} style={{ borderColor: plan.popular ? brand.primaryColor : undefined }}>

                            {plan.popular && (
                                <div
                                    className="absolute top-0 right-0 py-1 px-4 text-xs font-bold text-white tracking-widest uppercase rounded-bl-xl origin-top-right z-10"
                                    style={{ backgroundColor: brand.primaryColor }}
                                >
                                    <span className="flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-current" /> Mais Escolhido
                                    </span>
                                </div>
                            )}

                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                                <CardDescription className="text-sm pt-1">{plan.description}</CardDescription>
                                <div className="mt-4 flex items-baseline text-slate-900">
                                    <span className="text-3xl font-extrabold tracking-tight">R$ {plan.price.toFixed(2).replace('.', ',')}</span>
                                    <span className="text-slate-500 ml-1 font-medium">/mês</span>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: `${brand.primaryColor}20`, color: brand.primaryColor }}>
                                                <Check className="w-3 h-3 font-bold" />
                                            </div>
                                            <span className="text-slate-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    className="w-full h-12 text-md font-semibold"
                                    variant={plan.popular ? 'default' : 'outline'}
                                    style={plan.popular ? { backgroundColor: brand.primaryColor } : { borderColor: brand.primaryColor, color: brand.primaryColor }}
                                >
                                    Assinar o {plan.name}
                                </Button>
                                <p className="text-center w-full text-[10px] text-slate-400 mt-3 px-4">
                                    Ao assinar, você concorda com os <strong>Termos do Contrato</strong> e autoriza a cobrança recorrente.
                                </p>
                            </CardFooter>

                        </Card>
                    ))}
                </div>

            </main>
        </div>
    );
}
