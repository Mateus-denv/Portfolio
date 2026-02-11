// === 2. LÓGICA DO MODAL ===
window.projectsData = {
    project1: {
        title: 'Voga Stock',
        tech: ['C', 'Lógica de Programação', 'Structs', 'Arrays e Strings'],
        description: 'Sistema de gerenciamento de estoque desenvolvido em linguagem C como projeto final do SENAI. Foram aplicados conceitos fundamentais de programação, como structs para representação dos produtos, funções para organização e reutilização do código, além de lógica de programação para validação de dados, controle de fluxo e operações de cadastro, edição, listagem e remoção de itens do estoque.',
        features: [
            'Cadastro, edição e exclusão de produtos',
            'Controle de entrada e saída de estoque',
            'Relatórios de produtos em baixa quantidade',
            'Sistema de busca e filtros',
            'Persistência de dados em arquivos'
        ],
        github: 'https://github.com/Mateus-denv/Projeto.loja.c'
    },
    project2: {
        title: 'TaskSpring',
        tech: ['Java', 'Spring Boot', 'REST API', 'MySQL','Maven','H2','Lombok'],
        description: 'Projeto iniciado durante um curso da Rocketseat, focado no desenvolvimento de uma aplicação back-end em Java utilizando Maven e Spring Boot. A aplicação foi construída seguindo o padrão de API REST, com uso de Lombok para redução de boilerplate, integração com o banco de dados H2 e implementação de endpoints completos para operações CRUD de usuários e tarefas. O projeto inclui tratamento de exceções, segurança dos dados do usuário e práticas voltadas à organização, escalabilidade e manutenibilidade do código.',
        features: [
            'API REST',
            'Autenticação e autorização com Spring Security',
            'Gerenciamento de tarefas por usuário',
            'Validações',
            'Testes unitários e de integração',
            'Segurança de dados'
        ],
        github: 'https://github.com/Mateus-denv/Java-com-Spring-boot'
    },
    project3: {
        title: 'Mexpress',
        tech: ['Figma', 'UX/UI', 'MySQL','UML'],
        description: 'Projeto de desenvolvido em equipe no SENAI com foco em mobilidade urbana. O projeto abrangeu as áreas de análise, Modelagem de Sistema, Banco de dados e UX Durante o desenvolvimento em grupo, pude contribuir de forma significativa em diversas etapas. Onde começamos com a elaboração dos requisitos funcionais e não funcionais da aplicação e a definição de regras de negócio realistas e aplicáveis ao modelo de locação. Após isso começamos a criação da documentação dos casos de uso, detalhando fluxos principais, alternativos e de exceção, além de mapear os relacionamentos entre os casos (como include e extend). Atuei fortemente no back-end, onde elaborei toda a modelagem do banco de dados e criação do modelo entidade-relacionamento (DER), modelo lógico e estrutura física. Também participei da parte de UX (experiência do usuário), criando protótipos navegáveis no Figma com foco em clareza, usabilidade e funcionalidade. Foi uma experiência enriquecedora, que reforçou a importância do trabalho em equipe e da multidisciplinaridade em projetos reais. Parabéns aos colegas Gislan, Guilherme e Analu pela parceria e aos professores Vitor Dias e Westn pelo suporte!',
        features: [
            'Fluxo de usuário completo',
            'UML (Linguagem de modelagem unificada)',
            'Design de interface do usuário',
            'Protótipo navegável'
        ],
        figma: 'https://www.figma.com/proto/6tRbx3Ts7rsxZW9aSRkPrm/MEXPRESS?node-id=15-619&p=f&t=mp2x5kGHZjchNdO8-1&scaling=scale-down&content-scaling=fixed&page-id=7%3A2310&starting-point-node-id=15%3A618'
    },

    project4: {
        title: 'E-colect',
        tech: ['Figma', 'UX/UI'],
        description: 'Projeto desenvolvido com foco em sustentabilidade e inovação na área de logística reversa. A proposta da E-Colect é conectar geradores de resíduos, motoristas e cooperativas por meio de uma plataforma digital, funcionando como um “Uber dos resíduos”. O sistema permite solicitar coletas, acompanhar o transporte em tempo real e garantir o descarte correto de materiais recicláveis, fortalecendo a cadeia de reciclagem e reduzindo impactos ambientais.Participei ativamente da criação do protótipo no Figma, contribuindo para a definição da interface, experiência do usuário (UI/UX) e organização visual da plataforma, buscando um design funcional, intuitivo e alinhado com os objetivos sustentáveis do projeto.',
        features: [
            'Fluxo de usuário completo',
            'Componentes reutilizáveis',
            'Paleta de cores acessível',
            'Protótipo navegável'
        ],
        figma: 'https://www.figma.com/proto/CsKrIrXL50vMAwzxG7oxUO/Projeto-E-TECH-ster?node-id=10-29&p=f&t=hS7DIrKbOpbZeWpu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A29'
    },

    project5: {
        title: 'Mario Barber',
        tech: ['HTML5', 'CSS5', 'Java Script', 'Figma'],
        description: 'Projeto em desenvolvimento criado para melhorar a organização e o fluxo de atendimento de uma barbearia local, trazendo mais praticidade para clientes e barbeiros. A solução foi pensada junto ao dono do estabelecimento, com base em problemas reais como falta de controle da fila, ausência de agendamentos e pouca previsibilidade de atendimento.Antes do desenvolvimento, foi criado um protótipo da plataforma, definindo a estrutura, navegação e experiência do usuário, garantindo uma solução simples, funcional e alinhada às necessidades reais do negócio.A versão beta permite que clientes façam cadastro, agendem horários e acompanhem sua vez, enquanto os barbeiros utilizam um painel para visualizar a agenda do dia, marcar presença e gerenciar atendimentos. O projeto segue em evolução contínua, com melhorias sendo implementadas a partir do uso real e do feedback dos usuários.',
        features: [
            'Cadastro e login na plataforma',
            'Agendamento de horário',
            'Gerenciar e iniciar atendimentos',
        ],
        inDevelopment: true
    },
    project6: {
        title: 'MExpress APP',
        tech: ['C#', 'SQL SERVER', 'ASP.NET MVC', 'ENTITY FRAMEWORK CORE'],
        description: 'Sistema web de locação de motocicletas desenvolvido em ASP.NET Core MVC, com controle de reservas, gestão de frota, regras de negócio e painel administrativo, focado em mobilidade urbana e turismo.',
        features: [
            'Cadastro e login na plataforma',
            'Gerenciamento de reservas',
            'Gestão de frota',
            'Painel administrativo',
        ],
        inDevelopment: true
    }
};

