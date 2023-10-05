
export const frontend = [
  {
    cadeira: "Introdução às Tecnologias Web",
    ano: "1",
    semestre: "2",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "O projeto Robot Turtles envolveu o desenvolvimento de um jogo de tabuleiro (já existente) que o objetivo passa por ensinar programação a crianças de 3 a 8 anos. Para além do desenvovimento do jogo foi também desenvolvido um site que contém informações sobre o jogo, regras, pontuações, tutoriais e outras informações relacionadas. O site foi criado usando HTML e CSS, enquanto o jogo em si foi desenvolvido em JavaScript e jQuery. O jogo inclui a geração aleatória do tabuleiro, movimento das tartarugas, cartas, eventos e suporte para múltiplos modos de jogo. A criatividade na implementação e a inclusão de funcionalidades adicionais foram incentivadas, como animações, sons e diferentes modos de jogo.",
        tecnologias: ["HTML", "CSS", "JavaScript", "jQuery"],
      },
    ],
  },
  {
    cadeira: "Portfólio",
    subtitle: "2023",
    projetos: [{ descricao: "Desenho e implementação, deste simples portfólio, com o propósito de reunir informações sobre o meu percurso académico e profissional, bem como outras informações complementares ao currículo.", tecnologias: ["JavaScript", "ReactJS", "MaterialUI", "HTML", "CSS"] }],
  },
];

