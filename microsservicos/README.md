# MicroServiços

<br/>

## Aula 01 - Vinicius Soares

### SOA

**SOA** = Service Oriented Architecture

O que SOA não é?

* Não é uma tecnologia
* Não é um produto
* Não é um WebService
* Não é um software
* Não é um framework
* Não é uma metodologia
* Não é uma solução de negócio

**SOA** é uma abordagem arquitetural corporativa que permite a criação de serviços de negócio interoperáveis que podem ser facilmente reutilizados e compartilhados entre aplicações e empresas.

<br/>

Visão geral:

* Uma arquitetura baseada em reusabilidade com serviços bem definidos e providos por componentes de TI
* Seus componentes possuem baixo acoplamentos
* Provê plataforma, tecnologia e linguagens independentes

Benefícios:

* Desacoplamento
  - Integrações inteligentes, flexibilidade, alinhamento com negócio
* Reutilizaçõa de serviços
  - Produtividade, manutenibilidade
* Infraestrutura de plataforma
  - Padronização corporativa (Log, Governança, etc)


<br/>

### Monolito x Microservices

#### Monolito

**Monolito** = uma arquitetura onde todas as funções de negócio estão implmentadas em um único processo

<br/>

Vantagens:

* Fácil de desenvolver
* Fácil manutenção
* Apenas um deploy
* Tráfego de rede baixo

Problemas:

* Aumento da complexidade e tamanho ao longo do tempo
* Alta dependência de componentes de código
* Escalabilidade do sistema é limitada
* Falta de flexibilidade
* Dificuldade para colocar alterações em produção


O **monolito** tem vantagens e desvantagens. Uma das grandes _desvantagens_ é que é muito difícil **escalar** o sistema. Muito comum que cada cliente que você tiver, vai ter que replicar/duplicar o servidor, isso duplicando o custo.

<br/>

Quando mais clientes tiver, mais servidor vai ser preciso, mais caro vai ficar.


#### Microsserviço

**Microsserviço** = um serviço com um único propósito e que execute bem a sua tarefa dentro de um nível de granularidade, que suporte as mudanças do sistema que são consideradas importantes tanto em tempo de projeto quanto em tempo de execução. O foco principal é tentar construir software que pode se adaptar e isto só é possível de ser feito se as partes forem pequenas suficientes para se ajustar às diferenças nas mudanças de sua arquitetura.

<br/>

Vantagens:

* Manutenção e evolução dos serviços mais estáveis
* Serviços com baixo nível de acoplamento e interdependência
* Escalabilidade do sistema
* Redução de custos
* Flexibilidade de tecnologia
* Facilidade de colocar alterações em produção
* Resiliência
* Aumento da produtividade
* Implementação de entrega contínua
* Monitoramento e automação de processos
* Foco na entrega de valor ao cliente

Riscos:

* Aumento da complexidade da coordenação
* Comunicação entre os microsserviços
* Governança

Características:

* Um conjunto de pequenos autônoms que trabalham juntos. "Newman, Sam"
* Software modularizado em pequenos serviços que se comunicam através de uma forma padronizada
* Se comunicam através de uma API Restfull (HTTP / Json)

Características Técnicas:

* Out-of-process
  - Possibilidade de execução fora dos processos
* Chamadas remotas
  - Microsserviços são acessados por chamadas
* Independente de linguagem de programação
  - São agnósticos a linguagem de programação, ou seja, você pode ter serviços escritos em node, java, python, etc
* Baixo acoplamento
  - Você é dono somente do seu domínio de negócio. Não necessitando de outro serviço para gerar novas versões e ou evoluir seu produto
* Escalabilidade horizontal e vertical
  - Você pode aumentar o número de réplicas (scale horizontal) e/ou aumentar a capacidade computacional de seu serviço (scale vertical)


Características Organizacionais

* Agilidade
  - Trabalhando em conjuntos de negócio menores você garante agilidade no desenvolvimento de software
* Equipe pequena e focada
  - Utilizando o conceito de two-pizzas team você garante foco e produtividade do time de desenvolvimento
* Entregas rápidas
  - Por ser altamente testável, um microsserviço pode estar disponível rapidamente em produção com garantias de segurança e qualidade
* Combinação de tecnologias
  - Times podem ser multidisciplinares em tecnologias para desenvolver microsserviços


Práticas recomendadas

