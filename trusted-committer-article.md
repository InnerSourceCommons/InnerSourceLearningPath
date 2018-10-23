# InnerSource Learning Path: Trusted Committer

## Introduction

- tbd

## Introducing The Trusted Committer Role

The Trusted Committer (TC) role is one of the key roles in an InnerSource
community. Think of TCs as a person in a community that you trust with
important technical decisions and with mentoring contributors to get their
contribution over the finish line. The TC role is both a demanding and a
rewarding role to fulfill. It goes far beyond being an opinionated gatekeeper
and it is instrumental for the success of any InnerSource community. 

Generally speaking, the TC role is defined by its responsibilities, rather than
by its privileges. On a very high level, TCs represents the interests of both
their InnerSource community and the products the community is building. They
are concerned with the health of the community and the product. So as a TC,
you'll have both tech oriented and community oriented responsibilities and
we'll explore both of these dimensions in the following sections. 

Before we go into the details of what a TC actually does, let's spend some time
contrasting the TC role to other roles in IS and why we think the name is both
apt and important.

Let's start with the _Contributor_ role. A _Contributor_ - as the name implies,
makes contributions to an InnerSource community; code but also bug-reports,
feature-requests or documentation. The contributor might or might not be part
of the community. He might be sent by another team to develop a feature they
might need. This is why we sometimes also refer to Contributors as _Guests_ or
being part of a _Guest Team_. The _Contributor_ is responsible for "fitting in"
and for conforming to the communities expectations and processes.

The Trusted Committer is always a member of the InnerSource community, also
sometimes referred to as the _Host Team_. In this analogy, the TC is
responsible for both building the house and setting the house rules, to make
sure their guests are comfortable and can work together effectively. Compared
to the _Contributor_, a TCs have earned the responsibility to push code closer
to production and are generally allowed to perform tasks that have a higher
level of risk associated with them.

The Product Owner is the third role in InnerSource. Whether or not there is a
dedicated PO depends on the type of InnerSource community and the products they
build. Especially in grass-roots type InnerSource communities like the one I
work in, the TC also acts as a PO.  Similar to agile processes, the PO is
responsible for defining and prioritizing requirements and stories for the
community to implement. The PO therefore often interacts with the TC, e. g. in
making sure that a requested or contributed feature actually belongs to the
product. In the Host/Guest analogy, the PO would be the one of determines what
Host and Guest work on in the communities House. Please check out our Product
Owner Learning Path video for more detailed information.

---(not added in text, yet)
- Product Owner: Distinction between the guest and host PO - have to negotiate
  requirements, if necessary.
---

## Why role names matter

Let's spend a few moments and discuss why the naming - "Trusted Committer" - is
really important. The role of the TC is present in every successful InnerSource
community but not every community uses that name. That was actually true for
myself in my InnerSource career - I used the terms Maintainer.  But it turns
out that conficts with the technical role "Maintainer" defined by GitHub, for
instance.  Apache, e. g., uses the term _Committer_, too, but they attaches
fewer and mostly tech oriented responsibilities to that role. The TC role with
its additional community oriented responsibilities goes beyond that. The
"Trusted" in TC conveys that they are trusted and thus empowered by both their
management and their community to do their job. By fostering openness and
transparency, TCs builds trust in the process and also the product being built.

So similar to how naming is important in writing software, it is, too, for the
roles in an InnerSource project so that everyone has the same notion of the
role and is aware what can be expected from s. o. with that role.

## Responsibilities of a Trusted Committer

Let's now dive into the responsibilities that Trusted Committers have. We will
cover of them in the following segments, including:

- ensuring product quality,
- keeping things running smoothly in the InnerSource community,
- reducing the barrier to making contributions,
- uplevelling the community,
- keeping the community healthy and
- advocating the communities needs.

## Ensuring Product Quality

Let's start with the responsibility most often associated with the TC role: 
ensuring product quality. 

In an InnerSource community, the TCs _own_ all tech related decisions,
especially those related to product quality. Ownership implies that the TCs
don't necessarily make all the tech related decisions themselves or do all the
work implementing them, but that they are the ones who make sure the decisions
in place are followed through, who advocate and - if necessary - defend these
decisions, inside and outside of the community. 

So what does a TC do in practice, to reach these goals? What are the means that
TCs have at their disposal to ensure quality? Let's start with some passive
means. It is the TCs job to communicate and motivate quality standards in their
community and to formulate them in a way that is understandable and actionable
by their contributors. I have personally always made it a point in my community
that one of the ways we distinguish ourselves from non InnerSource SW
development projects is not only the way we develop software, but also the
quality of the SW itself. Quality became part of our Ethos. The TCs also make
sure that developers have the infrastructure and tools they need to produce
quality software. The most important and most powerful passive tool TCs have 
to ensure quality is to set an example for quality themselves.

