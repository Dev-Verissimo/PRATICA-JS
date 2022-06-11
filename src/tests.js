import {
  tamanhoDaArray,
  retornaUltimo,
  retornaMeio,
  retornaDobro,
  maiorNumero,
  inverterArray,
  encontraIndice,
  ehPalindromo,
  rotacionarArray,
  concatenarArraysOrdenadas,
  concatenarArraysAlternado,
  concatenarArrays,
  somaArray,
  elementosImpares
} from "./exercises";

mocha.setup({
  ui: "bdd",
  cleanReferencesAfterRun: false
});
const { expect } = chai;

describe("tamanhoDaArray", function () {
  it("caso 1", function () {
    var retorno = tamanhoDaArray([1, 2, 3, 4, 5]);
    chai.expect(retorno).to.equal(5);
  });
  it("caso 2", function () {
    var retorno = tamanhoDaArray([5]);
    chai.expect(retorno).to.equal(1);
  });
  it("caso 3", function () {
    var retorno = tamanhoDaArray([]);
    chai.expect(retorno).to.equal(0);
  });
});

describe("retornaUltimo", function () {
  it("caso 1", function () {
    var retorno = retornaUltimo([1, 2, 3, 4, 5]);
    chai.expect(retorno).to.equal(5);
  });
  it("caso 2", function () {
    var retorno = retornaUltimo([3]);
    chai.expect(retorno).to.equal(3);
  });
});

describe("retornaMeio", function () {
  it("caso 1", function () {
    var retorno = retornaMeio([1, 2, 3, 4]);
    chai.expect(retorno).to.equal(2);
  });
  it("caso 2", function () {
    var retorno = retornaMeio([1, 2, 3, 4, 5]);
    chai.expect(retorno).to.equal(3);
  });
  it("caso 3", function () {
    var retorno = retornaMeio([1]);
    chai.expect(retorno).to.equal(1);
  });
});

describe("retornaDobro", function () {
  it("caso 1", function () {
    var retorno = retornaDobro([1, 2, 3, 4]);
    chai.expect(retorno).to.eql([2, 4, 6, 8]);
  });
  it("caso 2", function () {
    var retorno = retornaDobro([]);
    chai.expect(retorno).to.eql([]);
  });
});

describe("elementosImpares", function () {
  it("caso 1", function () {
    var retorno = elementosImpares([1, 2, 3, 4, 5]);
    chai.expect(retorno).to.eql([2, 4]);
  });
  it("caso 2", function () {
    var retorno = elementosImpares([1, 3, 5, 7]);
    chai.expect(retorno).to.eql([3, 7]);
  });
  it("caso 3", function () {
    var retorno = elementosImpares([]);
    chai.expect(retorno).to.eql([]);
  });
});

describe("somaArray", function () {
  it("caso 1", function () {
    var retorno = somaArray([1, 2, 3, 4, 5]);
    chai.expect(retorno).to.equal(15);
  });
  it("caso 2", function () {
    var retorno = somaArray([1]);
    chai.expect(retorno).to.equal(1);
  });
  it("caso 3", function () {
    var retorno = somaArray([1, -1]);
    chai.expect(retorno).to.equal(0);
  });
  it("caso 4", function () {
    var retorno = somaArray([]);
    chai.expect(retorno).to.equal(0);
  });
});

describe("encontraIndice", function () {
  it("caso 1", function () {
    var retorno = encontraIndice([1, 2, 3, 4, 5], 3);
    chai.expect(retorno).to.equal(2);
  });
  it("caso 2", function () {
    var retorno = encontraIndice([1, 2, 3, 4, 3], 3);
    chai.expect(retorno).to.equal(2);
  });
  it("caso 3", function () {
    var retorno = encontraIndice([1, 2], 3);
    chai.expect(retorno).to.equal(null);
  });
});

describe("maiorNumero", function () {
  it("caso 1", function () {
    var retorno = maiorNumero([1, 2, 3, 4, 5]);
    chai.expect(retorno).to.equal(5);
  });
  it("caso 2", function () {
    var retorno = maiorNumero([5, 4, 3, 2, 1]);
    chai.expect(retorno).to.equal(5);
  });
  it("caso 3", function () {
    var retorno = maiorNumero([1, 2, 5, 3, 4]);
    chai.expect(retorno).to.equal(5);
  });
  it("caso 4", function () {
    var retorno = maiorNumero([0]);
    chai.expect(retorno).to.equal(0);
  });
  it("caso 5", function () {
    var retorno = maiorNumero([-1, -2, -3, -4]);
    chai.expect(retorno).to.equal(-1);
  });
});

describe("inverterArray", function () {
  it("caso 1", function () {
    var retorno = inverterArray([1, 2, 3, 4, 5]);
    chai.expect(retorno).to.eql([5, 4, 3, 2, 1]);
  });
  it("caso 2", function () {
    var retorno = inverterArray([1]);
    chai.expect(retorno).to.eql([1]);
  });
  it("caso 3", function () {
    var retorno = inverterArray([1, 2]);
    chai.expect(retorno).to.eql([2, 1]);
  });
  it("caso 4", function () {
    var retorno = inverterArray([]);
    chai.expect(retorno).to.eql([]);
  });
});

