const calcularTaxaVitoria = require('./calcularTaxaVitoria');

describe('calcularTaxaVitoria', () => {
  it('calcula corretamente a taxa de 5 vitórias em 10 partidas', () => {
    expect(calcularTaxaVitoria(5, 10)).toBe(50);
  });

  it('retorna 0 se partidas for 0', () => {
    expect(calcularTaxaVitoria(5, 0)).toBe(0);
  });

  it('retorna 0 se não houver vitórias', () => {
    expect(calcularTaxaVitoria(0, 10)).toBe(0);
  });
});