* Modele os serviços em torno de domínio da empresa
* Descentralize tudo. Equipes individuais são responsáveis por projetar e criar serviços. Evite compartilhar esquemas de dados ou códigos
* O armazenamento de dados deve ser privado para o serviço que é o proprietário dos dados. Use o melhor armazenamento para cada serviço e tipo de dados
* Os serviços comunicam-se por meio de APIs bem projetadas. Evite o vazamento de detalhes da implementação. As APIs devem modelar o domínio, não a implementação interna no serviço
* Evite acoplamento entre serviços. Causas de acoplamento incluem protocolos de comunicação rígidos e esquemas de bancos de dados compartilhados
* Descarregue preocupações abrangentes, como autenticação e terminação SSL, para o gateway
* Mantenha o conhecimento de domínio fora do gateway
* Os serviços devem ter um acoplamento flexível e alta coesão funcional
* Isole falhas. Use estratégias de resiliência para impedir que falhas em um serviço distribuam-se em cascata

Falácias

* A rede é confiável
* Latência zero
* A banda de internet é infinita
* A rede é segura
* A topologia de rede não muda
* Existe somente UM administrador
* Custo de transporte é zero
* A rede é homogênea

<br/>

### IaaS

**Infraestructure as a Service** significa entregar computação de infraestrutura sob demanda

* É um dos 3 modelos de serviços da computação em nuvem
* IaaS provê:
  - Servidores - computação e máquinas
  - Storage
  - Rede
  - Sistemas Operacionais

Características

* O usuário ao invés de adquirir software ou máquinas, espaço em data centers ou equipamentos de rede, ele praticamente aluga espaços para estes recursos em uma infraestrutura externa
* Iaas pode ser obtida em:
  - Nuvem pública
    + É considerada nuvem pública uma infraestrutura que consiste de recursos compartilhados, liberados sob demandas baseado na internet
  - Nuvem privada
    + Incorpora a maioria das features de uma nuvem pública, como virtualização, porém fica dentro de uma rede privada
  - Nuvem híbrida
    + Mistura de uma nuvem privada com uma nuvem pública, geralmente conectadas através de um túnel VPN
* Recursos são distribuídos como serviço
* Possibilita escalabilidade dinãmica
* Custos variados

Quando utilizar

* Quando a demanda for volátil, ou seja, você tem a possibilidade de diminuir e aumentar sua capacidade computacional de acordo com a necessidade
* Empresas sem capacidade de investimento em hardware
* Empresas com crescimento rápido e necessidade de escala rápida de sua infraestrutura
* Por estratégias de negócios rápidas

Quando não utilizar

* Quando a legislação não permitir guardar os dados fora da infraestrutura interna da empresa, ou a terceirização do armazenamento não é permitida
* Não é aconselhável quando os níveis de desempenho necessários para a aplicação tenham limite de acesso ao provedor da cloud

<br/>

### PaaS

**Platform as a Service**

* Pode ser considerada IaaS adicionando uma camada middleware e/ou componentes prontos
* Uma camada de abstração entre seu aplicativo em nuvem e seu provedor de IaaS
* É um ambiente de execução escalável e com alta disponibilidade para aplicações customizadas
* PaaS, é uma categoria de computação em nuvem que fornece uma plataforma e um ambiente para permitir que os desenvolvedores criem aplicativos e serviços pela Internet
* Fornece fundamentalmente escala elástica do seu aplicativo


Benefícios

* Infraestrutura na nuvem, escalável e com alta disponibilidade nativa
* Alta produtividade no desenvolvimento e manutenção de aplicações sob demanada
* Resumindo: baixo custo (TCO), confiabilidade e diminuição do tmepo de entrega


Vantagens

* Desenvolvimento 100% focado no negócio
  - Por direcionar a arquitetura lógica e administrar a arquitetura física de forma bem transparente, é possível desenvolover uma aplicação que vá demandar uma requisição por minuto ou 10 mil requisições por segundo da mesma forma, com o mesmo nível de preocupação do ponto de vista técnico: apenas a lógica de negócio
* Produtividade
  - O simples fato de não se gerenciar balanceamento de carga, replicação, cluster, instalando e configurando middlewares (servidores de aplicação, banco de dados, etc) já é um grande ganho. Além disso, os grandes fornecedores estão criando camadas de componentes prontos para uso, APIs e aceleradores de desenvolvimento nessas plataformas


