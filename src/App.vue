<template>
  <n-space justify="center">
    <n-alert v-if="successMessage" title="Success" type="success" closable style="width: 500px">
      {{ successMessage }}
    </n-alert>
    <n-alert v-else-if="isLoggedIn" title="Success" type="success" closable style="width: 500px">
      Successfully logged in!
    </n-alert>
    <n-alert v-if="errorMessage" title="Error" type="error" closable style="width: 500px">
      {{ errorMessage }}
    </n-alert>
  </n-space>
  <br>
  <n-space justify="center" v-if="!isLoggedIn">
    <n-card title="Vue Firabase Authentication" style="margin-bottom: 16px; width: 500px">
      <n-tabs default-value="signin" size="large" justify-content="space-evenly">
        <n-tab-pane name="signin" tab="Sign in">
          <n-form>
            <n-form-item-row label="E-mail">
              <n-input v-model:value="form.email"/>
            </n-form-item-row>
            <n-form-item-row label="Password">
              <n-input type="password" v-model:value="form.password"/>
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong @click="signIn">
            Sign In
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="Sign up">
          <n-form>
            <n-form-item-row label="E-mail">
              <n-input v-model:value="form.email"/>
            </n-form-item-row>
            <n-form-item-row label="Password">
              <n-input type="password" v-model:value="form.password"/>
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong @click="signUp">
            Sign up
          </n-button>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-space>
  <n-space justify="center" v-else>
    <n-button type="primary" block secondary strong @click="signOut">
      Sign out
    </n-button>
  </n-space>
</template>

<script>
import { NTabs, NTabPane, NForm, NFormItemRow, NInput, NButton,NCard, NSpace, NAlert } from 'naive-ui'
import { reactive, ref, onBeforeMount } from 'vue'
import { createUser, loginUser, logoutUser } from '@/firebase'
import firebase from 'firebase/app'

export default {
  name: 'App',
  components: {
    NTabs, NTabPane, NForm, NFormItemRow, NInput, NButton, NCard, NSpace, NAlert
  },
  setup() {
    const form = reactive({
      email: '',
      password: ''
    })

    const errorMessage = ref(null)
    const successMessage = ref(null)
    const isLoggedIn = ref(null)
    
    const signUp = async () => {
      await createUser(form)
        .then(data => {
          console.log(data)

          successMessage.value = 'Successfully registered!'
          errorMessage.value = null

          form.email = ''
          form.password = ''
        })
        .catch(error => {
          errorMessage.value = error.message
          successMessage.value = null
        })
    }

    const signIn = async () => {
      await loginUser(form)
        .then(data => {
          console.log(data)

          successMessage.value = 'Successfully logged in!'
          errorMessage.value = null

          form.email = ''
          form.password = ''

        })
        .catch(error => {
          errorMessage.value = error.message
          successMessage.value = null
        })
    } 

    const signOut = async () => {
      await logoutUser()
        .then(data => {
          console.log(data)

          successMessage.value = 'Successfully logged out!'
          errorMessage.value = null
        })
        .catch(error => {
          errorMessage.value = error.message
          successMessage.value = null
        })
    } 

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            isLoggedIn.value = true
        }
        else {
            isLoggedIn.value = false
        }
      })
    })

    return {
      form,
      signUp,
      signIn,
      errorMessage,
      successMessage,
      isLoggedIn,
      signOut
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
