# Tension project rules

## Required deployment accounts

Use the following project and account identities for repository and deployment work in this project.

### Vercel

- Project ID: `prj_fQE63OkaCuLzw4SwDjbuCIaYDyg7`
- Account email: `edukeme@gmail.com`
- Deployment provider: Vercel

### GitHub

- Organization/account: `https://github.com/edukeme`
- GitHub user: `edukeme`
- Repository: `https://github.com/edukeme/tension-web`
- Account email: `edukeme@gmail.com`
- Expected git remote: `origin` pointing to the repository above
- Git pushes must authenticate as `edukeme`; `paulogaudencio` is a separate Vercel identity and is not the GitHub deployment identity for this project.

## Credential handling

- Never commit, document, print, or otherwise persist access tokens, personal access tokens, API keys, or passwords in this repository.
- Obtain GitHub and Vercel credentials from an approved secret store, authenticated CLI session, or environment variable at execution time.
- Verify the active GitHub and Vercel identities match the accounts above before pushing or deploying.
- Do not silently substitute a different GitHub repository, Vercel project, organization, or account.
- If authentication is invalid or the active identity lacks access, stop and request re-authentication instead of changing the deployment target.
