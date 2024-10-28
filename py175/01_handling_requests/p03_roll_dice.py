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

    request_line = client_socket.recv(1024).decode()
    if not request_line or 'favicon.ico' in request_line:
        client_socket.close()
        continue

    roll = random.randint(1, 6)

    path_and_params = request_line.splitlines()[0]
    response = ("HTTP/1.1 200 OK\r\n"
                "Content-Type: text/plain\r\n"
                "\r\n"
                f"{path_and_params}\n"
                f"{roll}\n")

    client_socket.sendall(response.encode())
    client_socket.close()