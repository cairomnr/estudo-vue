<template>
  <div id="app">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand href="#">Base de Dados - MAGIC</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav></b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-nav-item>
              <router-link to="/">Todas as Cartas</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/inserir">Inserir Carta</router-link>
            </b-nav-item>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
  </div>
</template>

<style lang="scss">
a {
  color: #ffffff !important;

  &:hover {
    color: #ffffff !important;
    text-decoration: underline;
  }
}
</style>