export const backend = [
  {
    cadeira: "Programação I",
    ano: "1",
    semestre: "1",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "Com uma finalidade pedagógica foi desenvolvido um software que permitia gerir a atribuição de pedidos de ajuda, feitos por clientes, aos especialistas seus colaboradores. O software recebe um lista de especialistas e de pedidos não atribuídos, e devolve um plano de atendimento atualizando as informações dos especialistas após a distribuição dos pedidos.",
        tecnologias: ["Python 3"],
      },
    ],
  },
  {
    cadeira: "Programação II",
    ano: "1",
    semestre: "2",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "O conceito do projeto é igual ao da cadeira de Programação I, sendo que a única diferença é que foi seguida uma abordagem de Programação Orientada a Objetos.",
        tecnologias: ["Python 3"],
      },
      {
        descricao:
          "Este projeto envolveu o desenvolvimento de um software chamado 'relayStations' com uma finalidade pedagógica. O objetivo principal é calcular o tempo de transmissão de um sinal entre duas estações de transmissão num rede. O software recebe como inputs uma descrição da rede de estações, onde cada estação é caracterizada por um nome, potência, geração e conexões com outras estações. Para além disso, é sabido quais as estações específicas. O objetivo passa por calcular o tempo mais rápido possível, em milissegundos, que um sinal demora entre as duas estações. O cálculo tem em conta diversos parâmetros, como a potência das estações, as conexões diretas ou indiretas, e segue regras específicas com base nas potências das estações.",
        tecnologias: ["Python 3"],
      },
    ],
  },
  {
    cadeira: "Programação Centrada em Objetos",
    ano: "2",
    semestre: "1",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "O projeto foi dividido em três fases, com o objetivo de por em prática os conhecimentos adquiridos em Programação Centrada em Objetos. \n Na primeira fase era necessário criar uma função em Java que gera uma representação gráfica textual de dados numéricos. O projeto enfatiza a aplicação de conceitos como declaração de variáveis, atribuição de valores a variáveis, expressões, abstração procedimental (definição de métodos static e sua invocação), comandos condicionais (if e if-else), invocação de métodos da classe Math, ciclos (for, while e do-while), utilização de alguns tipos de dados não primitivos – String, Random, StringBuilder e arrays. A representação gerada é limitada a 20 valores e é destinada a fins didáticos e de visualização. \nNa segunda fase, para além das matérias já exercitadas na primeira fase, são exercitadas matérias como construção de classes que definem tipos de dados, relação cliente/fornecedor entre classes, a classe ArrayList, métodos/atributos de instância e de classe. Para isso usou-se o caso de uso de leilão de objetos variados, com características específicas. \nNa terceira e última fase foram postasm em prática matérias como interfaces, herança, classes abstratas e princípio 'programar para interfaces'. Para isso foi fornecido um diagram de classes em UML e o objetivo foi contruir vários interfaces e classes (abstratas e concretas).",
        tecnologias: ["Java"],
      },
    ],
  },
  {
    cadeira: "Sistemas Operativos",
    ano: "2",
    semestre: "1",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "O primeiro projeto passou por desenvolver o comando pwc que é uma versão do wc que conta o número de caracteres, palavras e linhas mas em paralelo, evolvendo a criação de processos/threads e a comunicação entre processos/threads. ",
        tecnologias: ["Python 3"],
      },
      {
        descricao:
          "O segundo projeto, passou por estender o comando pwc anteriormente desenvolvido, com algumas funcionalidades adicionais, evolvendo a sincronização de processos, manipulação de ficheiros e o tratamento de sinais, tempo e alarmes.",
        tecnologias: ["Python 3"],
      },
    ],
  },
  {
    cadeira: "Análise e Desenho de Software",
    ano: "2",
    semestre: "2",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "O primeiro projeto, denominado BancaDAmigos, teve como objetivo criar uma aplicação que permite a transferência virtual de dinheiro entre grupos de amigos, evitando custos de transferências bancárias em pequenas quantias. Os pagamentos são controlados por um Fiel Depositário e baseados na confiança entre amigos. Os casos de uso incluem o registo de utilizadores, formação de grupos, transferências de dinheiro virtual, pagamentos entre amigos e outros relacionados à gestão de grupos e contas virtuais. O projeto exigia a análise de requisitos, criação de casos de uso detalhados e artefatos de modelação, mas não exige implementação de código. Questões legais e de modelo de negócios também foram consideradas.",
        tecnologias: ["-"],
      },
      {
        descricao:
          "Já no segundo projeto, o objetivo passava pela implementação dos casos de uso mais relevantes da primeira parte. A implementação segue uma estrutura por camadas. Para além da implementação foi também fornecida uma classe JUnit que disponibilizava os testes para as classes relacionadas com os casos de uso implementados.",
        tecnologias: ["Java", "JUnit"],
      },
    ],
  },
  {
    cadeira: "Aplicações Distribuídas",
    ano: "2",
    semestre: "2",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "No primeiro projeto, o objetivo geral foi concretizar um gestor de pedidos simultâneos a recursos e processamento deste pedidos em exclusão mútua. O seu propósito é controlar o acesso a um conjunto de recursos partilhados num sistema distribuído, onde diferentes clientes podem requerer de forma concorrente o acesso aos recursos. Um recurso é bloqueado exclusivamente por um só cliente, mas está disponível para bloqueio até a um máximo de k bloqueios, ou seja, findo os k bloqueios permitidos o recurso fica inativo/indisponível para bloqueio. O gestor permite y recursos bloqueados em simultâneo. Nesta primeira fase o servidor aceita ligações de clientes, recebe e processa os pedidos, responde ao cliente, e termina a ligação. Na segunda fase, o objetivo passou por resolver quatro limitações existentes na primeira fase, relacionadas com a organização (das classes e ficheiros), desempenho (suporte a múltiplas ligações), fiabilidade (tratamento de erros e mensagens parciais) e validação (validação das mensagens recebidas e enviadas).",
        tecnologias: ["Python 3"],
      },
      {
        descricao:
          "No segundo projeto o objetivo foi desenvolver um serviçoi Web para gerir um sistema simplificado de classificação de albuns de música de utilizadores. Usando um estilo arquitetural REST e uma base de dados relacional. De forma a obter mais informação sobre os álbuns, autores e músicas, recorreu-se à API REST disponível no sportify, de forma a complementar a informação dada. Numa segunda fase, foi aumentado o desempenho, permitindo responder a múltiplos clientes, melhorada a autenticação, confidencialidade da comunicação e autorização, usando o protocolo SSL/TLS.",
        tecnologias: ["Python 3", "Flask", "SQL", "sqlite"],
      },
    ],
  },
  {
    cadeira: "Segurança Informática",
    ano: "3",
    semestre: "2",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "O projeto da cadeira pretendeu familiarizar os alunos com alguns problemas envolvido na programação de aplicações distribuídas seguras, nomeadamente a gestão de chaves criptográficas, a geração de sínteses seguras, cifras e assinaturas digitais, e a utilização de canais seguros à base do protocolo TLS. Numa primeira fase o objetivo passou por desenvolver a aplicação distribuída básica a ser executada numa sandbox. Na segunda fase foram adicionadas várias funcionalidade de segurança como: cifras, assinaturas, comunicação através de um protocolo seguro (TLS) e a gestão básica de certificados. Por fim, na terceira fase, foram configurados mecanismos de segurança ao nível do servidor, nomeadamente uma firewall e um sistema de deteção de intrusões.",
        tecnologias: ["Java", "iptables", "snort"],
      },
    ],
  },
  {
    cadeira: "Desenho e Análise de Algoritmos",
    ano: "1",
    semestre: "2",
    licenciatura: false,
    projetos: [
      {
        descricao:
          "Neste projeto o desafio proposto era o desenvolvimento de um otimizador de réplicas para um sistema de nuvem hierárquica com múltiplos data centers. O objetivo do otimizador passava por determinar onde replicar os dados de forma a minimizar os custo de deployment e de acesso. Para além do desenvolvimento do algoritmo, foi também realizada uma análise matemática pormenorizada da sua correção, utilização de memória e tempo, foi ainda identificado e explicado os inputs que resultavam no pior caso, no caso médio e no melhor caso em termos de performance, e foi também feita uma caracterização experimental do uso de memória e de tempo no pior e no médio caso.",
        tecnologias: ["Java"],
      },
    ],
  },
  {
    cadeira: "Computação em Nuvem",
    ano: "1",
    semestre: "2",
    licenciatura: false,
    projetos: [
      {
        descricao:
          "O projeto passou pela escolha de um dataset de dimensões consideráveis >1GB, Após isso foram escolhidos alguns casos de uso com base no dataset escolhido, e especificada uma API REST. Posteriormente, foi realizada a implementação baseada em microsserviços com recurso à framework Flask. Os diferente microsserviços foram colocados em containers, bem como feito automatizado o building e o deployment. Numa fase seguinte, os containers fora instalados num kubernetes cluster, e foi configuradas as políticas de escalabilidade, entre outros pormenores. Na quinta fase foi adicionado o padrão database per service e CQRS, o padrão circuit breaker, e o padrão application metrics. Por fim, foi testada a aplicação em diversos pontos, desde da segurança à performance, à otimização de custos, entre outros pontos relevantes.",
        tecnologias: [
          "Flask",
          "OpenAPI",
          "Swagger",
          "MongoDB",
          "PostgreSQL",
          "NGINX",
          "Docker",
          "Kubernetes",
          "Google Cloud Platform",
          "Locust",
          "Grafana",
          "Prometheus",
        ],
      },
    ],
  },
];