Decisões

* A plataforma por trás do PaaS foi criada justamente para trazer benefícios e acelerar o desenvolvimento. Existe esforço dos fornecedores para deixar essa camada o mais padrão possível, mas ainda existe uma boa parte que é proprietária
* Ao adotar PasS, é natural que se adote também essa camada proprietária, caso contrário, poderia se trabalhar direto na infraestrutura
* É esta camada que permite dar um salto de produtividade e lidar com escalabilidade e disponibilidade de forma transparante
* A decisão a ser tomada é: menos custo e mais  entregas contra o efeito "lock-in" das aplicações construídas nessa abordagem


Restrições

* Plataformas são muito eficientes para construção de novas aplicações
* A migração de aplicações já existentes para elas é um processo custoso ou mesmo inviável (dependendo da tecnologia atual e da plataforma almejada)


<br/>

### The Twelve Factor for App

1. Base de Código
  - Somente uma base de código por aplicação
  - Vários deploys por aplicação
  - Desenvolvedor possui uma cópia local do repositório
2. Dependências
  - Declare e isole explicitamente as dependências
  - Uma aplicação 12 fatores nunca confia na existência implícita de pacotes em todo o sistema
  - Uma declaração de dependência explícita é que simplifica a configuração da aplicação para novos desenvolvedores
  - Na prática: tenha sempre um gerenciador de dependências configurado para seu projeto (maven, gradle, npm, pip, etc)
3. Configurações
  - A configuração de uma aplicação é tudo que é provável variar entre deploys (homologação, produção, desenvolvimento, etc)
  - Uma aplicação 12 fatores armazena configuração em variáveis de ambiente ou algum recurso de configuração distribuída
  - Necessitamos de facilidade na troca de ambientes sem ter a necessidade de alterar o codebase
4. Serviços de Apoio
  - Trate serviços de apoio como recursos anexados
  - Serviço de apoio é qualquer serviço que o App consuma via rede como parte de sua operação normal (banco de dados, mensageria, cache)
  - Não se deve fazer distinção entre serviços locais e terceiros
5. Construa, lance, execute
  - Uma base de código é transformada em um deploy através de 3 estágios
    + Construção: converte o repositório em um pacote executável
    + Lançamento: combina o artefato construído com a configuração do deploy
    + Execução: roda o app no ambiente de execução através dos processos específicos do app
  - O app 12 fatores utiliza separação estrita entre os estágios de construção, lançamento e execução
6. Processos
  - Você não deve introduzir estado em seus serviços; os aplicativos devem ser executados como um processo único e sem estado
  - Os processos dos Dozes Fatores são stateless e não compartilham nada. Esse fator está no núcleo da arquitetura de microsserviços
7. Vínculo de porta
  - Seu serviço deve estar visível para outras pessoas via ligação de alguma porta. Se você criou um serviço, verifique se outros serviços podem tratar isso como um recurso, se assim o desejarem. O aplicativo de doze fatores é completamente independente de outros recursos.
8. Concorrência
  - Divida seu aplicativo em pequenos pedaços, em vez de tentar aumentar seu aplicativo (executando uma única instância na máquina mais poderosa disponível). Aplicativos pequenos e definidos permitem a expansão conforme necessário para lidar com as cargas variadas. O processo deve ser dimensionado individualmente, com o fator 6 (sem estado), torna-se transparente este tipo de abordagem.
9. Descartabilidade
  - Os processos devem consumir menos tempo. 
  - Certifique-se de poder correr e parar rapidamente, e que você pode lidar com falhas. Sem isso, o dimensionamento automático e a facilidade de implantação e desenvolvimento estão sendo diminuidos. Você pode conseguir isso com contêineres
10. Paridade entre desenvolvimento e produção
  - Mantenha o desenvolvimento, a homologação e a produção o mais semelhante possível, para que qualquer pessoa possa utilizá-lo da mesma forma.
  - A implantação contínua precisa de integração contínua com base em ambientes correspondentes para limitar desvios de erros. Isso também incentiva implicitamente uma cultura DevOps na qual o Desenvolvimento e as Operações de Software são unificados
  - A conteinerização é uma grande ajuda aqui
11. Logs
  - Trate os logs como fluxos de eventos
  - O registro é importante para validar os erros e também verificar a ubtegridade geral do seu sistmea. Ao mesmo tempo, seu aplicativo não deve se preocupar com o armazenamento dessas informações.
  - Os logs devem ser tratados como fluxo contínuo capturados e armazenados por um serviço separado
