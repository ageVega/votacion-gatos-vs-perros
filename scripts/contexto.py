import os

def read_file_content(file_path):
    with open(file_path, 'r') as file:
        content = file.readlines()
    return content

def write_file_content(output_file, file_name, content):
    output_file.write(f"Content of {file_name}:\n")
    output_file.write(''.join(content))
    output_file.write('\n\n')

def read_specific_files(file_paths, output_path):
    # Asegúrate de que el directorio de salida exista
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w') as output_file:
        output_file.write('Algunos ficheros relevantes:\n')
        output_file.write('```\n')
        
        for file_path in file_paths:
            relative_path = os.path.relpath(file_path)
            output_file.write(f"{relative_path}\n")
                    
        output_file.write('```\n\n')
        
        for file_path in file_paths:
            content = read_file_content(file_path)
            relative_path = os.path.relpath(file_path)
            write_file_content(output_file, relative_path, content)

# Directorio actual donde se encuentra este script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Especifica las rutas de los archivos que quieres leer
file_paths = [
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'db.js'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'index.js'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'Dockerfile'),
    os.path.join(script_dir, '..', 'nginx', 'nginx.conf'),
    os.path.join(script_dir, '..', 'src', 'frontend', 'voto_frontend', 'src', 'App.js'),
    os.path.join(script_dir, '..', 'src', 'frontend', 'voto_frontend', 'src', 'Results.js'),
    os.path.join(script_dir, '..', 'src', 'frontend', 'voto_frontend', 'Dockerfile'),
    os.path.join(script_dir, '..', 'src', 'frontend', 'voto_frontend', 'nginx.conf'),
    os.path.join(script_dir, '..', 'docker-compose.yml')
]

# Especifica la ruta de salida
output_path = os.path.join(script_dir, '..', 'tmp', 'context.txt')

read_specific_files(file_paths, output_path)
