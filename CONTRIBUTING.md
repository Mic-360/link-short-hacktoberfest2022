
# Contribution Rules 📚:

- You are allowed to make spam pull requests.
- Do Not add any use less package.
- Do NOT remove other content.
- Styling/code has to be linted and pretty and it should work.
- Write a Comment and Review on your PR.
- Add your image to the Contributors Section.
- Try to keep pull requests small to minimize merge conflicts


## Getting Started 🤩🤗:

- Fork this repo
- Clone on your local machine

```terminal
git clone https://github.com/mic-360/link-short-hacktoberfest2022.git
```
- Navigate to project directory.
```terminal
cd link-short-hacktoberfest2022
```

- Create a new Branch

```markdown
git checkout -b < your-new-branch >
```

- Commit your changes.

```markdown
git commit -m "Change-Related-hint: Something which makes sense"
```

- Then push
```markdown
git push origin < your-new-branch >
```


- Create a new pull request from your forked repository

<br>

## Avoid Conflicts 🥠

An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.

```terminal
git remote add upstream https://github.com/mic-360/link-short-hacktoberfest2022
```

You can verify that the new remote has been added by typing
```terminal
git remote -v
```

To pull any new changes from your parent repo simply run
```terminal
git merge upstream/master
```

This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.