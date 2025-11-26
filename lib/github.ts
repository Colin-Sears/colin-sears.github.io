import { GitHubStats } from './types';

/**
 * GitHub API Integration
 * 
 * This file contains functions to fetch GitHub statistics.
 * For production, you'll need to:
 * 1. Add NEXT_PUBLIC_GITHUB_TOKEN to your .env.local file
 * 2. Get a personal access token from GitHub settings
 * 3. Update the username in fetchGitHubStats
 */

const GITHUB_API = 'https://api.github.com';

interface GitHubRepo {
  name: string;
  stargazers_count: number;
  language: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
}

/**
 * Fetch GitHub user statistics
 * @param username - GitHub username
 * @returns GitHub statistics
 */
export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add token if available (increases rate limit)
    if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
    }

    // Fetch user data
    const userResponse = await fetch(`${GITHUB_API}/users/${username}`, { headers });
    const userData: GitHubUser = await userResponse.json();

    // Fetch repositories
    const reposResponse = await fetch(`${GITHUB_API}/users/${username}/repos?per_page=100`, { headers });
    const repos: GitHubRepo[] = await reposResponse.json();

    // Calculate total stars
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    // Calculate language statistics
    const languageCount: Record<string, number> = {};
    repos.forEach(repo => {
      if (repo.language) {
        languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
      }
    });

    const totalReposWithLanguage = Object.values(languageCount).reduce((sum, count) => sum + count, 0);
    const languages = Object.entries(languageCount)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / totalReposWithLanguage) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5); // Top 5 languages

    return {
      totalCommits: 0, // Requires additional API calls to get commit count
      publicRepos: userData.public_repos,
      contributions: 0, // Requires scraping or GitHub GraphQL API
      languages,
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    // Return placeholder data on error
    return {
      totalCommits: 0,
      publicRepos: 0,
      contributions: 0,
      languages: [],
    };
  }
}

/**
 * Fetch GitHub contribution data (simplified version)
 * Note: This is a placeholder. For real contribution data, you'd need to:
 * - Use GitHub's GraphQL API
 * - Or scrape the contributions graph
 */
export async function fetchGitHubContributions(username: string): Promise<number> {
  // Placeholder - implement GraphQL query or web scraping
  return 0;
}
