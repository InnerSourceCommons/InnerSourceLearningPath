# Draft comments

## Video playbook outline

What are the nuts and bolts of advice to follow when acting as an InnerSource Contributor?  This segment describes the hands-on things to do to make your contribution a success.  We'll give practical tips to leverage when preparing to work on a contribution, during development, and also in the pull request. 

## Outline doc

See [Outline Section](https://github.com/InnerSourceCommons/InnerSourceLearningPath/blob/master/contributor/outline.md#mechanics-of-contributing)

# Article

Are you ready to start contributing to other teams projects/repos?
Do you look forward to reducing your blockers not by management escalation but by collaboration? 
This section gives practical advice and highlights gotchas to remember when making an InnerSource contribution. It enables you and the host team to have as pleasant an experience as possible, setting the foundation for more contributions and great collaboration.  

This article is separated into the three steps you will likely experience

- Soliciting your contribution opportunity and preparing to work on it
- Actually creating the contribution
- Polishing and wrapping the gift nicely and presenting it to the host team.

If your contribution is larger, you'll possibly go through (some) these steps repeatedly as you iterate towards your common goal.
It is very likely that as you do this everything will feel more and more naturally - maybe you'll even wonder why you were doing anything else before.

## Preparing to work

### Lead times

One key difference is the turn-around time. 
With every first time contribution you are coming to a new (host) team.
As a result, you'll need to get to know their code-base and the technology used, but also their preferred development environment (think test framework, build system).
Even in cases where this type of tooling is standardized each team will have developed some individual peculiarities.
In addition to the technical side, you may be faced with differences in communication, think code-reviews.
Even if you are coming back after a while the teams' ways and members might have changed.
Take your time as you would to catch up with a friend you haven't seen in a while and whom you are visiting now.

Give yourself enough lead time.
Start early enough so that your work is available for you to leverage at the time you need it. 
It's better to add more slack time initially - you'll get a feeling about the turn-around times once you work with the host team.
Often, you will notice a reduction in turn-around time per host team after making a few successful contributions to that host team.
This is effect can be observed with Open Source as well, you can read more about it [here](https://doi.org/10.1109/MS.2013.95). 
If you end with too much there surely will be a great way to make use of the time, be it some work on your side, the quirky bug or improvement opportunity you found while making your initial contribution or possibly even a nice chat over coffee, beers in case of personal availability or whatever topic in case of distributed projects. 

[EDITOR NOTE: There was actually a paper on how trust is build up on remote/asynchronous collaboration. Maybe I'll find that again. 
The basic point is that aside of reliability in collaboration, continued presence the effect of water cooler discussions and food/drink consumption is quite impressive...
]  

Especially in the case of larger distances between you and the host teams, e.g. multiple time zones difference as in San Francisco, USA (PDT) and Berlin, Germany (CEST), you will need to actively consider this and explicitly manage your and their expectations on reaction times.
### Building trust

InnerSource puts huge weight on written communication - in particular when it comes to project decisions.
Does that imply that in-person communication is forbidden?

Clearly not: Where written communication shines when it comes to archiving and searchability, in-person communication shines when it comes to communication bandwidth. 
Try to make time to meet the people behind the names. If possible, try to meet them over your favorite beverage or some food.
When you're able to hear people speak, when you know their idiosyncrasies remote collaboration will become easier. 

[EDITOR NOTE: There was actually a paper on how trust is build up on remote/asynchronous collaboration. Maybe I'll find that again. 
The basic point is that aside of reliability in collaboration, continued presence the effect of water cooler discussions and food/drink consumption is quite impressive...
]  
### Avoiding rejection

Do you have a large feature that you want to contribute?
Excellent!
Wouldn't it be horrible if all your work would be wasted?
That can happen when the host team is already building something very similar, is planning to deprecate the the software, or does not see what you are proposing to be a fit for their project? 
This challenge is a frequent challenge and many team relationships suffered from not agreeing in advance that a contribution is a good fit.

Make yourself and the host team happy (and possibly even save some work) by getting agreement from the host team on the user/technical design of the contribution _before_ working on the changes and submitting a pull request.
You'll have to understand how the host team would like you to reach out for this.
It's best to ask a trusted committer about how to best discuss your proposal.

It is time-and-again-proven wisdom from the Open Source arena that, if you get to select how to discuss your proposal you should try to select a written way.
Ideally one whose artifacts are public, searchable and perma-linkable to enable referencing your proposal in later discussions on this future contribution or other contributions to come - by you or others. 

This type of high-level, up-front agreement early will save time in rework or rejection of your pull request down the road.

## Creating the pull request

### Communication and unblocking yourself

Great, you've made yourself familiar with the host team's approach and they are looking forward to receive your pull request.
Which gotchas are there waiting for you now?

First, you'll be in less direct contact with them and second you aren't expected to be as knowledgeable and proficient as you might be on the full-time projects that your team owns.
How can you now deal with this the best?

Try to peruse their documentation, the conversation archives and code artifacts from the host team to unblock yourself.
This is similar to the situation you and likely most people find yourself in when using one of the popular OSS projects.

Much like in Open Source projects, ask the host team if things are going nowhere even after trying to unblock yourself.
The questions you ask and the answers you receive will help others coming after you solve the same issues.
Make sure that your communication ends up in a searchable archive that is closely linked to the project itself.
It doesn't do either side any good for you to spin forever on a problem that could be resolved in a few-minute conversation with someone more knowledgeable about the project.
It's OK to ask for help.

There's one key difference though, bringing advantage to you and other people in the future: 
In almost all cases you should prefer the projects' official communication channels - this can be a mailing list, a chat room, the issue tracker or something similar depending on the purpose of having a more synchronous or asynchronous way of interacting or the varying needs for structure in the communication.
All of those usually have in common that they are text-based, archived, searchable and come with stable links - this means your question and the answer will be written down, references you link in those answers will also be kept reachable.
This way you could benefit from this passively documented knowledge on your search and will help future contributors to have the same advantage.
Imagine what would be needed for realizing this benefit by just walking by or calling a trusted committer on the project or even in a group call.    

As you work if you find missing (or out-of-date) documentation, do a favor to the next Contributor and update it with what you've discovered.
Often projects are happy to receive additions, updates or corrections for their existing documentation as well - you've just found another opportunity to contribute! 
(Or just politely provide them with feedback on your experience and what would have helped you.)

### Crafting the code

We all have our preferences and opinions on code style, indentation, etc. 
The host team's project has them as well. 
Try to adapt and match those preferences even if it's not what you would normally do and even if it is not specified in the projects' `CONTRIBUTING.md`.
If you are unsure you can always ask politely, nevertheless a guest contribution for a feature or bug fix is not the time to introduce a new way of structuring or formatting project code.

## Submitting the pull request

You've completed all the essential work, figured out all the quirks of the problem and the project you are contributing to, the time you've planned for the new feature to be used comes nearer and you want to make sure your contribution gets merged in as fast and smooth as possible?

Here's what you can do to make reviewing and merging as easy as possible for the the trusted committer and the host team.
(This might actually be pretty similar to what you might already be doing on your own project to get your changes accepted - if that's the case: great, this is going to come natural to you!)

### Testing and automation

The basic point here is to enable the trusted committer to validate the contribution without your presence and to ensure easy maintainability.
To achieve this do the following: 

- Add tests for your code contribution so that validating the function of your contribution by others works well, even after some time when you work in other projects or might have stopped to contribute to this project.
  - Often projects will use automated checks against pull requests using those tests and the level of code coverage. Try to meet the criteria these tests enforce.
- Many projects will provide project build and validation scripts that enable you to locally test your changes. 
  - Use those to ensure that your contribution works as well as possible before opening a pull request. 
  - Having to review defect pull requests with easy-to-fix errors often bugs trusted committers. They will not fix your code but ask you to do so. This might create more round-trips and slow the merge if there's unnecessary errors.
  - No one's perfect though. Try your best, use the prepared validation scripts if there are any and give it your best shot with a pull request!
- Don't forget your own project that triggered your contribution in the first place. Build a modified build of the shared project with your changes and try it out in your own project that consumes it.

### Documentation and reviewability

You'll want to ensure that your pull request includes any documentation updates that are relevant to your changes. 
Should the documentation live in a different place, make sure you add them there and link to them in the pull request.

To make the actual code review as easy as possible for the trusted committer or other persons reviewing it, try to follow these hints:

- Be sure that your pull request includes just the relevant changes for the issue you're completing.
- Try to avoid super-large commits, commits with unclear commit messages, gazillions of files, incoherent changes (e.g. touching multiple topics).
- Provide a clear description what this pull request changes, why it does so and which issue and possible design documents (if there were any) it refers to.
- If there is anything uncommon or unexpected in the pull request highlight it and provide an explanation. This will make it easier to reason about and solve potential blocking questions the reviewer might have during the review. 
  - The same goes for place where you were unsure in the implementation or your approach - highlight it and ask for insight.
  - Be civil and expect civility from the trusted committers' review.   
- Making pull requests too broad and large makes them more difficult to review so it will take much longer before they're accepted.
  - If you have a larger feature you are contributing it often helps to split it in multiple pull requests that get submitted, reviewed and accepted sequentially.
  - You can still bind them together with an issue that you are referring to.  
