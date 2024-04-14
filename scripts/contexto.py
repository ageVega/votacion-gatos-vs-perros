import os

def read_file_content(file_path):
    with open(file_path, 'r') as file:
        content = file.readlines()
    return content

def write_file_content(output_file, file_name, content):
    output_file.write(f"Content of {file_name}:\n")
    output_file.write(''.join(content))
    output_file.write('\n\n')

def print_directory_tree(startpath, output_file, ignore_dirs=None):
    if ignore_dirs is None:
        ignore_dirs = ['.git']  # Default ignore directories
    output_file.write('Estructura del proyecto:\n')
    output_file.write('```\n')
    for root, dirs, files in os.walk(startpath, topdown=True):
        dirs[:] = [d for d in dirs if d not in ignore_dirs]
        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 4 * (level)
        output_file.write('{}{}/\n'.format(indent, os.path.basename(root)))
        subindent = ' ' * 4 * (level + 1)
        for f in files:
            output_file.write('{}{}\n'.format(subindent, f))
    output_file.write('```\n\n')

def clean_up_file(output_path):
    with open(output_path, 'r') as file:
        content = file.read()
    content = content.replace('../../../', '')
    with open(output_path, 'w') as file:
        file.write(content)

def read_specific_files(file_paths, output_path, directory_for_tree):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w') as output_file:
        print_directory_tree(directory_for_tree, output_file)
        
        output_file.write('Algunos ficheros relevantes:\n')
        output_file.write('```\n')
        
        for file_path in file_paths:
            relative_path = os.path.relpath(file_path, directory_for_tree)
            output_file.write(f"{relative_path}\n")
                    
        output_file.write('```\n\n')
        
        for file_path in file_paths:
            content = read_file_content(file_path)
            relative_path = os.path.relpath(file_path, directory_for_tree)
            write_file_content(output_file, relative_path, content)

    clean_up_file(output_path)

# Directorio actual donde se encuentra este script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Especifica las rutas de los archivos que quieres leer
file_paths = [
    os.path.join(script_dir, '..', 'docker-compose.yml'),
    os.path.join(script_dir, '..', 'nginx', 'nginx.conf'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'Dockerfile'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'app.js'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'server.js'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'utils', 'mongoDbTestConnection.js'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'models', 'mongoDbConnection.js'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'middlewares', 'mongoDbMiddleware.js'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'middlewares', 'errorHandler.js'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'routes', 'voteRoutes.js'),
    os.path.join(script_dir, '..', 'src', 'backend', 'votacion', 'routes', 'resultsRoutes.js'),
    os.path.join(script_dir, '..', 'src', 'frontend', 'votacion', 'Dockerfile'),
    os.path.join(script_dir, '..', 'src', 'frontend', 'votacion', 'nginx.conf'),
    os.path.join(script_dir, '..', 'src', 'frontend', 'votacion', 'src', 'App.js'),
    os.path.join(script_dir, '..', 'src', 'frontend', 'votacion', 'src', 'Results.js')
]

# Especifica la ruta de salida
output_path = os.path.join(script_dir, '..', 'tmp', 'context.txt')

# Directorio desde el cual se debe generar el 'tree'
directory_for_tree = '/mnt/c/Users/Super Vega/Desktop/Repos/GatoPerro/votacion-gatos-vs-perros/tmp/limpio/votacion-gatos-vs-perros'

read_specific_files(file_paths, output_path, directory_for_tree)
