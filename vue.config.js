

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // options...
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                    @import "@/assets/styles/variables.scss";
                `
      }
    }
  }
  
})
