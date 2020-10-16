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

## generate_learning_path_markdown.js

A node script to generate markdown files required for hosting Learning Path on innersourcecommons.org.

### Usage:
```
npm ci
node generate_learning_path_markdown.js
```

## How to update innersourcecommons.org with new articles

Anytime there are _new_ articles written, you need to run the script that generates the new pages on the [innersourcecommons.org] site.

1. Clone the [InnerSourceCommons/InnerSourceLearningPath] and [InnerSourceCommons/innersourcecommons.org] repos.
1. Is this the first time that articles have been written for this section in this language?
If so, then update the ["sections" config](https://github.com/InnerSourceCommons/InnerSourceLearningPath/blob/master/scripts/generate_learning_path_markdown.js#L37) with the language code of the articles for the appropriate section.
Open a pull request for the change.
1. Run **generate_learning_path_markdown.js** as described above.
1. `cp -r learningpath/* <path-to-innersourcecommons.org-repo>/resources/learningpath/`.
1. Open a pull request with the modified files in the [InnerSourceCommons/innersourcecommons.org] repo.

Note that these steps only needs to happen when there are new articles written.
Changes to existing articles will automatically show up on the [innersourcecommons.org] site.

[innersourcecommons.org]: http://www.innersourcecommons.org/
[InnerSourceCommons/InnerSourceLearningPath]: https://github.com/InnerSourceCommons/InnerSourceLearningPath/
[InnerSourceCommons/innersourcecommons.org]: https://github.com/InnerSourceCommons/innersourcecommons.org