export const fullstack = [
  {
    cadeira: "Aplicações e Serviços na Web",
    ano: "2",
    semestre: "2",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "Neste projeto foi desenvolvida uma aplicação web com o objetivo de disponibilizar um platafoma que permitisse vender e comprar pratos de comida caseira, bem como outros requisitos diretamente ligados, por exemplo página de administração, mecanismo de autenticação, pesquisa de pratos, adicionar pratos, avaliar pratos e vendedores, chat, entre outros. Bem como a criação de webservices SOAP.",
        tecnologias: [
          "PHP",
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
          "Bootstrap",
          "MySQL",
        ],
      },
    ],
  },
  {
    cadeira: "Construção de Sistemas de Software",
    ano: "3",
    semestre: "1",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "Este projeto foi dividido em três partes. Uma primeira parte onde foi desenvolvida toda a camada de dados para uma aplicação de chat online, onde foi desenvolvido o programa respeitando a separação entre camadas, e aplicado o padrão Data Mapper, e usando uma hierarquia de interfaces/classes adequada optimizando assim a reutilização do código. Na segunda fase, foram implementadas as queries. Na terceira e última fases, foi realizada a camada de apresentação, com recurso a páginas JSP, e foi posto em prática também o uso de Beans.",
        tecnologias: ["Java", "Entidades JPA", "Páginas JSP"],
      },
    ],
  },
  {
    cadeira:
      "Projeto de Tecnologias de Informação | Projeto de Tecnologias de Redes",
    ano: "3",
    semestre: "2",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "Implementação de um sistema para a gestão de alojamento universitário. Foi feito todo o desenho da base de dados, a sua implementação, a implementação dos diversos serviços necessários para o bom funcionamento do sistema, bem como as interfaces do sistema. Este projeto contemplou um alargado conjunto de requisitos funcionais e não funcionais. Desde de painéis de administração, autenticação e registo, todas a tarefas relacionadas com o aluguer e gestão de alojamento universitário, requisitos de desempenho, de fiabilidade do sistema, de desenvolvimento, de segurança e de usabilidade.",
        tecnologias: [
          "Django",
          "JavaScript",
          "jQuery",
          "OpenStreetMap",
          "Figma",
          "GitHub",
          "HTML",
          "CSS",
          "Bootstrap",
        ],
      },
    ],
  },
  {
    cadeira: "Computação Móvel",
    ano: "1",
    semestre: "1",
    licenciatura: false,
    projetos: [
      {
        descricao:
          "Foi pedido que fosse desenvolvida uma aplicação para um dispositivo android, que fosse útil e inovadora, e que ao mesmo tempo desse para colocar em prática os diferentes tópicos abordados. Trabalhou-se com alguns dos seguintes tópicos: eventos, sensores, localização e mapas, e armazemento remoto (Firebase). A aplicação desenvolvida era bastante simples, e tinha como base fornecer um suporte digital para a gestão de treinos desportivos, usando por exemplo um tablet ou até mesmo um smartphone.",
        tecnologias: ["Java", "Android Studio", "Firebase"],
      },
    ],
  },
  {
    cadeira: "Aplicações na Web",
    ano: "1",
    semestre: "2",
    licenciatura: false,
    projetos: [
      {
        descricao:
          "O objetivo do projeto era o desenvolvimento de uma aplicações que permitisse uma equipa de inspeção de edificios, supervisionar trabalhos de manutenção em edifícios. Para isso a aplicação tinha que ser single-page e correr num browser, em diferentes tamanhos de ecrã, e usar uma base de dados NoSQL. Não foi desenvolvida uma app, mas sim um blueprint do projeto, focando assim na arquitetura da aplicação. Para isso foram definidos os back-end handlers, a API, os diferentes workflows, os business objects, os front-end handlers, os data bindings, um protótipo com, bootstrap dos diferentes ecrãs, os story spaces, e por fim foi realizado um blueprint do projeto.",
        tecnologias: [
          "Bootstrap",
          "OpenAPI",
          "E de forma superficial, através de conceitos e exemplos: Angular.js, Node.js e Express",
        ],
      },
    ],
  },
  {
    cadeira: "Internet das Coisas",
    ano: "1",
    semestre: "2",
    licenciatura: false,
    projetos: [
      {
        descricao:
          "O projeto teve como objetivo o desenvolvimento de um sistema de Internet das Coisas (IoT) para realizar a análise em tempo real de baterias. Existia um dataset com informações sobre os ciclos de carga e descarga das baterias. O projeto foi dividido em duas partes, uma onde são apresentados resultados da análise dos dados das baterias e uma outra parte onde é feita a previsão de tempo que falta para carregar ou descarregar a bateria. O objetivo final foi criar um sistema que possa monitorizar e prever o desempenho da bateria em tempo real.",
        tecnologias: ["Node-RED", "MQTT", "MongoDB"],
      },
    ],
  },
  {
    cadeira: "Dissertação/Projeto em Informática",
    ano: "2",
    semestre: "1/2",
    licenciatura: false,
    projetos: [{ descricao: "Desenho e implementação de uma plataforma IoT independente de domínio para suporte a serviços de aplicação. Para isso foi desenhada e implementada uma arquitetura baseada em microsserviços em que cada microsserviço tem um API RESTful, e que fornece os dados para o serviço de front-end realizado com ReactJS. ", tecnologias: ["Python 3", "Flask", "Docker", "MongoDP", "PostgreSQL", "JavaScript", "ReactJS", "MaterialUI", "HTML", "CSS", "Swagger"] }],
  },
];

