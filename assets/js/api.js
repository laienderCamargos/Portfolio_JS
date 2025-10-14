

async function fetchProfileData() {
    // URL para o arquivo raw no GitHub - formato: /<user>/<repo>/main/<path>
    const githubUrl = 'https://raw.githubusercontent.com/laienderCamargos/Portfolio_JS/main/data/profile.json';
    const localUrl = '/data/profile.json';

    // Tenta buscar do GitHub primeiro; se falhar, tenta o arquivo local
    try {
        const res = await fetch(githubUrl);
        if (!res.ok) throw new Error(`GitHub fetch failed: ${res.status}`);
        return await res.json();
    } catch (err) {
        console.warn('GitHub fetch failed, trying local file:', err);
        const resLocal = await fetch(localUrl);
        if (!resLocal.ok) throw new Error(`Local fetch failed: ${resLocal.status}`);
        return await resLocal.json();
    }
}