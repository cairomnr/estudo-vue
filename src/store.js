import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coresCartas: ['Branco', 'Azul', 'Preto', 'Vermelho', 'Verde'],
    tiposCartas: ['Criatura', 'Artefato', 'Encantamento', 'Terreno', 'Ficha', 'Mágica Instantânea', 'Feitiço'],
    habilidades: [
      'Ameaçar',
      'Absorver N',
      'Afinidade por (alguma coisa)',
      'Alcance',
      'Amplificar X',
      'Agraciar',
      'Arma Viva',
      'Armadura de Totem',
      'Amedrontar',
      'Aniquilador N',
      'Atropelar',
      'Alternância',
      'Assombrar',
      'Batalhão',
      'Bushido X',
      'Canalizar X',
      'Custo de manutenção cumulativo X',
      'Convocar',
      'Conspirao',
      'Constelação',
      'Dependência de (terreno básico)',
      'Defensor',
      'Desvanescer X',
      'Determinação',
      'Devoção a [cor(es)]',
      'Devorar X',
      'Dimir',
      'Entrelaçar X',
      'Estampar',
      'Equipar X',
      'Encantar',
      'Eco',
      'Épico',
      'Escavação X',
      'Enxerto X',
      'Evoluir',
      'Formar Bando',
      'Fúria X',
      'Facho Solar',
      'Flanquear',
      'Fração de Segundo',
      'Golpe Duplo',
      'Heroico',
      'Hora Fatal',
      'Horsemanship',
      'Indestrutível',
      'Iniciativa',
      'Ímpeto',
      'Infectar',
      'Imortal',
      'Inspiração',
      'Join Forces',
      'Lampejo',
      'Loucura X',
      'Limiar',
      'Manto',
      'Metamorfose X',
      'Modular X',
      'Mentor',
      'Ninjutsu X',
      'Não pode ser alvo de ...',
      'Não pode ser bloqueado(a)',
      'Não pode ser anulado',
      'Oferenda (alguma coisa)',
      'Proteção contra (alguma coisa)',
      'Provocar',
      'Prever X',
      'Proliferar / Proliferate',
      'Radiação',
      'Recapitular X',
      'Recuperar X',
      'Redirecionar',
      'Reforçar X',
      'Rajada',
      'Regenerar',
      'Reciclar ou Revezar',
      'Reciclar (alguma coisa)',
      'Replicar X',
      'Resgatar X',
      'Resistência à magia',
      'Split',
      'Sede de Sangue X',
      'Sombra',
      'Sumir X',
      'Suspensão X - Y',
      'Toque mortífero',
      'Transfigurar',
      'Transmigração da Alma X',
      'Travessia de Terreno',
      'Transmutação X',
      'Unir com Arcana X',
      'Voar',
      'Vigilância',
      'Vidência X',
      'Varredura',
      'Vínculo com a Vida',
      'Vigiar'
    ],
    cartas: []
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    cartas: state => state.cartas,

    getOpcoesTipoCarta: state => {
      var opcoesTipos = []

      state.tiposCartas.map(function (tipoCarta) {
        opcoesTipos.push({ value: tipoCarta, text: tipoCarta })
      })

      return opcoesTipos
    },

    getOpcoesHabilidades: state => {
      var opcoesHabilidades = []

      state.habilidades.map(function (habilidade) {
        opcoesHabilidades.push({ value: habilidade, text: habilidade })
      })

      return opcoesHabilidades
    }
  }
})
