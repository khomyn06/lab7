"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // Створюємо новий масив, вибираючи тільки потрібні поля
    const users = [];
    data.forEach(user => {
      users.push({ id: user.id, name: user.name });
    });

    return users;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
    return [];
  }
}

console.log(fetchUsers());

module.exports = fetchUsers;
