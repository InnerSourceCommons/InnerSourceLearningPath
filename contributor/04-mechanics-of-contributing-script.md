#Script: The Contributor in InnerSource - Mechanics of Contribution

## Duration: 5-6 Minutes

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
If that's not possible having a relaxed informal water-cooler style chat about whatever via your video conference system can provide some of this bandwidth.
When you're able to hear people speak, when you know their idiosyncrasies remote collaboration will become easier. 

X: The contributions you're going to make will vary in size and scope - sometimes it's just a bug fix, documentation amendment, other times it will be larger feature.
A time-and-again-proven wisdom from the Open Source arena, especially for large contributions, is to get into contact with a Trusted Committer early to get agreement on the user/technical design of the contribution _before_ working on the changes and submitting a pull request.
Also, working in the open as early as possible can help you from going down a wrong path, loosing time, wasting effort or even being rejected.

X: A good Trusted Committer will help and mentor you on your way and not expect only completely finished, perfect ready-to-nod-off reviewable content.   

-> Show phases image, crafting part

X: Let's talk about the gotchas awaiting you now that you're familiar with the host team's approach and them looking forward to your pull request. 
First, you'll be in less direct contact with them and second you aren't expected to be as knowledgeable and proficient as you might be on the full-time projects that your team owns.
How can you now deal with this the best?

X: Being InnerSource and thus written-communication focused their documentation, the conversation archives and code artifacts from the host team should serve well as a way to unblock yourself.
This is similar to the situation you and likely most people find yourself in when using one of the popular OSS projects, such as [I'd put OpenZFS, GoCD or OSM here, we'll need another, popular/well-known, well documented more library-style project with a great, helpful community].

X: Do you find that things are going nowhere even after trying to unblock yourself?
Try to get in contact with the project via one of it's trusted comitters. Hey, they may even be as close as one floor away, why not just drop by for a coffee?
While that might solve *your* problem quickly, it will require the TC's availability and time and leave the problem open for the next person having the same one.

X: In most cases InnerSource projects will have public, text-based, searchable and archived communication groups, such as a mailing list, a chat room, the issue tracker or something similar depending on the purpose of having a more synchronous or asynchronous way of interacting.
Using them will bring your problem in front of more people who might be able to help you and, more importantly, will record your problem and its possible solution to more people having the same problem in the future.

X: Think about how you might utilize StackOverflow or GitHub bug trackers in your daily work. We can possibly all remember a solution to some odd but critical quirk in one of the libraries our software uses that was caught by happenstance on some bug tracker. 
Documentation built up en passant is called passive documentation and this approach can be of great help in the InnerSource context too.

X: Did you figure out an error in a piece of existing documentation in the host team's project? Please consider updating it, making a quick pull request or reaching out to the project if there's no easy way to provide the update yourself.
Hosts teams or future users and contributors will probably be very happy. As a side-effect this might already establish a bit of trust with the host project making it easier for you to get contributions merged in the future. 

-> Show phases image, polishing & wrapping part

X: So you've crafted a nice addition to the hosts teams project, added good documentation pieces and circumvented all the small quirks and large dragons looming on the way with the help of the community and maybe even fixed a small doc mistake on the way. How do you make sure your contribution gets reviewed and merged as quick and easy as possible?

X: Most of this is about enabling a trusted committer to review your contribution asynchronously without your presence as well as enabling them to focus on questions that would not be solvable in an automated fashion, such as questions of code style, evaluating possibly regressions, etc.

[Might be nice to be able to reference this: http://commadot.com/wtf-per-minute/ ]

X: A great starting point to find out what a host teams likes with regard to their code style, testing setup and more on their development workflow is a document you might have taken a look at while initially setting up your workspace -their CONTRIBUTING.md and sometimes their README.md files. Definitely take a look at them, every good InnerSource project should have them.
Even if you might not 100% agree with their code style decisions or other things - it's their house, please adhere to their wishes for now.

X: Should you find that the CONTRIBUTING.md file does not answer your question definitely reach out to the host project as mentioned above.

-> show link to innersourcecommons for link to contributing.md template?

X: Often projects will provide scripts to check for compliance with their coding standards, passing tests, etc. before committing things - if your host projects provide such pre-submit scripts, definitely use them, they will save you and you the trusted comitter time.

X: Meaningful tests for your contribution are important with InnerSource as they will facilitate asynchronous validation of the work you crafted and allow everyone to check for regressions early on.
Often, InnerSource projects will have larger automated integration tests and CI suites running to enable validation of pull requests and the current trunk in a larger context.
Don't forget to regularly validate that what you've built solves your own problem that made you consider contributing in the first place! 

X: The articles accompanying this video have more technical details on testing and validation, feel welcome to give them a read. Let's come a to a last aspect: Try to be comfortable working in the open. 

X: Just open up a branch, pull request it, mark it as WIP and start crafting code once you've reached a rough agreement on how to bring up your contribution as we discussed earlier. You'll be able to get early feedback from a trusted committer or others preventing you from running in the wrong direction or walking down dead alleys.
A good trusted comitter should not look for just "nod off" pull requests but be happy to mentor and help you along the way.

X: Finally, remember that nobody is perfect, should be perfect and that mastery comes through a cycle of trying, failing, learning and trying again. Give it your best shot and have fun! 

## Draft targets

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


-> split stuff up
-> clear description
-> 