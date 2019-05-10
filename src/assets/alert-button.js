export default {
    template: `<!-- id="playground-result" is required for reuse self -->
<div id="playground-result">
  <button id="hello" @click="sayHelloWorld">Click Me</button>
</div>`,
    script: `return {
  methods: {
    sayHelloWorld(){
      window.alert('Hello World!')
    }
  }
}`,
    css: `#hello {
  background-color: #2196f3;
  color: white;
  width: 200px;
  height: 40px;
}`
}