This file holds the text to accompany the [What is InnerSource?](https://www.safaribooksonline.com/videos/introduction-to-innersource/9781492041504/9781492041504-video321608) video.
This accompanying text will appear as a part of the learning path (like [this example](https://www.safaribooksonline.com/learning-paths/learning-path-lean/9781491999738/9781491946527-/part01ch01.html)).

# What is InnerSource?

Let's say that team A uses software produced by team B.
Team A submits a feature request to team B, but team B isn't able to implement that feature in time for team A.
In an InnerSource setting, if team A can't get this feature request then it submits a pull request instead.
That is to say team A implements the feature directly in team B's software and submits a pull request with the code changes.
Team B partners to review and accept the submitted code.

In this example, we call team A the **Guest** team and team B the **Host** team.
The terms **Guest** and **Host** suggest a situation analogous to receiving a visitor in the home.
In that situation, most people want to be a good host.
They ensure that things are kept neat and tidy in anticipation of their guests' arrival.
Visitors are greeted at the door and invited in.
They can use the features and utilities that are in the home's public areas.
There may be a few house rules that guests are asked to follow.
Similarly, most guests want to show respect for the home and their host.
They're careful with the items in the house and follow the rules for the duration of their stay.
They may hope for or expect a return invitation as long as they've been courteous and polite.
These concepts around a home visit are a metaphor for the attitude and behaviors that teams should bring as one hosts another making a guest contribution to the codebase.

Let's take a closer look at how the mechanics of the inner source process can work.
To aid in this explanation, we'll name a few key individuals on the guest and host teams.
First, the **Product Owner** determines what functionality the host team is willing to accept as a contribution.
The **Contributor** is the individual on the guest team that submits the code contribution for review by the host team.
The **Trusted Committer** represents the host team in providing any timely support and mentorship that the contributor needs to successfully submit the pull request.
On small, grass roots efforts a single person often fills _both_ the product owner and trusted committer roles.

With those definitions, here is the basic outline of an inner source contribution.

* Guest team or contributor requests a feature from the host team.
* Product owner ensures that user stories representing the feature request are created.
These stories should describe the requested feature in terms agreeable to the guest team.
They also list any details from the host team on how the feature should be delivered in order for the work to be accepted.
Examples of such details include architecture constraints, coding conventions, dependency usages, data contracts, etc.
* Supported by the trusted committer, the contributor submits the pull request to implement the requested feature.

Note that these steps do not assume a specific system for the general organization of a team's time or priorities. Inner source assumes that teams already have existing methods of organization and provides a framework of how to use them to work together where there is a guest team desiring to contribute code to a host.

This option works well for the guest team because they get the functionality they need when they need it without taking on the long-term burden of maintenance of the solution.
It works for the host team because they are able to better scale and serve their consumers.
It works for the company at-large because solutions to shared problems end up in shared, centrally-maintained locations where anyone can use them.
More engineering time stays focused on producing code that solves company problems rather than the mechanics of the feature negotiation and escalation process.

## Additional Resources

* The [Trusted Committer](https://github.com/paypal/InnerSourcePatterns/blob/master/project-roles/trusted-committer.md) pattern.