12. Processos Administrativos
  - Execute tarefas administrativas: gerenciamento como processos pontuais - tarefas como migração de banco de dados ou execução de scripst pontuais no ambiente
  - Para evitar mexer com o banco de dados, use as ferramentas criadas ao lado do aplicativo e isole completamente sua aplicação


<br/>

### Aplicações Cloud Native

Definição - CNCF

* Containerizado
* Gerenciado dinamicamente
* Orientado a microsserviços
  - Automação
  - Registro e Descoberta
  - Rastreamento distribuído / Observabilidade
* Cloud
  - Elasticidade
  - Modelo on-demand

Definição - Pivotal

* DevOps
  - Processos
  - Ferramentas
  - Cultura
* Entrega contínua
  - Automação
* Microsserviços
  - Automação
  - Registro e Descoberta
  - Rastreamento distribuído / Observabilidade
  - Anti-fragilidade / Engenharia de caos
* Bosh
  - Suporte a múltiplas clouds (evitar ficar preso a um provider)
  - Separação clara entre sistemas
  - Provisionamento rápido
  - Escalabilidade
  - Monitoramento de saúde
  - Controle de falhas
  - Deploy canário

Quando falamos sobre _Cloud Native_ falamos sobre **Abstrações**. <br/>
Não estamos falando sobre **Kubernetes** ou **Containers**. <br/>

Características

* Arquiteturas cloud-native aprimoram nossa capacidade de praticar DevOps e Entrega Contínua, e elas exploram as características da infraestrutura na nuvem.
* "Cloud-native" é um adjetivo que descreve as aplicações, arquiteturas, plataformas / infraestrutura, e processos que, em conjunto, tornam-se "econômico" trabalhar de forma a melhorar nossa capacidade de responder rapidamente às mudanças e reduzir a imprevisibilidade.
* Arquiteturas cloud-native são definidas tendo as seguintes qualidades
  - Modularidade (através de Microservices)
  - Capacidade de observação
  - Implementabilidade
  - Testabilidade
  - Descartabilidade
  - Substituível
  - Criada para ser escalável
  - Tolerante a falhas
  - Decomposto em serviços
  - Envia o máximo trabalho para a plataforma se possível
  - Automatizado


### Conteineres

Por que os conteineres são bons para microserviços?

* Projetado para executar um aplicativo por conteiner
* Separação natural da carga de trabalho
* Muito leve
* Ótimo para dimensionar rapidamente
* Melhor uso de recursos
* Os conteineres compartilham o SO host e, quando apropriado, Binários e bibliotecas
* Fomatos padrão de conteiner, como o Docker, são distribuições cruzadas entre linux compatível
* Incrivelmente fácil de mover sua carga de trabalho
* Equilibra melhor os recursos do sistema
* Permite que os desenvolvedores trabalhem em um ambiente de produção simulado
* Remove o problema "funcionou na minha máquina"

#### Docker

O que é?

* Tecnologia Open Source que permite criar, executar, testar e implamtar aplicações distribuídas dentor de containers de software.
* Ela permite que você empacote um software de uma forma padronizada para o desenvolvimento, contendo tudo que é ncessário para a execução: código, runtime, ferramentas, bibliotecas, etc.
* Docker permite que você implante aplicações rapidamente, de modo confiável e estável, em qualquer ambiente

Alguns números

* Existem mais de 500 mil aplicações Dockerizadas, um crescimento de 3100% ao longo de 2 anos
* Mais de 4 bilhões de containers já foram puxados até hoje
* Docker é apoiado por uma grande e crescente comunidade de colaboradores e usuários
* A adoção do Docker aumentou mais de 30% no último ano
* Cerca de 30% dos containers Dockers estão rodando em produção
* 29% das empresas que já ouviram falar em Docker planejam usá-lo

Funcionamento

* A parte cliente fala com o Docker daemon, que faz o trabalho pesado de construção, execução e distribuição de seus containeres e imagens Docker, também controla os recursos executados.
* O cliente Docker e Docker Daemon, podem ser executados no mesmo sistema, também é possível conectar um cliente Docker a um Docker Daemon remoto.
* O cliente Docker e Daemon se comunicam através de uma API REST, através de sockets UNIX ou uma interface de rede, para execuções de comandos ou scripts