export const ui = [
  
  {
    cadeira: "Interação com Computadores",
    ano: "2",
    semestre: "1",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "O projeto passou pelo desenvolvimento de uma interface para uma aplicação que visava revolucionar a gestão de serviços em hotéis, permitindo que os clientes controlem, façam reservas de serviços de forma digitral e centralizada. A aplicação oferece funcionalidades como reserva de cadeiras de piscina e jantares com chef, além de uma tarefa adicional que foi definida após a análise de requisitos (reserva de lugares de estacionamento). A interface foi projetada para fuincionar em dispositivos como smartphones. O objetivo foi de familiarizar os alunos com as diversas fases do design de interfaces pessoa-máquina, segundo uma perspetiva centrada nos utilizadores. Passou-se por diversas fases que são essenciais para o design, o levantamento de requisitos, a análise de requisitos de usabilidade, o design e construção de protótipos, e a sua avaliação.",
        tecnologias: ["-"],
      },
    ],
  },
  {
    cadeira: "Experiência de Utilização",
    ano: "1",
    semestre: "1",
    licenciatura: false,
    projetos: [
      {
        descricao:
          "Foi pedido que fosse desenhada uma interface para o SONAAR (Social Networks Acessible Authoring), que detetasse quando um utilizador publicasse uma imagem, e motivasse o utilizador a inserir uma descrição, e sugerisse uma ou mais descrições para o utilizador. A interface deveria de suportar pelo menos duas redes sociais, e para além de ser suportada no modo web, também funcionava em plataformas mobile, e para alem disso teve-se em conta outras funcionalidades que se consideraram importantes.",
        tecnologias: ["Figma"],
      },
    ],
  },
];

