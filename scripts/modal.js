// === 2. LÓGICA DO MODAL ===
    window.projectsData = {
        project1: {
            title: 'Voga Stock',
            tech: ['C', 'Lógica de Programação', 'Structs', 'Arrays e Strings'],
            description: 'Sistema de gerenciamento de estoque desenvolvido em linguagem C, utilizando estruturas de dados para controle eficiente de produtos.',
            features: [
                'Cadastro, edição e exclusão de produtos',
                'Controle de entrada e saída de estoque',
                'Relatórios de produtos em baixa quantidade',
                'Sistema de busca e filtros avançados',
                'Persistência de dados em arquivos'
            ],
            github: 'https://github.com/seuusuario/voga-stock'
        },
        project2: {
            title: 'TaskSpring',
            tech: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
            description: 'API REST para gerenciamento de tarefas desenvolvida com Spring Boot, oferecendo endpoints completos para CRUD de tarefas e usuários.',
            features: [
                'API RESTful completa',
                'Autenticação e autorização com Spring Security',
                'Gerenciamento de tarefas por usuário',
                'Documentação com Swagger',
                'Testes unitários e de integração'
            ],
            github: 'https://github.com/seuusuario/taskspring'
        }
    };

    window.openModal = function(projectId) {
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('project-details-content');
        const project = window.projectsData[projectId];
        
        if (!project || !modal || !modalBody) {
            console.error("Erro: Projeto ou elementos do modal não encontrados.");
            return;
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
                <h3>Funcionalidades:</h3>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-buttons">
                <a href="${project.github}" target="_blank" class="btn-github">
                    Ver no GitHub
                </a>
            </div>
        `;
        
        // Usando classe para controlar display flex
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

    // Fechar modal ao clicar fora ou ESC
    window.onclick = function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target == modal) window.closeModal();
    }
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') window.closeModal();
    });