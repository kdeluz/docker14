# Kyle Deluz's Portfolio Website

## Overview

This is a portfolio website built with React to showcase the coursework and projects completed during my Full Stack Web Development program at Red River College. The site includes sections for basic information, work, skills, resources, and developer setup.

## Project Structure

- **Basic Information**: General details about me.
- **Work**: Highlights of my projects.
- **Skills**: Technical skills I have acquired.
- **Resources**: Useful resources and links.
- **Developer Setup**: Information about my development environment.

## Docker Setup

### Dockerfile Requirements

1. Create a Docker container that hosts a production build of the Create React App for the portfolio site.
2. Name the container `deluz_kyle_coding_assignment14`.
3. Host the site files in a working directory called `deluz_kyle_final_site`.

### Dockerfile

```dockerfile
# Dockerfile
FROM node:14-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Running the Docker Container

1. Build the Docker image:

    ```bash
    docker build -t deluz_kyle_coding_assignment14 .
    ```

2. Run the Docker container:

    ```bash
    docker run -d -p 5575:80 --name deluz_kyle_coding_assignment14 deluz_kyle_coding_assignment14
    ```

3. Open your browser and visit `http://localhost:5575`.

## Contact
- **LinkedIn**: [kdeluz](https://www.linkedin.com/in/kdeluz/)
- **GitHub**: [kdeluz](https://github.com/kdeluz)