<template>
  <div class="container mt-2">
    <b-table
      striped
      hover
      :fields="campos"
      :items="items"
      show-empty
      small
      bordered
    >
      <template
        slot="cor_carta"
        slot-scope="data"
      >
        {{ data.item.cor_carta.join(', ') }}
      </template>

      <template
        slot="tp_carta"
        slot-scope="data"
      >
        {{ data.item.tp_carta.join(', ') }}
      </template>

      <template
        slot="ds_habilidade"
        slot-scope="data"
      >
        {{ data.item.ds_habilidade.join(', ') }}
      </template>

      <template slot="empty">
        <span>Nenhum resultado encontrado!</span>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Cartas",
  data() {
    return {
      campos: [
        { key: "no_carta", label: "Nome da Carta", class: "text-center" },
        { key: "no_jogador", label: "Nome do Jogador", class: "text-center" },
        { key: "cor_carta", label: "Cor(es)", class: "text-center" },
        { key: "tp_carta", label: "Tipo De Carta", class: "text-center" },
        { key: "ds_habilidade", label: "Habilidades", class: "text-center" },
        { key: "ds_carta", label: "Descrição da Carta", class: "text-center" },
        { key: "nu_custo", label: "Custo", class: "text-center" },
        { key: "nu_total", label: "Quantidade", class: "text-center" }
      ],
      items: [
        {
          no_carta: "Reunião de Asas",
          no_jogador: "Jonathas",
          cor_carta: ["Branco", "Azul"],
          tp_carta: ["Magia Instantânea"],
          ds_habilidade: ["Lampejo"],
          ds_carta: "Desvire todas as criaturas que você controla.",
          nu_custo: 3,
          nu_total: 1
        }
      ]
    };
  }
};
</script>
