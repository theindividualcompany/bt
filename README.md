# Git Flow
Hey hey here’s the gist. 
We’re loosely using the git feature flow. Which means we have a master branch, release branch, and multiple feature branches per feature obviously. Loosely because we aren’t being completely strict on when or if we even create release branches. And aren’t defining features ahead of time nor is there a staging branch (“a branch to add a cushion between features and master”).

**Important to remember about this flow is master should always work**

**Also import is we rebase instead of merging because merge commits are annoying and ugly**

There’s a concept of current working branch. Ours is master for now.

The flow breaks down to this.
1. `checkout master`
2. **Omitted Currently** `checkout dev or staging` whatevs
3. `fetch origin` to find current and relevant feature branches. Branch off of the feature branch that makes the most sense. Or branch off master if your feature is distinct from any of features currently being worked on.
4. The branch you branched off of is now your “Current Working Directory”… meaning you should periodically check for updates.
	1. If your ‘index’ is ‘clear’ (meaning `git status` has only ‘untracked files’) you should `git pull --rebase origin ${current working branch}` to lay updates on top of the branch you’re working on.
	2. If your ‘index’ is ‘not clear’ (meaning `git status` has ‘modified’ or ‘removed’ files … meaning updating would get rid of the precious progress you made), you should  `git add .` then `git stash` then `git pull --rebase origin ${current working branch}` then `git stash pop`
5. When you’re done with your work and done making commits open a pull request ‘from’ your branch ‘to’ `${current working branch}`