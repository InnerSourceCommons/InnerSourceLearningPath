#Script: The Contributor in InnerSource - Mechanics of Contribution

## Duration: 5-6 Mintes

## Actors: Isabel and Johannes

## Playbook Summary

What are the nuts and bolts of advice to follow when acting as an InnerSource Contributor?  This segment describes the hands-on things to do to make your contribution a success.  We'll give practical tips to leverage when preparing to work on a contribution, during development, and also in the pull request. 

## Script

X: In the previous video we learned about the contributor ethos and the guest-in-home analogy. 
In this video you will learn more about gotchas and practical aspects around contributing code. 
We hope that this will enable you and the host team to have as pleasant an experience as possible, hopefully setting the foundation for more contributions and great collaboration.  

X: You'll see that most contributions go through three phases: solicitation & preparation, crafting and polishing & presentation. The proportions each phase takes in the a single contribution will likely change with repeated collaborations with a host team.

-> Show phases slide, highlight the prep part

X: Let's talk about differences to classic approaches: the turn-around time.  
With every first time contribution you are coming to a new (host) team.
As a result, you'll need to get to know their code-base and the technology used, but also their preferred development environment (think test framework, build system).
In addition to the technical side, you may be faced with differences in communication (think code-reviews).
Even if you are coming back after a while the teams' ways and members might have changed.
Take your time as you would to catch up with a friend you haven't seen in a while and whom you are visiting now.

X: It's important to give yourself enough lead time and to start early enough so that your work is available for you to leverage at the time you need it. 
It's better to add more slack time initially - you'll get a feeling about the turn-around times once you work with the host team.
Often, you will notice a reduction in turn-around time per host team after making a few successful contributions to that host team.
This is a known effect from the OSS world based on the slow establishment of trust through successful and reliable collaboration.

-> Show image of from paper 

X: In your classic teams everyone had an idea of the expectable lead times.
Within an InnerSource context this might not be the case, either due to large time-zone differences  or you not being available full-time as with your original team even if they are in the same physical location as you are.
Thus, to prevent frustration on both sides, impatience and other non-trust-building effects you'll need to explicitly do expectation management with regards to your expected reaction times.

X: This can be as simple as quickly reacting with a "I'll look into it, I won't get to it in the next few days though" to a Trusted Committer's feedback if you know that you'll only be able to come back to them in a few days.

X: As mentioned in the other videos, InnerSource puts huge weight on written communication - in particular when it comes to project decisions.
Does that imply that in-person communication is forbidden?
Clearly not: Where written communication shines when it comes to archiving and searchability, in-person communication shines when it comes to communication bandwidth.

-> Show illustratory slide on comms bandwidth?

X: Try to make time to meet the people behind the names. If possible, try to meet them over your favorite beverage or some food. 
If that's not possible having a relaxed informal water-cooler style chat about whatever via your video conference can provide some of this bandwidth.
When you're able to hear people speak, when you know their idiosyncrasies remote collaboration will become easier. 

X: The contributions you're going to make will vary in size and scope - sometimes it's just a bug fix, documentation ammendment, other times it will be larger feature.
A time-and-again-proven wisdom from the Open Source arena, especially for large contributions, is to get into contact with a Trusted Committer early to get agreement on the user/technical design of the contribution _before_ working on the changes and submitting a pull request.
Also, working in the open as early as possible can help you from going down a wrong path, loosing time, wasting effort or even being rejected.

X: A good Trusted Committer will help and mentor you on your way and not expect completely finished, perfect ready-to-nod-off reviewable content.   

-> Show phases image, crafting part

X: Let's talk about the gotchas awaiting you now that you're familiar with thw host team's approach and them looking forward to your pull request.


### Preparing to work

#### Lead times + Expectation management

- Don't rely on purely written culture
 - Your goal should be to see everyone or the majority on the project in person at least once to establish rapport. 
 - provides additional bandwidth
 - create written notes of meetings though
 - meeting creates additional communication bandwidth

-> Example comments from our work? Timezone overlap image?

#### Building trust

-> Show the graphic from the paper? ~ if possible

-> Image supporting "get to know each other"


### Creating the pull request

#### Communication and unblocking yourself

-> Shorten this and hint to the article for detailed advice

-> communication channel options
-> update what you found
-> try to unblock yourself

#### Crafting the code

-> contrib.md + readme.md

##### Avoiding rejection

-> large feature discuss in advance
-> examples for written over spoken


### Submitting the pull request

#### Testing and automation

-> Highlight Testing, Pre-Submit, Docs
-> Remove some details, hint to the articles 
-> Highlight work-in-the-open and it's ability to get early feedback 
	-> less sunk cost on running in the wrong direction for you
	-> needs a real review not a "yup, done, +2, merge, quick one for me" from the tc. might be a problem with some teams -> tc quality though.

-> tests
-> build + validate
-> try your own stuff
-> no one's perfect

#### Documentation and reviewability



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
You can still bind them together with an issue that you are referring to.
    - Some tools also have Draft / WIP pull request functionality that you can use to explicitly mark unfinished and non-polished work and still get early feedback from your host team's trusted committers.
    - This allows you to ensure you are going down a path that your host team is happy to merge once it's done, adhering to the "release early, release often" idea in a way.
    - The host team's responsibility is to create an atmosphere where sharing and discussing not-totally-polished work is possible and welcome. If you can't fail safe, you can't innovate and collaborate becomes very hard.  
    - Try to balance between asking for review early and providing meaningful changes to review.

-> split stuff up
-> clear description
-> 