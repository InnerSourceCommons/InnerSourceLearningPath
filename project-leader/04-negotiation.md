# InnerSource and negotiation skills

Coding and negotiation?
You may ask yourself how these two go together.
In particular for InnerSource host teams it helps to have a few stumbling blocks in mind when it comes to change negotiation.

## Small vs. large changes

As discussed in the last training segment, smaller code changes tend to get accepted faster.
For the host team the advantages are clear and should be communicated to contributing teams:
* They are easier to review.
* They have less impact - both, positive and negative.
* They are faster to integrate.
As a result making small changes in an ad-hoc fashion typically causes little to no friction.
They are a sweet-spot for drive-by contributions and often can be handled without much coordination support.
Typically this is how InnerSource contributions start: Engineers in teams start collaborating on smaller changes and find that work very easy and light weight.
Smaller changes are also changes that tend to go through without any need for escalation.

This may cause teams to adopt a mindset where InnerSource is only for the software engineers.
However this learned ad hoc working model breaks as soon as the scope of contributions increases.
If kept purely to software engineers, in the worst case even with push back from other roles in the teams this means that escalations will happen way more often.
For modifications with a larger scope other roles in the contributing and in the host team need to be aware of the InnerSource work and need to bring their skills to the table:
* Together, the two teams need to figure out a good time for working on the contribution.
If the host team has no time for mentoring the contributing team is more likely to get frustrated for lack of support.
They may also be more likely to develop a solution that is likely to need a lot of rework causing frustration for everyone involved.
If the contributing team has no time to focus on the contribution refinement cycles for the changes may become too long and interruptions too high.
* Before any source code is written the contributor and the host team need to figure out if the changes fit into the vision of the InnerSource project.
Ideally this also means that tech and business level expertise needs to come together, preferably on the same communication channel where everyone can participate.
Often this results in negotiations around if the changes should be made in the InnerSource project - with maintenance subsequently covered by the host team.
It can mean that those involved need to clarify what the value for everyone involved is, but also if and how the contributing team can help the host team lower the maintenance burden.

## Coordination

"Just write the code and send us your patch" - sounds easy enough.
Except in reality this is only true for the most trivial changes.
In particular larger changes need coordination so that everyone involved has time to participate.
Otherwise longer waiting times are expected.
Crossing team boundaries also often means subtle changes in communication culture.
People who are strong communicators can help cross these gaps by translating between teams in case of misunderstandings.

In contrast to teams working only on local code InnerSource host teams need to make sure their roadmap and vision is communicated with all potential contributors.
In addition the host team needs to make sure that design, architecture and performance requirements are explicit and clear to everyone working on the code-base - including occasional contributors.
This transition is particularly hard for teams used to work in very cohesive local settings.
Essentially everything that in a very local team is clear implicitly needs to be made transparent and explicit.
In the short term this does cost time - in the long term it helps contributors get up to speed faster requiring less support from the host team.
One thing that has been proven successful in Open Source is making it easy for contributors to walk the correct path.
This includes automated quality checks that fail at build time.
While time consuming to write and maintain those take work off of the shoulders of the host team as obvious issues are highlighted automatically.

One difference with InnerSource to regular inter-team negotiation are opportunities to think out of the box:
Imagine a contributor Bob who needs a very complex change in the InnerSource project maintained by Alice.
Bob is just beginning to understand the code base and would have trouble understanding it on his own.
In addition mentoring him through the process would take Alice a lot of time.
However Alice has several high priority but easy to implement features on her backlog.
What if Bob took some of those issue off of her backlog and implemented them - in return Alice has time to work on the change that Bob needs?
For the sake of transperancy those agreements should be explained to both, the host team and the contributing team.
Otherwise they will have a hard time understanding why Bob and Alice are not working on the changes that each of their customers needs.

For another example, imagine a host team that is working on a very popular InnerSource project.
Likely it is central to the business of the company.
Over time more and more contributors are capable of making the changes they need turning the host team into a review bottleneck.
To deal with that issue, a clear perspective on overall business priorities and importance of the contributing teams' helps understand which patches to prioritize and stops the host team members from shifting focus constantly.
As a next step the host team needs to think about expanding the number of Trusted Committers working on that InnerSource project.
As mentioned earlier one option could be inviting people committed to the project who report to a different business line.

In particular when faced with a lot of contributions that are fairly complex, host teams need to understand where the time invest to mentor contributors is a worthy investment.
The more time needed for mentoring the more likely it should be that these contributors will have time to stick around for longer.
