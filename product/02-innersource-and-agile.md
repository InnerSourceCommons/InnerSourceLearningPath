# InnerSource and Agile

You want to improve your product and deliver those improvements faster to customers.
You want to make stakeholders happy.
InnerSource helps your team deliver value and maintain autonomy especially in a highly interconnected world.


## Autonomous teams in an interconnected world

Organisations try to deliver value to customers quickly.
One common cause for delays are dependencies in the delivery process.
As a result many organisations have moved to cross functional teams where communication with customers, design, implementation, testing and deployment/ operations are all in one team thus eliminating the need for costly handovers.
However in order to achieve high performance, teams try to also eliminate waste and re-use existing components.
From a team perspective each reused component adds another dependency outside of the control of that team.
Often the results are lengthy roadmap discussions to get everyone on the same page on how to optimize priorities globally.
This allows changes that are needed in central components to be implemented in an orderly fashion.
Often there are so many requests coming from teams that one central component team runs out of capacity to implement all of the requested changes.

While in traditional organizations there are only two ways of making changes to dependencies:
* Submit a feature request/ bug report and wait for the other team to prioritize that change and implement it.
* Build a workaround to avoid the bug or locally provide the functionality needed.

If none of those options is successful typically the issue is being escalated and decided at a higher hierarchy level-

Neither solution is particularly satisfying.
Looking at Open Source though there is an obvious solution: As a contributing team that depends on a certain component provide a helping hand to the host team that is responsible for that component.

Now you may ask yourself: "Doesn't that lead to complete chaos where people randomly write into code repositories of teams they are not a member of?" InnerSource comes with a set of roles and processes that bring clarity to what otherwise would indeed lead to chaos:
* Each InnerSource project has a set of Trusted Committers with clear accountabilities that go beyond simply reviewing code.
Trusted Committers are also the people who set the rules for contributions.
* Contributions happen in a structured way - with a clear focus on sharing contribution intend early to make sure the contribution fits within the Host projects' vision and scope.
With a focus on sharing progess early so the host team has a chance to mentor the contributor and guide them on the path to a desired design and architecture early instead of creating frustration by having to decline a contribution late in the process.
With a focus on asynchronous communication to be able to work around differing meeting schedules of people in different teams.
As a result contributing teams gain autonomy to fix upstream artifacts without sacrifycing the quality of the component that is being contributed to.

As a side effect InnerSource provides teams with best practices that make working in a remote first culture easy.

## Advantages of an InnerSource approach

Instead of working in silos InnerSource fosters collaboration between teams.
Much as in Open Source that means standing on the shoulders of giants: Instead of building every component locally InnerSource fosters reuse.
It reduces the cost of reuse by providing a clear path to supporting the upstream team with the work of fixing bugs and implementing features.

Much like in Open Source InnerSource fosters a thinking of combined forces: Components that all business units and product teams need as a foundation can be built together.
As a result all the boats are rising together: Innovation created in one part of the organization can create benefits all over the entire corporation.
With teams that are familiar with InnerSource the load to move this type of innovation forward can be shared by all teams that benefit from and depend on the resulting components and services.

InnerSource gives your team the initiative and tooling to fix issues that block shipping features to customers.
When done right maintenance of core components and services can be shared in a well structured way by a "virtual InnerSource team" that is larger than any specific product team.

In advanced settings those involved understand the value of contributors working on simpler features that may not directly benefit their customers - under the condition that that frees the host team to work on more complex changes that contributors hava a business need for.


## Does InnerSource replace Agile?

Short answer: No, not at all. Instead the two complement each other:

Well factored and well tested code is one goal of any agile team. In an InnerSource setting not only does that lead to faster on-ramp times for team members, it helps getting contributors up to speed quickly as well.

Teams that are already familiar with collaborative ways of working together and avoid assigning individual tasks are in a good position to also deal with external contributions in a flexible manner.
They also bring a mindset and communication style that works well for motivating contributors over whose priority they have no direct influence.
Working with intrinsic motivation instead of directing work means that host teams already have the tools that will support the successful collaboration with contributors.

