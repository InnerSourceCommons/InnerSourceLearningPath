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

## update_links_in_translations.js

A node script to ensure article links point at the relevant translation if it exists, or default (English) if not.

### Usage:
```
npm ci
node update_links_in_translations.js
```

## generate_learning_path_markdown.js

Node script to generate markdown files required for hosting Learning Path on innersourcecommons.org.

This script requires a [GitHub access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token), as it uses the GitHub API to get Learning Path contributors. Your token does not require any scopes, as the Learning Path is Open Source. To provide this, create a `.env` file in this directory in the following format:
```
TOKEN=<your_github_token>
```

### Usage:
```
npm ci
node generate_learning_path_markdown.js
```

## How to update innersourcecommons.org with new articles

Anytime there are _any changes_, you need to run the script that generates the updated pages on the [innersourcecommons.org] site.

1. Clone the [InnerSourceCommons/InnerSourceLearningPath] and [InnerSourceCommons/innersourcecommons.org] repos.
1. Is this the first time that articles have been written for this language? If so:
  * make sure this language appears in the [website config](https://github.com/InnerSourceCommons/innersourcecommons.net/blob/master/config.yaml) and there are the relevant [index pages](https://github.com/InnerSourceCommons/innersourcecommons.net/blob/master/content/learn/_index.ru.md)
3. Is there a whole new Learning Path section? If so:
  * update the ["sections" config](https://github.com/InnerSourceCommons/InnerSourceLearningPath/blob/main/scripts/section_data.json) with the new section and open a pull request for the change
4. Run **generate_learning_path_markdown.js** as described above.
4. `cp -r newsite/ <path-to-innersourcecommons.org-repo>/content/learn/learning-path/`.
4. Open a pull request with the modified files in the [InnerSourceCommons/innersourcecommons.org] repo.

[innersourcecommons.org]: https://innersourcecommons.org/
[InnerSourceCommons/InnerSourceLearningPath]: https://github.com/InnerSourceCommons/InnerSourceLearningPath/
[InnerSourceCommons/innersourcecommons.org]: https://github.com/InnerSourceCommons/innersourcecommons.org
