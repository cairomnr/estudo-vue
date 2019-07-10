<template>
  <div class="container mt-4">
    <b-form
      @submit="onSubmit"
      @reset="onReset"
    >
      <div class="row">
        <b-form-group
          id="lblNoCarta"
          label="Nome da Carta:"
          label-for="noCarta"
          class="col-md-6"
        >
          <b-form-input
            id="noCarta"
            v-model="form.no_carta"
            type="text"
            required
            maxlength="150"
            placeholder="Digite o nome da carta."
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="lblNoJogador"
          label="Nome do Jogador:"
          label-for="noJogador"
          class="col-md-6"
        >
          <b-form-select
            v-model="form.no_jogador"
            :options="opcoesJogadores"
          ></b-form-select>
        </b-form-group>
      </div>

      <b-form-group label="Cor(es) Carta:">
        <b-form-checkbox-group
          id="grupoTiposCarta"
          v-model="form.tipos"
          :options="opcoesCoresCarta"
          name="tiposCarta"
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-group label="Tipo(s) Carta:">
        <b-form-checkbox-group
          id="grupoCoresCarta"
          v-model="form.cor_carta"
          :options="getOpcoesTipoCarta"
          name="coresCarta"
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-group label="Habilidade(s):">
        <b-form-checkbox-group
          id="grupoHabilidades"
          v-model="form.ds_habilidade"
          :options="getOpcoesHabilidades"
          name="habilidades"
        ></b-form-checkbox-group>
      </b-form-group>

      <div class="row">
        <b-form-group
          id="lblDescricao"
          label="Descrição:"
          label-for="txtDescricao"
          class="col-md-6"
        >
          <b-form-textarea
            id="txtDescricao"
            v-model="form.ds_carta"
            placeholder="Insira a descrição da carta."
            no-resize
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          id="lblNoCarta"
          label="Custo da Carta:"
          label-for="noCarta"
          class="col-md-3"
        >
          <b-form-input
            id="nuCusto"
            v-model="form.nu_custo"
            type="number"
            min="0"
            max="20"
            placeholder="Custo da mana da carta."
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="lblNoCarta"
          label="Quantidade:"
          label-for="nuTotal"
          class="col-md-3"
        >
          <b-form-input
            id="nuTotal"
            v-model="form.nu_total"
            type="number"
            min="0"
            max="10"
            placeholder="Quantidade total de cartas iguais."
          ></b-form-input>
        </b-form-group>
      </div>

      <div class="row">
        <div class="ml-auto mb-4">
          <b-button
            type="reset"
            variant="danger"
            class="mr-4"
          >
            Limpar
          </b-button>
          <b-button
            type="submit"
            variant="primary"
          >
            Salvar
          </b-button>
        </div>
      </div>

    </b-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartasInserir",
  data() {
    return {
      opcoesCoresCarta: [
        { value: "Branco", text: "Branco" },
        { value: "Azul", text: "Azul" },
        { value: "Preto", text: "Preto" },
        { value: "Vermelho", text: "Vermelho" },
        { value: "Verde", text: "Verde" },
        { value: "Incolor", text: "Incolor" }
      ],
      opcoesJogadores: [
        { value: "", text: "Selecione..." },
        { value: "Cairo", text: "Cairo" },
        { value: "Jonathas", text: "Jonathas" },
        { value: "Lucas", text: "Lucas" }
      ],
      form: {
        no_carta: "",
        no_jogador: "",
        cor_carta: [],
        tp_carta: [],
        ds_habilidade: [],
        ds_carta: "",
        nu_custo: 0,
        nu_total: 0
      }
    };
  },
  computed: {
    ...mapGetters(["getOpcoesTipoCarta"]),
    ...mapGetters(["getOpcoesHabilidades"])
  },
  methods: {
    onSubmit: function() {},

    onReset: function() {}
  }
};
</script>

<style lang="scss">
#grupoHabilidades {
  .custom-control-label {
    min-width: 300px;
    max-width: 300px;
  }
}
</style>
