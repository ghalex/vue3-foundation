module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
         @import "@/themes/main/index.scss";
         `
      }
    }
  }
}
