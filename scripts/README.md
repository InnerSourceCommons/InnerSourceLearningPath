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

Anytime there are _new_ articles written, you need to run the script that generates the new pages on the _innersourcecommons.org_ site.

1. Is this the first time that articles have been written for this section in this language?
If so, then update



Create branch

cp -r learningpath/* <path-to-innersourcecommons.org-repo>/resources/learningpath/
```
