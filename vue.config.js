module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
         @import "@/themes/main/vars.scss";
         @import "dev/assets/scss/vars.scss";
         @import "@/themes/main/index.scss";
         @import "dev/assets/scss/overrides.scss";
         `
      }
    }
  }
}