export const others = [
  {
    cadeira: "Conceção de Produto",
    ano: "2",
    semestre: "2",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "A ideia central do projeto era o alojamento universitário, mais concretamente uma plataforma de procura de alojamento universitário. Foram realizadas diversas tarefas relacionadas com a coceção de um produto, desde de pesquisa documental e enquadramento, realização de entrevistas, realização de mapas individuais (mapas de fluxo, de recorrência, culturais, de artefacto, físicos, etc.), mapa de afinidades, criação de personas, análise e especificação de requisitos, User Environment Design e protótipos de baixa e de alta fidelidade.",
        tecnologias: ["-"],
      },
    ],
  },
  {
    cadeira: "Planeamento e Gestão de Projeto",
    ano: "3",
    semestre: "1",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "No primeiro projeto, teve como objetivo principal planear e registar as atividades de um projeto de desenvolvimento de software, e ao mesmo tempo moptivar a aprendizagem de frameworks de desenvolvimento de aplicações web. Para isso, teve-se como produto uma aplicação web para o registo de tarefas realizadas por pessoas no âmbito de projetos. Foram realizadas tarefas de análise de frameworks, planeamento do projeto, indicando as tarefas e subtarefas, tempo estimado para as realizar e por quem, e os dias em que se iniciam.E por fim foi realizada a implementação do projeto. ",
        tecnologias: ["Microsoft Project", "Django"],
      },
      {
        descricao:
          "No segundo projeto o objetivo passou por planear o projeto de desenvolvimento de um sistema para a gestão de alojamento universitário. Tendo sido descrito o contexto e os objetivos do projeto, especificados os requisitos funcionais e não funcionais do sistema, descritos os dados que devem ser suportados pelo sistema, identificados os recursos humanos e ferramentas, calculado o esforço necessário para o projeto. Foi também incluido o modelo de processo de desenvolvimento de software, organização da equipa, descrição de work packages, suas tarefas, recursos associados e principais resultados, mapa de gantt e um plano de gestão de risco.",
        tecnologias: ["Microsoft Project"],
      },
    ],
  },
  {
    cadeira: "Aprendizagem Automática",
    ano: "1",
    semestre: "1",
    licenciatura: false,
    projetos: [
      {
        descricao:
          " O projeto passou pela análise de um conjunto de dados do spotify, que continha informações sobre faixas de música. E o objetivo passou por realizar duas tarefas, uma primeira que passava por um método de aprendizagem supervisionada, em que o objetivo era prever se uma música será um sucesso ou não e prever a valência discreta. E uma segunda tarefa, que passou por um método de aprendizagem não supervisionada, que o objetivo foi caracterizar as faixas.",
        tecnologias: ["Python 3", "Jupyter Notebooks"],
      },
    ],
  },
  {
    cadeira: "Análise e Gestão de Risco em Segurança Informática",
    ano: "1",
    semestre: "1",
    licenciatura: false,
    projetos: [
      {
        descricao:
          "Foi realizado um projeto de apreciação de risco, bem como foi preparado o esboço inicial para o plano de resposta a incidentes para uma empresa criada ficticiamente para o âmbito do projeto. Para isso foi realizado um relatório contendo diversos capítulos: Uma breve introdução, um estabelecimento do contexto, apreciação do risco, cenários de incidentes e preparação do centro de operações de segurança (SOC). No capítulo de apreciação do risco, foram apresentados resultados das várias etapas da apreciação do risvo de acordo com a ISO/IEC 27005:2011. Foram ainda usadas outras normas e referências para sustentar a metodologia e as opções apresentadas. Em particular, foram usadas como referências as normas ISO/IEC 27005:2011, ISO/IEC 27001:2013 e ISO 31000:2018.",
        tecnologias: ["-"],
      },
    ],
  },
  {
    cadeira: "Prospeção de Dados",
    ano: "1",
    semestre: "2",
    licenciatura: false,
    projetos: [{ descricao: "Este projeto envolveu a análise de um data set composto por dois ficheiros, de 1101 medicamentos e seus alvos biológicos. O objetivo passou por descobrir relações e padrões nos dados, como prever se uma molécula está ou não ativa num alvo específico, prever se uma molécula se liga a um conjunto de alvos e se, se ligará a outros, e identifcar grupos de moléculas com propriedades semelhantes.", 
    tecnologias: ["Python 3", "Jupyter Notebooks"] }],
  },
];


