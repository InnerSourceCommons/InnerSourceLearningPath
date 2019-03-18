# InnerSource Contributor Content Outline

## The Contributor in InnerSource

  - Introduce the speaker.
  - Quick overview of the _Contributor_ role.
  - Summary of the roles of InnerSource and how each relates to _Contributor_.
  - Summary of the upcoming segments and what each covers.

Outline for this section inspired by the [Trusted Committer introduction video].

## Becoming an InnerSource Contributor

  - A contributing mindset starts with a shared use mindset.
    - When you have technical needs that are outside of the domain of your project,
    look around to see if there is a shared solution that you can use.
    - Share anecdote or hypothetical situation of a time where a team was able to reuse what others had done rather than reinventing the wheel.
    Briefly enumerate the benefits of using shared solutions.
  - Using shared solutions puts you in a position to become a _Contributor_.
    - There will be times when you wish that the shared solution has some new feature.
    - Don't _Wait it Out_ or _Work Around_, spend your time and energy making the change directly in the shared project.
    - Briefly enumerate the benefits of contributing.
    This should be taken from the **Benefits** segment.
      - You may need to spend a bit of time explaining these benefits to your management hierarchy in order to have their support to spend your time contributing.
    - An InnerSource _Contributor_ knows that it doesn't matter where the code goes as long as the team can get the functionality that they need.
  - Contributing applies to all levels of project managements, not just code.
    - Opening issues.
    - Improving documention.
    - Fixing builds.
    - Nothing too small to contribute (e.g. documentation typo).
      - [Here is one](https://github.com/tensorflow/models/pull/4784) that I made to `tensorflow/models`.
      A simple label change in a graph.

## The Contributor Ethos

  - Introduce the guest in a home analogy.
  A good guest:
    - Knocks at the door.
    - Anticipates and follows house rules.
    - Understands they are not the home owner and acts accordingly.
  Let's talk about how each of these ideas applies in InnerSource.
  - Getting in
    - In the real world their are several ways that guests are invited in.
      - An "open" sign lets them know they can walk right in without knocking
      - Knock on the door unexpected.
      - Knock on the door only when invited.
    - With InnerSource projects there are several ways that code gets in.
      - Sometimes you just open a pull request.
      - At times you may need to get a feature request accepted before opening the pull request that fulfills it.
      - You may need to talk to the host team in person before interacting with the project digitally.
      In the same way that real-life hosts don't always appreciate a stranger knocking on their door, some InnerSource hosts appreaciate some heads-up before seeing a PR get opened to their repo.
      - In all of these interactions, be prepared to "sell" your contribution to the host team.
        - Articulate the value that the contribution will bring to their ecosystem.
        - Remind them that they are getting free engineering help with their project.
        - Offer to fulfill a [30-day warranty] on your submission.
    - Many InnerSource projects outline how they like to be approached by potential _Contributors_ in their `README.md` or `CONTRIBUTING.md` files.
  - Following the rules
    - The `CONTRIBUTING.md` not only contains information about how to approach the host team,
    but also guidelines throughout the contribution process.
    Be sure to understand and follow them.
    - If you are contributing the fix to an issue, be sure to follow all guidance and instruction documented in the issue.
    - You should understand the project well enough to know that your contribution makes sense overall and is not just your personal snowflake.
  - Understands they are not the home owner and acts accordingly.
    - Leave any sense of pride or entitlement at the door.
    Everyone is working together and doing their best.
    Be graceful, polite, and unassuming in all interaction with the host team.
    - Feedback from the host team is not any kind of personal criticism to you.
    Treat and value it as data to help your contribution become all the better.
    - If the host team decides not a contribution, don't take it personally.
    Remember and respect that the host team has ultimate decision over the project.
    They're the ones that are signing up to maintain it, after all!
    Try to collaborate on an aspect of the contribution that you all agree on,
    and look for another way to fill your needs on the rest.
  
## Mechanics of Contributing

  - This section contains practical advice and gotchas to remember when making an InnerSource contribution.
  - Preparing to work.
    - Give yourself enough lead time.
  The development, review, and deployment process for your contribution will likely take longer than similar processes on your own team.
  Keep that in mind and plan to start early enough so that your work is available for you to leverage at the time you need it.
    - If the host team is in a different timezone then keep that in mind and plan for it when interacting with them.
    - For larger contributions, get agreement from the host team on the larger user/technical design _before_ submitting a PR.
  This type of high-level, up-front agreeemment early will save time in rework or rejection of your PR down the road.
    - Understand how the host team would like you to reach out for help and questions while you're working.
  - Development
    - If you get stuck, try to unblock yourself by reading the project documentation or looking at other parts of the code in the project.
    - After trying the above if you're still stuck then reach out to the host team for help.
    It doesn't do either side any good for you to spin forever on a problem that could be resolved in a few-minute conversation with someone more knowledgable about the project.
    It's OK to ask for help.
    You aren't expected to be as knowledgable and proficient as you might be on the full-time projects that your team owns.
    - Match the existing coding style, indentation, etc, even if it's not what you would normally do.
    A guest contribution for a feature is not the time to introduce a new way of structuring or formatting project code.
  - Submitting the PR
    - Test out your contribution before opening PR.
      - In the ideal you can create a modified build of the shared project with your changes and try it out in your own project that consumes it.
    - Ensure that your PR includes any documentation updates relevant to your changes.
    - Be sure that your PR includes just the relevant changes for the issue your completing.
    Making PRs too broad and large makes them more difficult to review and longer before they're accepted.
  
## Benefits of Contribution

  - Personally
    - Puts your time into a place where others are also working.
    It's not just up to you to maintain this area.
    - Help and support from the host team in implementing your changes.
    - Your reputation and impact expands to outside your team.
    - Learn from engineers on the host team and their coding and working styles.
    Extra learning comes as part of your day job.
    No stretch or overtime assignment needed.
    - Varied, fun and personally fulfilling.
  - Team
    - You can get improvements you need in other projects on a timeline that you control.
    - High influence into the development, progression, and ecosystem of projects that you depend on.
    - Relieved of the long-term burden of maintenance of your contributions.
    The host team maintains them as part of maintaining the overall project.
    - Key knowledge spread across multiple people and teams.
    Improves the [bus factor].
    - Do the right thing for the company by putting your work into shared projects that others can use instead of your own one-offs.
  - Company
    - Improved cross-company collaboration.
    - Better overall project quality.
    "With many eyes, all bugs are shallow"
    - Reduced duplication of projects.
    - Better alignment of shared projects to the needs of their internal consumers.

## Conclusion

- Review what we've learned/taught together.
   - Have fun!
  - Quick overview of the _Contributor_ role.
  - Summary of the roles of InnerSource and how each relates to _Contributor_.
  - Summary of the upcoming segments and what each covers.

[Trusted Committer introduction video]: https://learning.oreilly.com/videos/the-trusted-committer/9781492047599/9781492047599-video323925
[30-day warranty]: https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/master/30-day-warranty.md
[bus factor]: https://en.wikipedia.org/wiki/Bus_factor
