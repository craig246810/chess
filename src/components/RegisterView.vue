<template>
  <div>
    <h2>Register</h2>
    <div>
      <dialog class="mdl-dialog">
        <h4 class="mdl-dialog__title">Register</h4>
        <div class="mdl-dialog__content">
          <form action="#">
            <div>
              <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" v-model="name">
                <label class="mdl-textfield__label" for="name">Name...</label>
              </div>

              <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" v-model="username">
                <label class="mdl-textfield__label" for="username">Username...</label>
              </div>

              <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" v-model="chessDotComUserName">
                <label class="mdl-textfield__label" for="chessDotComUserName">Chess.com: username...</label>
              </div>

              <!-- todo wants to improve-->
              <!--<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="wantsToImprove">-->
              <!--<input type="checkbox radio" v-model="wantsToImprove" class="mdl-switch__input" checked>-->
              <!--<span class="mdl-switch__label"></span>-->
              <!--</label>-->

              <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="password" v-model="password">
                <label class="mdl-textfield__label" for="password">Password...</label>
              </div>

              <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="password" v-model="confirmPassword">
                <label class="mdl-textfield__label" for="confirmPassword">Confirm Password...</label>
              </div>

              <div>
                <div>
                  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" v-on:click="toggleModalT">
                    Cancel
                  </button>

                  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>

    <!-- Colored FAB button -->
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
      <i class="material-icons" v-on:click="toggleModalT">Register</i>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
        username: '',
        name: '',
        chessDotComUserName: '',
        wantsToImprove: true,
        password: '',
        confirmPassword: '',
        toggleModal: false
      }
    },
    methods: {
      toggleModalT: function (event) {
        var dialogElement = document.querySelector('dialog')

        if (this.toggleModal === false) {
          dialogElement.showModal()
          this.toggleModal = true
        } else {
          console.log('closing')
          dialogElement.close()
          this.toggleModal = false

          event.preventDefault()
        }
      }
    }
  }
</script>

<style>

</style>
