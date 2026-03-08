import { Link } from 'react-router-dom';
import { ChevronLeft, QrCode, ScanLine, Share2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useBrand } from '../../contexts/BrandContext';
import { Card, CardContent } from '../../components/ui/card';

export default function DigitalCard() {
    const { brand } = useBrand();

    const subscriber = {
        name: 'João da Silva',
        cpf: '123.456.789-00',
        planName: 'Ouro Especial Família',
        cardNumber: '9876 5432 1098 7654',
        validUntil: '12/2026',
        dependentMode: false
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center pb-12 relative overflow-hidden">

            {/* Cool background effect */}
            <div
                className="absolute top-0 w-[200%] h-96 -translate-y-1/2 rounded-[50%] opacity-20 blur-3xl pointer-events-none"
                style={{ backgroundColor: brand.primaryColor }}
            ></div>

            {/* Header */}
            <header className="w-full max-w-sm px-6 pt-10 pb-4 flex items-center justify-between relative z-10 text-white">
                <Link to="/assinante/dashboard" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                    <ChevronLeft className="w-6 h-6" />
                </Link>
                <span className="font-semibold text-sm tracking-wide uppercase text-white/80">Carteirinha</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full h-10 w-10">
                    <Share2 className="w-5 h-5" />
                </Button>
            </header>

            <main className="flex-1 w-full max-w-sm px-6 flex flex-col gap-8 relative z-10">

                {/* The Digital Card Itself */}
                <div
                    className="w-full min-h-[220px] rounded-2xl p-6 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden"
                    style={{ backgroundColor: brand.primaryColor }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-black/20"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute top-10 -left-10 w-24 h-24 bg-black/20 rounded-full blur-xl"></div>

                    <div className="relative z-10 flex justify-between items-start">
                        <h2 className="font-extrabold text-2xl tracking-tighter leading-none drop-shadow-md">
                            {brand.clinicName}
                        </h2>
                        <div className="px-2 py-1 bg-white/30 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-sm">
                            {subscriber.planName}
                        </div>
                    </div>

                    <div className="relative z-10 space-y-5 mt-4">
                        <div className="font-mono text-2xl tracking-[0.2em] drop-shadow-md text-white">
                            {subscriber.cardNumber}
                        </div>

                        <div className="flex justify-between items-end gap-4">
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-white/80 uppercase tracking-widest mb-0.5 font-bold">Nome do Titular</p>
                                <p className="font-bold text-lg tracking-wide truncate drop-shadow-sm">{subscriber.name}</p>
                            </div>
                            <div className="text-right shrink-0">
                                <p className="text-[10px] text-white/80 uppercase tracking-widest mb-0.5 font-bold">Validade</p>
                                <p className="font-bold text-lg drop-shadow-sm">{subscriber.validUntil}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* QR Code Action area */}
                <Card className="bg-white rounded-2xl border-0 shadow-lg p-6">
                    <CardContent className="p-0 flex flex-col items-center text-center gap-6">
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg text-slate-800">Apresente sua carteira</h3>
                            <p className="text-sm text-slate-500">Mostre o QR Code na recepção para liberar seu atendimento.</p>
                        </div>

                        <div className="relative p-3 bg-white border-2 border-slate-100 rounded-xl">
                            <QrCode className="w-40 h-40 text-slate-800" strokeWidth={1} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Decorative scanning line effect could go here */}
                                <div className="w-full h-0.5 bg-indigo-500/50 absolute top-1/2 left-0 shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]"></div>
                            </div>
                        </div>

                        <Button className="w-full h-12 gap-2 text-md" style={{ backgroundColor: brand.primaryColor }}>
                            <ScanLine className="w-5 h-5" /> Ampliar QR Code
                        </Button>
                    </CardContent>
                </Card>

            </main>
        </div>
    );
}
