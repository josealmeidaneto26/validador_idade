/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test("maior de idade", function() {
    var maioridade = validarIdade(18);
    expect(maioridade).toBe(true)
    })
    
    test("menor de idade", function() {
        var nvalido = validarIdade(11);
        expect(nvalido).toBe(false)
        })