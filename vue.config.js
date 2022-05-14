const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // options...
  css: {
    loaderOptions: {
      sass: {
        data: `
                    @import "@/assets/styles/variables.scss";
                `
      }
    }
  }
  
})
