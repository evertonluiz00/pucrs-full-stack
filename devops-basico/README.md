# DevOps Básico


<br/>

## Aula 01 - Fabrício Veronez


**Dev**
* Conhece profundamente programação
* Tem como objetivo entregar novos recursos
* Conhecimento mínimo ou nulo de infraestrutura
* Não tem contato com o processo de execução do software em um ambiente de produção

**Ops**
* Conhece profundamente infraestrutura
* Tem como objetivo manter a solução estável
* Conhecimento mínimo ou nulo de programação
* Não tem contato com o processo de desenvolvimento e compilação do software

**DevOps**
* Interesses em comum, foco no produto
* Comunicação ágil e simplificada
* Oobjetivo é sempre resolver o problema e aprender com ele
* 3 maneiras: 
  - Fluxo
    + Análise e otimização dos processos
    + Inclusão de testes
    + Integração contínua e deploy contínuo
    + Entregas de baixo risco
  - Feedback
    + Implementar e coletar métricas
    + Observabilidade
    + Testes A/B
    + Feedback dos resultados para replanejamento
  - Aprendizado Contínuo e Experimentação
    + Aprender com erros
    + Experimentação controlada
    + Disseminar o conhecimento e padronizar o que dá certo

<br/>

**Quando você for construir uma aplicação, você tem que pensar nela como algo stateless, você não tem que armazenar nada dentro dela.**

<br/>

**Twelve Factor Apps**

Conjunto de fatores garantindo a criação de aplicações como serviço com grande eficiência

* Utilizar formatos declarativos para configuração de ambinetes para facilitar automação
* Garantir a maior portabilidade possível entre ambientes
* Ter compatibilidade com plataformas de nuvem, sem depender de servidores e administração de sistemas
* Minimizar o impacto de migração entre ambientes de desenvolvimento e produção
* Ser escalável sem alterações significativas

Os 12 fatores associados ao Twelve Factor Apps

* 01 - Base de Código (Codebase)
  - Cada aplicação possui uma base de código única e centralizada. Todos os deploys são reflexos da base de código.
* 02 - Dependências (Dependencies)
  - Declare as dependêcnias das aplicações de forma explícita com gerenciadores de pacotes
* 03 - Configurações (Config)
  - Armazene as configurações no ambiente
* 04 - Backing services (Serviços de apoio)
  - Trate serviços como recursos
* 05 - Construa, lance, execute (Build, release, run)
  - Separe os estágios de build e release dos projetos
* 06 - Processos (Processes)
  - Execute a aplicação como um ou mais processos que não armazenam estado
* 07 - Víncula de Portas (port binding)
  - Utilizar port binding para expor serviços
* 08 - Concorrência (Concunrrency)
  - Escale através de processo modelo
* 09 - Descartabilidade (Disposability)
  - Processos com rápida inicialização e encerramento gracioso
* 10 - paridade entre desenvolvimento e produção (Dev/prod parity)
  - Mantenha os ambientes de desenvolvimento, homologação e produção o mais similares possível
* 11 - Logs (logs)
  - Trate os logs como fluxos de eventos
* 12 - Processos administrativos (Admin process)
  - Rode tarefas de administração/gestão em processos pontuais


### Versionamento de Código

Utilizar repositório de código para o desenvolvimento (Git / GitHub)


**SSH**: Trata-se de uma forma eficiente de credenciamento ou atenticação entre um determinado ambinete e o usuário que o utiliza. O SSH fornece um canal seguro sobre uma rede insegura em uma arquitetura cliente-servidor, e é muito usado no login remoto de utilizadores a sistemas de computadores.



### Containers

**Todos os processos da minha etapa de criação de ambiente e execução de aplicação serão feitos em containers**

Características:

* Isolamento entre processos
* Controle sobre os processos
* Idempotência
* Portabilidade
* Confiabilidade de comportamento


Imagem x Container

* A imagem é o elemento base para criar um container
* Todo container tem como origem uma imagem
* A imagem é o projeto de execução do container
* Analogia: A imagem é a classe enquanto o container é o objeto da classe criado


#### Docker

