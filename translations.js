/* ============================================================
   PetSocorro — Traduções (Português, English, Español)
   Conteúdo central do site em três idiomas.
   ============================================================ */
window.I18N = {

  /* ================= PORTUGUÊS ================= */
  pt: {
    meta: {
      lang: 'pt-BR',
      title: 'PetSocorro — Primeiros Socorros para Cães e Gatos',
      description: 'Guia prático e gratuito de primeiros socorros para cães e gatos: engasgo, sangramento, intoxicação, queimaduras, RCP e muito mais.'
    },
    topbar: '⚠️ Este site é um guia informativo. Em qualquer emergência, procure um <strong>médico-veterinário</strong> imediatamente.',
    nav: { emergencies: 'Emergências', guides: 'Guias', toxics: 'Alimentos Tóxicos', kit: 'Kit', contacts: 'Contatos' },
    hero: {
      badge: 'Guia gratuito e sempre disponível',
      title: 'Primeiros socorros que podem <span class="hl">salvar a vida</span> do seu pet',
      lead: 'Cães e gatos sofrem acidentes — e os minutos antes de chegar ao veterinário fazem toda a diferença. Aprenda o que fazer (e o que <strong>nunca</strong> fazer) em engasgos, sangramentos, intoxicações, queimaduras e outras emergências.',
      btn1: '🚑 Ver emergências',
      btn2: '🧰 Montar meu kit',
      stats: [
        { n: '12+', l: 'Situações de emergência' },
        { n: '100%', l: 'Gratuito e offline' },
        { n: '2', l: 'Cães e gatos' }
      ],
      float1: { t: 'Passo a passo', s: 'Instruções claras' },
      float2: { t: 'Rápido de usar', s: 'Em segundos' }
    },
    emergencies: {
      eyebrow: 'Comece aqui',
      title: 'Qual é a emergência?',
      subtitle: 'Toque no problema para ver o passo a passo. Use a busca para encontrar rapidamente.',
      search: 'Buscar emergência (ex.: engasgo, sangramento, veneno...)',
      noResults: 'Nenhuma emergência encontrada. Tente outro termo. 🐶',
      tagCritical: 'Risco de vida',
      tagUrgent: 'Urgente',
      cards: [
        { icon: '😮‍💨', title: 'Engasgo / Asfixia', desc: 'Objeto preso na garganta impedindo a respiração.', critical: true, keywords: 'engasgo asfixia sufocacao obstrucao garganta respiracao objeto' },
        { icon: '🩸', title: 'Sangramento', desc: 'Cortes e feridas com perda de sangue.', critical: true, keywords: 'sangramento hemorragia corte ferida sangue machucado' },
        { icon: '☠️', title: 'Intoxicação', desc: 'Ingestão de alimento tóxico, remédio ou produto químico.', critical: true, keywords: 'intoxicacao envenenamento veneno toxico chocolate remedio produto quimico' },
        { icon: '❤️‍🩹', title: 'Parada Cardíaca (RCP)', desc: 'O pet não respira e não tem batimentos.', critical: true, keywords: 'rcp parada cardiaca reanimacao nao respira coracao' },
        { icon: '🔥', title: 'Queimaduras', desc: 'Contato com fogo, água quente, produtos ou superfícies quentes.', critical: true, keywords: 'queimadura fogo calor quimica escaldadura' },
        { icon: '🌡️', title: 'Insolação', desc: 'Superaquecimento por calor excessivo.', critical: true, keywords: 'insolacao calor hipertermia temperatura alta verao' },
        { icon: '🦴', title: 'Fraturas', desc: 'Ossos quebrados ou membros deformados.', critical: false, keywords: 'fratura osso quebrado membro luxacao' },
        { icon: '⚡', title: 'Convulsão', desc: 'Crises com tremores e perda de consciência.', critical: false, keywords: 'convulsao epilepsia tremores ataque' },
        { icon: '🐝', title: 'Picadas e Mordidas', desc: 'Abelhas, aranhas, cobras, carrapatos e outros animais.', critical: false, keywords: 'picada mordida inseto cobra aranha abelha carrapato' },
        { icon: '💧', title: 'Afogamento', desc: 'Queda na água ou inalação de líquido.', critical: false, keywords: 'afogamento agua piscina engoliu agua' },
        { icon: '🔌', title: 'Choque Elétrico', desc: 'Contato com fios ou tomadas energizadas.', critical: false, keywords: 'choque eletrico tomada fio energia' },
        { icon: '👁️', title: 'Lesão nos Olhos', desc: 'Corpo estranho, arranhão ou irritação ocular.', critical: false, keywords: 'olho ocular corpo estranho visao arranhao' }
      ]
    },
    guides: {
      eyebrow: 'Passo a passo',
      title: 'Guias de primeiros socorros',
      subtitle: 'Instruções práticas para agir com segurança até chegar ao veterinário.',
      items: [
        {
          icon: '😮‍💨', title: 'Engasgo / Asfixia',
          steps: [
            '<strong>Mantenha a calma</strong> e aproxime-se com cuidado para não assustar o animal.',
            '<strong>Abra a boca</strong> do pet com as duas mãos e procure o objeto. Se estiver visível e solto, remova com os dedos ou uma pinça — <em>nunca</em> empurre para dentro.',
            '<strong>Se não conseguir ver o objeto</strong>, não tente "pescar" às cegas: você pode empurrá-lo mais fundo.',
            'Em <strong>cães pequenos</strong>: segure-o de costas contra o seu peito e aplique 5 compressões firmes com a mão fechada logo abaixo das costelas.',
            'Em <strong>cães grandes</strong>: fique atrás dele e pressione o abdômen com as duas mãos (manobra de Heimlich adaptada).',
            'Em <strong>gatos</strong>: segure o corpo com uma mão e aplique compressões curtas no tórax com a outra.',
            'Se o pet <strong>desmaiar</strong>, inicie a RCP (veja o guia) e corra para o veterinário.'
          ],
          warning: '⚠️ Nunca coloque o dedo na garganta sem ver o objeto — o risco de empurrá-lo é alto.'
        },
        {
          icon: '🩸', title: 'Sangramento / Hemorragia',
          steps: [
            '<strong>Proteja suas mãos</strong> com luvas ou um saco plástico limpo.',
            '<strong>Pressione o ferimento</strong> com uma gaze ou pano limpo por 3 a 5 minutos, sem tirar para "espiar".',
            'Se o sangue <strong>encharcar</strong>, coloque outra gaze por cima — não remova a primeira.',
            '<strong>Eleve o membro</strong> ferido acima do nível do coração, se possível.',
            'Quando parar, <strong>enrole uma atadura</strong> firme (sem apertar demais) e leve ao veterinário.',
            'Se houver <strong>objeto cravado</strong>, não o retire — imobilize ao redor e vá ao veterinário.'
          ],
          warning: '⚠️ Nunca use torniquete apertado por muito tempo — pode causar necrose. Use apenas em hemorragia grave e solte a cada 10 min.'
        },
        {
          icon: '☠️', title: 'Intoxicação / Envenenamento',
          steps: [
            '<strong>Identifique o que foi ingerido</strong> e guarde a embalagem ou uma amostra.',
            '<strong>Não provoque vômito</strong> por conta própria — em alguns casos (como produtos cáusticos) isso piora tudo.',
            '<strong>Não dê leite, água com açúcar ou "antídotos" caseiros</strong>.',
            'Se o produto estiver na <strong>pele</strong>, lave com água morna e sabão neutro.',
            'Se estiver nos <strong>olhos</strong>, lave com soro fisiológico por 15 minutos.',
            '<strong>Leve o pet imediatamente</strong> ao veterinário com a embalagem do produto.'
          ],
          warning: '⚠️ Anote a hora e a quantidade ingerida — isso ajuda muito o veterinário a decidir o tratamento.'
        },
        {
          icon: '❤️‍🩹', title: 'Parada Cardíaca (RCP)',
          steps: [
            '<strong>Verifique</strong> se o pet responde, respira e tem batimentos.',
            '<strong>Abra as vias aéreas</strong>: estique o pescoço e feche a boca.',
            'Dê <strong>2 respirações</strong> cobrindo o focinho com a boca (boca do pet fechada).',
            'Coloque as mãos sobre o <strong>coração</strong> (atrás do cotovelo, no tórax) e comprima com firmeza.',
            'Faça <strong>30 compressões</strong> seguidas de 2 respirações, repetindo o ciclo.',
            'Continue <strong>sem parar</strong> até chegar ao veterinário.'
          ],
          warning: '⚠️ A RCP é exaustiva e delicada. Peça ajuda e siga direto para uma clínica 24h.'
        },
        {
          icon: '🔥', title: 'Queimaduras',
          steps: [
            '<strong>Afaste o pet</strong> da fonte de calor com segurança.',
            '<strong>Resfrie a área</strong> com água corrente em temperatura ambiente por 10 a 15 minutos.',
            '<strong>Não use gelo</strong>, manteiga, pasta de dente ou pomadas caseiras.',
            '<strong>Cubra</strong> a queimadura com gaze limpa e úmida.',
            '<strong>Não estoure bolhas.</strong>',
            'Leve ao veterinário — queimaduras podem ser mais profundas do que parecem.'
          ],
          warning: '⚠️ Queimaduras em olhos, boca ou grandes áreas são sempre emergência grave.'
        },
        {
          icon: '🌡️', title: 'Insolação',
          steps: [
            '<strong>Leve o pet</strong> para um local fresco e à sombra.',
            '<strong>Molhe</strong> patas, barriga e axilas com água em temperatura ambiente.',
            '<strong>Ofereça água</strong> em pequenas quantidades, se ele estiver consciente.',
            '<strong>Não use água gelada</strong> — o choque térmico é perigoso.',
            'Leve ao veterinário <strong>mesmo que ele melhore</strong>.'
          ],
          warning: '⚠️ Nunca deixe o pet sozinho dentro do carro em dias quentes — a temperatura sobe em minutos.'
        },
        {
          icon: '🦴', title: 'Fraturas',
          steps: [
            '<strong>Não tente alinhar</strong> o osso nem empurrar nada para dentro.',
            '<strong>Imobilize</strong> o membro com uma tábua, papelão ou revista, usando atadura sem apertar.',
            '<strong>Contenha o pet</strong> para ele não se mexer — use uma toalha como maca.',
            '<strong>Não dê comida nem água</strong> (pode precisar de cirurgia/anestesia).',
            'Transporte com cuidado, mantendo o corpo o mais imóvel possível.'
          ],
          warning: '⚠️ Fratura exposta (osso para fora) é grave: cubra com gaze limpa e úmida.'
        },
        {
          icon: '⚡', title: 'Convulsão',
          steps: [
            '<strong>Não segure</strong> o pet nem tente abrir a boca dele.',
            '<strong>Afaste objetos</strong> para ele não se machucar.',
            '<strong>Reduza a luz</strong> e faça silêncio ao redor.',
            '<strong>Anote a duração</strong> da crise (use o celular).',
            'Após a crise, <strong>mantenha-o aquecido</strong> e calmo.',
            'Se durar <strong>mais de 3 minutos</strong> ou se repetir, corra para o veterinário.'
          ],
          warning: '⚠️ Nunca coloque os dedos na boca do animal durante a convulsão — você pode ser mordido.'
        },
        {
          icon: '🐝', title: 'Picadas e Mordidas',
          steps: [
            '<strong>Abelha:</strong> remova o ferrão raspando com um cartão (não aperte) e aplique compressa fria.',
            '<strong>Cobra:</strong> mantenha o pet calmo e imóvel, abaixo do nível do coração, e vá ao veterinário urgente.',
            '<strong>Carrapato:</strong> remova com pinça rente à pele, girando devagar; não aperte o corpo do parasita.',
            '<strong>Não corte nem chupe</strong> o local de picadas.',
            'Observe sinais de <strong>alergia grave</strong> (inchaço no focinho, dificuldade para respirar) e corra ao veterinário.'
          ],
          warning: '⚠️ Picada de cobra em cães e gatos é sempre emergência — não perca tempo.'
        },
        {
          icon: '💧', title: 'Afogamento',
          steps: [
            '<strong>Retire o pet</strong> da água com segurança.',
            '<strong>Segure-o de cabeça para baixo</strong> por alguns segundos para escoar a água.',
            '<strong>Verifique a respiração</strong>. Se não respirar, faça RCP.',
            '<strong>Seque e aqueça</strong> o animal (toalhas, cobertor).',
            'Leve ao veterinário — a água nos pulmões pode causar problemas horas depois.'
          ],
          warning: '⚠️ Mesmo que ele pareça bem, a avaliação veterinária é essencial.'
        },
        {
          icon: '🔌', title: 'Choque Elétrico',
          steps: [
            '<strong>Desligue a energia</strong> (disjuntor) antes de tocar no animal.',
            'Se não for possível, <strong>afaste o pet</strong> usando um objeto de madeira ou plástico seco — nunca suas mãos.',
            '<strong>Verifique a respiração</strong> e faça RCP se necessário.',
            '<strong>Cubra queimaduras</strong> na boca com gaze limpa.',
            'Leve ao veterinário imediatamente.'
          ],
          warning: '⚠️ Nunca toque no pet enquanto ele estiver em contato com a fonte elétrica.'
        },
        {
          icon: '👁️', title: 'Lesão nos Olhos',
          steps: [
            '<strong>Não deixe</strong> o pet coçar ou esfregar o olho.',
            'Se houver <strong>poeira ou areia</strong>, lave com soro fisiológico da parte interna para a externa.',
            '<strong>Não tente remover</strong> objetos cravados no olho.',
            'Use um <strong>colar elizabetano</strong> (cone) para impedir o contato com a pata.',
            'Leve ao veterinário — lesões oculares pioram rápido.'
          ],
          warning: '⚠️ Nunca use colírios humanos sem orientação veterinária.'
        }
      ]
    },
    toxics: {
      eyebrow: 'Atenção',
      title: 'Alimentos e produtos tóxicos',
      subtitle: 'Mantenha estes itens longe do alcance de cães e gatos. Em caso de ingestão, procure o veterinário.',
      items: [
        { icon: '🍫', title: 'Chocolate', desc: 'Teobromina — muito perigoso' },
        { icon: '🍇', title: 'Uva e passa', desc: 'Pode causar insuficiência renal' },
        { icon: '🧅', title: 'Cebola e alho', desc: 'Destrói as hemácias' },
        { icon: '🥑', title: 'Abacate', desc: 'Persina — tóxico' },
        { icon: '🍬', title: 'Xilitol', desc: 'Adoçante — hipoglicemia grave' },
        { icon: '☕', title: 'Cafeína', desc: 'Café, chá, energéticos' },
        { icon: '🍺', title: 'Álcool', desc: 'Deprime o sistema nervoso' },
        { icon: '🥜', title: 'Macadâmia', desc: 'Fraqueza e tremores' },
        { icon: '🧴', title: 'Produtos de limpeza', desc: 'Corrosivos e venenosos' },
        { icon: '💊', title: 'Medicamentos humanos', desc: 'Paracetamol, ibuprofeno etc.' },
        { icon: '🌿', title: 'Plantas tóxicas', desc: 'Comigo-ninguém-pode, lírio etc.' },
        { icon: '🐭', title: 'Raticidas e venenos', desc: 'Altamente letais' }
      ]
    },
    kit: {
      eyebrow: 'Prevenção',
      title: 'Monte o kit de primeiros socorros',
      subtitle: 'Tenha tudo em uma bolsa de fácil acesso. Em uma emergência, você não vai querer procurar.',
      items: [
        'Gaze estéril', 'Ataduras e esparadrapo', 'Soro fisiológico', 'Luvas descartáveis',
        'Tesoura de ponta arredondada', 'Termômetro digital', 'Antisséptico (clorexidina)', 'Pinça',
        'Cobertor / manta térmica', 'Colar elizabetano (cone)', 'Seringa sem agulha', 'Contatos do veterinário 24h'
      ]
    },
    contacts: {
      eyebrow: 'Esteja preparado',
      title: 'Contatos de emergência',
      subtitle: 'Anote e deixe sempre à mão os números essenciais da sua região.',
      cards: [
        { icon: '🏥', title: 'Veterinário 24h', desc: 'Clínica mais próxima com atendimento noturno', num: 'Anote aqui' },
        { icon: '🚑', title: 'Bombeiros', desc: 'Resgate e emergências', num: '193' },
        { icon: '📞', title: 'Defesa Civil', desc: 'Emergências e desastres', num: '199' },
        { icon: '🐾', title: 'Seu veterinário', desc: 'Contato de rotina do seu pet', num: 'Anote aqui' }
      ]
    },
    disclaimer: {
      title: 'Aviso importante',
      text: 'Este site tem caráter <strong>informativo e educativo</strong> e <strong>não substitui</strong> a avaliação de um médico-veterinário. As orientações aqui descritas são medidas de primeiros socorros para serem aplicadas <strong>enquanto você leva o animal ao atendimento profissional</strong>. Em qualquer situação de emergência, procure imediatamente uma clínica veterinária. Cada animal é único e pode reagir de forma diferente.'
    },
    footer: {
      desc: 'Um guia aberto e gratuito de primeiros socorros para cães e gatos. Feito com carinho para ajudar a salvar vidas.',
      navTitle: 'Navegação',
      emergencyTitle: 'Emergência',
      links: [
        { href: '#contatos', text: 'Bombeiros — 193' },
        { href: '#contatos', text: 'Defesa Civil — 199' },
        { href: '#contatos', text: 'Veterinário 24h' }
      ],
      bottom1: 'PetSocorro. Projeto de código aberto.',
      bottom2: 'Feito com 💚 para quem ama animais.'
    },
    ui: { backToTop: 'Voltar ao topo', menu: 'Abrir menu', langLabel: 'Idioma' }
  },

  /* ================= ENGLISH ================= */
  en: {
    meta: {
      lang: 'en',
      title: 'PetSocorro — First Aid for Dogs and Cats',
      description: 'A practical, free first aid guide for dogs and cats: choking, bleeding, poisoning, burns, CPR and much more.'
    },
    topbar: '⚠️ This site is an informational guide. In any emergency, seek a <strong>veterinarian</strong> immediately.',
    nav: { emergencies: 'Emergencies', guides: 'Guides', toxics: 'Toxic Foods', kit: 'Kit', contacts: 'Contacts' },
    hero: {
      badge: 'Free guide, always available',
      title: 'First aid that can <span class="hl">save your pet\'s life</span>',
      lead: 'Dogs and cats have accidents — and the minutes before reaching the vet make all the difference. Learn what to do (and what to <strong>never</strong> do) in choking, bleeding, poisoning, burns and other emergencies.',
      btn1: '🚑 View emergencies',
      btn2: '🧰 Build my kit',
      stats: [
        { n: '12+', l: 'Emergency situations' },
        { n: '100%', l: 'Free and offline' },
        { n: '2', l: 'Dogs and cats' }
      ],
      float1: { t: 'Step by step', s: 'Clear instructions' },
      float2: { t: 'Quick to use', s: 'In seconds' }
    },
    emergencies: {
      eyebrow: 'Start here',
      title: 'What is the emergency?',
      subtitle: 'Tap the problem to see the step by step. Use the search to find it quickly.',
      search: 'Search emergency (e.g.: choking, bleeding, poison...)',
      noResults: 'No emergency found. Try another term. 🐶',
      tagCritical: 'Life-threatening',
      tagUrgent: 'Urgent',
      cards: [
        { icon: '😮‍💨', title: 'Choking / Asphyxiation', desc: 'Object stuck in the throat blocking breathing.', critical: true, keywords: 'choking asphyxiation suffocation obstruction throat breathing object' },
        { icon: '🩸', title: 'Bleeding', desc: 'Cuts and wounds with blood loss.', critical: true, keywords: 'bleeding hemorrhage cut wound blood injury' },
        { icon: '☠️', title: 'Poisoning', desc: 'Swallowing toxic food, medicine or a chemical product.', critical: true, keywords: 'poisoning toxic poison chocolate medicine chemical product' },
        { icon: '❤️‍🩹', title: 'Cardiac Arrest (CPR)', desc: 'The pet is not breathing and has no heartbeat.', critical: true, keywords: 'cpr cardiac arrest resuscitation not breathing heart' },
        { icon: '🔥', title: 'Burns', desc: 'Contact with fire, hot water, products or hot surfaces.', critical: true, keywords: 'burn fire heat chemical scald' },
        { icon: '🌡️', title: 'Heatstroke', desc: 'Overheating from excessive heat.', critical: true, keywords: 'heatstroke heat hyperthermia high temperature summer' },
        { icon: '🦴', title: 'Fractures', desc: 'Broken bones or deformed limbs.', critical: false, keywords: 'fracture broken bone limb dislocation' },
        { icon: '⚡', title: 'Seizures', desc: 'Attacks with tremors and loss of consciousness.', critical: false, keywords: 'seizure epilepsy tremors attack convulsion' },
        { icon: '🐝', title: 'Bites and Stings', desc: 'Bees, spiders, snakes, ticks and other animals.', critical: false, keywords: 'bite sting insect snake spider bee tick' },
        { icon: '💧', title: 'Drowning', desc: 'Falling into water or inhaling liquid.', critical: false, keywords: 'drowning water pool swallowed water' },
        { icon: '🔌', title: 'Electric Shock', desc: 'Contact with live wires or outlets.', critical: false, keywords: 'electric shock outlet wire energy' },
        { icon: '👁️', title: 'Eye Injury', desc: 'Foreign body, scratch or eye irritation.', critical: false, keywords: 'eye ocular foreign body vision scratch' }
      ]
    },
    guides: {
      eyebrow: 'Step by step',
      title: 'First aid guides',
      subtitle: 'Practical instructions to act safely until you reach the vet.',
      items: [
        {
          icon: '😮‍💨', title: 'Choking / Asphyxiation',
          steps: [
            '<strong>Stay calm</strong> and approach carefully so you don\'t startle the animal.',
            '<strong>Open the pet\'s mouth</strong> with both hands and look for the object. If it\'s visible and loose, remove it with your fingers or tweezers — <em>never</em> push it inward.',
            '<strong>If you can\'t see the object</strong>, don\'t "fish" blindly: you may push it deeper.',
            'For <strong>small dogs</strong>: hold them with their back against your chest and give 5 firm compressions with a closed hand just below the ribs.',
            'For <strong>large dogs</strong>: stand behind them and press the abdomen with both hands (adapted Heimlich maneuver).',
            'For <strong>cats</strong>: hold the body with one hand and give short compressions on the chest with the other.',
            'If the pet <strong>faints</strong>, start CPR (see the guide) and rush to the vet.'
          ],
          warning: '⚠️ Never put your finger down the throat without seeing the object — the risk of pushing it deeper is high.'
        },
        {
          icon: '🩸', title: 'Bleeding / Hemorrhage',
          steps: [
            '<strong>Protect your hands</strong> with gloves or a clean plastic bag.',
            '<strong>Press the wound</strong> with gauze or a clean cloth for 3 to 5 minutes, without lifting it to "peek".',
            'If the blood <strong>soaks through</strong>, add another gauze on top — don\'t remove the first one.',
            '<strong>Raise the injured limb</strong> above heart level, if possible.',
            'Once it stops, <strong>wrap a firm bandage</strong> (not too tight) and take the pet to the vet.',
            'If there\'s an <strong>embedded object</strong>, don\'t remove it — immobilize around it and go to the vet.'
          ],
          warning: '⚠️ Never use a tight tourniquet for long — it can cause necrosis. Use it only for severe bleeding and loosen it every 10 min.'
        },
        {
          icon: '☠️', title: 'Poisoning / Intoxication',
          steps: [
            '<strong>Identify what was swallowed</strong> and keep the packaging or a sample.',
            '<strong>Don\'t induce vomiting</strong> on your own — in some cases (like caustic products) it makes things worse.',
            '<strong>Don\'t give milk, sugar water or homemade "antidotes"</strong>.',
            'If the product is on the <strong>skin</strong>, wash with warm water and mild soap.',
            'If it\'s in the <strong>eyes</strong>, rinse with saline solution for 15 minutes.',
            '<strong>Take the pet immediately</strong> to the vet with the product packaging.'
          ],
          warning: '⚠️ Note the time and amount swallowed — it helps the vet a lot in deciding the treatment.'
        },
        {
          icon: '❤️‍🩹', title: 'Cardiac Arrest (CPR)',
          steps: [
            '<strong>Check</strong> if the pet responds, breathes and has a heartbeat.',
            '<strong>Open the airway</strong>: stretch the neck and close the mouth.',
            'Give <strong>2 breaths</strong> covering the snout with your mouth (pet\'s mouth closed).',
            'Place your hands over the <strong>heart</strong> (behind the elbow, on the chest) and compress firmly.',
            'Do <strong>30 compressions</strong> followed by 2 breaths, repeating the cycle.',
            'Keep going <strong>non-stop</strong> until you reach the vet.'
          ],
          warning: '⚠️ CPR is exhausting and delicate. Ask for help and head straight to a 24h clinic.'
        },
        {
          icon: '🔥', title: 'Burns',
          steps: [
            '<strong>Move the pet</strong> away from the heat source safely.',
            '<strong>Cool the area</strong> with running water at room temperature for 10 to 15 minutes.',
            '<strong>Don\'t use ice</strong>, butter, toothpaste or homemade ointments.',
            '<strong>Cover</strong> the burn with clean, damp gauze.',
            '<strong>Don\'t pop blisters.</strong>',
            'Take the pet to the vet — burns can be deeper than they look.'
          ],
          warning: '⚠️ Burns on the eyes, mouth or large areas are always a serious emergency.'
        },
        {
          icon: '🌡️', title: 'Heatstroke',
          steps: [
            '<strong>Move the pet</strong> to a cool, shady place.',
            '<strong>Wet</strong> the paws, belly and armpits with room-temperature water.',
            '<strong>Offer water</strong> in small amounts if the pet is conscious.',
            '<strong>Don\'t use ice-cold water</strong> — thermal shock is dangerous.',
            'Take the pet to the vet <strong>even if they seem to improve</strong>.'
          ],
          warning: '⚠️ Never leave your pet alone in the car on hot days — the temperature rises within minutes.'
        },
        {
          icon: '🦴', title: 'Fractures',
          steps: [
            '<strong>Don\'t try to align</strong> the bone or push anything in.',
            '<strong>Immobilize</strong> the limb with a board, cardboard or magazine, using a bandage without squeezing.',
            '<strong>Restrain the pet</strong> so they don\'t move — use a towel as a stretcher.',
            '<strong>Don\'t give food or water</strong> (surgery/anesthesia may be needed).',
            'Transport carefully, keeping the body as still as possible.'
          ],
          warning: '⚠️ An open fracture (bone sticking out) is serious: cover it with clean, damp gauze.'
        },
        {
          icon: '⚡', title: 'Seizures',
          steps: [
            '<strong>Don\'t hold</strong> the pet or try to open their mouth.',
            '<strong>Move objects away</strong> so they don\'t get hurt.',
            '<strong>Dim the lights</strong> and keep quiet around them.',
            '<strong>Note the duration</strong> of the seizure (use your phone).',
            'After the seizure, <strong>keep them warm</strong> and calm.',
            'If it lasts <strong>more than 3 minutes</strong> or repeats, rush to the vet.'
          ],
          warning: '⚠️ Never put your fingers in the animal\'s mouth during a seizure — you may get bitten.'
        },
        {
          icon: '🐝', title: 'Bites and Stings',
          steps: [
            '<strong>Bee:</strong> remove the stinger by scraping with a card (don\'t squeeze) and apply a cold compress.',
            '<strong>Snake:</strong> keep the pet calm and still, below heart level, and go to the vet urgently.',
            '<strong>Tick:</strong> remove with tweezers close to the skin, twisting slowly; don\'t squeeze the parasite\'s body.',
            '<strong>Don\'t cut or suck</strong> the bite site.',
            'Watch for signs of <strong>severe allergy</strong> (swollen snout, difficulty breathing) and rush to the vet.'
          ],
          warning: '⚠️ A snake bite in dogs and cats is always an emergency — don\'t waste time.'
        },
        {
          icon: '💧', title: 'Drowning',
          steps: [
            '<strong>Get the pet</strong> out of the water safely.',
            '<strong>Hold them upside down</strong> for a few seconds to drain the water.',
            '<strong>Check breathing</strong>. If they\'re not breathing, do CPR.',
            '<strong>Dry and warm</strong> the animal (towels, blanket).',
            'Take the pet to the vet — water in the lungs can cause problems hours later.'
          ],
          warning: '⚠️ Even if they seem fine, a veterinary evaluation is essential.'
        },
        {
          icon: '🔌', title: 'Electric Shock',
          steps: [
            '<strong>Turn off the power</strong> (breaker) before touching the animal.',
            'If that\'s not possible, <strong>move the pet</strong> using a dry wooden or plastic object — never your hands.',
            '<strong>Check breathing</strong> and do CPR if needed.',
            '<strong>Cover burns</strong> in the mouth with clean gauze.',
            'Take the pet to the vet immediately.'
          ],
          warning: '⚠️ Never touch the pet while they\'re in contact with the electrical source.'
        },
        {
          icon: '👁️', title: 'Eye Injury',
          steps: [
            '<strong>Don\'t let</strong> the pet scratch or rub the eye.',
            'If there\'s <strong>dust or sand</strong>, rinse with saline solution from the inner to the outer corner.',
            '<strong>Don\'t try to remove</strong> objects stuck in the eye.',
            'Use an <strong>Elizabethan collar</strong> (cone) to prevent contact with the paw.',
            'Take the pet to the vet — eye injuries get worse fast.'
          ],
          warning: '⚠️ Never use human eye drops without veterinary guidance.'
        }
      ]
    },
    toxics: {
      eyebrow: 'Warning',
      title: 'Toxic foods and products',
      subtitle: 'Keep these items out of reach of dogs and cats. If swallowed, seek the vet.',
      items: [
        { icon: '🍫', title: 'Chocolate', desc: 'Theobromine — very dangerous' },
        { icon: '🍇', title: 'Grapes and raisins', desc: 'Can cause kidney failure' },
        { icon: '🧅', title: 'Onion and garlic', desc: 'Destroys red blood cells' },
        { icon: '🥑', title: 'Avocado', desc: 'Persin — toxic' },
        { icon: '🍬', title: 'Xylitol', desc: 'Sweetener — severe hypoglycemia' },
        { icon: '☕', title: 'Caffeine', desc: 'Coffee, tea, energy drinks' },
        { icon: '🍺', title: 'Alcohol', desc: 'Depresses the nervous system' },
        { icon: '🥜', title: 'Macadamia', desc: 'Weakness and tremors' },
        { icon: '🧴', title: 'Cleaning products', desc: 'Corrosive and poisonous' },
        { icon: '💊', title: 'Human medicines', desc: 'Paracetamol, ibuprofen, etc.' },
        { icon: '🌿', title: 'Toxic plants', desc: 'Dieffenbachia, lily, etc.' },
        { icon: '🐭', title: 'Rodenticides and poisons', desc: 'Highly lethal' }
      ]
    },
    kit: {
      eyebrow: 'Prevention',
      title: 'Build your first aid kit',
      subtitle: 'Keep everything in an easy-to-reach bag. In an emergency, you won\'t want to search for it.',
      items: [
        'Sterile gauze', 'Bandages and medical tape', 'Saline solution', 'Disposable gloves',
        'Blunt-tip scissors', 'Digital thermometer', 'Antiseptic (chlorhexidine)', 'Tweezers',
        'Blanket / thermal blanket', 'Elizabethan collar (cone)', 'Needleless syringe', '24h vet contacts'
      ]
    },
    contacts: {
      eyebrow: 'Be prepared',
      title: 'Emergency contacts',
      subtitle: 'Write down and always keep the essential numbers for your area at hand.',
      cards: [
        { icon: '🏥', title: '24h Vet', desc: 'Nearest clinic with night service', num: 'Write here' },
        { icon: '🚑', title: 'Fire Department', desc: 'Rescue and emergencies', num: '193' },
        { icon: '📞', title: 'Civil Defense', desc: 'Emergencies and disasters', num: '199' },
        { icon: '🐾', title: 'Your vet', desc: 'Your pet\'s routine contact', num: 'Write here' }
      ]
    },
    disclaimer: {
      title: 'Important notice',
      text: 'This site is <strong>informational and educational</strong> and <strong>does not replace</strong> an evaluation by a veterinarian. The guidance described here consists of first aid measures to be applied <strong>while you take the animal to professional care</strong>. In any emergency, seek a veterinary clinic immediately. Every animal is unique and may react differently.'
    },
    footer: {
      desc: 'An open and free first aid guide for dogs and cats. Made with care to help save lives.',
      navTitle: 'Navigation',
      emergencyTitle: 'Emergency',
      links: [
        { href: '#contatos', text: 'Fire Department — 193' },
        { href: '#contatos', text: 'Civil Defense — 199' },
        { href: '#contatos', text: '24h Vet' }
      ],
      bottom1: 'PetSocorro. Open-source project.',
      bottom2: 'Made with 💚 for animal lovers.'
    },
    ui: { backToTop: 'Back to top', menu: 'Open menu', langLabel: 'Language' }
  },

  /* ================= ESPAÑOL ================= */
  es: {
    meta: {
      lang: 'es',
      title: 'PetSocorro — Primeros Auxilios para Perros y Gatos',
      description: 'Guía práctica y gratuita de primeros auxilios para perros y gatos: atragantamiento, sangrado, intoxicación, quemaduras, RCP y mucho más.'
    },
    topbar: '⚠️ Este sitio es una guía informativa. En cualquier emergencia, busca a un <strong>veterinario</strong> de inmediato.',
    nav: { emergencies: 'Emergencias', guides: 'Guías', toxics: 'Alimentos Tóxicos', kit: 'Botiquín', contacts: 'Contactos' },
    hero: {
      badge: 'Guía gratuita y siempre disponible',
      title: 'Primeros auxilios que pueden <span class="hl">salvar la vida</span> de tu mascota',
      lead: 'Perros y gatos sufren accidentes — y los minutos antes de llegar al veterinario marcan la diferencia. Aprende qué hacer (y qué <strong>nunca</strong> hacer) en atragantamientos, sangrados, intoxicaciones, quemaduras y otras emergencias.',
      btn1: '🚑 Ver emergencias',
      btn2: '🧰 Armar mi botiquín',
      stats: [
        { n: '12+', l: 'Situaciones de emergencia' },
        { n: '100%', l: 'Gratuito y sin conexión' },
        { n: '2', l: 'Perros y gatos' }
      ],
      float1: { t: 'Paso a paso', s: 'Instrucciones claras' },
      float2: { t: 'Rápido de usar', s: 'En segundos' }
    },
    emergencies: {
      eyebrow: 'Empieza aquí',
      title: '¿Cuál es la emergencia?',
      subtitle: 'Toca el problema para ver el paso a paso. Usa la búsqueda para encontrarlo rápido.',
      search: 'Buscar emergencia (ej.: atragantamiento, sangrado, veneno...)',
      noResults: 'No se encontró ninguna emergencia. Prueba otro término. 🐶',
      tagCritical: 'Riesgo de vida',
      tagUrgent: 'Urgente',
      cards: [
        { icon: '😮‍💨', title: 'Atragantamiento / Asfixia', desc: 'Objeto atascado en la garganta que impide respirar.', critical: true, keywords: 'atragantamiento asfixia sofocacion obstruccion garganta respiracion objeto' },
        { icon: '🩸', title: 'Sangrado', desc: 'Cortes y heridas con pérdida de sangre.', critical: true, keywords: 'sangrado hemorragia corte herida sangre' },
        { icon: '☠️', title: 'Intoxicación', desc: 'Ingestión de alimento tóxico, medicamento o producto químico.', critical: true, keywords: 'intoxicacion envenenamiento veneno toxico chocolate medicamento producto quimico' },
        { icon: '❤️‍🩹', title: 'Paro Cardíaco (RCP)', desc: 'La mascota no respira y no tiene latidos.', critical: true, keywords: 'rcp paro cardiaco reanimacion no respira corazon' },
        { icon: '🔥', title: 'Quemaduras', desc: 'Contacto con fuego, agua caliente, productos o superficies calientes.', critical: true, keywords: 'quemadura fuego calor quimica escaldadura' },
        { icon: '🌡️', title: 'Insolación', desc: 'Sobrecalentamiento por calor excesivo.', critical: true, keywords: 'insolacion calor hipertermia temperatura alta verano' },
        { icon: '🦴', title: 'Fracturas', desc: 'Huesos rotos o extremidades deformadas.', critical: false, keywords: 'fractura hueso roto extremidad luxacion' },
        { icon: '⚡', title: 'Convulsiones', desc: 'Crisis con temblores y pérdida de consciencia.', critical: false, keywords: 'convulsion epilepsia temblores ataque' },
        { icon: '🐝', title: 'Picaduras y Mordeduras', desc: 'Abejas, arañas, serpientes, garrapatas y otros animales.', critical: false, keywords: 'picadura mordedura insecto serpiente arana abeja garrapata' },
        { icon: '💧', title: 'Ahogamiento', desc: 'Caída al agua o inhalación de líquido.', critical: false, keywords: 'ahogamiento agua piscina trago agua' },
        { icon: '🔌', title: 'Descarga Eléctrica', desc: 'Contacto con cables o enchufes con corriente.', critical: false, keywords: 'descarga electrica enchufe cable energia' },
        { icon: '👁️', title: 'Lesión en los Ojos', desc: 'Cuerpo extraño, rasguño o irritación ocular.', critical: false, keywords: 'ojo ocular cuerpo extrano vision rasguno' }
      ]
    },
    guides: {
      eyebrow: 'Paso a paso',
      title: 'Guías de primeros auxilios',
      subtitle: 'Instrucciones prácticas para actuar con seguridad hasta llegar al veterinario.',
      items: [
        {
          icon: '😮‍💨', title: 'Atragantamiento / Asfixia',
          steps: [
            '<strong>Mantén la calma</strong> y acércate con cuidado para no asustar al animal.',
            '<strong>Abre la boca</strong> de la mascota con ambas manos y busca el objeto. Si está visible y suelto, retíralo con los dedos o unas pinzas — <em>nunca</em> lo empujes hacia dentro.',
            '<strong>Si no puedes ver el objeto</strong>, no intentes "pescar" a ciegas: podrías empujarlo más profundo.',
            'En <strong>perros pequeños</strong>: sostenlo de espaldas contra tu pecho y aplica 5 compresiones firmes con la mano cerrada justo debajo de las costillas.',
            'En <strong>perros grandes</strong>: colócate detrás y presiona el abdomen con ambas manos (maniobra de Heimlich adaptada).',
            'En <strong>gatos</strong>: sostén el cuerpo con una mano y aplica compresiones cortas en el tórax con la otra.',
            'Si la mascota <strong>se desmaya</strong>, inicia la RCP (ver la guía) y corre al veterinario.'
          ],
          warning: '⚠️ Nunca metas el dedo en la garganta sin ver el objeto — el riesgo de empujarlo es alto.'
        },
        {
          icon: '🩸', title: 'Sangrado / Hemorragia',
          steps: [
            '<strong>Protege tus manos</strong> con guantes o una bolsa de plástico limpia.',
            '<strong>Presiona la herida</strong> con una gasa o un paño limpio durante 3 a 5 minutos, sin levantarlo para "mirar".',
            'Si la sangre <strong>empapa</strong>, coloca otra gasa encima — no retires la primera.',
            '<strong>Eleva la extremidad</strong> herida por encima del nivel del corazón, si es posible.',
            'Cuando pare, <strong>coloca un vendaje</strong> firme (sin apretar demasiado) y lleva a la mascota al veterinario.',
            'Si hay un <strong>objeto clavado</strong>, no lo retires — inmoviliza alrededor y ve al veterinario.'
          ],
          warning: '⚠️ Nunca uses un torniquete apretado por mucho tiempo — puede causar necrosis. Úsalo solo en hemorragias graves y aflójalo cada 10 min.'
        },
        {
          icon: '☠️', title: 'Intoxicación / Envenenamiento',
          steps: [
            '<strong>Identifica lo que ingirió</strong> y guarda el envase o una muestra.',
            '<strong>No provoques el vómito</strong> por tu cuenta — en algunos casos (como productos cáusticos) empeora todo.',
            '<strong>No des leche, agua con azúcar ni "antídotos" caseros</strong>.',
            'Si el producto está en la <strong>piel</strong>, lava con agua tibia y jabón neutro.',
            'Si está en los <strong>ojos</strong>, enjuaga con suero fisiológico durante 15 minutos.',
            '<strong>Lleva a la mascota de inmediato</strong> al veterinario con el envase del producto.'
          ],
          warning: '⚠️ Anota la hora y la cantidad ingerida — ayuda mucho al veterinario a decidir el tratamiento.'
        },
        {
          icon: '❤️‍🩹', title: 'Paro Cardíaco (RCP)',
          steps: [
            '<strong>Verifica</strong> si la mascota responde, respira y tiene latidos.',
            '<strong>Abre las vías respiratorias</strong>: estira el cuello y cierra la boca.',
            'Da <strong>2 respiraciones</strong> cubriendo el hocico con tu boca (boca de la mascota cerrada).',
            'Coloca las manos sobre el <strong>corazón</strong> (detrás del codo, en el tórax) y comprime con firmeza.',
            'Haz <strong>30 compresiones</strong> seguidas de 2 respiraciones, repitiendo el ciclo.',
            'Continúa <strong>sin parar</strong> hasta llegar al veterinario.'
          ],
          warning: '⚠️ La RCP es agotadora y delicada. Pide ayuda y dirígete directo a una clínica 24h.'
        },
        {
          icon: '🔥', title: 'Quemaduras',
          steps: [
            '<strong>Aleja a la mascota</strong> de la fuente de calor con seguridad.',
            '<strong>Enfría la zona</strong> con agua corriente a temperatura ambiente durante 10 a 15 minutos.',
            '<strong>No uses hielo</strong>, mantequilla, pasta de dientes ni pomadas caseras.',
            '<strong>Cubre</strong> la quemadura con una gasa limpia y húmeda.',
            '<strong>No revientes las ampollas.</strong>',
            'Lleva al veterinario — las quemaduras pueden ser más profundas de lo que parecen.'
          ],
          warning: '⚠️ Las quemaduras en ojos, boca o grandes áreas son siempre una emergencia grave.'
        },
        {
          icon: '🌡️', title: 'Insolación',
          steps: [
            '<strong>Lleva a la mascota</strong> a un lugar fresco y a la sombra.',
            '<strong>Moja</strong> las patas, la barriga y las axilas con agua a temperatura ambiente.',
            '<strong>Ofrece agua</strong> en pequeñas cantidades si está consciente.',
            '<strong>No uses agua helada</strong> — el choque térmico es peligroso.',
            'Lleva al veterinario <strong>aunque parezca mejorar</strong>.'
          ],
          warning: '⚠️ Nunca dejes a la mascota sola dentro del coche en días calurosos — la temperatura sube en minutos.'
        },
        {
          icon: '🦴', title: 'Fracturas',
          steps: [
            '<strong>No intentes alinear</strong> el hueso ni empujar nada hacia dentro.',
            '<strong>Inmoviliza</strong> la extremidad con una tabla, cartón o revista, usando un vendaje sin apretar.',
            '<strong>Contén a la mascota</strong> para que no se mueva — usa una toalla como camilla.',
            '<strong>No le des comida ni agua</strong> (puede necesitar cirugía/anestesia).',
            'Transporta con cuidado, manteniendo el cuerpo lo más inmóvil posible.'
          ],
          warning: '⚠️ Una fractura expuesta (hueso hacia fuera) es grave: cúbrela con una gasa limpia y húmeda.'
        },
        {
          icon: '⚡', title: 'Convulsiones',
          steps: [
            '<strong>No sostengas</strong> a la mascota ni intentes abrirle la boca.',
            '<strong>Aleja los objetos</strong> para que no se lastime.',
            '<strong>Baja la luz</strong> y guarda silencio alrededor.',
            '<strong>Anota la duración</strong> de la crisis (usa el móvil).',
            'Después de la crisis, <strong>mantenla abrigada</strong> y tranquila.',
            'Si dura <strong>más de 3 minutos</strong> o se repite, corre al veterinario.'
          ],
          warning: '⚠️ Nunca pongas los dedos en la boca del animal durante la convulsión — puedes ser mordido.'
        },
        {
          icon: '🐝', title: 'Picaduras y Mordeduras',
          steps: [
            '<strong>Abeja:</strong> retira el aguijón raspando con una tarjeta (no aprietes) y aplica una compresa fría.',
            '<strong>Serpiente:</strong> mantén a la mascota tranquila e inmóvil, por debajo del nivel del corazón, y ve al veterinario con urgencia.',
            '<strong>Garrapata:</strong> retírala con pinzas cerca de la piel, girando despacio; no aprietes el cuerpo del parásito.',
            '<strong>No cortes ni chupes</strong> el lugar de la picadura.',
            'Observa signos de <strong>alergia grave</strong> (hocico hinchado, dificultad para respirar) y corre al veterinario.'
          ],
          warning: '⚠️ La picadura de serpiente en perros y gatos es siempre una emergencia — no pierdas tiempo.'
        },
        {
          icon: '💧', title: 'Ahogamiento',
          steps: [
            '<strong>Saca a la mascota</strong> del agua con seguridad.',
            '<strong>Sostenla boca abajo</strong> unos segundos para drenar el agua.',
            '<strong>Verifica la respiración</strong>. Si no respira, haz RCP.',
            '<strong>Seca y abriga</strong> al animal (toallas, manta).',
            'Lleva al veterinario — el agua en los pulmones puede causar problemas horas después.'
          ],
          warning: '⚠️ Aunque parezca estar bien, la evaluación veterinaria es esencial.'
        },
        {
          icon: '🔌', title: 'Descarga Eléctrica',
          steps: [
            '<strong>Corta la corriente</strong> (disyuntor) antes de tocar al animal.',
            'Si no es posible, <strong>aleja a la mascota</strong> usando un objeto de madera o plástico seco — nunca tus manos.',
            '<strong>Verifica la respiración</strong> y haz RCP si es necesario.',
            '<strong>Cubre las quemaduras</strong> en la boca con una gasa limpia.',
            'Lleva al veterinario de inmediato.'
          ],
          warning: '⚠️ Nunca toques a la mascota mientras esté en contacto con la fuente eléctrica.'
        },
        {
          icon: '👁️', title: 'Lesión en los Ojos',
          steps: [
            '<strong>No dejes</strong> que la mascota se rasque o frote el ojo.',
            'Si hay <strong>polvo o arena</strong>, lava con suero fisiológico de la parte interna hacia la externa.',
            '<strong>No intentes retirar</strong> objetos clavados en el ojo.',
            'Usa un <strong>collar isabelino</strong> (cono) para impedir el contacto con la pata.',
            'Lleva al veterinario — las lesiones oculares empeoran rápido.'
          ],
          warning: '⚠️ Nunca uses colirios humanos sin orientación veterinaria.'
        }
      ]
    },
    toxics: {
      eyebrow: 'Atención',
      title: 'Alimentos y productos tóxicos',
      subtitle: 'Mantén estos productos fuera del alcance de perros y gatos. En caso de ingestión, busca al veterinario.',
      items: [
        { icon: '🍫', title: 'Chocolate', desc: 'Teobromina — muy peligroso' },
        { icon: '🍇', title: 'Uvas y pasas', desc: 'Puede causar insuficiencia renal' },
        { icon: '🧅', title: 'Cebolla y ajo', desc: 'Destruye los glóbulos rojos' },
        { icon: '🥑', title: 'Aguacate', desc: 'Persina — tóxico' },
        { icon: '🍬', title: 'Xilitol', desc: 'Edulcorante — hipoglucemia grave' },
        { icon: '☕', title: 'Cafeína', desc: 'Café, té, bebidas energéticas' },
        { icon: '🍺', title: 'Alcohol', desc: 'Deprime el sistema nervioso' },
        { icon: '🥜', title: 'Macadamia', desc: 'Debilidad y temblores' },
        { icon: '🧴', title: 'Productos de limpieza', desc: 'Corrosivos y venenosos' },
        { icon: '💊', title: 'Medicamentos humanos', desc: 'Paracetamol, ibuprofeno, etc.' },
        { icon: '🌿', title: 'Plantas tóxicas', desc: 'Dieffenbachia, lirio, etc.' },
        { icon: '🐭', title: 'Raticidas y venenos', desc: 'Altamente letales' }
      ]
    },
    kit: {
      eyebrow: 'Prevención',
      title: 'Arma tu botiquín de primeros auxilios',
      subtitle: 'Ten todo en una bolsa de fácil acceso. En una emergencia, no querrás estar buscando.',
      items: [
        'Gasa estéril', 'Vendajes y esparadrapo', 'Suero fisiológico', 'Guantes desechables',
        'Tijeras de punta redonda', 'Termómetro digital', 'Antiséptico (clorhexidina)', 'Pinzas',
        'Manta / manta térmica', 'Collar isabelino (cono)', 'Jeringa sin aguja', 'Contactos del veterinario 24h'
      ]
    },
    contacts: {
      eyebrow: 'Estar preparado',
      title: 'Contactos de emergencia',
      subtitle: 'Anota y ten siempre a mano los números esenciales de tu zona.',
      cards: [
        { icon: '🏥', title: 'Veterinario 24h', desc: 'Clínica más cercana con servicio nocturno', num: 'Anota aquí' },
        { icon: '🚑', title: 'Bomberos', desc: 'Rescate y emergencias', num: '193' },
        { icon: '📞', title: 'Defensa Civil', desc: 'Emergencias y desastres', num: '199' },
        { icon: '🐾', title: 'Tu veterinario', desc: 'Contacto habitual de tu mascota', num: 'Anota aquí' }
      ]
    },
    disclaimer: {
      title: 'Aviso importante',
      text: 'Este sitio es de carácter <strong>informativo y educativo</strong> y <strong>no sustituye</strong> la evaluación de un veterinario. Las orientaciones aquí descritas son medidas de primeros auxilios que deben aplicarse <strong>mientras llevas al animal a la atención profesional</strong>. En cualquier situación de emergencia, busca de inmediato una clínica veterinaria. Cada animal es único y puede reaccionar de forma diferente.'
    },
    footer: {
      desc: 'Una guía abierta y gratuita de primeros auxilios para perros y gatos. Hecha con cariño para ayudar a salvar vidas.',
      navTitle: 'Navegación',
      emergencyTitle: 'Emergencia',
      links: [
        { href: '#contatos', text: 'Bomberos — 193' },
        { href: '#contatos', text: 'Defensa Civil — 199' },
        { href: '#contatos', text: 'Veterinario 24h' }
      ],
      bottom1: 'PetSocorro. Proyecto de código abierto.',
      bottom2: 'Hecho con 💚 para quienes aman a los animales.'
    },
    ui: { backToTop: 'Volver arriba', menu: 'Abrir menú', langLabel: 'Idioma' }
  }
};
