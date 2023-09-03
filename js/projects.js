fetch('/json/projects.json')
    .then(response => response.json())
    .then(data => {
        const template = document.getElementById('project-template').innerHTML;
        const compiledTemplate = Handlebars.compile(template);
        const rendered = compiledTemplate({ projects: data });
        document.getElementById('projects').innerHTML = rendered;
    });

    