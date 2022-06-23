# InnerSourceLearningPath

The InnerSource Learning Path is a series of short training segments, each explaining one particular aspect of InnerSource.
Each segment is composed of a video and corresponding written article, both of which contain the same information.
Presenting that information in both written and spoken form allows people to learn in the way that is best for them.

## Content Organization

Individual segments are grouped by common themes into sections.
Currently, the four sections to the learning path are:

  1. [Introduction](http://innersourcecommons.org/learn/learning-path/introduction/)
  1. [Trusted Committer](http://innersourcecommons.org/learn/learning-path/trusted-committer/)
  1. [Contributor](http://innersourcecommons.org/learn/learning-path/contributor/)
  1. [Product Owner](http://innersourcecommons.org/learn/learning-path/product-owner/)
 
There is also the [workbook](workbook/), a collection of questions and answers on based on the videos and articles for people to check their knowledge against after consuming the material.

New sections and segments may be added at any time via the [contribution] process.

## Community Collaboration

The InnerSource Learning Path is produced via the [InnerSource Commons] community.
We coordinate our work in the [#learning-path] _Slack_ channel.
We track our tasks and discuss their status openly using our GitHub project [Kanban board].

Typically, a card bundles tasks about one artifact (e.g. written articles accompanying one learning path section) or small milestones (e.g. finishing the post production of one section). 
You can infer whether a task is currently actively developed or under review based on the card's column in the [Kanban board].

## Trusted Committers

These community members continually give their time to the running of this project.
Special thanks to:

* Russ Rutledge ([@rrrutledge])
* Johannes Tigges ([@lenucksi])
* Tom Sadler ([@tsadler1988])
* Igor Zubiaurre ([@fioddor])

## Repository Setup

This repository holds the backing/planning material for the videos, articles, and workbook as follows:

```
section-name/outline.asciidoc      // Contains an outline of all of the segments in this section.
section-name/01-first-topic-article.asciidoc    // Contains the text of the written articles, scripts and workbook assessments.
section-name/01-first-topic-script.asciidoc
section-name/01-first-topic-workbook.asciidoc
section-name/02-next-topic-article.asciidoc
section-name/02-next-topic-script.asciidoc
section-name/02-next-topic-workbook.asciidoc
. . .
section-name/0n-last-topic-article.asciidoc
section-name/0n-last-topic-script.asciidoc
section-name/0n-last-topic-workbook.asciidoc
. . .
section-name/de   // Contains translations of the articles to German
section-name/zh   // Contains translations of the articles to Chinese
section-name/ll   // Contains translations of the articles to the two-letter language code
. . .
workbook/0n-section-name.asciidoc // Contains the part of the workbook matching the section's name.
```

After material is finished the scripts will be used to film videos.
Each video should be about 5min in length.
Each article should be about a page long.
The idea is that a person could receive a link to an article or video and watch or read it without having to set aside time in advance to do so. 
Videos, articles, and workbooks will be published at _learning.oreilly.com_ and also at _innersourcecommons.org_.

## How to Get Involved

Join the [InnerSource Commons] _Slack_ via the signup link in the left bar of the website and join the [#learning-path] _Slack_ channel.
Once there you'll see the conversations we're having about producing this content and can join the work.
Please remember that this group works under the [Chatham House Rule] that allows all of us to work in a safe environment for industrial cooperation and fostering external contributions.

If you want to hit the ground running then please:

* Take a **look at the the finished segments** (linked at https://innersourcecommons.org/learningpath/).
* Take a look at our [Kanban board] to see what's in flight.
* See [CONTRBUTING.md][contribution] for more detail.

See you there!

[Kanban board]: https://github.com/InnerSourceCommons/InnerSourceLearningPath/projects/1
[InnerSource Commons]: http://www.innersourcecommons.org/
[#learning-path]: https://innersourcecommons.slack.com/messages/CARTU4XV2
[Chatham House Rule]: https://www.chathamhouse.org/chatham-house-rule

## Licensing
The InnerSource Learning Path by [InnerSourceCommons.org](http://innersourcecommons.org) is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/) License.
Please see LICENSE.txt in this repository for the full text of the license.

[@rrrutledge]: https://github.com/rrrutledge
[@lenucksi]: https://github.com/lenucksi
[@tsadler1988]: https://github.com/tsadler1988
[@fioddor]: https://github.com/fioddor
[contribution]: ./CONTRIBUTING.md
