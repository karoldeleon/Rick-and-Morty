
export const validation = (userData) => {
   const regexEmail = /^(?=.{1,35}$)[^\s@]+@[^\s@]+\.[^\s@]+$/
   const regexPassword = /^(?=.*\d)[\w\d]{6,10}$/
    let errors = {};

   if (!regexEmail.test(userData.email)) {
      errors.email = 'Debe ser un correo electrónico valido';
   }
  
   if (!regexPassword.test(userData.password)) {
    errors.password = 'La Contrasena es invalida';
    }

   return errors;
  }