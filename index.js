//function
// 2 types
//regular
//operator
// +, *, - , /

// function RegularFunction(a=5, b=5){
//     let c = undefined;

// c = a +  b
// console.log(c, 'result')
// }

// //fucntion call
// RegularFunction(10, 5);
// RegularFunction(5, 5);
// RegularFunction(1, 5);

// //arrow function
// const ArrowFucntion=()=>{
//     //...statement
// }

//Object
// let person = {
//   name: {
//     firstName: "Jack",
//     lastName: "Sainju",
//   },
//   age: "15",
//   place: "Bhktapur",
// };

// //function call
// AddCollege(person);

// function AddCollege(person) {
//   person.college = "Khwopa College";
// }

// console.log(person, "person");

//Array
// let country = [{ name: "Nepal", capital: "kathmandu" }];
// console.log(car, "car");
// //for loop
// for (let i = 0; i < car.length; i++) {
//   console.log(i + 1, "car");
// }

//HW
// let person = { name: "", age: "" }; person.nam
// let country = [{ name: ["Nepal", "India"], capital: ["Kathmandu", "Delhi"] }]; // empty array

// for (let i = 0; i < country.length; i++) {
//   console.log(country[i].name[0], country[i].capital[0]);
// }

// const h1 = document.getElementById("h1");
// const increaseBtn = document.getElementById("increase");
// const decreaseBtn = document.getElementById("decrease");
// const multiplyBtn = document.getElementById("multiply");
// const counter = document.getElementById("counter");

// let initialNumber = 0;

// increaseBtn.addEventListener("click", function () {
//   initialNumber = initialNumber + 1;
//   counter.innerHTML = initialNumber;
// });

// decreaseBtn.addEventListener("click", function () {
//   initialNumber = initialNumber - 1;
//   counter.innerHTML = initialNumber;
// });
// multiplyBtn.addEventListener("click", function () {
//   initialNumber = initialNumber * 10;
//   counter.innerHTML = initialNumber;
// });

const formDetail = {
  userName: "",
  email: "",
  password: "",
};

// console.log(formDetail);

const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const userErrorMessage = document.getElementById("checkUser");
const emailErrorMessage = document.getElementById("checkEmail");
const passwordErrorMessage = document.getElementById("checkPassword");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(userName.value, email.value, "chekcusername");
  if (userName.value === "") {
    userErrorMessage.innerHTML = "Username is required";
  } else {
    userErrorMessage.innerHTML = "";
  }
  if (email.value === "") {
    emailErrorMessage.innerHTML = "Email is required";
  } else {
    emailErrorMessage.innerHTML = "";
  }
  if (password.value === "") {
    passwordErrorMessage.innerHTML = "Password is required";
  } else {
    passwordErrorMessage.innerHTML = "";
  }

  if (userName.value && email.value && password.value) {
    console.log("inside if");
    formDetail.userName = userName.value;
    formDetail.email = email.value;
    formDetail.password = password.value;
  }
  console.log(formDetail, "formDetail");
});
