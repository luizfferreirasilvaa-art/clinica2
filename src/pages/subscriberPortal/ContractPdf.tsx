import { useEffect } from 'react';
import { useBrand } from '../../contexts/BrandContext';
import { Button } from '../../components/ui/button';
import { FileDown, Printer, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContractPdf() {
    const { brand } = useBrand();

    const handlePrint = () => {
        window.print();
    };

    const currentDate = new Date().toLocaleDateString('pt-BR');

    // Print-specific CSS is handled via Tailwind 'print:' variants
    // and we'll add a little inline style to hide non-printable areas.
    useEffect(() => {
        document.title = `Contrato de Adesão - ${brand.clinicName}`;
        return () => {
            document.title = 'Clínica Planos';
        };
    }, [brand.clinicName]);

    return (
        <div className="min-h-screen bg-slate-200 py-8 print:bg-white print:py-0 text-slate-900">

            {/* Controls - Hidden when printing */}
            <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden px-4">
                <Link to="/assinante/dashboard">
                    <Button variant="outline" className="bg-white">
                        <ChevronLeft className="w-4 h-4 mr-2" /> Voltar
                    </Button>
                </Link>
                <div className="flex gap-3">
                    <Button variant="outline" className="bg-white" onClick={handlePrint}>
                        <Printer className="w-4 h-4 mr-2" /> Imprimir
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" onClick={handlePrint}>
                        <FileDown className="w-4 h-4 mr-2" /> Salvar como PDF
                    </Button>
                </div>
            </div>

            {/* A4 Paper Container */}
            <div className="max-w-[210mm] mx-auto bg-white shadow-xl min-h-[297mm] p-[20mm] print:shadow-none print:p-0 print:m-0 relative">

                {/* Document Header */}
                <header className="flex justify-between items-start border-b-2 pb-6 mb-8" style={{ borderBottomColor: brand.primaryColor }}>
                    <div>
                        {brand.logoUrl ? (
                            <img src={brand.logoUrl} alt="Logo" className="h-16 object-contain" />
                        ) : (
                            <h1 className="text-3xl font-black tracking-tighter" style={{ color: brand.primaryColor }}>{brand.clinicName}</h1>
                        )}
                    </div>
                    <div className="text-right text-sm text-slate-500">
                        <p>Contrato de Prestação de Serviços de Saúde</p>
                        <p>Emitido em: {currentDate}</p>
                    </div>
                </header>

                {/* Contract Content */}
                <main className="space-y-6 text-sm leading-relaxed text-justify">
                    <h2 className="text-center font-bold text-lg mb-8 uppercase tracking-widest">
                        Instrumento Particular de Contrato de Adesão a Plano de Saúde Privado
                    </h2>

                    <p>
                        Pelo presente instrumento particular, de um lado <strong>{brand.clinicName}</strong>, inscrita no CNPJ sob o nº 00.000.000/0001-00, doravante denominada <strong>CONTRATADA</strong>, e de outro lado, <strong>João da Silva</strong>, portador(a) do CPF nº 123.456.789-00, residente e domiciliado(a) na Rua Exemplo, 123, Bairro Centro, CEP 00000-000, doravante denominado(a) <strong>CONTRATANTE</strong>, celebram o presente contrato, mediante as cláusulas e condições a seguir descritas:
                    </p>

                    <div className="space-y-4">
                        <h3 className="font-bold text-base mt-6">CLÁUSULA PRIMEIRA - DO OBJETO</h3>
                        <p>
                            1.1. O objeto deste contrato é a prestação de serviços de assistência médica e/ou odontológica pela <strong>CONTRATADA</strong> ao <strong>CONTRATANTE</strong> e seus dependentes inscritos, por meio da rede de profissionais credenciados.
                        </p>
                        <p>
                            1.2. O plano escolhido pelo CONTRATANTE é o <strong>Plano Premium Familiar</strong>, cujas coberturas, carências e coparticipações encontram-se descritas no Anexo I deste contrato e disponibilizadas no aplicativo oficial da clínica.
                        </p>

                        <h3 className="font-bold text-base mt-6">CLÁUSULA SEGUNDA - DO PREÇO E CONDIÇÕES DE PAGAMENTO</h3>
                        <p>
                            2.1. O CONTRATANTE obriga-se a pagar à CONTRATADA o valor mensal de <strong>R$ 89,90 (oitenta e nove reais e noventa centavos)</strong>, com vencimento todo dia 10 de cada mês, através de meio de pagamento recorrente gerido pela plataforma Asaas.
                        </p>
                        <p>
                            2.2. O atraso no pagamento sujeitará o CONTRATANTE à multa moratória de 2% (dois por cento) e juros de mora de 1% (um por cento) ao mês.
                        </p>

                        <h3 className="font-bold text-base mt-6">CLÁUSULA TERCEIRA - DA LEI GERAL DE PROTEÇÃO DE DADOS (LGPD)</h3>
                        <p>
                            3.1. A <strong>CONTRATADA</strong> compromete-se a tratar os dados pessoais e sensíveis do <strong>CONTRATANTE</strong> em estrita conformidade com a Lei nº 13.709/2018 (LGPD), utilizando-os exclusivamente para a finalidade de execução do presente contrato, prestação de serviços de saúde, agendamentos e faturamento.
                        </p>
                        <p>
                            3.2. O <strong>CONTRATANTE</strong>, ao assinar digitalmente este termo, manifesta seu consentimento livre, expresso e informado para o tratamento de seus dados pessoais.
                        </p>
                    </div>

                    <div className="mt-20 pt-12 flex justify-between gap-12">
                        <div className="flex-1 text-center border-t border-slate-400 pt-2">
                            <p className="font-bold">{brand.clinicName}</p>
                            <p className="text-xs text-slate-500">CONTRATADA</p>
                        </div>
                        <div className="flex-1 text-center border-t border-slate-400 pt-2">
                            <p className="font-bold">João da Silva</p>
                            <p className="text-xs text-slate-500">CONTRATANTE (Assinatura Digital via IP/Token)</p>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="absolute bottom-[20mm] left-[20mm] right-[20mm] text-center text-xs text-slate-400 border-t pt-4">
                    <p>Documento gerado eletronicamente em {currentDate}. A validade deste contrato pode ser confirmada no portal do assinante.</p>
                </footer>

            </div>
        </div>
    );
}
