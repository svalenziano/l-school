import socket

# Create TCP server
    # AF_INET = Default. IPv4 address family
    # SOCK_STREAM = Default. TCP socket, designed for continuous streams of data
    # https://docs.python.org/3/library/socket.html#socket.socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind the server to an address
host = 'localhost'
port = 3003
server_socket.bind((host, port))
server_socket.listen()
print(f"Server is running on {host}:{port}")

# Listen for new connections
while True:
    client_socket, addr = server_socket.accept()
    print(f"Connection from {addr}")

    # recv receives data from the socket, with a defined buffer size
    # decode = decode bytes into a string, see reference below:
        # https://docs.python.org/3/library/stdtypes.html#bytes.decode
    request_line = client_socket.recv(1024).decode('utf-8')

    # Ignore empty requests or requests for the favicon
    if (not request_line) or ('favicon.ico' in request_line):
        client_socket.close()
        continue

    # Get first line of HTTP request
    path_and_params = request_line.splitlines()[0]

    # Construct response
    response = ("HTTP/1.1 200 OK\r\n"
                "Content-Type: text/plain\r\n"
                "\r\n"
                f"{path_and_params}\n"
                )
    
    # Send to client
    client_socket.sendall(response.encode())
    client_socket.close()