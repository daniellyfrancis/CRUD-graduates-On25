class GraduatesOn25 {
  constructor(id, nome, email, linkedin, github, area) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.linkedin = linkedin;
    this.github = github;
    this.area = area;
  }
}

class GerenciadorGraduatesOn25 {
  constructor() {
    this.graduates = [];
  }

  // Create - Adicionar um novo graduado
  adicionarGraduado(id, nome, email, linkedin, github, area) {
    const graduado = new GraduatesOn25(id, nome, email, linkedin, github, area);
    this.graduates.push(graduado);
  }

  // Read - Listar todos os graduados
  listarGraduados() {
    return this.graduates;
  }

  // Read - Buscar um graduado por ID
  buscarGraduadoPorId(id) {
    return this.graduates.find(graduado => graduado.id === id);
  }

  // Update - Atualizar os dados de um graduado por ID
  atualizarGraduado(id, novoNome, novoEmail, novoLinkedin, novoGithub, novaArea) {
    const graduado = this.buscarGraduadoPorId(id);
    if (graduado) {
      graduado.nome = novoNome;
      graduado.email = novoEmail;
      graduado.linkedin = novoLinkedin;
      graduado.github = novoGithub;
      graduado.area = novaArea;
    }
  }

  // Delete - Remover um graduado por ID
  removerGraduado(id) {
    const index = this.graduates.findIndex(graduado => graduado.id === id);
    if (index !== -1) {
      this.graduates.splice(index, 1);
    }
  }
}

// Exemplo de uso:
const gerenciador = new GerenciadorGraduatesOn25();

gerenciador.adicionarGraduado(1, "João", "joao@email.com", "linkedin.com/joao", "github.com/joao", "TI");
gerenciador.adicionarGraduado(2, "Maria", "maria@email.com", "linkedin.com/maria", "github.com/maria", "Engenharia");

console.log(gerenciador.listarGraduados());

gerenciador.atualizarGraduado(1, "João Silva", "novoemail@email.com", "linkedin.com/joaosilva", "github.com/joaosilva", "Desenvolvimento");

console.log(gerenciador.listarGraduados());

gerenciador.removerGraduado(2);

console.log(gerenciador.listarGraduados());
