const GerenciadorGraduatesOn25 = require('./GraduatesOn25.js');

// Testes para a classe GerenciadorGraduatesOn25

test('Adicionar um graduado', () => {
  const gerenciador = new GerenciadorGraduatesOn25();
  gerenciador.adicionarGraduado(1, "João", "joao@email.com", "linkedin.com/joao", "github.com/joao", "TI");
  expect(gerenciador.listarGraduados()).toHaveLength(1);
});

test('Atualizar dados de um graduado', () => {
  const gerenciador = new GerenciadorGraduatesOn25();
  gerenciador.adicionarGraduado(1, "João", "email1@email.com", "linkedin.com/joao", "github.com/joao", "TI");
  gerenciador.atualizarGraduado(1, "João Silva", "novemail@email.com", "linkedin.com/joaosilva", "github.com/joaosilva", "Desenvolvimento");
  const graduadoAtualizado = gerenciador.buscarGraduadoPorId(1);
  expect(graduadoAtualizado.nome).toBe("João Silva");
  expect(graduadoAtualizado.email).toBe("novemail@email.com");
  expect(graduadoAtualizado.linkedin).toBe("linkedin.com/joaosilva");
  expect(graduadoAtualizado.github).toBe("github.com/joaosilva");
  expect(graduadoAtualizado.area).toBe("Desenvolvimento");
});

test('Remover um graduado', () => {
  const gerenciador = new GerenciadorGraduatesOn25();
  gerenciador.adicionarGraduado(1, "João", "email1@email.com", "linkedin.com/joao", "github.com/joao", "TI");
  gerenciador.removerGraduado(1);
  expect(gerenciador.listarGraduados()).toHaveLength(0);
});
