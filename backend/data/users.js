import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'omar nawito',
        email: 'omar@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'nawito',
        email: 'nawito@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;