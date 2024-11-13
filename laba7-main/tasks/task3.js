"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function updateUser(id, updatedData) {
  // Ваш код
}

console.log(updateUser(1, { name: 'New Name' }));

module.exports = updateUser;
"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function updateUser(id, updatedData) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';
  const url = `${baseUrl}/${id}`;

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    return null;
  }
}

console.log(updateUser(1, { name: 'New Name' }));

module.exports = updateUser;
