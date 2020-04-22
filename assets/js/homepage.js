var getUserRepos = function() {
    console.log("function was called");
    //fetch used to gather info from git API
    fetch("https://api.github.com/users/octocat/repos");
};
  
getUserRepos();