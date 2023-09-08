// Импортируем Firebase и модуль аутентификаци


// Регистрация нового пользователя
export function register(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Успешно зарегистрирован новый пользователь
      const user = userCredential.user;
      console.log('Новый пользователь:', user);
      return user;
    })
    .catch((error) => {
      // Произошла ошибка при регистрации пользователя
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Ошибка:', errorCode, errorMessage);
      throw error;
    });
}

// Вход пользователя
export function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Успешный вход пользователя
      const user = userCredential.user;
      console.log('Пользователь вошел:', user);
      return user;
    })
    .catch((error) => {
      // Произошла ошибка при входе пользователя
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Ошибка:', errorCode, errorMessage);
      throw error;
    });
}

// Выход пользователя
export function logout() {
  return firebase.auth().signOut()
    .then(() => {
      // Пользователь вышел
      console.log('Пользователь вышел');
    })
    .catch((error) => {
      // Произошла ошибка при выходе пользователя
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Ошибка:', errorCode, errorMessage);
      throw error;
    });
}

// Другие функции для управления аутентификацией пользователей...