export const databases = [
  {
    cadeira: "Bases de Dados",
    ano: "2",
    semestre: "1",
    licenciatura: true,
    projetos: [
      {
        descricao:
          "Neste projeto foi descrito que era necessário criar uma base de dados para um sistema de informação para um dado caso de uso. Para isso foi descrito o caso, onde foi explicado todas as partes envolvidas e as relações entre as mesmas. Para isso foi pedido que se realizassem duas tarefas. Uma primeira onde foi desenhado o diagrama conceptual que modela o universo do discurso da forma mais minimalista possível, usando o modelo Entidade-Associação. Uma segunda tarefa onde era necessário contruir o esquema relacional correspondente ao diagrama conceptual usando os comandos SQL DDL.",
        tecnologias: ["SQL"],
      },
      {
        descricao:
          "No segundo projeto da cadeira, foi dada como referência um esquema relacional para o sistema de informação apresentado no primeiro projeto. Com base neste esquema relacional foi pedido que se traduzisse um conjunt de pedidoa à base de dados para interrogações SQL-DML.",
        tecnologias: ["SQL"],
      },
    ],
  },
  {
    cadeira: "Bases de Dados Avançadas",
    ano: "1",
    semestre: "1",
    licenciatura: false,
    projetos: [
      {
        descricao:
          "No projeto desta cadeira, foram fornecidos 5 ficheiros contendo um dataset bastante extenso, envolvendo 10k bandas, informações sobre os albuns, sobre os género e sobre os membros.Numa primeira fase, foi pedido que se especificasse duas operações de dados complexas que destacam as diferenças entre bases de dados relacionais e NoSQL. Foi também pedido a definição de um esquema relacional, criação das tabelas e implementadas as operações especificadas em ambos os sistemas. Numa segunda fase, o foco foi a confiabilidade e a escalabilidade, sendo assim, foi pedido que se implementasse as operações complexas em PL/pgSQL no PostgreSQL. Foi ainda testadas anomalias de concorrência e foi comparado o uso de bloqueios e de configurações de isolamento de transações. Na terceira, e última fase, o foco passou pela otimização e indexação. Foram otimizadas as consultas e operações desenvolvidas anteriormente, foram realizadas alterações no esquema e foi avaliado o impacto dessas otimizações.",
        tecnologias: ["PostgreSQL", "MongoDB"],
      },
    ],
  },

];