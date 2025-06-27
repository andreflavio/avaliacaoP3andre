function calcularTaxaVitoria(vitorias, partidas) {
  if (partidas === 0) return 0;
  return (vitorias / partidas) * 100;
}

module.exports = calcularTaxaVitoria;