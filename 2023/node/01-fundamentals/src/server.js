import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
    const { method, url } = request
    
    if(method === 'GET' && url === '/users') {

        return response
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Leonardo',
            email: 'leonardo@icloud.com'
        })
        return response.end('Criação de usuário')
    }

    return response.end('Hello Ignite!')
})

server.listen(3333)