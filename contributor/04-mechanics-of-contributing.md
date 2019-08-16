# Draft comments

## Video playbook outline

What are the nuts and bolts of advice to follow when acting as an InnerSource Contributor?  This segment describes the hands-on things to do to make your contribution a success.  We'll give practical tips to leverage when preparing to work on a contribution, during development, and also in the pull request. 

## Outline doc

See [Outline Section](https://github.com/InnerSourceCommons/InnerSourceLearningPath/blob/master/contributor/outline.md#mechanics-of-contributing)

# Article

You are ready to start contributing to other teams projects/repos or look forward to reduce your blockers by not playing the big-cheese game but by collaborating? 
Please consider reading this section beforehand as it will give you practical advice and informs you about gotchas to remember when making an InnerSource contribution. This will hopefully enable you and the host team to have as pleasant an experience as possible setting the foundation for more contributions and great collaboration.  

This article is separated into the three steps you will likely experience

- Soliciting your contribution opportunity and preparing to work on it
- Actually creating the contribution
- Polishing and wrapping the gift nicely and presenting it to the host team.

If your contribution is larger, you'll possibly go through (some) these steps repeatedly as you iterate towards your common goal.
It is very likely that as you do this everything will feel more and more naturally - maybe you'll even wonder why you were doing anything else before.

## Preparing to work

### Lead times

One key difference is the turn-around time. 
You're coming to a new (host) team on every first contribution and thus you'll need to get to know their approach, i.e. their development, reviews and deployment, etc. processes.
Even if you are coming back after a while the teams' ways and members might have changed - take your time as you would to catch up with a friend you haven't seen in a while and whom you are visiting now.

Thus: Please give yourself enough lead time.
Start early enough so that your work is available for you to leverage at the time you need it. 
It's better to add more slack time initially - you'll get a feeling about the turn-around times once you work with the host team.
If you end with too much there surely will be a great way to make use of the time, be it some work on your side, the quirky bug or improvement opportunity you found while making your initial contribution or possibly even a nice chat over coffee, beers in case of personal availability or whatever topic in case of distributed projects. 

[EDITOR NOTE: There was actually a paper on how trust is build up on remote/asynchronous collaboration. Maybe I'll find that again. 
The basic point is that aside of reliability in collaboration, continued presence the effect of water cooler discussions and food/drink consumption is quite impressive...
]  

Especially in the case of larger distances between you and the host teams, e.g. multiple time zones difference as in San Francisco, USA (PDT) and Berlin, Germany (CEST), you will need to actively consider this and explicitly manage your and their expectations on reaction times.

### Avoiding rejection

You've got this really large feature or larger rewrite in mind that would be totally great and add real value that you would like to donate?
Excellent!
Wouldn't it be horrible if all your work would be wasted because the host team is maybe already building something very similar, is planning to depreciate the part of the software you are trying to extend or even does not see what you are proposing to be a fit for their project? 
This challenge is a frequent challenge and many team relationships suffered from not handling the fit in advance.

Make yourself and the host team happy (and possibly even save some work) by getting agreement from the host team on the user/technical design of the contribution _before_ submitting a pull request.
You'll have to understand how the host team would like you to reach out for this - sometimes they have regular design discussions in person or via chat/voice/video conferences, some hand in design discussion / extension proposal documents for collective discussion and review, some work with feature requests, etc. 
Ask a trusted committer about how to best discuss your proposal.  

This type of high-level, up-front agreement early will save time in rework or rejection of your pull request down the road.

## Creating the pull request

### Communication and unblocking yourself

Great, you've made yourself familiar with the host teams approach and they are looking forward to receive your pull request.
Which gotchas are there waiting for you now?

First, you'll be in less direct contact with them and second you aren't expected to be as knowledgeable and proficient as you might be on the full-time projects that your team owns.
How can you now deal with this the best?

Try to peruse their documentation, the conversation archives and code artifacts from the host team to unblock yourself - this is pretty much similar to the situation you and likely most people find yourself in when using one of the popular OSS projects.

However, this time you've got the advantage to be able to directly ask the host team if, even after trying to unblock yourself, things went nowhere. (That's an approach that works with many OSS projects as well!)
It doesn't do either side any good for you to spin forever on a problem that could be resolved in a few-minute conversation with someone more knowledgeable about the project.
It's OK to ask for help.

There's one key difference though, bringing advantage to you and other people in the future: 
In almost all cases you should prefer the projects' official communication channels - this can be a mailing list, a chat room, the issue tracker or something similar depending on the purpose of having a more synchronous or asynchronous way of interacting or the varying needs for structure in the communication.
All of those usually have in common that they are text-based, archived, searchable and linkable - this means your question and the answer will be written down.
This way you could benefit from this passively documented knowledge on your search and will help future contributors to have the same advantage.
Imagine what would be needed for realizing this benefit by just walking by or calling a trusted committer on the project or even in a group call.    

Did you on your way of trying to unblock yourself find that you were missing documentation or found parts of it to be wrong or out-of-date and had to figure this out for yourself now?
Often projects are happy to receive additions, updates or corrections for their existing documentation as well - you've just found another opportunity to contribute! 
(Or just politely provide them with feedback on your experience and what would have helped you.)

### Crafting the code

We all have our preferences and opinions on code style, indentation, etc. 
The home that the host team lives in will have them as well, individual wallpaper, decoration and hangings incl. 
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
  - Often projects will use automated checks against pull request using those tests and the level of code coverage. Try to meet the criteria these test enforce.
- Many projects will provide project build and validations scripts to enable you to locally test your changes. 
  - Use those to ensure that your contribution works as well as possible before opening a pull request. 
  - Having to review defect pull requests with easy-to-fix errors often bugs trusted committers. They will not fix your code but ask you to do so. This might create more round-trips and slow the merge if there's unnecessary errors.
  - No one's perfect though. Try your best, use the prepared validation scripts if there are any and give it your best shot with a pull request!
- Don't forget your own project that triggered your contribution in the first place. Build a modified build of the shared project with your changes and try it out in your own project that consumes it.

### Documentation and reviewability

You'll want to ensure that your pull request includes any documentation updates are relevant to your changes. 
Should the documentation live in a different place, make sure you add them there and link to them in the pull request.

To make the actual code review as easy as possible for the trusted committer or other persons reviewing it, try to follow these hints:

- Be sure that your pull request includes just the relevant changes for the issue you're completing.
- Try to avoid super-large commits, commits with unclear commit messages, gazillions of files, incoherent changes (e.g. touching multiple topics).
- Provide a clear description what this pull request changes, why it does so and which issue and possible design documents (if there were any) it refers to.
- If there is anything uncommon or unexpected in the pull request highlight it and provide an explanation. This will make it easier to reason about and solve potential blocking questions the reviewer might have during the review. 
  - The same goes for place where you were unsure in the implementation or your approach - highlight it and ask for insight.
  - Be civil and expect civility from the trusted committers' review.   
- Making pull requests too broad and large makes them more difficult to review and longer before they're accepted.
  - If you have a larger feature you are contributing it often helps to split it in multiple pull request that get submitted, reviewed and accepted sequentially.
  - You can still bind them together with an issue the are referring to.  
