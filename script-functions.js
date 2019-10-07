// function getName(){
//   return "Hugo N. Lima"
// }

// const getName = () => {
//   return "Hugo Nascimento de Lima"
// }

// const getName = () => "Hugo Lima"

// const name = getName()

// console.log(name)
let info = {
  name: "Sem dados",
  email: "Sem dados"
}

// function gerarDados(name, email){
//   return function(){
//     info = {
//       name: name,
//       email: email
//     }
//   }
// }

// const gerarDados = (name, email) => {
//   return () => {
//     info = {
//       name: name,
//       email: email
//     }
//   }
// }

// const gerarDados = (name, email) => () => {
//   info = {
//     name: name,
//     email: email
//   }
// }

// const gerarDados = (name, email) => () => { info = { name, email }}

// console.log(info)

// const dados = gerarDados("Hugo Lima", "hugo.hnl@gmail.com")
// dados()

// console.log(info)

// function pessoa(name, email){
//   return {
//     name: name,
//     email: email
//   }
// }


// const pessoa = (name, email) => {
//   return {
//     name: name,
//     email: email
//   }
// }


// const pessoa = (name, email) => ({name: name, email: email})


const pessoa = (name, email) => ({name, email})

const dados = pessoa("Hugo", "hugo.hnl@gmail.com")
console.log(dados)