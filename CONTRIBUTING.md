Thanks for contributing!
Check out our [README](./README.md) for an overall explanation of the InnerSource Learning Path.
Here is the process for creating a new learning segment.
You can view finished segments online at https://innersourcecommons.org/learningpath/.
You should review each step with the folks in the [#learning-path] working group when finished.

1.  Decide which section your segement should be a part of.
1.  Create an [outline](./outline-template.md) for your segment in the section folder.
1.  Create the written article for your segment in the section folder.
1.  Film the video content for your segement.
1.  Create assessment questions.

Here's a few tips as you go along:

# Translations

* All articles may be translated into any language of interest.
* Instead of translating from scratch, consider starting with [machine-translated text](https://www.deepl.com/translator) and revising from there.
Remove "Translated by DeepL" in the final text.
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

# Video Subtitles

All videos may have subtitles in any language. See [this video](https://drive.google.com/file/d/1IaAH8Zmp2ggBtelexhaZUqia5yS8mUjE/view?usp=sharing) for a short intro on how to access them.

## Adding Subtitles For the First Time

YouTube will automatically generate subtitles to most videos in English.
It is easiest to use that as a starting point to then manually clean up timings and correct misspellings.
  1. In Creator Studio, select DUPLICATE AND EDIT on the automatic subtitles.
  2. When you are satisfied with your changes in the subtitle editor, choose PUBLISH.

## Changing Existing Subtitles

Be aware that, at this time, Creator Studio does not support subtitle positioning natively.
The subtitle editor only addresses content and timings.
If your video needs positioning changes, the tags must be added or adjusted manually.

Subtitle positioning will NOT be reflected in the video in the editor.
All subtitles will appear at the bottom of the viewport while using the editor.
It is also NOT currently possible to download a VTT file of a DRAFT subtitle set.
Finally, making changes in the editor and publishing them will erase all pre-existing positioning tags.

Therefore, the overall process for editing subtitles with positioning goes like this:
  1. In Creator Studio, download a copy of the current VTT file (or look in source control for it).
  This gives you a back up of the existing set in case you want to completely revert your changes.
  2. Make your content and timing changes using the subtitle editor and PUBLISH them.
    _This erases pre-existing positioning tags._
  3. Download a copy of the new VTT file.
  4. Using your favorite text editor, add positioning tags and save the file.
  5. Go back to the subtitle editor, upload the new VTT file with positioning tags, and PUBLISH it to close the editor.
  6. Add the updated VTT file with positioning tags to source control.

If your video does not require positioning adjustments, you only need to do step #2.

## Subtitle Style Guide

  * Keep subtitle height to a single line. **Never display more than two lines in height**, to prevent content blocking.
  * Keep subtitle width to the central 60% of the viewport. **Do not to let them extend to the full width of the viewport.**
    Drawing eyeballs to the extreme edges of the screen distracts from the content.
  * **Subtitles should be centered horizontally and shown at the bottom of the viewport**, unless this would obscure important visual information.
    In these cases, use positioning tags to put the subtitle at the top of the viewport.
    Revert to the bottom position when the scene allows.
    No matter where the subtitle ends up being placed, try to avoid obscuring the mouths of speakers in shot.
  * Try to display subtitles for at least 1.5 seconds before changing or disappearing them, to aid reading comprehension.
    This isn't always possible, however,
    **never display a subtitle for less than one second**.
  * **Subtitles should be timed to the speaker's voice.**
    They should appear when the speaker starts, and disappear when the speaker is finished and before a camera change, unless that causes the subtitle to be on screen for less than one second.
  * **Display words as spoken**, not as you think the speaker intended to say them.
    Do not censor or simplify the dialogue.
    Strive for accuracy.
    There are two exceptions:
    - Omit stuttering
    - Omit filler words like ("um")
    - _This runs counter to most captioning guidelines.
      However, we have had complaints in the past for subtitling these.
      Given these exceptions, don't automatically omit words like "but" or "so".
      These are filler words, but they are often essential for expressing meaning.
      Similarly, conversational phrases like "you know", and "right" often add flavour and should be included when time allows._
  * It is only necessary to identify a speaker when it is not obvious to the viewer.
    This is rare, even in cases where there are two speakers in a scene, since they speak one-at-a-time.
    But, it can happen, for example, when a diagram is being displayed and there are multiple speakers off screen.
    **If we do need identification, use a label in all caps.**
    Here are some examples:
    - _(single speaker)_ DANESE: This diagram will help us understand how InnerSource works.
    - _(two speakers)_ BOTH: Hope to see you there!
    - _(three or more)_ ALL: Fa la la la la!





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

Please [open an issue](https://github.com/InnerSourceCommons/InnerSourceLearningPath/issues/new)!
If you have write permissions, then:
* Be sure to add it to the `Learning Path Segements` project so that appears on the [project board].
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
