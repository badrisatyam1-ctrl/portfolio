import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const headers = {
      "User-Agent": "Portfolio-App",
    };

    // Fetch user profile for total repos
    const userRes = await fetch("https://api.github.com/users/badrisatyam1-ctrl", {
      headers,
      cache: "no-store",
    });
    
    if (!userRes.ok) {
      throw new Error("Failed to fetch GitHub user");
    }
    const userData = await userRes.json();

    // Fetch repositories
    const reposRes = await fetch("https://api.github.com/users/badrisatyam1-ctrl/repos?per_page=100&sort=updated", {
      headers,
      cache: "no-store",
    });
    
    if (!reposRes.ok) {
      throw new Error("Failed to fetch GitHub repos");
    }
    const reposData = await reposRes.json();

    let totalStars = 0;
    let totalForks = 0;
    const languagesMap: Record<string, number> = {};

    const activeRepos = reposData
      .filter((repo: any) => !repo.fork)
      .map((repo: any) => {
        totalStars += repo.stargazers_count;
        totalForks += repo.forks_count;
        
        if (repo.language) {
          languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
        }

        return {
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language || "Unknown",
          languageColor: getLanguageColor(repo.language),
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: repo.updated_at
        };
      })
      .sort((a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 4); // Top 4 recent repos

    // Fake a commit count and streak based on repos if needed, or rely on fallback since
    // GitHub API doesn't expose exact "total commits" without heavy querying.
    // We will just use the fallback values for commits/streak since they require scraping.
    
    return NextResponse.json({
      totalRepos: userData.public_repos,
      totalStars,
      totalForks,
      repos: activeRepos,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}

function getLanguageColor(lang: string | null) {
  const colors: Record<string, string> = {
    Python: "#3572A5",
    "C++": "#f34b7d",
    C: "#555555",
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    HTML: "#e34c26",
    CSS: "#563d7c",
    "Jupyter Notebook": "#DA5B0B",
  };
  return lang && colors[lang] ? colors[lang] : "#8b949e";
}
