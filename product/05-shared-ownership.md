# Options for shared ownership

* if everyone owns it, nobody takes care anymore
* if everyone can make changes, surely the result will be a mess
* I don't want to be forced to accept all sorts of changes from contributors.

## Ownership mis-conceptions
* just because you receive a contribution does not mean your team has to accept it
   * Support your team in communicating project vision, help them in situations that are tricky - think turning down contributions
   * Support your team by helping them come up with a clear vision for the InnerSource project
   * Understand that when receiving contributions the review and menoring cycle is important, needs time and capacity but improves quality of the project
   * when contributing code understand that the review cycle is not a last stage quality gate but a way to guide the engineers of your team to results faster
* when in a host team and flooded with contributions
   * help your team understand that contributions may come with different priorities depending on overal company strategy
   * help your team by taking on tasks like initial contribution triage: Time to first response for contributors is crucial.
You can help your team by communicating to contributors if integration of the change takes a bit longer.
   * When faced with multiple larger contribution requests help your team by negotiating with other teams when the best time to work on these contributions is.
Often that is still way faster than your team doing all the work on their own.
But in particular first time contributors may need some hand holding - in particular for larger changes.
Coordinating the timing around that mentoring can be a big help for your team.
* "But I could simply fork" ... a misconception where potential guest teams believe that simply copying the code would be faster.
In the short term that is true.
In the long run it means added maintenance.
As a product person you can help your team understand why contributing changes to the project you depend on is in the best interest of the business: Less work overall.
Maintenance for the long term is taken on by the host team.

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