The tool that TCs will use most frequently for ensuring quality is peer review
performed in Pull Requests. While usually everybody can partake in a Pull
Request and help point out necessary improvements, it is usually only the TCs
who can finally accept or reject a contribution. That is what I meant when I
said "TCs can push code closer to production" earlier. TCs should also help
contributors during a PR to get their contribution over the finish line. That
said, it is ultimately the contributors job to make that happen. The job of a
TC is not to accept all contributions by default, but to only accept those who
meet the defined criteria in terms of quality and scope. Related to scope: 
sometimes requirements or limitations for the software being developed are
not elicited up front but rather discovered during development. TCs are also
responsible for making sure these are captured and documented for both the POs
and the contributors.

The TCs purview with respect to quality goes beyond PRs, though. TCs need to
think about quality on a strategic level and ensure the longevity of the SW
being built. That entails code oriented responsibilities from ensuring 
cleanliness of the code to maintaining conceptual integrity of the overall
software. It also entails more management oriented tasks such as making sure 
that the community is given sufficient time to refactor the software or move
a release date in favor of quality improvement tasks, if the community deems
that necessary. The effectiveness of the TC is strongly related to code health.
Absent the latter, the TC will have to spend all their time validating and
documenting workarounds for bugs or a fragile architecture rather and will not
have enough time to spend on onboarding and mentoring contributors.

(- act as stakeholder of the SW/Architecture towards rest of org)

## Keeping The Community Healthy

We said in the beginning that TCs have both tech oriented and community
oriented responsibilities. It is not sufficient to focus on quality only. To
ensure success in the long run, the TCs should also strive for keeping the
community which is building the SW healthy. Because of that, they must strike a
healthy balance between effort spent on ensuring product quality and growing a
healthy community. 

What does a healthy community look like? In a healthy community, contributors
tend to stick around and can spend most of their time on developing software
and a healthy community is growing. 

Why do contributors join and stick around in a community? Some do because they
subscribe to the purpose or the mission of the community. It is the TCs job to
clearly articulate and promote this purpose. In my experience, the importance
of this is often not recognized. If I could go back in time, the one thing I
would personally do differently as a TC is to spend more time on marketing the
community inside my company. 

Another, more obvious reason for people to stick around is that they enjoy
working with other members of the community, including the TCs. In my
experience, what this comes down to is that community members treat each other
and communicate with utmost respect. They treat every contribution like a gift
or a donation, rather than something that detracts from their own work and they
laude excellent and especially first contributions. The TCs job in all this is
primarily to set an example for others, similarly how he sets an example for
the level of software quality that is expected. TCs should create opportunities
for people to get together regularly and get to know each other personally. If
necessary, the TCs are the ones who should create and enact a code of conduct 
for the community. Should there be community members who behavior is
detrimental or even toxic to the communities health, it is the TCs
responsibility to either try and change or contain this or, in the worst case, 
to remove people from the community.

Another reason for people to stick around that I heard a lot during my time as
a TC is that their work in an InnerSource community was an excellent
opportunity to acquire new skills and to grow personally. This is again where
the role of the TC is really important. TCs often become mentors for junior
developers and they explicitly spend time during Pull Requests not only to
point out areas for improvement but also explain in detail why something needs
to be improved, including the theory or experience behind it and offer
suggestions on how it is best done. I have personally always tried to
prioritize onboarding and mentoring during Pull Requests over reaching
communicated release dates, unless there was a very good reason not to. TCs do
this because they understand the virtuous cycle: Good mentoring in PRs leads to
a higher level of trust and engagement on part of the contributors which in
turn leads to more people willing to make contributions and thus more
contributions. We'll talk more about this in the segment on "Upleveling the
Community".

Finally, some people stick around in InnerSource communities, because they get
to focus on developing software and to spend as little time as possible on 
activities which are considered overhead or wast, common especially in large companies.
The TCs job in this context is to ensure that contributors can actually do that
and generally to keep things running smoothly. This includes e. g. 
communicating and enacting helpful contribution guidelines. One important 
aspect of those is to explain what I call _signaling_ in Pull Requests: what
should a comment look like? What does it mean if I _like_ or _+1_ a comment?
How is @mentioning s.o. with a /CC prefix different from doing so with a /FYI
prefix? Generally speaking, TCs need to make sure that the contribution process
uncovers problems, rather than be the cause of them. Ultimately, TCs should
empower their community to point out process related problems and to adapt and
improve them as a community as much as possible.

For TCs to be able to fulfill all these responsibilities, it is important that
they communicate regularly with community members and _keep an ear to the 
ground_ so to speak so that they are aware of the communities needs. We'll
go into more detail in the section on "Advocating the Communities Needs".

(- benefit from the SW being developed as reason to join?)

## Reducing Barriers To Entry