<br/>

## Aula 02 - Vinicius Soares

### Maturidade com cloud native

* Cloud native é muito novo e a maioria das empresas não têm experiência para navegar por conta própria. É muito fácil e caro cometer erros.
* A matriz de maturidade de soluções de cloud avalia a disponibilidade da nuvem em nove áreas cruciais de transformação, tanto técnicas quanto centradas no ser humano
* Os resultados definem e descrevem onde você está agora - e mostram para onde ir a partir daqui
* As empresas podem gerar enorme crescimento econômico e valor comercial, fornecendo serviços ou aplicativos baseados na nuvem: Instagram, Uber, WhatsApp, Netflix, Twitter - a ainda pequenas empresas surpreendentemente (se relacionarmos o número modesto de funcionários dessas empresas em seu crescimento econômico notável) cujos serviços são usados e distribuídos com frequência com cloud computing
* No entanto, mesmo um modelo de negócios de crescimento rápido deve ter consequências e dependências a longo prazo, por isso maturidade em cloud é fator principal para escalar negócios, arquiteturas e usuários
* Por isso segundo OPEN DATA CENTER ALLIANCE possuímos alguns passos para fazer nossa passagem e maturidade num modelo de maturidade de nuvem

| Nível | Maturidade      | Critério |
| ----- | --------------- | -------- |
|   3   | Cloud Native    | - Transferível ente provedores de infraestutura em tempo de execução e sem interrupção do serviço. - Dimensionar dentro/fora automaticamente com base em estímulos de requisições e volumetria. |
|   2   | Cloud Resilient | - Estado é isolado em um mínimo de serviços. - Não afetado por falhas de serviço dependentes. - Infraestrutura independente. |
|   1   | Cloud Friendly  | - Composto por serviços vagamente acoplados. - Os serviços podem ser descobertospelo nome. - Os componentes são projetados para padrões de nuvem. - A computação e o armazenamento são separados. |
|   0   | Cloud Ready     | - Operado em infraestrutura virtualizada. - Criação das instâncias ou imagens por script. |


<br/>

### Particionamento de Serviços

#### Domain Driven Design

O que é?

* Fundamentado na experiência de mais de 20 anos de Eric Evans no desenvolvimento de sistemas, o DDD é uma abordagem que reúne um conjunto de boas práticas, padrões, ferramentas e recursos da orientação a objetos que têm como objetivo a construção e desenvolvimento de sistemas de acordo com o domínio e regras de negócio do cliente.
* Além disso, questões relacionadas ao processo de desenvolvimento, como a necessidade de um estreito relacionamento entre a equipe de programadores e os especialistas do domínio, também são tratadas pela abordagem.

Características

* O principal conceito do DDD é o modelo
* O modelo expressa o domínio e negócio do cliente e pode ser criado utilizando desenhos, fluxogramas, diagramas, etc
* O importante é que ele represente o negócio do cliente
* Como principais componentes do DDD, podemos listar: a linguagem onipresente (ubíqua), a arquitetura em camadas e os padrões
* É uma abordagem de desenvolvimento de software que reúne um conjunto de conceitos, princípios e técnicas cujo foco está no domínio e na lógica do domínio com o objetivo de criar uma Domain Model
* Significa desenvolver software de acordo com o domínio relacionado ao problema que estamos propondo resolver
* O foco da abordagem é criar um domínio que "fale a língua" do usuário usando o que é conhecido como linguagem Ubíqua

Modelo

* O modelo é evolutivo: a cada iteração entre especialistas de domínio e a equipe técnica, o modelo se torna mais profundo e expressivo, mais rico, e os desenvolvedores transferem essa fonte de valor para o software
* Assim, o modelo vai sendo gradualmente enriquecido com a expertise dos especialistas do domínio destilado pelos desenvolvedores, fazendo com que o time ganhe cada vez mais insight sobre o negócio e que esse conhecimento seja transferido para o modelo (para o código) através dos blocos de construção do DDD.
* Quando novas regras de negócio são adicionadas e/ou regras existentes são alteradas ou removidas, a implementação é refatorada para refletir essas alterações do modelo no código.
* No final, o modelo (que em última instância será o software) vai expressar com riqueza de conhecimento o negócio.

Vantagens

