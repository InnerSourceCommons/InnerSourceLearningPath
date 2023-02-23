# Options for shared ownership

"If everyone owns it, nobody is accountable."
Traditional organisations perfer to have a single point of contact in case of issues.
On the other hand allowing simply everyone to make changes surely will reuslt in a mess that can no longer be maintained.

Based on that observation each InnerSource project has a dedicated team of Trusted Committers.
Interest in maintaining an InnerSource project often is motivated by enlightened self interest: A team understanding that they themselves need the InnerSource project to fullfill their customers' needs and understanding that opening the project up for contributions can spread the workload to move the project forward.
Opening a project up for contibutions though doesn't mean that Trusted Committers have to accept all submissions.
It is the team of Trusted Committers that sets the mission and goals for the project.
They are then in a postition to set direction and decide on change acceptance accordingly.

## Ownership misconceptions

"Trusted committers are responsible for an InnerSource project.
They review submissions and mentor contributors."

This is a very simplistic summary of what the role of a Trusted Committer looks like.
In reality one of the first questions often revolves around the need to accept each and every contribution.
In particular where contributors have already invested a lot of time in the contributions can become frustrated when hearing that their work was in vain.
Communication skills are important to make sure that contributors know roughly what the roadmap of the InnerSource project looks like.
They are also needed to make sure that contributors know to share intent and progress very early on to avoid spending a lot of work without results.
Last but not least rejecting contributions needs very good communication skills.
To cut a long story short: Even if you are not writing source code yourself, your support is needed to clearly communicate the vision of the InnerSource project, to potentially help when contributions need to be rejected.
Another aspect that becomes more important as the InnerSource project becomes more popular: Review and mentoring become more time intensive and over time need to be scheduled into the day explicitly.
This does have impact on general capacity planning and should not happen "under the radar".

On the other hand for contributors it is important that code review is not a last stage quality gate.
Instead it is a way for continiously guiding contributors through the code development process ideally leading to better results faster.
For that to work out in practice there needs to be time and space for team building - but across traditional team boundaries.
Having at least a vague understanding of the different cultures in teams makes misunderstandings much less likely and the contribution process much more smooth.

In particular when host teams are flooded with contributions product managers that otherwise focus only on their local team need to take a more global perspective:
* Help the team understand different priorities for incoming contributions depending on overall company strategy.
Often not all contributions are equally urgent.
* Another way to help the team is to take over tasks like issue triage, handling initial responses to contributors and guiding larger contributions through the process.
You can help your team by communicating to contributors if integration of the change takes a bit longer.
* When faced with larger contribution requests teams can benefit from help negotiating with other teams the best time to work on these contributions.
Often that is still way faster than your team doing all the work on their own.
In particular first time contributors may need some hand holding - in particular for larger changes.
Coordinating the timing around that mentoring can be a big help for your team.


"But we could simply fork permanently" ... a misconception where potential guest teams believe that simply copying the code would be faster.

In the short term that is true.
In the long run it means added maintenance.
As a product person you can help your team understand why contributing changes to the project you depend on is in the best interest of the business: Less work overall.
Maintenance for the long term is taken on by the host team.

## InnerSource governance levels

"We are using pull requests to develop our component - so we are using InnerSource on a daily basis".
While using pull requests and reviews is a crucial component, it is just the baseline for InnerSource projects.
Just because two projects you depend on use pull requests on a daily basis does not mean that their openess to team-external contributions is the same.

InnerSource comes with different best practices.
In order to avoid confusion and frustration for contributors it is important for host teams to define for their InnerSource project which governance model they want to adopt.
Much like in Open Source these governance levels can differ substantially.

In the InnerSource Commons we provide an InnerSource pattern that defines at least three governance levels:
* Source code is visible to everyone - but the team has no time to mentor contributors.
From the outside this may look like your everyday InnerSource project.
Making the refusal to mentor and accept contributions explicit though avoids confusion from colleagues trying to interact with the project through InnerSource means.
Instead this communicates to those depending on the project that only feature requests and bug reports can be handled by the team.
Essentially that means falling back to a regular traditional software development project.
* Source code is visible to everyone - plus the team of Trusted Committers has set aside time for mentoring contributors.
For these projects patches and pull requests are welcome.
The team of Trusted Committers makes sure that project relevant communication happens in a written, archived, searchable and linkable channel.
The team also makes sure that project relevant decisions are taken where contributors can see and follow them.
Final decision making though rests with the team of Trusted Committers - and becoming a Trusted Committer of the project is tied to working for the initial project team.
* As above - but the team of Trusted Committers is open to the idea of sharing write access.
This approach requires a process for building enough trust with contributors for the team of Trusted Committers to share write access.
This is particularly helpful where there is a long term relationship with contributors.
Shared write access can remove the review bottle neck.
* In the final stage the team of Trusted Committers is also ready to share control over who gets write access next as well as project vision and mission.
While this will often result in the highest level of committment from contributors it also requires a high level of coordination crossing team boundaries.
It also requires the highest level of transparency when making decisions about the project.


To summarize each governance level needs a different approach to collaboration and coordination:
* Increased sharing increases the need for communication and co-ordination,
* Increased shared accountabilities can slow down decision making.


## Explicit pointers for contribution

What is implicitly clear for team members is best made explicit and documented if the project would like to encourage contributions.
Topics like
* Response times to expect when submitting changes,
* communication channels to use when getting in touch with the team of Trusted Committers,
* communication channels to use when trying to follow the project as a contributor,
* governance levels to expect from the project
are all topics that the entire host team has to agree and communicate to contributors.

## Impact on leadership

Increased sharing of accountabilities for InnerSource projects also has an impact on performance reviews.
In hierarchical settings those often consider contributions local to the team.
InnerSource contributors however are starting to have an impact outside of their own teams.
InnerSource Trusted Committers have an impact on teams that can be outside of the scope of their own team.
That means direct line managers are losing a certain level of control.
They are also losing direct oversight.
As a result, performance feedback from potentially remote teams should to be taken into account.

## "You build it, you run it" in settings with high sharing levels

A common best practice for cross functional teams is a "you build it, you run it" setup.
With contributions potentially coming from downstream users this best practice seems to break.
There are several ways to use InnerSource in that context as well:
* Option number one is to move to greater modularization and collaborate only on the parts that are the same across teams and keep operations local.
* Alternatively work with contract tests to avoid API breakages.
* Work with internal service level agreements, make contributors sign up to warranty periods to remove the fear of the host team that contributions break production systems.