If teams are already successfully pairing to work on problems they are already comfortable with sharing progress early for the purpose.
One challenge moving to InnerSource from a pairing only culture often is two-fold: The host team needs to make time for supporting contributors and schedule that into their planned work.
In addition when crossing team boundaries it is often hard to find time slots for pairing - in those cases it should be complemented with asynchronous collaboration.
To avoid frequent disruption time for that should also be set aside.
Often it is simplest to set aside certain hours in the day or a day a week for that work.
Making that explicit at the team level takes a lot of pressure off the engineers trying to fulfil their own team goals but also helping out contributors.
Another challenge with pairing is that it allows pairs to move very quickly together - often at the expense of writing important information down for the rest of the team.
In an InnerSource setting it does take training to remember to bring all relevant decisions back to shared communication channels that both, host team and contributors can follow.
From a product perspective that does bring a lot more transparency to the development process.
It also means that decisions that otherwise may have been taken at the engineering level only are now visible for everyone involved.

Remember last time you insisted that your product be well tested, preferably with automated tests so deployments can happen frequently and without human intervention?
This goal now helps with InnerSource as well: Contributions are much easier if contributors can check locally if their changes are safe.
Tests also ensure that the host team remembers to keep the contributed functionality if they are reminded of the reason for it by a failing test.

Remember last time you insisted on your team spending time to follow the goal of "leave code in a better shape than you found it"?
That mindset will also help you when moving to an InnerSource model: It makes sure that quality and co-hesion of code remains high even when there are multiple contributions from different sources.


## Common misunderstandings when coming from agile teams

InnerSource and Agile uses some of the same tooling - for different purposes.

### Impact of overlapping language

Issue trackers: In agile teams user stories are a conversation with the customer.
Often the are put as sticky notes on a whiteboard.
But also often they are stored in an issue tracker.
As a result issue trackers are mainly needed for planning purposes, essentially a replacement for sticky notes on a whiteboard.
In InnerSource, issue trackers serve for a conversation with the customer, but also for communication between members of a team of trusted committers and contributors working on one common InnerSource component.
Issues in InnerSource become much more lengthy and wordy than in your average organisation.

Code Reviews: In traditional organisations code reviews often serve auditing purposes and for quality control.
They are done when development is finished.
In InnerSource code changes are shared very early in the process, sometimes when nothing more than a rough sketch is done.
The goal is to seek early feedback and mentoring.
This is particularly helpful for teams that are on diverse schedules and cannot find any time for pair programming.
Often teams have the aspiration that nobody walks alone - in reality though this often isn't much more than an aspiration never achieved.
In particular where contributions cross team boundaries.

Focus on written communication: The goal with InnerSource is for the project to be transparent enough so that developers who are not part of the team can understand project decisions and follow alogthe process of software creation.
As a result all communication needs to be in a place that everyone interested in the conversation can follow along: written, public, searchable and linkable.
The goal is not to reduce distractions to others - the goal is to make all project conversations transparent.
As a result direct messages and mails are to be avoided.
In order to make following conversations easier for everyone, messages related to one InnerSource project should be tracked in one separate communication channel: The goal is not to reach every person in the team of the InnerSource project.
The goal is to find a common shared room for everyone involved with the project where they can have discussions focused on that InnerSource project.


Focus on written communication does not mean verbal communication is disallowed.
There still needs to be time for a shared cup of coffee.
Also solving problems together, pairing with others or in person hackathons are valuable to find solutions quickly.
The team needs to make sure though that all project relevant decisions are kept in channels that everyone has access to.
That also may mean to postpone important project decisions until everyone is back from vacation or waiting for another day or two if those working in another country are now on holiday.
This is not only relevant for coding decisions, but also relates to general project mission, roadmap and direction.
Without that information contributors will have a hard time understanding which contributions will have a good chance of getting accepted.

### Impact of trust

All discussions in InnerSource projects are visible to everyone in the company.
Blaming people for their errors, ridiculing them for their mistakes, talking behind their backs about what they did wrong is a sure fire way to kill that trust and leads to the failure of that InnerSource project.
This is in particular important for anyone in a leadership or role model position.

