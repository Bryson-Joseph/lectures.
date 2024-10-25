module.exports = {
  webpack:{
    module:{
      rules:[
        {
          type:"javascript/auto",
          test:/\/mjs$/,
          include:/node_modules/,
        },
      ],
    },
  },
}