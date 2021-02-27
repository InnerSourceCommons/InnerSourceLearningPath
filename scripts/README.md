All of these scripts require you to have _Node_ available in your environment.
Get it from [NodeJS.org](https://nodejs.org/en/).

## substitute_article_urls.js

A node script to replace all Learning Path article links with urls for a particular platform, using [urls.yaml](../config/urls.yaml).

### Usage:
```
npm ci
node substitute_article_urls.js $TARGET
```
For example, to point all links to innersourcecommons.org:
```
node substitute_article_urls.js isc
```

## generate_jekyll_learning_path_markdown.js, generate_hugo_learning_path_markdown.js

Node scripts to generate markdown files required for hosting Learning Path on innersourcecommons.org and innersourcecommons.net.

These scripts require a [GitHub access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token), as they use the GitHub API to get Learning Path contributors. Your token does not require any scopes, as the Learning Path is Open Source. To provide this, create a `.env` file in this directory in the following format:
```
TOKEN=<your_github_token>
```

### Usage:
```
npm ci
node generate_jekyll_learning_path_markdown.js
node generate_hugo_learning_path_markdown.js
```

## How to update innersourcecommons.org with new articles

Anytime there are _new_ articles written, you need to run the script that generates the new pages on the [innersourcecommons.org] site.

1. Clone the [InnerSourceCommons/InnerSourceLearningPath] and [InnerSourceCommons/innersourcecommons.org] repos.
1. Is this the first time that articles have been written for this section in this language?
If so, then do both of the following:

  * update the ["sections" config](https://github.com/InnerSourceCommons/InnerSourceLearningPath/blob/master/scripts/section_data.json) with the language code of the articles for the appropriate section.
Open a pull request for the change.
  * update the [Learning Path landing page](https://github.com/InnerSourceCommons/innersourcecommons.org/blob/master/resources/learningpath/index.md) with a link to your new language pages.

3. Run **generate_jekyll_learning_path_markdown.js** as described above.
3. `cp -r learningpath/* <path-to-innersourcecommons.org-repo>/resources/learningpath/`.
3. Open a pull request with the modified files in the [InnerSourceCommons/innersourcecommons.org] repo.

Note that these steps only needs to happen when there are new articles written.
Changes to existing articles will automatically show up on the [innersourcecommons.org] site.

## How to update innersourcecommons.net

Anytime there are _any changes_, you need to run the script that generates the updated pages on the [innersourcecommons.net] site.

1. Clone the [InnerSourceCommons/InnerSourceLearningPath] and [InnerSourceCommons/innersourcecommons.net] repos.
1. Is this the first time that articles have been written for this section in this language?
If so, then do both of the following:

  * update the ["sections" config](https://github.com/InnerSourceCommons/InnerSourceLearningPath/blob/master/scripts/section_data.json) with the language code of the articles for the appropriate section and open a pull request for the change
  * make sure this language appears in the [website config](https://github.com/InnerSourceCommons/innersourcecommons.net/blob/master/config.yaml) and there are the relevant [index pages](https://github.com/InnerSourceCommons/innersourcecommons.net/blob/master/content/learn/_index.ru.md)

3. Run `node substitute_article_urls.js isc.net` as described above. This changes the asciidoc source files' links to point at [innnersourcecommons.net] - do not commit this change!
3. Run **generate_hugo_learning_path_markdown.js** as described above.
3. `cp -r newsite/ <path-to-innersourcecommons.net-repo>/content/learn/learning-path/`.
3. Open a pull request with the modified files in the [InnerSourceCommons/innersourcecommons.net] repo.

[innersourcecommons.org]: https://innersourcecommons.org/
[innersourcecommons.net]: https://innersourcecommons.net/
[InnerSourceCommons/InnerSourceLearningPath]: https://github.com/InnerSourceCommons/InnerSourceLearningPath/
[InnerSourceCommons/innersourcecommons.org]: https://github.com/InnerSourceCommons/innersourcecommons.org
[InnerSourceCommons/innersourcecommons.net]: https://github.com/InnerSourceCommons/innersourcecommons.net