* O código fica menos acoplado e mais coeso
* O negócio é melhor compreendido por todos da equipe, o que facilita o desenvolvimento.
* Alinhamento do código com o negócio
* Favorecer reutilização
* Mínimo de acoplamento
* Independência de Tecnologia

#### DDD e Event Storming

O que é?

* Event Storming é uma técnica de design rápido que engaja especialista do domínio de negócios com desenvolvedores para que alcancem um ciclo rápido de aprendizagem (aprender o máximo possível no menor tempo possível)
* Segundo Martin Flowler - Bounded Context (Contexto limitado) é um padrão central no design orientado a domínio
* É o foco da seção de design estratégico da DDD que trata de lidar com grandes modelos e quipes. O DDD lida com modelos grandes, dividindo-os em diferentes contextos limitados e sendo explícito sobre suas inter-relações

Etapas

* Eventos de domínios
  - Use eventos de domínio para implementar explicitamente os efeitos colateriais de alterações em seu domínio. Em outras palavras, e usando terminologia DDD, use eventos de domínio para implementar explicitamente efeitos colaterais entre várias agregações
  - Opcionalmente, para melhor escalabilidade e menor impacto em bloqueios de banco de dados, use consistência eventual entre agregações dentro do mesmo domínio.
  - Um evento é algo que ocorreu no passado. Um evento de domínio é algo que ocorreu no domínio que você deseja que outras partes do mesmo domínio (em processo) tenham conhecimento. As partes notificadas geralmente reagem de alguma forma ao eventos
  - Um benefício importante dos eventos de domínio é que os efeitos colaterais podem ser expressos explicitamente
  - Em resumo, eventos de domínio ajudam você a expressar, explicitamente, as regras de domínio, com base na linguagem ubíqua fornecida pelos especialistas do domínio. Os eventos de domínio também permitem uma melhor separação de interesses entre classes dentro do mesmo domínio.
  - É importante garantir que, assim como uma transação de banco de dados, todas as operações relacionadas a um evento de domínio sejam concluídas com êxito ou nenhuma delas seja

* Comandos de domínio
  - Nesta etapa, você muda da análise do domínio para os primeiros estágios do design do sistema
  - Até esse momento, você está simplesmente tentando entender como os eventos no domínio se relacionam - é por isso que a participação de especialistas em domínios é tão crítica
  - No entanto, para criar um sistema que implemente o processo de negócios em que você está interessado, é necessário passar à questão de como esses eventos ocorrem
  - Os comandos são o mecanismo mais comum pelo qual os eventos são criados
  - A chave para encontrar comandos é fazer a pergunta: "Por que esse evento ocorreu?"
  - Nesta etapa, o foco do processo passa para a sequência de ações que levam a eventos
  - Seu objetivo é encontrar as causas pelas quais os eventos registram os efeitos. Os tipos de gatilhos de eventos esperados são:
    + Um operador humano toma uma decisão e emite um comando
    + Algum sistema ou sensor externo fornece um estímulo
    + Um evento resulta de alguma política - processamento tipicamente automatizado de um evento precursor
    + A conclusão de algum período determinado de tempo decorrido
  - Outra parte importante do processo que se torna mais detalhada nessa etapa é a descrição de politicas que podem acionar a geração de um evento a partir de um evento anterior (ou conjunto de eventos)
  - Avalie se o elemento de dados é uma entidade comercial principal, identificada exclusivamente por uma chave, suportada por vários comandos
  - Tem uma vida útil ao longo do processo de negócios. Isso levará ao desenvolvimento de uma análise do ciclo de vida da entidade
  - Esse primeiro nível de definição de dados ajuda a avaliar o escopo e a responsabilidade do micro serviço à medida que você começa a ver pontos em comum emergindo dos dados usados entre vários eventos relacionados
  - O comando pode se tornar uma operação de micro serviço exposta via API
  - Durante o processo, é comum identificar que um comando pode gerar vários eventos