Soliciting contributions is one of the things that is more challenging with
InnerSource compared to Open Source. There are a number of reasons for that 

- The sheer number of potential contributors is lower in InnerSource
- Contributors will want to contribute during their work time. That means
  they are more time constrained compared to doing Open Source after office
  hours. Time spent on InnerSource might be time lost on reaching their
  original goals.
- Work in InnerSource might not necessarily be part of the official 
  performance goals of contributors.

It is therefore super important to make the process for making contributions
and for onboarding contributors as frictionless as possible to avoid wasting a
contributors time. This falls squarely into the responsibilities of TCs. There
are a number of things a TC can do to achieve that state:

- have a good readme.md in each code repository. A good readme.md explains
  what's in the repository and what it can be used for. In addition, it should
  provide detailed instructions on how to get, build, test and use the SW in
  the repository, including the license.
- have a good contributing.md which outlines what is expected of the
  contributor with respect to making a contribution. It should answer common
  questions like

    - Who do I contact in case of questions and how do I reach them?
    - How do I submit a bug report or feature request?
    - What is the definition of done for a contribution?
    - What are conventions for code style, branching or commit messages, e. g.?
    - What are the process steps that govern contributions?
    - What is expected of me in terms of supporting contributed code after
      the contribution was accepted?
    - What is the code of conduct and what are the guidelines to how the
      community operates?

If you have an internal license attached to the software, which in some
companies is a precondition to share SW across legal entities, include a copy
of that license **and** an explanation of the rights and obligations of that
license in layman's terms.
  
In addition to these documentary tasks and similar to Open Source software 
development, it should be easy and straightforward to run and test the SW
being developed locally by potential contributors, so that they can start
implementing and validating their contribution with as little effort as
possible.

There are two common models for making contributions, today: 
_shared repository_ and _fork and join_. Both have advantages and as a TC, 
you'll want to support both models to accomodate the different needs of your
potential and current contributors.

Oftentimes, potential contributors will have questions they would like to
have answered before they make a contribution. Those could be tech oriented
questions, questions regarding contributions or quite simply questions aimed at
figuring out if there's somebody to talk to in the community. It is therefore 
important for any InnerSource community to have one or more contact persons
that are available for answering such questions. It is the TCs responsibility
to make sure there is a community member "on call". Most commonly, the TCs
themselves will fullfill that role, since onboarding new community members is
one of their jobs. As such, it is also important to help potential contributors
to determine what contributions are welcome or needed. These can be code
contributions but also non-code contributions, such as writing documentation,
creating artwork or organizing events. One common way to do this is to tag
"newbie tasks" in the issue tracker used by the community or implement a
marketplace for open tasks, that contributors can use.

## Uplevelling The Community 

Let's talk about participation. There is a continuum of participation in an
InnerSource community. There are people not even aware of the community,
_newbies_ which are aware of the community but have not yet used or contributed
to the software, _consumers_ which already use the software, _contributors_ who
have made at least one contribution and _TCs_, who take responsibility for both
the software and the community. As a TC, you are responsible for moving
individuals along this continuum and to uplevel their ability to make
contributions. In that sense, TCs act as force multipliers in their community. 

(Idea: Slide with levels and for each level, what a TC can do to move
individuals from one level to the next)

As indicated earlier, TCs should engage in marketing their product and their
community, in order to increase the number of newbies and consumers. They
should communicate opportunities for making contributions to consumers and try
to elicit and align the interests of potential contributors with that of the
community. And finally, they need to identify contributors with the potential
to grow and encourage growthe. g. by suggesting challenging tasks to 
contributors and by mentoring or coaching them.

As mentioned in the previous segment, learning and personal growth is a reason
why people join and stick around. Upleveling their contributors is also one of
the most powerful tools TCs have at their disposal to increase the speed,
output and longevity of their community. It is also one of the key arguments
with which to convince management to allow their employees to participate in an
InnerSource community, as they will make them more valuable to the company,
overall.

(- possibly move the segment on how to become a TC here)

(- This includes
        - example from own experience: what always worked best was if
          contributors were able to work on something in the community that
          contributed to their day job. )

## Advocating The Communities Needs

InnerSource communities exist in a corporate context and are thus more
constrained than Open Source Communities, especially when the SW developed in
the InnerSource community is embedded in or used in the products sold by the
company. There can be times when a business units interests are at odds
with those of the community. Companies are more concerned with the bottom line
and thus with the products produced by an InnerSource community. They are also
often more concerned with the short and medium term results of the community.
InnerSource communities, on the other hand understand that a healthy community
is a precondition for healthy code and are naturally more concerned with the
longevity of both the product and the community. This is why the Apache
Software Foundation, after which many InnerSource initiatives were modeled, has
the motto "Community over Code". 

