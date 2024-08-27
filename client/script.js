document.addEventListener("DOMContentLoaded", function () {

    const URI = "http://localhost:5431/users";  // Backend(server) URI

    // Add User Form Submission
    const addUserForm = document.getElementById('addUserForm');
    if (addUserForm) {
        addUserForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const user = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                age: parseInt(document.getElementById('age').value),
                weight: parseFloat(document.getElementById('weight').value),
                height: parseFloat(document.getElementById('height').value),
                healthGoals: document.getElementById('healthGoals').value,
            };

            const response = await fetch(URI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const result = await response.json();
            alert(result.message);
        });
    }

    // Fetch Users and populate table
    const userTable = document.getElementById('userTable');
    if (userTable) {
        fetchUsers();
    }

    async function fetchUsers() {
        const response = await fetch(URI);
        const result = await response.json();

        if (result.code === 1) {
            const tbody = document.querySelector('#userTable tbody');
            tbody.innerHTML = '';
            result.data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.weight}</td>
                    <td>${user.height}</td>
                    <td class="table__action_btn_container">
                        <button onclick="viewUser('${user.id}')">View</button>
                        <button onclick="editUser('${user.id}')">Edit</button>
                        <button onclick="deleteUser('${user.id}')">Delete</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        } else {
            alert(result.message);
        }
    }

    // View User
    window.viewUser = async function (id) {
        const response = await fetch(`${URI}/${id}`);
        const result = await response.json();

        if (result.code === 1) {
            const user = result.data;

            const userDetailsDiv = document.getElementById('userDetails');
            userDetailsDiv.innerHTML = `
            <div class="user-detail"><label>ID:</label> ${user.id}</div>
            <div class="user-detail"><label>Name:</label> ${user.name}</div>
            <div class="user-detail"><label>Email:</label> ${user.email}</div>
            <div class="user-detail"><label>Age:</label> ${user.age}</div>
            <div class="user-detail"><label>Weight:</label> ${user.weight}</div>
            <div class="user-detail"><label>Height:</label> ${user.height}</div>
            <div class="user-detail"><label>Health Goals:</label> ${user.healthGoals || 'N/A'}</div>
        `;

            document.getElementById('userDetailsModal').style.display = 'block';
        } else {
            alert(result.message);
        }
    };

    document.getElementById("modelCloseBtn").addEventListener('click', closeModal);

    function closeModal() {
        document.getElementById('userDetailsModal').style.display = 'none';
    }

    // Edit User
    window.editUser = async function (id) {
        const response = await fetch(`${URI}/${id}`);
        const result = await response.json();

        if (result.code === 1) {
            const user = result.data;
            const form = document.createElement('form');
            form.innerHTML = `
                <input type="text" id="editName" value="${user.name}" required>
                <input type="email" id="editEmail" value="${user.email}" required>
                <input type="number" id="editAge" value="${user.age}" required>
                <input type="number" id="editWeight" value="${user.weight}" required>
                <input type="number" id="editHeight" value="${user.height}" required>
                <input type="text" id="editHealthGoals" value="${user.healthGoals}">
                <button type="submit"><b>Update User</b></button>
            `;
            document.getElementById("updateUserId").innerHTML = `<b>User ID: </b><i>${user.id}</i>`

            form.addEventListener('submit', async function (e) {
                e.preventDefault();
                const updatedUser = {
                    name: document.getElementById('editName').value,
                    email: document.getElementById('editEmail').value,
                    age: parseInt(document.getElementById('editAge').value),
                    weight: parseFloat(document.getElementById('editWeight').value),
                    height: parseFloat(document.getElementById('editHeight').value),
                    healthGoals: document.getElementById('editHealthGoals').value,
                };

                const response = await fetch(`${URI}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                });

                const result = await response.json();
                if (result.code == 1) {
                    document.querySelector('#updateContainer').style.display = 'none';
                    document.querySelector('#updateContainer').removeChild(form);
                }
                alert(result.message);
                fetchUsers();
            });
            document.querySelector('#updateContainer').style.display = 'block';
            document.querySelector('#updateContainer').appendChild(form);
        } else {
            alert(result.message);
        }
    };

    // Delete User
    window.deleteUser = async function (id) {
        const confirm = window.confirm("Are you sure that you have to delete this user?");
        if (confirm) {
            const response = await fetch(`${URI}/${id}`, {
                method: 'DELETE'
            });

            const result = await response.json();
            alert(result.message);
            fetchUsers();
        }
    };
});
