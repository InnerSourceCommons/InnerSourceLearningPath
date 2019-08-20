# Draft comments

 Outline for this section

     Contributors by definition work in teams that they are not familiar with.
This section explains how to avoid common pitfalls when crossing team
boundaries.

# Article

In the last segment we have motivated why you would want to reuse components and
become active as a Contributor. This artice is sharing best practices on how to
successfully contribute your changes to the host team's code base.

 ### Contributor Ethos

An InnerSource Contributor trying to make a contribution to the host team
essentially is a guest in their home. In general a good guest is expected to
behave in a certain way:

* They knock at the door.
* They anticipate and follow house rules.
* They understand they are not the home owner and act accordingly.

How do these expectations apply to InnerSource projects?

#### Getting in

When visiting your neighbors you will likely not enter their home without
knocking or ringing the door bell even if the door is open. Likewise in Inner
Source as a visitor you won't be able (or invited) to commit directly to any
code repository.

Instead when visiting your neighbors you're likely to at least knock on their
door. Likewise in Inner Source after making your changes to the codebase you'll
submit them as a pull request. Much like you wouldn't go about making large
changes and what you consider improvments to your neighbors home, in Inner
Source you will anticipate and follow the projects collaboration guidelines. In
turn your hosts will show you the way - in Inner Source that translates to
existing trusted committers spending their time to mentor guests.

What about those lovely summer parties that you went to? Likely before going
there was some planning ahead of time to choose the right date and time, to
prepare enough food or have that contributed by the guests. The same happens for
bigger changes in Inner Source projects: Before making large modifications a
project is likely to first ask you to submit an issue describing your need and
your proposed solution. Spending some time on an intial design instead of
jumping right into the implementation here saves contributors from having to
re-do a lot of their work. Sharing progress early - even when it's not finished
yet - helps mentoring the contributor towards a better solution. Much like
[Yonik's law of unifinished
patches](https://cwiki.apache.org/confluence/display/solr/HowToContribute)
explains: "A half-baked patch in Jira, with no documentation, no tests
and no backwards compatibility is better than no patch at all."

Does that imply that Inner Source projects place no value on face to face
communication? Not quite: There is value in meeting participants face to face.
Remember that all written communication lacks a lot of bandwidth compared with
meeting in person: There's no gestures, no mimics, not even the tone of voice
that otherwise help with understanding. In particular for inter-personal
challenges, resolving conflict and misunderstandings meeting in person has
strong value. However for Inner Source projects the goal should be that
communication about project decisions be kept in writing so that others can
follow along and influence the project, so that even years later it's possible
to trace why a certain decision was made.

Here's my general rule of thumb: Feel free to meet over coffee, often that helps
with building a stronger team. Remember though that when the team is split into
multiple physical locations (for me that includes teams that are spread across
mutliple floors) there is a good chance that this encourages the team to split
into multiple silos. Do make sure though that all decisions are made in a
transparent and asynchronous way so that everyone - including those lurking in
on your conversation - can jump in and become active contributors. One example
of just how far one can take open decision making is explained in several
exercises in the [Open Organization
Workbook](https://opensource.com/open-organization/resources/workbook)

Now, how do you figure out where an Inner Source project would like to discuss
changes, future direction of the project? Many InnerSource projects outline how
they like to be approached by potential Contributors in their README.md. If that
document becomes too large to handle contribution guidelines tend to be split
out into a file named CONTRIBUTING.md files. Following those recommendations
greatly helps the contributor selling their offer.

In all of these interactions, be prepared to "sell" your contribution to the
host team. Articulate the value that the contribution will bring to their
ecosystem.

The host team will be the one taking over maintenance for your changes. It makes
sense to offer to fulfill a [30-day
warranty](https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/master/30-day-warranty.md)
on your submission. This can
alleviate the host teams' fear of the contributors not being available for
support with fixing bugs after the time on contribution.

#### Anticipate and follow house rules

When visiting your neighbors, likely they will help you around in their
apartment: They'll show you the way to their living room, likely they'll show
you where the restroom is located. If you're staying longer, they likely also
give you more details: In my case an example would be to try to avoid turning on
the dishwasher and the electric kettle at the same time to avoid blowing the
fuse.

Similarly every software system comes with it's own quirks and intricacies.
Often the most obvious ones are well documented: In smaller projects this
documentation can be found in the README.md. In larger ones, contribution
specific documentation can often be found in the CONTRIBUTING.md document.

Often what you'll find in this documentation is more information on how to
checkout and build the project, how to run the test suite, how to submit changes
to the project. Likely it will point you to further documentation if there it
deviates largely from standard tooling - or if there are things you should keep
in mind when making changes.

Going through that documentation usually turns out to be a huge time saver as it
stops you from going down the wrong path and warns you about dead ends. If you
find things are missing from it based on your experience - patches to that
documentation typically are very welcome: There's nobody better suited to
improve it than the new contributor who sees the project for the first time.

Try to figure out together with the project in their preferred communication
channel if the changes you have in mind make sense overall. At the beginning it
can be scary to have these conversations in a company public medium, that is
archived and searchable. The benefit here is with others coming after you with
similar proposals: Instead of walking the exact same path again, they can learn
what was discussed before and start from there.

#### Understands they are not the home owner and acts accordingly.

Being a Contributor essentially means being somehow closer to the host team than
someone merely requesting a feature. Still Contributors are not accountable for
the software project they are contributing to.

As a result the final call on what the contribution must look like is with the
host team. It helps to make sure to approach the host team with a humble
mindset, with the assumption that all are collaborating towards the purpose of
the shared organisation. It helps to be open and transparent - not only about
what was implemented how, but also why the change was needed.

Treat any feedback as a gift: Others are trying to improve your solution, saving
you from trouble further down the road.

There is a chance that the host team does not accept your contribution at all.
In that case it helps to work with the team, figure out if there is a sub aspect
of what you need that can be solved in their project.  Collaborate on that sub
aspect and then find another way to solve the remaining issues on your end.

 #### Summary of this segment

In this segment we have learned how to best approach an InnerSource project as a
Contributor. We also looked at how to best communicate our need for the change
and together with the host team find a solution for that need.