[Docker - Home](https://www.docker.com/)

<br/>

[Docker - Docs](https://docs.docker.com/)

```
// criação de container
docker container run hello-world

// lista os containers ativos em execução
docker container ls

// lista todos os containers
docker container ls -a

// lista as imagens
docker image ls

// excluir container
docker container rm id_container
```


<br/>

## Aula 02 - Fabrício Veronez

**A base para a criação de uma imagem é o dockerfile.**

Com o dockefile você consegue criar a sua imagem em qualquer lugar que crie imagens docker, e crie imagens de container baseadas em dockerfile.

* Consegue criar automações para criação de imagens
* Garante que imagem será sempre criada da mesma maneira

Criação do Dockerfile
```Dockerfile
FROM ubuntu
RUN apt update && apt install net-tools --yes
RUN apt install curl --yes
```

Criação do .dockerignore
```
node_modules
```

```
// comando para criar a imagem do dockerfile
docker build -t nome_imagem -f Dockerfile .
docker build -t namespace/repositorio:tag -f Dockerfile .
```

```
// criar container com base na imagem criada
docker container run -d -p 8080:8080 evertonluiz00/conversao-temperatura:latest
```


**Algumas opções de uso no Dockerfile**

* FROM: inicializa o build de uma imagem a partir de imagem base
* RUN: executa um comando
* LABEL: adiciona metadados a imagem
* CMD: define o comando e/ou parâmetros padrão
* EXPOSE: define que o container precisa expor a porta em questão
* ARG: define um argumento pra ser usado no processo de construção
* ENV: define variáveis de ambiente
* ADD: copia arquivos, diretórios ou arquivos remotos, e adiciona ao sistema de arquivos da imagem
* COPY: copia arquivos ou diretórios, e adiciona ao sistema de arquivos da imagem
* ENTRYPOINT: ajuda você a configurar um container que pode ser executado como um executável
* VOLUME: define volumes que devem ser definidos
* WORKDIR: define o seu diretório corrente


**Docker Hub**

Serve para distribuir a imagem criada.

<br/>

[Docker - Hub](https://hub.docker.com/)

<br/>

O nome da imagem criada deve ser constituído por:
* namespace/repositorio:tag(versao)



### Introdução à Pipeline de CI e CD

Pipeline é um conjunto de etapas realizadas sequencialmente. Cada etapa é validada e a próxima somente é realizado caso a atual tenha sucesso.

**CI (Continuous Integration)**

A integração contínua uma vez ligada ao processo de commit e a parte de software, está muito mais próxima do desenvolvedor.
O processo de integração contínua termina na geração da release

**CD (Continuous Deploy)**

A implantação é a fase do ciclo de vida de um software que corresponde à passagem do software para a produção.
A liberação, a instalação, a ativação e a desativação são as principais atividades ou etapas do deploy.
O processo inicia através da geração da release


#### Github Actions

* Workflow
* Events
* Jobs
* Steps
* Actions
* Runners

<br/>

[Arquivo yml - parametrização do workflow a partir do commit](https://github.com/evertonluiz00/conversao-temperatura/blob/main/.github/workflows/main.yml)


<br/>

## Aula 03 - Marco Aurélio Souza Mangan

Repositórios da PetClinic

[PetClinic J2EE](https://github.com/Jakarta-EE-Petclinic/petclinic-javaee7)
<br/>

[PetClinic Rest](https://github.com/spring-petclinic/spring-petclinic-rest)
<br/>

[PetClinic Angular](https://github.com/spring-petclinic/spring-petclinic-angular)
<br/>


**DevOps**

* Definir, controlar e aprimorar os processos do ciclo de vida do software.
* Construir, testar, empacotar e implantar software e sistemas de forma segura e confiável.
* Ampliar a comunicação e integração de desenvolvedores e demais envolvidos.

**Preocupações**

* Construir (to build): o processo de gerar um sistema executável e testável a partir de código-fonte
* Empacotar (to package): combinar componentes relacionados em um único item implantável
* Implantar (to deploy): iniciar a etapa do ciclo de vida do software em que a operação acontece.


**Mudanças com DevOps**

* _left-shift_ ou _shift-left_: priorizar participação dos envolvidos ao aplicar atividades de garantia de qualidade, segurança, privacidade, desempenho, verificação e validação **mais cedo** no ciclo de vida.
* A **automação** produz registro de auditoria ao longo das etapas do ciclo de vida, o que inclui validação do software.
* Mudanças culturais: implantações pequenas, simples e automatizadas que cabem no dia-a-dia da equipe.
* Objetivos diversos: velocidade, inovação, escala...


**Competências técnicas**

* A. Utilizar ferramentas de gerência de configuração
* B. Administrar sistemas operacionais
* C. Adotar integração contínua
* D. Implantar registros de auditoria (logs)
* E. Aprimorar o monitoramento de execução
* F. Facilitar a configuração de senhas, credenciais e conexões
* G. Autorizar tarefas: construção, test, revisão, instalação
* H. [Aprimorar a segurança da aplicação. DevSecOps]


**Automação de tarefas**

* A automação reduz o tempo de executar a atividade e reduz a chance de erro
* A automação pressupõe que o conhecimento necessário nem sempre está disponível durante a realização da tarefa
* O roteiro de automação está sujeito à revisão, mehorias e pode ser transferido


**Resumo**

* DevOps é um método ou conjunto de práticas
* As competências técnicas básicas dependem do uso de ferramentas
* As ferramentas evoluem e existem muitas alternativas
* Procure perceber quais as possibilidades das ferramentas do retante da apresentação
* Priorize e adapte essas possibilidades aos seus projetos e localize nas suas ferramentas como realizar essas possibilidades


**Gerência de configuração**

* Gerência de versões e mudanças
  - Registra quem realizou mudanças no repositório
  - Permite recuperar configurações específicas, selecionando mudanças
  - Git, Github
  - [Git](https://git-scm.com/)
  - [Learn Git Branching](https://learngitbranching.js.org/)
* Gerência de dependências internas e automação de construção
  - Reduz a diferença de configuração de dependências
  - Gerência de dependências internas e automação de construção
  - Maven, Gradle, Npm, Yarn
* Gerência de pacotes
  - Instala programas executáveis
  - Parte da tarefa de administrar um computador
  - apt, homebrew, Windows Package Manager
  - [AptGet/HowTo](https://help.ubuntu.com/community/AptGet/Howto)

**Integração contínua**

* Processo recorrente de tentar combinar os diversos elementos da aplicação
* Primeiras tarefas são mover aplicação para fora do computador do desenvolvedor e combinar todas as configurações
* Github Actions, Jenkis, Travis


**Kent Beck sobre 10 práticas em Integração Contínua**

Kent Beck - Engenheiro de Software americano, é o criador da metodologia de programação extrema (extreme programming) e do desenvolvimento guiado por testes (TDD). Beck sistematizou algumas das principais práticas em integração contínua, como a manutenção de um repositório unificado, o incetivo à contibuição diária, entre outras.

* 1. Mantenha um repositório unificado
* 2. Automatize a construção
* 3. Automatize o teste da construção
* 4. Incentive todos a contribuir no produto, todos os dias
* 5. Cada contribuição executa teste de integração
* 6. Mantenha o build rápido
* 7. Teste em um ambinente igual ao de produção
* 8. Facilite a todos a obter um executável
* 9. Verifique que todos possam saber o que está acontecendo
*10. Por fim, automatize a implantação


**Entrega ou Implantação?**

* A Entrega Contínua tem por objetivo verificar que o sistema está pronto para a implantação.
* A Implantação Contínua tem o objetivo de colocar o sistema em produção.

* GitHub Actions


**Estudo de caso: Sonar**

* Avaliação estática de um conjunto de regras de verificação
* Automatiza a revisão de código que seria realizada por um programador experiente
* [Sonar](https://sonarcloud.io)


**Resumo**

* A integração contínua é uma prática que depende da adoção de práticas relacionadas, como a propriedade coletiva e a automação de testes
* A integração contínua sinaliza a possibilidade de combinar as contribuições dos diversos desenvolvedores em uma única entrega
* O resultado da integração pode ser implantado manualmente ou automaticamente


**Contêineres**

* Isolamente de serviços
  - Uma aplicação necessita de diversos serviços
  - A instalação e configuração de um serviço em um mesmo computador pode causar interferência em outros serviços instalados
  - Um contêiner pode ser utilizado para isolar serviços
  - Neste caso, um contêiner pode ser utilizado para isolar serviços
    + Exemplo: a aplicação necessita de um serviço de banco de dados
    + A imagem contém o serviço que a aplicação necessita
  - Ex: docker composer
* Empacotamento da aplicação
  - Implantar a aplicação em novo ambiente
  - Gerenciar a instalação de dependências da aplicação
  - A aplicação permanece em um contêiner
  - Caso existam serviços, podem ser isolados em seus próprios contêineres
  - Ex: a imagem da aplicação necessita de um serviço de banco de dados que foi isolado em outro contêiner
* Docker (ex: para Node.js)
  - Um processo do sistema operacional que executa restrito a um conjunto de recursos
  - Isolamento provido em parte por recursos do sistema operacional
  - docker run
* Servidores de aplicação (ex: para Java)
  - Um ambiente gerenciado que organiza serviços e dependências
  - A aplicação solicita recursos ao ambiente gerenciado
  - Java Enterprise Edition, Google Android

* [Docker Get Started](https://docs.docker.com/get-started)
* [Play with Docker](https://docker.com/101-tutorial)