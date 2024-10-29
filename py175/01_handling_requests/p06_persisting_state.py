import socket
import random

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
port = 9666
while True:
    try:
        server_socket.bind(('localhost', port))
    except OSError:
        print(f"Port {port} failed, trying port {port + 1}")
        port += 1
    break
server_socket.listen()

print(f"Server is running on localhost:{port}")

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

    # Update dict values
    params_dict.setdefault('counter', 1)
    counter = params_dict['counter']
    if 'operation' in params_dict:
        if params_dict['operation'] == 'add_1':
            counter = int(counter) + 1
        elif params_dict['operation'] == 'sub_1':
            counter = int(counter) - 1


    response = (
        "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n"
        "<html><head><title>Counter</title></head><body>"
        f"<h1>HTTP Request Information:</h1>"
        f"<p><strong>Request Line:</strong> {request_line}</p>"
        f"<p><strong>HTTP Method:</strong> {http_method}</p>"
        f"<p><strong>Path:</strong> {path}</p>"
        f"<p><strong>Parameters:</strong> {params_dict}</p>"
        "<h2>Counter:</h2>"
        f"<p color='red'>The current number is: {counter}</p>"
        "<p>"
        f"""<a href="?counter={counter}&operation=sub_1">[-1]</a> """
        f"""<a href="?counter={counter}&operation=add_1">[+1]</a>"""
        "</p>"
        "</body></html>"
    )

    client_socket.sendall(response.encode())
    client_socket.close()