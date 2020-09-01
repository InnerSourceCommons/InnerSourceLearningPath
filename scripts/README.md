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