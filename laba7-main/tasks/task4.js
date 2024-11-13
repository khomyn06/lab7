"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function deleteUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });
    
    deleteUser(1)
  .then(status => {
    if (status === 200) {
      console.log('Користувач успішно видалений');
    } else {
      console.error('Виникла помилка при видаленні користувача');
    }
  })
  .catch(error => {
    console.error('Помилка:', error);
  });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.status;
  } catch (error) {
    console.error('Error deleting user:', error);
    return null;
  }
}

console.log(deleteUser(1));

module.exports = deleteUser;
