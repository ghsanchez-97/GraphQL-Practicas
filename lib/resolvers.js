"use strict";
//Una extructura mas funcional, un proyecto real
// module.exports = {
//   hello: () => {
//     return "Hello World!";
//   },
//   saludar: () => {
//     return "Hola a todos!";
//   },
// };

//Objeto quemado para pruebas
const courses = [
  {
    _id: "anyid",
    title: "Mi curso",
    teacher: "Mi profesor",
    description: "Una descripcion",
    topic: "Programación",
  },
  {
    _id: "anyid2",
    title: "Mi curso 2",
    teacher: "Mi profesor",
    description: "Una descripcion",
    topic: "Programación",
  },
  {
    _id: "anyid3",
    title: "Mi curso 3",
    teacher: "Mi profesor",
    description: "Una descripcion",
    topic: "Programación",
  },
];

//Resolvers sobre los cursos
module.exports = {
  //Devuelve todos los cursos
  Query: {
    getCourses: () => {
      return courses;
    },
   getCourse: (root, args) => {
       const course = courses.filter((course) => course._id === args.id) 
       return course.pop();
   }
  },
};
