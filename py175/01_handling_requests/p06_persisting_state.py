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
    http_method, path, _ = request_line.split(" ")
    params_dict = {}
    
    if '?' in path:
        path, query_string = path.split("?")

        params = query_string.split("&")
        for param in params:
            key, value = param.split("=")
            params_dict[key] = value

    response = (
        "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n"
        "<html><head><title>Counter</title></head><body>"
        f"<h1>HTTP Request Information:</h1>"
        f"<p><strong>Request Line:</strong> {request_line}</p>"
        f"<p><strong>HTTP Method:</strong> {http_method}</p>"
        f"<p><strong>Path:</strong> {path}</p>"
        f"<p><strong>Parameters:</strong> {params_dict}</p>"
        "<h2>Counter:</h2>"
        "</body></html>"
    )

    client_socket.sendall(response.encode())
    client_socket.close()