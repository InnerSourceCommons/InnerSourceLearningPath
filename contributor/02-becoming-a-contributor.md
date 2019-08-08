# Draft comments

Outline for this section

    What does it take to be successful as an InnerSource contributor? This segment shares information on how contributors to InnerSource projects think and act differently from team members in other projects. It highlights which types of contributions are seen as valuable InnerSource contributions.

## Article

### Becoming an InnerSource Contributor

InnerSource contributors operate outside of regular team boundaries, they are the links crossing silos within organisations. As such they need to be aware of a few common practices that make this work more effective.

#### Sharing Mindset

So - you're implementing a new feature for your team's product. You need some functionality to get this feature working. Instead of jumping right into the implementation, slow down for a bit: Does this functionality reflect a general issue? Is it something that other teams in your organisation face as well due to the shared business domain? Is it functionality that is orthogonal to the domain of your project? If any of that applies, then start looking beyond your own team: Is there a shared solution that you can use or improve to fit your needs? Should there be one?

#### Benefits to sharing solutions

There is an African proverb stating that “If you want to go fast, go alone. If you want to go far, go together.” The same is true for software development teams:

If you want to move fast, it's a great idea to break dependencies. The downside to that can be duplicated effort. In particular when re-implementing core logic there is the very real risk of the cost of duplication outweighing the benefit of independence.

Collaborating with other teams enables you to share development cost. Just like in Open Source projects it can enable your team to build something bigger than you alone could have accomplished.

But every team has a different roadmap? I've tried to use shared components before - they always took longer to integrate than it would have taken me to re-implement them. Those components were always lacking in some aspect or another - and my feature requests never got priority on the roadmap of the other team!

In contrast to traditional project InnerSource projects come with the role of a Contributor: Yes, there will be times, when you wish that the shared solution has a new feature. As a Contributor you have the freedom to checkout the source code of the component, make modifications to it and use the resulting improved version.

Yes, there will be times, when you urgently need a bug fix on your timeline that doesn't have the same priority in the host team. Becoming a Contributor enables you to become active yourself and support the host team with fixing that bug.

This way of working requires a change in mindset for many: Instead of waiting for features to be implemented or bugs fixed, instead of working around issues there's now a third solution. Spend your time and energy to check back with the InnerSource project on what your needs are - and then make the change directly in the shared project. So in addition to your coding skills, what you need to be successful in an InnerSource project are communication skills to clearly articulate your needs and come to a solution to address those that works for both, your team and the host team.

"But I could simply go and fork the project, make my changes there and save myself from all this coordination overhead!" Sure - forking the project is a way to get your job done. Except in the long run this means it's on you to maintain that forked version for your team - and carry your changes forward for any new release the host team makes. Contributing your changes to the host team also means you get to benefit from their deeper knowledge of the component. They may spot issues in your patch, that otherwise would only have become obvious in production.

A good Contributor can comfortably make a call for when it makes both, technical and business sense to introduce a dependency and re-use a component instead of duplicating work. They can talk to management to explain the benefits of InnerSource contributions.

#### Scope of InnerSource contributions

So is Inner*Source* only about *Source*Code? Of course not. If your team's business depends on an outside component you want to make sure it's well maintained and well run. As an InnerSource Contributor, you can help the host team with that: Reporting issues you see when using the component is a valuable contribution. Creating or fixing test cases that show that the code isn't working as expected is valuable. So is improving documentation so others spend less time using it and contributing to it. Supporting other users, helping with bug triage can be valuable contributions. Improving builds is another example of a valuable contribution. 

To summarize no contribution is too small to contribute. Here is one that I made to tensorflow/models. A simple label change in a graph.

#### Summary of this segment

In this segment you learned about what it takes to become a Contributor. We looked at the sharing mindset. We took a deep dive into the benefits of sharing solutions. Finally we had a look at what the scope for InnerSource contributions typically looks like.