window.openModal = function(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('project-details-content');
    const project = window.projectsData[projectId];
    
    if (!project || !modal || !modalBody) return;
    
        // Construção dinâmica dos botões
    let buttonsHtml = '';
    
    if(project.inDevelopment) {
        buttonsHtml += `<button class="btn-dev">Em Desenvolvimento</button>`;
    } else {
        if(project.github) {
            buttonsHtml += `<a href="${project.github}" target="_blank" class="btn-github">Ver no GitHub</a>`;
        }
        if(project.figma) {
            buttonsHtml += `<a href="${project.figma}" target="_blank" class="btn-figma">Ver no Figma</a>`;
        }
        if(project.deploy) {
            buttonsHtml += `<a href="${project.deploy}" target="_blank" class="btn-deploy">Ver Online</a>`;
        }
    }

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="modal-tech">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        </div>
        <p class="modal-description">${project.description}</p>
        <div class="modal-features">
            <h3>Desenvolvido:</h3>
            <ul>${project.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
        </div>
        <div class="modal-buttons">
            ${buttonsHtml}
        </div>
    `;
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; 
}

window.closeModal = function() {
    const modal = document.getElementById('projectModal');
    if(modal) {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto'; 
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) window.closeModal();
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') window.closeModal();
});

// Back to Top
const backToTopBtn = document.getElementById('backToTop');
if(backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backToTopBtn.classList.add('show');
        else backToTopBtn.classList.remove('show');
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};