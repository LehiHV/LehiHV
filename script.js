const yearElement = document.getElementById("year");
const projectsContainer = document.getElementById("github-projects");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}

function createProjectCard(repo) {
  const language = repo.language ? `<span>${repo.language}</span>` : "";

  return `
    <article class="project reveal">
      <h3>${repo.name}</h3>
      <p>${repo.description || "Repositorio sin descripcion."}</p>
      <div class="project-meta">
        ${language}
        <span>⭐ ${repo.stargazers_count}</span>
      </div>
      <a class="project-link" href="${repo.html_url}" target="_blank" rel="noreferrer">Ver repositorio</a>
    </article>
  `;
}

async function loadGitHubProjects() {
  if (!projectsContainer) {
    return;
  }

  try {
    const response = await fetch("https://api.github.com/users/LehiHV/repos?per_page=100&sort=updated");

    if (!response.ok) {
      throw new Error("No se pudo consultar GitHub");
    }

    const repos = await response.json();
    const portfolioRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    if (!portfolioRepos.length) {
      projectsContainer.innerHTML = `
        <article class="project reveal">
          <h3>Sin proyectos para mostrar</h3>
          <p>Publica al menos un repositorio para construir esta seccion automaticamente.</p>
        </article>
      `;
      return;
    }

    projectsContainer.innerHTML = portfolioRepos.map(createProjectCard).join("");
  } catch (error) {
    projectsContainer.innerHTML = `
      <article class="project reveal">
        <h3>No se pudieron cargar los proyectos</h3>
        <p>Intenta nuevamente en unos segundos o visita mi perfil de GitHub directamente.</p>
        <a class="project-link" href="https://github.com/LehiHV" target="_blank" rel="noreferrer">Ir a GitHub</a>
      </article>
    `;
  }
}

loadGitHubProjects();
