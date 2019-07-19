//Juros símples
const jurosSimples = (C, i, t) => C * i * t

//Montante somado com juros símples
const montanteSimples = ({jurosSimples}) => (C, i, t) => C + jurosSimples(C, i, t)

//Montante com juros compostos
const montanteJurosCompostos = (C, i, t) => C * Math.pow((1 + i), t)

//Juros compostos alone
const jurosCompostos = ({montanteJurosCompostos}) => (C, i, t) => montanteJurosCompostos(C, i, t) - C

module.exports = {
    jurosSimples,
    montanteSimples: montanteSimples({jurosSimples}),
    montanteJurosCompostos,
    jurosCompostos: jurosCompostos({montanteJurosCompostos}),
    pure: {
        montanteSimples,
        jurosCompostos
    }
}