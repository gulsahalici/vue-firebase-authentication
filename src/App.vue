<template>
  <n-space justify="center">
    <n-card title="Vue Firabase Authentication" style="margin-bottom: 16px; width: 500px">
      <n-tabs default-value="signin" size="large" justify-content="space-evenly">
        <n-tab-pane name="signin" tab="Sign in">
          <n-form>
            <n-form-item-row label="E-mail">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="Password">
              <n-input type="password"/>
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong>
            Sign In
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="Sign up">
          <n-form>
            <n-form-item-row label="E-mail">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="Password">
              <n-input type="password"/>
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong>
            Sign up
          </n-button>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-space>
</template>

<script>
import { NTabs, NTabPane, NForm, NFormItemRow, NInput, NButton,NCard, NSpace } from 'naive-ui'

export default {
  name: 'App',
  components: {
    NTabs, NTabPane, NForm, NFormItemRow, NInput, NButton, NCard, NSpace
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
