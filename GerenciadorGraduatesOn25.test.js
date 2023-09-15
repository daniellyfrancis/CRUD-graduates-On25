const GerenciadorGraduatesOn25 = require('./GerenciadorGraduatesOn25.js');

// Testes para a classe GerenciadorGraduatesOn25

test('Adicionar uma graduada', () => {
  const gerenciador = new GerenciadorGraduatesOn25();
  gerenciador.adicionarGraduada(1, "Danielly", "francisdanielly04@gmail.com", "linkedin.com/daniellyfrancis", "github.com/daniellyfrancis", "frontend");
  expect(gerenciador.listarGraduadas()).toHaveLength(1);
});

test('Atualizar dados de uma graduada', () => {
  const gerenciador = new GerenciadorGraduatesOn25();
  gerenciador.adicionarGraduada(1, "Danielly", "francisdanielly04@gmail.com", "linkedin.com/daniellyfrancis", "github.com/daniellyfrancis", "frontend");
  gerenciador.atualizarGraduado(1, "Danielly Francis", "novemail@email.com", "linkedin.com/daniellysilva", "github.com/daniellysilva", "fullstack");
  const graduadaAtualizada = gerenciador.buscarGraduadaPorId(1);
  expect(graduadaAtualizada.nome).toBe("Danielly Francis");
  expect(graduadaAtualizada.email).toBe("novemail@email.com");
  expect(graduadaAtualizada.linkedin).toBe("linkedin.com/daniellysilva");
  expect(graduadaAtualizada.github).toBe("github.com/daniellysilva");
  expect(graduadaAtualizada.area).toBe("fullstack");
});

test('Remover uma graduada', () => {
  const gerenciador = new GerenciadorGraduatesOn25();
  gerenciador.adicionarGraduada(1, "Danielly", "email1@email.com", "linkedin.com/dany", "github.com/dany", "TI");
  gerenciador.removerGraduada(1);
  expect(gerenciador.listarGraduadas()).toHaveLength(0);
});
