# Highlighted lines indicate changes from echo_server.py

import socket
import random

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 3003))
server_socket.listen()

print("Server is running on localhost:3003")

while True:
    client_socket, addr = server_socket.accept()
    print(f"Connection from {addr}")

    request = client_socket.recv(1024).decode()
    if not request or 'favicon.ico' in request:
        client_socket.close()
        continue
    
    request_line = request.splitlines()[0]
    http_method, path, http_version, *extras = request_line.split(" ")
    path, params  = path.split('?')
    params = params.split('&')
    params_dict = {}
    for param in params:
        key, value = param.split('=')
        params_dict[key] = value

    number_of_rolls = int(params_dict['rolls'])
    sides = int(params_dict['sides'])
    '''
    for each roll
        append roll as string with newline \n
    '''
    rolls = ''
    for num in range(number_of_rolls):
        rolls += f"Roll: {random.randint(1, sides)}\n"


    response = ("HTTP/1.1 200 OK\r\n"
                "Content-Type: text/plain\r\n"
                "\r\n"
                f"Request Line: {request_line}\n"
                f"HTTP Method: {http_method}\n"
                f"Path: {path}\n"
                f"Parameters: {params_dict}\n"
                f"{rolls}")

    client_socket.sendall(response.encode())
    client_socket.close()