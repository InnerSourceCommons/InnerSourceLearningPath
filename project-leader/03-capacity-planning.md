# InnerSource and planning

Planning plays a role in InnerSource in two important situations:

Contributing teams need to understand that working on upstream code typically does need more time than making comparable changes to their own codebase that they are well familiar with.
They need to be aware of the fact that even if the host team does not have to implement the change they still need to be available for mentoring and reviewing.
The time needed for that increases with the size of the change required.
As a result early communication with the host team is important in particular in cases of larger changes.

Host teams also need to be aware of the time needed for mentoring and reviewing.
Simply telling contributing teams that they can submit changes as patches does not reduce the time to make the change to zero for the host team.
In addition host teams can find themselves in the rare situation where they are flooded with pull requests.
For that event there needs to be a clear understanding of business priorities for the projects sending these pull requests.
When overwhelmed with patches it is often time to think about sharing ownership of the component.
In particular contributors that are coming back regularly and have earned trust of the host team are good candidates to receive the title Trusted Committer.

Some friction due to slightly different work culture cannot be avoided though.
For these cases it is important to explicitly set expectations.


## Setting expectations

Imagine the following situation:
As a contributor you finally made the change needed - likely with a little help from the host team.
You proudly submit the pull request.
Then - nothing happens.
A day later - still no reaction.
You start wondering if the host team has seen your patch.
You wonder where to best ping the team about an update.
This silence is very frustrating in particular for first time contributors.
There are several remedies to this situation - remedies that need no coding knowledge, but require at least some basic communication skills:
* Make reaction times that can be expected of the host team explicit - e.g. in the contributing documentation.
* As soon as a pull request is received communicate the expected time it will take to receive substantial feedback instead of letting contributors wait.
* Communicate ways for contributors to get in touch with the host team and watch communication there.

Neither of these tasks needs code writing skills.
This underscores the need for people beyond those who have programming knowledge.
It is good practice to consider people covering these tasks as committed to the InnerSource project and include them as Trusted Committers as well.

## Small vs. large changes

Small changes and patches are easy to handle - they are quick to review and often do not carry a lot of risk when merged.
One way to help host teams is to make time for splitting changes into smaller chunks.
Make sure to communicate the wider context these changes belong to though.

Often making larger changes requires communicating intent and purpose early.
It can also be benefitial to make sure contributing team and host team have enough time set aside for working on the change together.
This means that people setting team priorities need to think beyond their own team when prioritizing changes.
However coordination can still happen fairly independently as typically only the pair of contributing and host team are involved.


## Increasing the team around your InnerSource projects

Rarely host teams run into the challenge of receiving too many patches from contributing teams.
In that case it helps thinking about moving trusted contributors to the Trusted Committer role.
In addition to simply help with reviews, new Trusted Committers can help with issue triage, mentoring new contributors and the like.

When faced with a lot of interest in contributions one additional factor to consider when prioritising mentoring help for contributors can be interest of the contributors in a long term relationship with the host team.
The more time is needed for mentoring, the more likely it should be for contributors to stick around longer.

In practice sharing ownership of the component with very active contributors has proven to keep the newly minted Trusted Committers engaged with the project over a longer period of time.
Typically they help keep the component up to date and mentor new contributors long after the initial motivation for the contribution has been addressed.
