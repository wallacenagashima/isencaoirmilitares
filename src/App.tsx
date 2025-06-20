import React from 'react';
import { Shield, Users, FileText, Phone, CheckCircle, Award, Scale, Clock, Star, ArrowRight, MessageCircle } from 'lucide-react';

// Add Inter font from Google Fonts
const InterFont = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`;

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 sticky top-0 z-40 shadow-xl">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="text-yellow-400" size={32} />
            <span className="text-xl font-bold">Isenção do IR para Militares</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm">
            <span className="font-inter">&nbsp;</span>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white py-20 overflow-hidden flex items-center">
        <img src="/camouflage-soldier-eyes.jpg" alt="" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-start mb-6">
              <div className="bg-yellow-400/20 p-4 rounded-full backdrop-blur-sm">
                <Award className="text-yellow-400" size={48} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-inter">
              Você é militar da reserva ou pensionista?
              <span className="block text-yellow-400 mt-2">
                A Lei 7.713/88 pode te devolver até R$ 100 mil!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl leading-relaxed font-inter">
              Milhares de militares estão recuperando impostos pagos indevidamente com base em uma lei pouco conhecida. 
              <strong className="text-yellow-400 font-inter"> Descubra agora se você também tem direito.</strong>
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <CheckCircle className="text-green-400" size={20} />
                <span>Direito garantido por lei</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <CheckCircle className="text-green-400" size={20} />
                <span>Restituição retroativa até 5 anos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <CheckCircle className="text-green-400" size={20} />
                <span>Mais de 853 militares atendidos</span>
              </div>
            </div>

            <div className="bg-red-600/90 text-white px-6 py-3 rounded-lg inline-block mb-8 animate-pulse backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span className="font-semibold">ATENÇÃO: Prazo para requerer pode estar acabando!</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#formulario"
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
              >
                Verificar Meu Direito Agora
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="formulario" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Verifique Gratuitamente Seu Direito
              </h2>
              <p className="text-gray-600 text-lg">
                Preencha os dados abaixo e nossa equipe jurídica especializada fará uma análise preliminar do seu caso:
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-green-50 p-8 rounded-2xl shadow-2xl border-2 border-green-200">
              <iframe 
                data-tally-src="https://tally.so/embed/n0BroA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="250" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0" 
                title="Formulário de Direito Militar"
                className="rounded-lg"
              ></iframe>
              <script dangerouslySetInnerHTML={{
                __html: `
                  var d=document,s=d.createElement("script");
                  s.src="https://tally.so/widgets/embed.js";
                  s.onload=function(){Tally.loadEmbeds()};
                  d.body.appendChild(s);
                `
              }}></script>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-green-700">
                <Shield size={16} />
                <span className="text-sm font-medium">Seus dados estão 100% seguros e protegidos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Law Explanation */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Scale className="text-green-700 mx-auto mb-4" size={48} />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                O que diz a Lei 7.713/88?
              </h2>
              <p className="text-gray-600 text-lg">
                Conheça seus direitos garantidos pela legislação brasileira
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <FileText className="text-green-700" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Direito Garantido por Lei
                </h3>
                <p className="text-gray-600">
                  A Lei 7.713/88 estabelece isenção de Imposto de Renda para militares com uma das 18 doenças listadas na lei.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Isenção Total
                </h3>
                <p className="text-gray-600">
                  Permite isenção completa do Imposto de Renda sobre proventos de aposentadoria e pensões militares em casos específicos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                  <Clock className="text-yellow-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Restituição Retroativa
                </h3>
                <p className="text-gray-600">
                  A restituição pode ser solicitada de forma retroativa pelos últimos 5 anos, resultando em valores significativos.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-white rounded-2xl p-8">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-8">
                    <Shield className="inline-block mb-4 text-green-700" size={32} />
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      Doenças que entram na lei
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Lista completa das doenças que garantem isenção de IR para militares
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Neoplastia maligna (câncer)",
                      "Cardiopatia grave",
                      "Paralisia irreversível e incapacitante",
                      "AIDS",
                      "Alienação mental",
                      "Aposentadoria por acidente de serviço",
                      "Cegueira",
                      "Contaminação por irradiação",
                      "Doença de Paget (Osteíte deformante)",
                      "Doença de Parkinson",
                      "Esclerose múltipla",
                      "Espondiloartrose anquilosante",
                      "Fibrose cística (mucoviscidose)",
                      "Hanseníase",
                      "Hematopatia grave",
                      "Moléstias profissionais",
                      "Nefropatia grave",
                      "Tuberculose ativa"
                    ].map((disease, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle
                            className="text-green-600 flex-shrink-0"
                            size={20}
                          />
                          <p className="text-gray-700 font-medium">
                            {disease}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Recuperados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="text-green-700 mx-auto mb-4" size={48} />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Valores Recuperados
              </h2>
              <p className="text-gray-600 text-lg">
                Nossos clientes já recuperaram milhões em impostos pagos indevidamente
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-green-700">R$ 32 mil</div>
                <div className="text-sm text-gray-700 mt-2">Média por militar</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-green-700">R$ 128 mil</div>
                <div className="text-sm text-gray-700 mt-2">Maior restituição</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-green-700">853+</div>
                <div className="text-sm text-gray-700 mt-2">Militares atendidos</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-green-700">95%</div>
                <div className="text-sm text-gray-700 mt-2">Taxa de sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="text-green-700 mx-auto mb-4" size={48} />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Quem Somos
              </h2>
              <p className="text-gray-600 text-lg">
                Especialistas em Isenção e Restituição de imposto de renda com credibilidade comprovada
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Especialistas na Lei 7.713/88
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <p className="text-gray-700">
                      <strong>Mais de 7 anos</strong> de experiência exclusiva na lei 7.713/88
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <p className="text-gray-700">
                      <strong>853+</strong> militares e pensionistas assessorados
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <p className="text-gray-700">
                      <strong>Presença confirmada</strong> em mídias especializadas e tribunais superiores
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <p className="text-gray-700">
                      <strong>95% de taxa de sucesso</strong> em processos de restituição
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Star className="text-yellow-500 mx-auto mb-4" size={48} />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                O que dizem nossos clientes
              </h2>
              <p className="text-gray-600 text-lg">
                Depoimentos reais de militares que recuperaram seus direitos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Parei de pagar o IR em 3 meses e recuperei mais de R$ 35 mil com ajuda da equipe jurídica. Profissionais sérios e comprometidos com o resultado"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">CS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Cel. C. S.</p>
                    <p className="text-sm text-gray-600">Exército Brasileiro - São Paulo/SP</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Fui atendida com respeito e rapidez. Nem acreditava que tinha direito a essa restituição. Recomendo!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MO</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">M. O.</p>
                    <p className="text-sm text-gray-600">Pensionista da Aeronáutica - Rio de Janeiro/RJ</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Processo rápido e transparente. Recebi R$ 62 mil de restituição. Gratidão eterna a toda equipe!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Alte. A. S.</p>
                    <p className="text-sm text-gray-600">Marinha do Brasil - Salvador/BA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Não perca tempo.
              <span className="block text-yellow-400 mt-2">
                Descubra agora se você tem direito à restituição!
              </span>
            </h2>
            
            <p className="text-xl mb-8 text-blue-100">
              Cada dia que passa é dinheiro que você pode estar perdendo. 
              Nossa análise é gratuita e sem compromisso.
            </p>

            <div className="bg-red-600 text-white px-6 py-4 rounded-lg inline-block mb-8 animate-pulse">
              <div className="flex items-center gap-2">
                <Clock size={24} />
                <span className="font-bold text-lg">ÚLTIMOS DIAS para requerer restituição de 2019!</span>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="#formulario"
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-xl"
              >
                Verificar Meu Direito Agora
                <ArrowRight size={20} />
              </a>
            </div>

            <p className="text-sm text-blue-200 mt-6">
              ✅ Análise gratuita • ✅ Sem compromisso • ✅ Atendimento especializado
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-yellow-400" size={32} />
                  <span className="text-xl font-bold">Isenção do IR para Militares</span>
                </div>
                <p className="text-gray-400">
                  Especialistas na lei 7.713/88, dedicados a garantir os direitos dos militares brasileiros.
                </p>
              </div>
              

              
              <div>
                <h4 className="text-lg font-semibold mb-4">Especialidades</h4>
                <div className="space-y-2 text-gray-400">
                  <p>• Lei 7.713/88</p>
                  <p>• Restituição de IR</p>
                  <p>• Direito Previdenciário</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Isenção do IR para Militares. Todos os direitos reservados.</p>
              <p className="text-sm mt-2">
                Este site não oferece aconselhamento jurídico específico e não forma relação advogado-cliente. 
                Consulte sempre um advogado qualificado para sua situação específica.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;