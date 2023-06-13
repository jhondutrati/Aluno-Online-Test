const Nota = require('../src/models/nota');

describe('Calculo da média final', () => {
    test('a media é zero se não tem notas', () => {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.mediaFinal()).toEqual(0);
        nota = new Nota(null, null, null, null)
        expect(nota.mediaFinal()).toEqual(0);
    });

    test('a média é (0.4 * a1) + (0.6 * a2) se tem apenas a1 e a2', () => {
        let nota = new Nota(null, 3, 5, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 7, 4, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 7 + 0.6 * 4);
    });

    test('a média é (0.4 * a3) + (0.6 * a2) se a3 substitui a1', () => {
        let nota = new Nota(null, 0, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 6);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
    });

    test('a média é (0.4 * a1) + (0.6 * a3) se a3 substitui a2', () => {
        let nota = new Nota(null, 6, 0, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 7);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 7);
    });
});


test('calcula conceito final corretamente', () => {
  const nota = new Nota();
  
  expect(nota.mediaCA(9.5)).toBe('SS - Superior');
  expect(nota.mediaCA(7.8)).toBe('MS - Médio Superior');
  expect(nota.mediaCA(5.5)).toBe('MM - Médio');
  expect(nota.mediaCA(3.2)).toBe('MI - Médio Inferior');
  expect(nota.mediaCA(1.7)).toBe('II - Inferior');
  expect(nota.mediaCA(0.0)).toBe('SR - Sem rendimento');
});