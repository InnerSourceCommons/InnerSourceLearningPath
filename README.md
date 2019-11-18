# InnerSourceLearningPath

The InnerSource Learning Path is a series of short videos and articles explaining and teaching various aspects of InnerSource. Their production was kindly sponsored by PayPal.
You can find finished portions of learning path hosted in the O'Reilly Safari platform at http://bit.ly/inner-source-learning-path.
The content will also be made available on the [InnerSource Commons] website.
This repository holds the backing and planning material for the videos and articles hosted there.

## Content Organization

For now, there are four sections to the learning path each covering a specific topic:

  1. [Introduction](introduction/)
  1. [Product Owner](product-owner/)
  1. [Trusted Committer](trusted-committer/)
  1. [Contributor](contributor/)
  
Each section should have ~6 videos each explaining an individual, self-contained aspect of the section.
People may watch all of the videos or just one, so it's important that each is self-contained and understandable either on its own or as part of the overall set.

Each video should be accompanied by a short, ~1-page article explaining the same material as the video but in written form.
The idea is that some people will prefer to learn the content via watching/listening and others via reading, so we should present the content in both formats so that learners can use whatever format is best for them.

There is also the [workbook](workbook/), a collection of questions and answers on based on the videos and articles for people to check their knowledge against after consuming the material.

## Community Collaboration

We'll work on this learning path via the [InnerSource Commons] community and coordinate our work in the [#learning-path] _Slack_ channel.
We can divide up the work and collaborate on each section via folks from the community volunteering to fill one of these roles for the section:

| Role                      | Approximate Time | Notes                                                                  |
| ------------------------- | ---------------- | ---------------------------------------------------------------------- |
| Writer                    | 40 hr            | Writes an article for each segment in the section.                    |
| Writer Reviewer           | 4 hr             |                                                                        |
| Speaker                   | 20 hr            | Gives the spoken video for each segment in the section.               |
| Speaker Reviewer          | 2 hr             |                                                                        |
| Post-Production           | 10 hr            | Responsible for post-production effects and editing for spoken videos. |
| Post-Production Reviewer  | 1 hr             |                                                                        |

This list is not an exhaustive a description of all currently open or possible tasks. There are many additional ways to help the learning path effort (please see *How to Get Involved* section...)

### Task Management
We track our tasks and discuss their status openly using our GitHub projects [Kanban board]. A card's label indicates which learning path section it belongs to (introduction, product owner, ...). Clicking on a label allows you to filter the cards by learning path section.

Typically, a card bundles tasks about one artifact (e.g. written articles accompanying one learning path section) or small milestones (e.g. finishing the post production of one section). 
Each card involves at least one person actively creating the content and a dedicated reviewer. 
You can infer whether a task is currently actively developed or under review based on the card's column in the [Kanban board].

A dedicated reviewer for each part of the production process does not mean that no one else can review.
We expect that everyone will be invited to review all aspects of the work and that pull requests and video rehearsals will be posted in the [#learning-path] _Slack_ channel regularly.
Schedules being what they are, occasionally it may be difficult for people to find the spare minutes to give timely review.
For this reason we've found that it's helpful to have at least one dedicated reviewer for each part of learning path production who has volunteered and guaranteed to give timely review to all new content.

## Repository Setup

This repository holds the backing/planning material for the videos and articles as follows:

```
section-name/assignments.md  // Contains the community assignments for authors and reviewers in this section.
section-name/outline.md      // Contains an outline of all of the segments in this section.
section-name/01-first-topic-article.md    // Contains the text of the written articles, scripts and workbook assessments.
section-name/01-first-topic-script.md
section-name/01-first-topic-workbook.md
section-name/02-next-topic-article.md
section-name/02-next-topic-script.md
section-name/02-next-topic-workbook.md
. . .
section-name/0n-last-topic-article.md
section-name/0n-last-topic-script.md
section-name/0n-last-topic-workbook.md
. . .
workbook/01-section.asciidoc // Contains the part of the workbook matching the section's name.
```

After material is finished the scripts will be used to film videos.
Videos, articles, and workbooks will be reviewed by O'Reilly's professional editors and then published at _learning.oreilly.com_ and also at _innersourcecommons.org_.

## How to Get Involved

Join the [InnerSource Commons] _Slack_ via the signup link in the left bar of the website and ask to join the [#learning-path] _Slack_ channel.
Once there you'll see the conversations we're having about producing this content and can join the work. Please remember that this group works under the [Chatham House Rule] that allows all of us to work in a safe environment for industrial cooperation and fostering external contributions.

If you want to hit the ground running then please:

* Take a **look at the the finished videos** (linked at https://innersourcecommons.org/learningpath/).
* Review the **finished articles** for the [Trusted Committer] and [Introduction] sections.

See you there!

[Kanban board]: https://github.com/InnerSourceCommons/InnerSourceLearningPath/projects/1
[InnerSource Commons]: http://www.innersourcecommons.org/
[#learning-path]: https://innersourcecommons.slack.com/messages/CARTU4XV2
[Chatham House Rule]: https://www.chathamhouse.org/chatham-house-rule
[Trusted Committer]: https://github.com/InnerSourceCommons/InnerSourceLearningPath/tree/master/trusted-committer
[Introduction]: https://github.com/InnerSourceCommons/InnerSourceLearningPath/tree/master/introduction
