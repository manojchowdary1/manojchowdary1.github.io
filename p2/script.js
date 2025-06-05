const login=()=>{
    let str=`
    <div class="container">
    <h1>login here</h1>
    <p><input type="text" id="box1" placeholder="name"></p>
    <p><input type="text" id="box2" placeholder="email"></p>
    <p><input type="text" id="box2" placeholder="password"></p>
    <p> <button onclick="welc()"> login </button></p>
    <button onclick="register()"> create account </button>
   </div>   
  `
      root.innerHTML = str

}
const register=()=>{
    let str=`
    <div class="container">
    <h1>register here</h1>
    <p><input type="text" id="box4" placeholder="age"></p>
    <p><input type="text" id="box5" placeholder="email"></p>
    <p><input type="text" id="box6" placeholder="password"></p>
   <p> <button> register</button></p>
    <p><button onclick="login()">already account</button></p>
    </div>
  `
      root.innerHTML = str

}
const welc=()=>{
  let str=` <div class="manu">
  <h1> WELCOME TO HOME PAGE</h1>
  </div>`
  root.innerHTML=str
}