describe("ehPalindromo", function () {
  it("caso 1", function () {
    var retorno = ehPalindromo("ana");
    chai.expect(retorno).to.equal(1);
  });
  it("caso 2", function () {
    var retorno = ehPalindromo("anas");
    chai.expect(retorno).to.equal(0);
  });
  it("caso 3", function () {
    var retorno = ehPalindromo("");
    chai.expect(retorno).to.equal(1);
  });
});

describe("concatenarArrays", function () {
  it("caso 1", function () {
    var retorno = concatenarArrays([1, 2], [3, 4]);
    chai.expect(retorno).to.eql([1, 2, 3, 4]);
  });
  it("caso 2", function () {
    var retorno = concatenarArrays([1], [3, 4]);
    chai.expect(retorno).to.eql([1, 3, 4]);
  });
  it("caso 3", function () {
    var retorno = concatenarArrays(["a", "b"], [3, 4]);
    chai.expect(retorno).to.eql(["a", "b", 3, 4]);
  });
  it("caso 4", function () {
    var retorno = concatenarArrays([], [3, 4]);
    chai.expect(retorno).to.eql([3, 4]);
  });
  it("caso 5", function () {
    var retorno = concatenarArrays([1, 2], []);
    chai.expect(retorno).to.eql([1, 2]);
  });
  it("caso 6", function () {
    var retorno = concatenarArrays([], []);
    chai.expect(retorno).to.eql([]);
  });
});

describe("concatenarArraysAlternado", function () {
  it("caso 1", function () {
    var retorno = concatenarArraysAlternado([1, 2], [3, 4]);
    chai.expect(retorno).to.eql([1, 3, 2, 4]);
  });
  it("caso 2", function () {
    var retorno = concatenarArraysAlternado([1], [3, 4]);
    chai.expect(retorno).to.eql([1, 3, 4]);
  });
  it("caso 3", function () {
    var retorno = concatenarArraysAlternado([1, 2], [3]);
    chai.expect(retorno).to.eql([1, 3, 2]);
  });
  it("caso 4", function () {
    var retorno = concatenarArraysAlternado([], [3, 4]);
    chai.expect(retorno).to.eql([3, 4]);
  });
  it("caso 5", function () {
    var retorno = concatenarArraysAlternado([1, 2], []);
    chai.expect(retorno).to.eql([1, 2]);
  });
  it("caso 6", function () {
    var retorno = concatenarArraysAlternado([], []);
    chai.expect(retorno).to.eql([]);
  });
});

describe("concatenarArraysOrdenadas", function () {
  it("caso 1", function () {
    var retorno = concatenarArraysOrdenadas([1, 2], [3, 4]);
    chai.expect(retorno).to.eql([1, 2, 3, 4]);
  });
  it("caso 2", function () {
    var retorno = concatenarArraysOrdenadas([1], [3, 4]);
    chai.expect(retorno).to.eql([1, 3, 4]);
  });
  it("caso 3", function () {
    var retorno = concatenarArraysOrdenadas([1, 2], [3]);
    chai.expect(retorno).to.eql([1, 2, 3]);
  });
  it("caso 4", function () {
    var retorno = concatenarArraysOrdenadas([], [3, 4]);
    chai.expect(retorno).to.eql([3, 4]);
  });
  it("caso 5", function () {
    var retorno = concatenarArraysOrdenadas([1, 2], []);
    chai.expect(retorno).to.eql([1, 2]);
  });
  it("caso 6", function () {
    var retorno = concatenarArraysOrdenadas([], []);
    chai.expect(retorno).to.eql([]);
  });
  it("caso 7", function () {
    var retorno = concatenarArraysOrdenadas([1, 2, 3], [7]);
    chai.expect(retorno).to.eql([1, 2, 3, 7]);
  });
  it("caso 8", function () {
    var retorno = concatenarArraysOrdenadas([9], [1, 2, 3]);
    chai.expect(retorno).to.eql([1, 2, 3, 9]);
  });
});

describe("rotacionarArray", function () {
  it("caso 1", function () {
    var retorno = rotacionarArray([1, 2, 3, 4, 5, 6], 2);
    chai.expect(retorno).to.eql([3, 4, 5, 6, 1, 2]);
  });
  it("caso 2", function () {
    var retorno = rotacionarArray([1, 2, 3, 4, 5, 6], -1);
    chai.expect(retorno).to.eql([6, 1, 2, 3, 4, 5]);
  });
  it("caso 3", function () {
    var retorno = rotacionarArray([1, 2, 3], 4);
    chai.expect(retorno).to.eql([2, 3, 1]);
  });
  it("caso 4", function () {
    var retorno = rotacionarArray([1, 2, 3], -4);
    chai.expect(retorno).to.eql([3, 1, 2]);
  });
  it("caso 5", function () {
    var retorno = rotacionarArray([1, 2, 3], 0);
    chai.expect(retorno).to.eql([1, 2, 3]);
  });
  it("caso 6", function () {
    var retorno = rotacionarArray([], 3);
    chai.expect(retorno).to.eql([]);
  });
});

mocha.run();