* Agregações
  - Agregação é um padrão no DDD
  - Um agregado DDD é um cluster de objetos de domínio que podem ser tratados como uma única unidade
  - Um exemplo pode ser um pedido e seus itens de linha, esses serão objetos separados, mas é útil tratar o pedido (junto com seus itens de linha) como um único agregado
  - Um agregado terá um de seus objetos componentes como a raiz agregada. Quaisquer referências externas ao agregado devem apenas ir para a raiz agregada
  - A raiz pode assim garantir a integridade do agregado como um todo
  - Agregados são o elemento básico da transferência de armazenamento de dados - você solicita carregar ou salvar agregados inteiros. As transações não devem cruzar fronteiras agregadas
  - As vezes, os agregados DDD são confundidos com as classes de coleção (lista, mapas, etc). Agregados DDD são conceitos de domínio (ordem, visita à clínica, lista de reprodução), enquanto as coleções são genéricas
  - Um agregado geralmente contém coleções múltiplas, junto com campos simples
  - O termo "agregado" é comum e é usado em vários contextos diferentes (por exmeplo UML), caso em que não se refere ao mesmo conceito que um agregado DDD
  - Os aggregates são a parte do sistema que recebem os comandos e que geram os eventos, eles são os objetos que armazenam os dados e são modificados pelos comandos
  - Aplicativos tradicionais têm usado frequentemente transações de banco de dados par aimpor a consistência
  - Em um aplicativo distribuído, no entanto, isso muitas vezes não é viável
  - Uma única transação empresarial pode abranger vários repositórios de dados, ser demorada ou envolver serviços de terceiros
  - Por fim, cabe ao aplicativo, não à camada de dados, impor as variáveis necessárias para o domínio. É isso que as agregações destinam-se a modelar
  - Pode-se utilizar o nome entidade ou dado quando for falar sobre Aggregate

* Limtes
  - Bounded Context é um padrão central no design orientado a domínio
  - É o foco da seção de design estratégico da DDD que trata de lidar com grandes modelos e equipes
  - O DDD lida com modelos grandes, dividindo-os em diferentes contextos limitados e sendo explícito sobre suas inter-relações
  - A medida que você tenta modelar um domínio maior, fica progressivamente mais difícil criar um único modelo unificado
  - Diferentes grupos de pessoas usarão vocabulários sutilmente diferentes em diferentes partes de uma grande organização
  - A precisão da modelagem rapidamente se depara com isso, muitas vezes levando a muita confusão. Normalmente, essa confusão se concentra nos conceitos centrais do domínio
  - Contextos limitados têm conceitos não relacionados (como um tíquete de suporte existe apenas no contexto de suporte ao cliente), mas também compartilham conceitos (como produtos e clientes)
  - Contextos diferentes podem ter modelos completamente diferentes de conceitos comuns, com mecanismos para mapear entre esses conceitos polissêmicos para integração
  - Vários fatores traçam limites entre contextos
  - Normalmente, a dominante é a cultura humana, já que os modelos agem como linguagem onipresente, você precisa de um modelo diferente quando a linguagem nmuda
  - Você também encontra vários contextos no mesmo contexto de domínio, como a separação entre modelos de banco de dados relacional e na memória em um único aplicativo
  - Esse limite é definido pela maneira diferente como representamos os modelos
  - Podem estar relacionados à divisões departamentais
  - Podem ser diferentes visões que os especialistas do negócio possuem sobre o mesmo conceito
  - Agregadores que são importantes
  - Mapear eventos que "naveguem" entre os domínios

<br/>

### Comunicação entre os serviços

"HTTP é o padrão de comunicação no microservices" - _Martin Fowler_ <br/>
"Os serviços devem ser assíncronos" - _Jonar Bonér_ <br/>

<br/>

Características

* Síncrona
  - Espera resposta
  - Comunicação em tempo real
  - Balanceador de carga a nível de infraestrutura
  - Tratamento de erros pode ser pelo status do http
  - REST, SOAP, CDI

* Assíncrono
  - Não espera resposta
  - Comunicação entre os dados pode ter "delay" entre as estruturas
  - Balanceador de carga pode ser uma fila
  - Possibilidade de Service Discovery / Message broker
  - Tratamento de erros pode ficar no gerenciador da fila
  - Em caso de erros, o gerenciador de mensagens pode tratar o reenvio
  - Mensagens, Eventos, Replicações de base


#### Comunicação orientada a eventos

Características

* Mudanças de estado
* Dispare e esqueça
* Atores de eventos (consumidores x produtores)
* Acontecimentos no passado
* Estados imutáveis
* Diminui acoplamento entre aplicações
* Processos assíncronos
* Encaixa perfeitamente patterns (CQRS / DDD)
* Reprodução de estados
* Segundo Martin Fowler, 4 temas estão sempre presentes:
  - Event Notification
  - Event-carried state transfer
  - Event Sourcing
  - CQRS