It is this potential area of conflict, where the TC plays a vital role. It is
the TCs responsibility to act as an advocate for the interests of the community
and the long term health of the software in the company. They are responsible
for communicating technical as well community related risks to management.
At the same time, TCs need to be strategic and work within the degrees of
freedom afforded by their companies.

One example I remember is when I developed a system for remotely controlling
HVAC systems in my InnerSource community. We successfully met the deadline to
present the system on a trade fair, where it was an overall success. But we
knew that we still had to iron out a couple of wrinkles, before we could
launch the system into the market. When the planned time for market
introduction came closer and we were reasonably sure that we would not be ready
in time, it was my responsibility as a TC to engage with management,
explain the risks of launching before we were ready and to convince them to
delay the introduction for a couple of days. These were difficult conversations
but they were necessary to protect the community from the backlash we would
have gotten, if our system would have performed suboptimally in the market. 
Because a successful market introduction really was the goal we were all
striving towards and taking that away would have been a huge blow to the
communities motivation. So as a TC, I had to advocate the communities need for
a successful market introduction to management.

Another common example is when contributors are not given time or permission to
make a contribution, especially when the community is working on a product
which is not part of the contributors departments domain and was thus not
relevant for the respective managers goals. In this case, the TC should engage
in discussion with the contributors manager and lobby for an alternative
decision.

(- Other examples 
    - Advocating the need for required hardware/software 
    - Making sure the community gets public credit for their work
    - ...)

## Becoming a Trusted Committer

As we said in the beginning, the TC role is a very demanding but at the same
time very fulfilling role to have. For me personally, I can say that my years
as TC have been the best years of my professional life, so far. If we have
interested you in the role of a TC, you might ask yourself: how do I actually
jbecome a TC? How does that work in practice?

InnerSource communities follow the same principles that Open Source communities
do, one of which is meritocracy. In a Meritocracy, power is vested in
individuals based on their talent, effort and achievement. In other words,
the responsibility and privileges that come with the TC role need to be earned.
Transparency, another Open Source value, also plays a vital role in that it
makes the talent, effort and achievements visible to the whole community.

The process of officially becoming a TC differs from company to company,
depends on where you are in your InnerSource journey and might evolve over
time. In grass-roots type communities, the founders often automatically assume
the role of the TC, as well. As a community grows, the community or the
existing TCs might nominate a contributor to become TC, which might or might
not be subject to a community vote. Ideally, nominated contributors should take
on the TC role because they want to, in adherence with the Open Source
principle of voluntarism.

What are the criteria to apply in nominating contributors for a TC role? What
does it take to successfully fill the role of a TC? First off, potential TCs
need to have demonstrated a deep, technical competence during their work in the
community. In addition to that, they must have proven their ability so
effectively communicate with peers in the community an ideally also with
product owners and with management, as that's a key part of the TC role, as
well. In the same vein, the must have shown the willingness and patience to use
their skills and spend intential time to uplevel contributors so that they can
make more contributions then they could have on their own. Finally, fulfilling
the TC role requires a certain emotional maturity in order to be able to deal
with stressful social situations, which are bound to come up from time to time.
Contributors who satisfy these criteria will be good potential TCs, in our 
opinion.

In my community, we had multiple TCs, and in our case it was the group of TCs
who nominated contributors to become TCs, as well. We were blessed with many
contributors with deep technical expertise but we have made it a point to only
then nominate contributors for the TC role, when they have made _social_
contributions to the community on their own initiative, such as helping with
onboarding new contributors, supporting community members in forums and mailing
lists or representing and marketing the community on company events. 

Whether or not you have only one or multiple TCs depends on the size and the
risk associated with the software developed in the InnerSource community.  The
TC role is time consuming and not everyone is willing or able to spend 100 % of
their time as TC. Some companies have therefore enacted a _TC rotation_ where
multiple TC share the workload of the TC role and the TCs who are not _on duty_
could exclusively focus on tech oriented work. Another reason to have multiple
TCs is to prepare for the inevitable case that some TCs can no longer take on
their responsibilities, e. g. because they are changing to another position in
or leaving the company, or simply because they are no longer interested in
filling that role. In that case, it is important that there are other TCs in
place already, who can take over and ensure continuity in the community.

(- sufficient standing in the organization to effectively advocate the
  communities and the products needs)

## Conclusion

## This to mention as well

- there can be multiple TCs per community, depending on the level of risk
  and the size of the community.
- Recognize TC role by HR (similar to how architects and agile roles are 
  officially recognized)
- PR is probably the most powerful tool the TC has to fulfill his role. It is
  probably the channel he will spend most time communicating in. It is 
  instrumental in communicating and reaching software quality, it presents an
  opportunity to set an example, both in terms of software quality and how to
  conduct oneself in communications. And finally, a PR is where mentoring and
  upleveling contributors happens, in my experience.
