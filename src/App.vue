<template>
  <div>
    <div>
      <ol>
        <li>
          Type your Template, Javascript or CSS.
        </li>
        <li>
          Click 'Result' tab. Vue component is compiled by runtime
        </li>
      </ol>
    </div>
    <vue-tabs @tab-change="onTabChange">
      <v-tab title="Template">
        <prism-editor v-model="template" language="html"></prism-editor>
      </v-tab>
      <v-tab title="JavaScript">
        <prism-editor v-model="script" language="javascript"></prism-editor>
      </v-tab>
      <v-tab title="CSS">
        <prism-editor v-model="css" language="css"></prism-editor>
      </v-tab>
      <v-tab title="Result">
        <div id="playground-result"></div>
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import PrismEditor from 'vue-prism-editor'
import alertBtn from '@/assets/alertButton'
export default {
  components: {PrismEditor},
  data: () => ({
    active: null,
    template: alertBtn.template,
    script: alertBtn.script,
    css: alertBtn.css,
    style: null
  }),
  mounted() {
    this.style = document.createElement('style')
    this.style.type = 'text/css'
    document.head.append(this.style)
  },
  methods: {
    onTabChange(index) {
      if (index === 3) {
        this.compile()
      }
    },
    compile() {
      // use a template
      let option = { template: this.template }

      // use a script
      option = Object.assign(option, new Function(this.script)())

      // use a css
      this.style.textContent = this.css

      // comile and mount at playground-result
      new Vue(option).$mount('#playground-result')
    }
  }
}
</script>

<style scoped></style>
