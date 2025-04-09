import { useState, useEffect, useRef, useMemo } from "react";
import "./UserSearchApp.css";

const initialUsers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com" },
    { id: 6, name: "Diana White", email: "diana@example.com" },
    { id: 7, name: "Ethan Green", email: "ethan@example.com" },
    { id: 8, name: "Fiona Black", email: "fiona@example.com" },
    { id: 9, name: "George Blue", email: "george@example.com" },
    { id: 10, name: "Hannah Red", email: "hannah@example.com" },
];

const UserSearchApp = () => {
    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState("");
    const [newUserName, setNewUserName] = useState("");
    const [newUserEmail, setNewUserEmail] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [sortBy, setSortBy] = useState("Default");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const filteredUsers = useMemo(() => {
        let result = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (sortBy === "name") {
            result = result.sort((a, b) => a.name.localeCompare(b.name));
        }
        return result;
    }, [searchTerm, users, sortBy]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const addUser = () => {
        if (newUserName.trim() !== "" && newUserEmail.trim() !== "") {
            setUsers([
                ...users,
                {
                    id: users.length + 1,
                    name: newUserName,
                    email: newUserEmail,
                },
            ]);
            setNewUserName(""); 
            setNewUserEmail("");
        }
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const showUserDetails = (user) => {
        setSelectedUser(user);
    };

    const closeUserDetails = () => {
        setSelectedUser(null);
    };

    return (
        <div className="container">
            <h1>İstifadəçi Axtarışı və İdarəetməsi</h1>
            <h2>Yeni İstifadəçi Əlavə Et</h2>
            <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="İstifadəçi adı"
            />
            <input
                type="email"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                placeholder="İstifadəçi email"
            />
            <button onClick={addUser} style={{width: "100%", marginBottom: "10px"}}>Əlavə et</button>
            <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="İstifadəçi adı ilə axtarış edin..."
            />

            <div>
                <label>Sırala:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="default">Seçin</option>
                    <option value="name">Ada görə</option>
                </select>
            </div>

            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={() => showUserDetails(user)}
                        >
                            {user.name}
                        </span>
                        <button onClick={() => deleteUser(user.id)}>Sil</button>
                    </li>
                ))}
            </ul>

            <div>
                <strong>Ümumi istifadəçilər:</strong> {users.length}
            </div>
            <div>
                <strong>Axtarış nəticələri:</strong> {filteredUsers.length}
            </div>

            {selectedUser && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        padding: "20px",
                        backgroundColor: "white",
                        border: "1px solid black",
                        zIndex: 1000,
                    }}
                >
                    <h2>{selectedUser.name}</h2>
                    <p>Email: {selectedUser.email}</p>
                    <button onClick={closeUserDetails}>Bağla</button>
                </div>
            )}
        </div>
    )
}

export default UserSearchApp
