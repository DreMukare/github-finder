class GitHub{
  constructor() {
    this.clientId = '3bda463751d3983ff28f';
    this.clientSecret = '5554a0dd45aadedccea7305632613815ddff07b6';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
    
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return{
      profile,
      repos
    }
  }
}