Quando utilizar

* Arquitetura distribuída
* Arquitetura Microsserviços
* Volumetria dos dados
* Responsividade
* Escalabilidade

Benefícios

* Suporte a demanda de negócio com melhor serviço
  - menos espera, sem processos batch
* Sem integração ponto a ponto
  - dispara e esquece
* Possibilita grandes performances
  - uso de brokers poderosos (Kafka)

**Padrões de mensagens**: coreografia x orquestração <br/>

##### Orquestração

* Processo sincronizado de comunicação
* Possui uma lógica na sequência de eventos
* Existe um ponto de partida e chegada
* Você sabe exatamente o resultado ao final da execução
* Acoplamento apertado
* Confiança em APIs RESTFull

Vantagens

* Acoplamento de serviço solto para agilidade e tolerância a falhas
* Desenvolvimento mais rápido e ágil
* Aplicações mais consistentes e eficientes

Desvantagens

* O controlador das chamadas precisa se comunicar diretamente com cada serviço e aguardar a resposta de casa um deles. Agora que essas interações estão ocorrendo na rede, as invocações demoram mais e podem ser afetadas pela disponibilidade da red e do serviço que está sendo invocado
* Em ambientes menores, isso pode funcionar muito bem, mas as coisas desmoronam quando você está falando de centenas ou mesmo milhares de microsserviços. Você basicamente criou um aplicativo monolítico distribuído que é mais lento e quebradiço do que os do passado! Assim como um maestro perderia sua capacidade de gerenciar efetivamente uma orquestra maciça, porque cada músico agurada atenção individual, não é viável solicitar a um serviço de controle para gerenciar tantos microsserviços


##### Coreografia

* Fluxos de longa duração
   - Coreografia pode ter um longo fluxo de ações a serem realizadas. Referindo-se ao termo "longa duração", queremos dizer que pode levar minutos, horas ou até dias até que o processamento seja concluído
* Colaboraçãõ de eventos
  - O ponto central da ideia de colaboração de eventos é que todos os microsserviços publicarão eventos quando algo relevante para o negócio acontecer dentro deles. Outros serviços podem se inscrever nesse evento e fazer algo com ele, por exemplo armazenar as informações associadas de forma ideal para seus próprios fins.
* Transformação de comando de evento
  - Por definição, um evento visa informá-lo sobre um fato relevante que ocorreu e que algum outro serviço pode estar interessado. Mas, no momento em que exigimos que um serviço acompanhe um evento, usamos esse seriço como se tivesse o significado semântico de um comando. A consequência disso: acabamos com o acoplamento mais apertado do que o necessário


##### Sagas

* Uma saga é uma sequência de transações locais. Cada serviço em uma saga realiza sua própria transação e publica um evento. Os outros serviços ouvem esse evento e executam a próxima transação local. Se uma transação falhar por algum motivo, a saga também executa transações de compensação para desfazer o impacto das transações anteriores
* Quando um usuário faz um pedido em um serviço de delivery, pode existir esta sequência de ações
  - O serviço de pedidos de commida cria um pedido. Neste ponto, o pedido está em um estado PENDENTE. Uma saga gerencia a cadeia de eventos
  - A saga entra em contato com o restaurante através do serviço do restaurante.
  - O serviço do restaurante tenta fazer o pedido no restaurante escolhido. Depois de receber uma confirmação, ele envia uma resposta
  - A saga recebe a resposta. E dependendo da resposta, ele pode aprovar o pedido ou rejeitá-lo.
  - O serviço de pedido de comida altera o estado do pedido. Se o pedido fosse aprovado, informaria o cliente com os próximos detalhes. Se rejeitado, também informará o cliente com uma mensagem de desculpas.

Tipos

* Saga baseada em Orquestração
  - Nessa abordagem, existe um orquestrador Saga que gerencia todas as transações e direciona os serviços participantes para executar transações locais com base em eventos. Este orquestrador também pode ser considerado um SAGA MANAGER
* Saga baseada em Coreografia
  - Nesta abordagem, não há orquestrador central. Cada serviço participante da Saga realiza suas transações e publica eventos. Os outros serviços atuam sobre esses eventos e realizam suas transações. Além disso, eles podem ou não publicar outros eventos com base na situação de negócio

<br/>

## Aula 03 - Luis Fernando Planella


### Introdução