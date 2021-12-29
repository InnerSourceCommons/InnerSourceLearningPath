Thanks for contributing.
Here's the overall contribution process for a segment in the InnerSource Learning Path.
The output of each step should be reviewed in the [#learning-path] working group before it is considered "done"

1. Create an [outline](./outline-template.md).
1. Create a written article.
1. Film the video.
1. Create assessment questions.

The [#learning-path] community has professional-grade filming equipment that you may borrow for the video portion of your segment.

Here's a few tips as you go along:

# Translations

* All articles may be translated into any language of interest.
* Instead of translating from scratch, consider starting with [machine-translated text](https://www.deepl.com/translator) and revising from there.
* Translated articles should be stored next to the English articles in a subfolder named as the [two-character language code](https://www.loc.gov/standards/iso639-2/php/code_list.php) of the translation (e.g. the `de` subfolder for German).
* The filename of the article should be changed to include two-character language code prefix.
* The special `index.md` files for each section should also be translated, as they are used in the Learning Path section of the [new website](https://innersourcecommons.net/learn/learning-path/)
* After `index.md` file and the first article (01-*.asciidoc) for a section are translated and merged, all landing page links in translated articles can be pointed to the translated landing page. (e.g. [landing page for Contributor in German](https://innersourcecommons.org/de/learn/learning-path/contributor))
* The following are special terms and should not be translated:
  * `InnerSource`
  * `Trusted Committer`
* Issues tracking translations on the [project board](https://github.com/InnerSourceCommons/InnerSourceLearningPath/projects/1) should be labeled with the `Translations` tag as well as the tag of the section being translated (e.g. `Contributor`).
Here is [an example](https://github.com/InnerSourceCommons/InnerSourceLearningPath/issues/255).
* Here is the [status of translation efforts](https://github.com/InnerSourceCommons/InnerSourceLearningPath/wiki/Translations).
* Other mechanics of working on translations follow the guidelines below that apply to any file in the `InnerSourceLearningPath`.

# Subtitles

* All videos may have subtitles in any language.
* See [this video](https://drive.google.com/file/d/1IaAH8Zmp2ggBtelexhaZUqia5yS8mUjE/view?usp=sharing) for how to add them.

# Files

* When submitting new files, follow the folder structure listed under **Repository Setup** in [the README](./README.md).
* Write each new sentence on a new line.
GitHub allows leaving comments on a line-by-line basis.
Review and comment on the content of submitted text is much easier if there are multiple lines on-which to leave comments.
Sentences on consecutive lines will be collapsed into a single paragraph (like this one) in the final rendering of the content.
* Avoiding inserting non-sentence or structure-intended extra line breaks.
This approach allows for easier editing and re-arrangement of text.
* When reviewing a pull request, make suggestions via regular comment.
If you have a specific text to suggest, use the [the _GitHub_ "suggestion" feature][suggestion feature].
The author can easily [incorporate your suggestions][incorporate suggestions].
* Spell the term as `InnerSource` (Pascal cased).
* Avoid "verbifying" the noun `InnerSource`, e.g. try something like `adopting InnerSource` as opposed to `InnerSourcing`.

# Issues

* When opening a new issue, be sure to add it to the `Learning Path Segements` project so that appears on the [project board].
* If the issue is specific to the `Introduction`, `Trusted Committer`, `Product Owner`, or `Contributor` section, then add those label(s).
If the issue applies to the Learning Path in-general but not to any specific section then use the `Meta` label.

[suggestion feature]: https://help.github.com/articles/commenting-on-a-pull-request/#adding-line-comments-to-a-pull-request
[incorporate suggestions]: https://help.github.com/articles/incorporating-feedback-in-your-pull-request/
[project board]: https://github.com/InnerSourceCommons/InnerSourceLearningPath/projects/1

# Review

When reviewing a video:

* Each video should teach all of the information needed to answer the corresponding workbook questions.
* The information in the video should also be harmonious with the corresponding written article,
although the article may provide additional detail not covered in the video.
* The purpose of video review is to ensure that:
  * the video relates correctly to its corresponding workbook/article.
  * the speaker and message are clear and easy to understand.
* Any comments for video changes should be made directly in the _Screenlight_ tool.
If review of the video prompts an idea for change in the corresponding workbook/article,
then those comments/suggestions should be made against the source text _GitHub_.
* Video comments should focus on non-visual adjustments to make, including:
  * Re-recording portions of the audio.
  * Adding or editing slides.
  * Addition of superimposed banner text.
* Adjustments to respond to comments will be released as a new video in the same folder.
The new video will have a version number in the title.

[#learning-path]: https://app.slack.com/client/T04PXKRM0/CARTU4XV2
