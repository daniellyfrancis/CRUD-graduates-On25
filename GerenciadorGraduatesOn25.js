const GraduatesOn25 = require('./GraduatesOn25');

class GerenciadorGraduatesOn25 extends GraduatesOn25 {
  constructor() {
    super();
    this.graduates = [];
  }

  adicionarGraduada(id, nome, email, linkedin, github, area) {
    const graduada = new GraduatesOn25(id, nome, email, linkedin, github, area);
    this.graduates.push(graduada);
  }

  listarGraduadas() {
    return this.graduates;
  }

  buscarGraduadaPorId(id) {
    return this.graduates.find(graduada => graduada.id === id);
  }

  atualizarGraduada(id, novoNome, novoEmail, novoLinkedin, novoGithub, novaArea) {
    const graduada = this.buscarGraduadaPorId(id);
    if (graduada) {
      graduada.nome = novoNome;
      graduada.email = novoEmail;
      graduada.linkedin = novoLinkedin;
      graduada.github = novoGithub;
      graduada.area = novaArea;
    }
  }

  removerGraduada(id) {
    const index = this.graduates.findIndex(graduada => graduada.id === id);
    if (index !== -1) {
      this.graduates.splice(index, 1);
    }
  }
}


module.exports = GerenciadorGraduatesOn25;
