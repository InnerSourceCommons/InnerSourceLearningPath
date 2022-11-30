# Options for shared ownership

* if everyone owns it, nobody takes care anymore
* if everyone can make changes, surely the result will be a mess
* I don't want to be forced to accept all sorts of changes from contributors.

## InnerSource governance levels

* InnerSource comes with different best practices.
Governance for InnerSource projects - much like in Open Source may vary substantially though.

* Best practice: Make all your assumption explicit:
   * Which response time should contributors expect, so they know when to ping you?
   * Which communication channels should contributors use to get in touch with the project?
   * Which communication channels should contributors follow to learn what's going on in the project?
   * But also: Which governance level should contributors expect from your project?

* Governance level? There's at least three, sometimes four:
   * Source code is visible to everyone, but we don't have time to mentor contributors.
Send us changes as feature requests or bug reports only.
   * Source code is visible to everyone, plus we have set aside some time for mentoring contributors.
Feel free to send us changes as pull requests. We appreciate getting those early, even as drafts so we can help you avoid taking the wrong turn early.
   * As above, but we are open to the idea of sharing write access.
This is particularly helpful for cases where there is a long term relationship with contributors.
Collaborating over longer periods of time the host team will develop trust in contributors understanding the goals of the InnerSource project.
Sharing write access can then be a way to remove the review bottleneck.
   * As above, but also share control over who gets write access next.
Result from that increased trust will often be more committment from those that received the trust.

* Each governance level needs different approaches to collaboration and coordination that may have an impact on how fast the project moves forward:
   * More sharing means an increased need for communication and co-ordination.
   * Sharing accountability can slow down decisions.
   * Sharing more accountability also has an impact if your performance reviews still happen in a traditional hierarchical way.
Impact on performance reviews: InnerSource moves some of the energy you spend developing outside of your own team.
That means you are losing some level of control.
You are also losing direct oversight. As a result performance feedback for InnerSource contributors needs to take the perspective of the host team into account.

## "You build it, you run it" in settings with high sharing levels

* Collaborate on and share only the parts that are the same accross teams - keep operations local.
Essentially work towards modularization of your code.
* Alternatively work with contract tests to avoid API breakages.
* Work with internal service level agreements, make contributors sign up to warranty periods.


