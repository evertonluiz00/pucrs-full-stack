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

<br/>

## Aula 02 - Fabrício Veronez

<br/>

## Aula 03 - Marco Aurélio Souza Mangan

