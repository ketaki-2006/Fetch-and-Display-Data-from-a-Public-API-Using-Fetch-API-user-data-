const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

const fetchUsers = async () => {
  userContainer.innerHTML = "<p>Loading users...</p>";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const users = await res.json();

    userContainer.innerHTML = "";

    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";

      card.innerHTML = `
        <h3>👤 ${user.name}</h3>
        <p><strong>📧 Email:</strong> ${user.email}</p>
        <p><strong>📍 Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;

      userContainer.appendChild(card);
    });
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">!! Failed to load users: ${error.message}</p>`;
  }
};

reloadBtn.addEventListener("click", fetchUsers);
window.addEventListener("load", fetchUsers);
