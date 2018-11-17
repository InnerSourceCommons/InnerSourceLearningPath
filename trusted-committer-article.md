# InnerSource Learning Path: Trusted Committer

## Introducing The Trusted Committer Role

The Trusted Committer (TC) role is one of the key roles in an InnerSource
community. Think of TCs as the people in a community that you trust with
important technical decisions and with mentoring contributors to get their
contribution over the finish line. The TC role is both a demanding and a
rewarding role to fulfill. It goes far beyond being an opinionated gatekeeper
and it is instrumental for the success of any InnerSource (IS) community. 

Generally speaking, the TC role is defined by its responsibilities, rather than
by its privileges. On a very high level, TCs represent the interests of both
their InnerSource community and the products the community is building.  They
are concerned with the health of both the community and the product. So as a
TC, you'll have both tech-oriented and community-oriented responsibilities and
we'll explore both of these dimensions in the following sections. 

Before we go into the details of what a TC actually does, let's spend some time
contrasting the TC role to other roles in IS on a high level of abstraction and 
explain why we think the name is both apt and important.

Let's start with the _Contributor_ role. A _Contributor_ - as the name implies -
makes contributions to an InnerSource community; code but also non-code
artifacts, such as bug-reports, feature-requests or documentation.  Contributors
might or might not be part of the community. They might be sent by another team
to develop a feature they might need. This is why we sometimes also refer to
Contributors as _Guests_ or being part of a _Guest Team_. The _Contributor_ is
responsible for "fitting in" and for conforming to the communities expectations
and processes.

The _Trusted Committer_ is always a member of the InnerSource community, also
sometimes referred to as the _Host Team_. In this analogy, the TC is
responsible for both building the house and setting the house rules, to make
sure their guests are comfortable and can work together effectively. Compared
to _Contributors_, TCs have earned the responsibility to push code closer to
production and are generally allowed to perform tasks that have a higher level
of risk associated with them.

The _Product Owner_ (PO) is the third role in InnerSource. Whether or not there is a
dedicated PO depends on the type of InnerSource community and the products they
build. Especially in grass-roots type InnerSource communities like the one I
work in, the TC usually also acts as a PO. Similar to agile processes, the PO
is responsible for defining and prioritizing requirements and stories for the
community to implement. The PO therefore often interacts with the TC, e.g. in
making sure that a requested or contributed feature actually belongs to the
product. In the Host/Guest analogy, the PO would be the one who determines what
Host and Guest work on in the community's House. Please check out our Product
Owner Learning Path video for more detailed information.

## Why role names matter

Let's spend a few moments and discuss why the naming - "Trusted Committer" - is
really important. The role of the TC is present in every successful InnerSource
community but not every community uses that name. That was actually true for
myself in my InnerSource career - I used the term Maintainer. But it turns
out that conficts with the technical role "Maintainer" defined by GitHub, for
instance. Apache, e. g., uses the term _Committer_, too, but they attach
fewer and mostly tech-oriented responsibilities to that role. The TC role with
its additional community oriented responsibilities goes beyond that. The
"Trusted" in TC conveys that they are trusted and thus empowered by both their
management and their community to do their job. By fostering openness and
transparency, TCs build trust in the process and also in the product being
built.

So similar to how naming is important in writing software, it is for the
roles in an InnerSource project as well. Choosing the right names and doing so
consistently ensures that everyone has the same notion of the role and its responsibilities.

## Responsibilities of a Trusted Committer

Let's now dive into the responsibilities that Trusted Committers have:


- ensuring product quality,
- keeping the community healthy,
- reducing the barrier to making contributions,
- upleveling the community,
- advocating the communities needs.

We will cover these responsibilities in the following segments. In addition to
this, we will also explore the path of becoming a TC at the end of this
article.

## Ensuring Product Quality

Let's start with the responsibility most often associated with the TC role: 
ensuring product quality. 

In an InnerSource community, the TCs _own_ all tech-related decisions,
especially those related to product quality. Ownership implies that the TCs
don't necessarily make all the tech-related decisions themselves or do all the
work to implement them, but rather that they are the ones who make sure the
decisions in place are followed through, who advocate and - if necessary -
defend these decisions, inside and outside of the community. 

So what does a TC do in practice to reach these goals? What are the means that
TCs have at their disposal to ensure quality? Let's start with some passive
means. It is the TC's job to communicate and promote quality standards in their
community and to formulate them in a way that is understandable and actionable
by their contributors. I have personally always made it a point in my community
that we should not only distinguish ourselves from non-InnerSource SW in the
way we organize development, but also the in quality of the SW itself.
Attaining high quality standards became part of our Ethos. The TCs also make
sure that developers have the infrastructure and tools they need to produce
quality software. The most important and most powerful passive tool TCs have to
ensure quality in my personal experience is to set an example for the expected
quality themselves.

The tool that TCs will use most frequently for ensuring quality is the peer
review, usually performed as part of Pull Requests. While everybody can usually
participate in Pull Requests and point out necessary improvements, it is
usually only the TCs who can ultimately accept or reject a contribution. That
is what I meant when I said "TCs can push code closer to production" earlier.
TCs should also help contributors during a PR to get their contribution over
the finish line. That said, it is ultimately the contributors job to make that
happen. The job of a TC is not to accept all contributions by default, but to
only accept those who meet the defined criteria in terms of quality and scope.
Related to scope: sometimes requirements or limitations for the software being
developed are not elicited up front but rather discovered during development.
TCs are also responsible for making sure these are captured and documented for
both the POs and the contributors.

The TCs purview with respect to quality goes beyond PRs, though. TCs need to
think about quality on a strategic level and ensure the longevity of the SW
being built. That entails code oriented responsibilities from ensuring 
cleanliness of the code to maintaining conceptual integrity of the overall
software. It also entails more management-oriented tasks such as making sure 
that the community is given sufficient time to refactor their software or move
a release date in favor of quality improvements, if the community deems that
necessary. The effectiveness of the TC is strongly related to code health.
Absent the latter, the TC will have to spend much their valuable time
validating and documenting workarounds for bugs or a fragile architecture
and will not have enough time to spend on onboarding and mentoring 
contributors.

## Keeping The Community Healthy

We said in the beginning that TCs have both tech-oriented and community-
oriented responsibilities. It is not sufficient to focus on code and code
health only. To ensure success in the long run, TCs should strive for keeping
the community which is building the SW healthy, as well. Because of that, they
must strike a good balance between effort spent on ensuring product quality and
growing a healthy community. 

What does a healthy community look like? Quite simply, in a healthy community,
contributors tend to stick around and can spend most of their time on
developing software while the community is growing. 

Why do contributors join and stick around in a community? Some do because they
subscribe to the purpose or the mission of the community. It is the TC's job to
clearly articulate and promote this purpose. In my experience, the importance
of this is often not recognized. If I could go back in time, the one thing I
would personally do differently as a TC is to spend more time on marketing the
community and it's purpose inside my company. 

Another, more obvious reason for people to stick around is that they enjoy
working with other members of the community, including the TCs. In my
experience, what this comes down to is that community members treat and
communicate with each other with utmost respect. They treat every contribution
like a gift or a donation, rather than something that detracts from their own
work and they laude excellent and especially first contributions. The TCs job
in all this is primarily to set an example for others, similar to how they set an
example for the level of software quality that is expected.  If necessary, the
TCs are the ones who should create and enact a code of conduct for the
community. Should there be community members whose behavior is detrimental or
even toxic to the community's health, it is the TC's responsibility to either
try and change or contain this or, in the worst case, to remove people from the
community. TCs should create opportunities for people to get together
regularly and get to know each other personally.

Another reason for people to stick around that I heard a lot during my time as
a TC is that their work in an InnerSource community was an excellent
opportunity to acquire new skills and to grow personally. This is again where
the role of the TC is very important. TCs often become mentors for junior
developers and they explicitly spend time during Pull Requests not only to
point out areas for improvement but also to explain in detail why something needs
to be improved, including the theory or experience behind it and they also offer
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
activities which are considered overhead or waste, common especially in large
companies. The TC's job in this context is to ensure that contributors can
actually do that and generally to keep things running smoothly. This includes 
communicating and enacting helpful contribution guidelines. One
important aspect of these is to explain what I call _signaling_ in Pull
Requests: what should a comment look like? What does it mean if I _like_ or
_+1_ a comment?  How is @mentioning someone with a /CC prefix different from
doing so with a /FYI prefix? Generally speaking, TCs need to make sure that the
contribution process uncovers problems, rather than be the cause of them.
Ultimately, TCs should empower their community to point out process-related
problems and to adapt and improve them as a community as much as possible.

For TCs to be able to fulfill all these responsibilities, it is important that
they communicate regularly with community members and _keep an ear to the 
ground_ so that they are aware of the community's needs. We'll
go into more detail about this in the section on "Advocating the Community's
Needs".

## Reducing Barriers To Entry

Soliciting contributions is one of the things that is more challenging in
InnerSource compared to Open Source. There are a number of reasons for this.

- The sheer number of potential contributors is lower in InnerSource
- Contributors will want to contribute during their work time. That means
  they are more time constrained compared to doing Open Source after office
  hours.
- Work in InnerSource might not necessarily be part of the official 
  performance goals of contributors so time spent working on InnerSource might
  detract from reaching these goals.

It is therefore very important to make the process for making contributions
and for onboarding contributors as frictionless as possible to avoid wasting a
contributor's time. This falls squarely into the responsibilities of a TC. There
are a number of things TCs can do in this department.

- Have a good readme.md in each code repository. A good readme.md explains
  what's in the repository and what it can be used for. In addition, it should
  provide detailed instructions on how to get, build, test and use the SW in
  the repository, including information about the license.
- Have a good contributing.md which outlines what is expected of the
  contributor with respect to making a contribution. It should answer common
  questions, such as:

    - How do I submit a bug report or feature request?
    - Who do I contact in case of questions and how can I reach them?
    - What are conventions for code style, branching or commit messages, e. g.?
    - What is the definition of done for a contribution?
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
have answered before they make a contribution. Those could be tech-oriented
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
community. What has often worked well in my personal experience is if
contributors were able to work on something that made their day job easier,
such as tools. Finally, TCs need to identify contributors with the
potential to grow and encourage growth. Some possible ways include suggesting challenging tasks
and by mentoring or coaching them.

As mentioned in the previous section, learning and personal growth are reasons
why people join and stick around in an InnerSource community. Upleveling their
contributors is one of the most powerful tools TCs have at their disposal to
increase the speed, output and longevity of their community. It is also one of
the key arguments with which to convince management to allow their employees to
participate in an InnerSource community, as that will make their employees more 
valuable to them and the company, overall.

## Advocating The Community's Needs

InnerSource communities exist in a corporate context and are thus more
constrained than Open Source Communities, especially when the SW developed in
the InnerSource community is embedded in or used in the products sold by the
company. There can be times when a business units interests are at odds with
those of the community. Companies are more concerned with the bottom line and
thus with the products produced by an InnerSource community. They are also
often more concerned with the short and medium term results of the community.
InnerSource communities, on the other hand, understand that a healthy community
is a precondition for healthy code and are naturally more concerned with the
longevity of both the product and the community. This is why many InnerSource
initiatives were modeled after the Apache Way, which has the motto "Community 
over Code". 

It is this potential area of conflict, where the TC plays a vital role. It is
the TCs responsibility to act as an advocate for the interests of the community
and the long term health of the software in the company. They are responsible
for communicating technical as well community-related risks to management.
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
community's motivation. So as a TC, I had to advocate the community's need for
a successful market introduction to management.

Another common example is when contributors are not given time or permission to
make a contribution, which can happen if the community is not working on a
product that belongs to the contributor's department domain and was thus not
relevant for the respective manager's goals. In this case, the TC should engage
in discussion with the contributor's manager and lobby for an alternative
decision.

Sometimes, the TCs need to advocate the need of contributors for specialized
hardware or software and make sure they get what they need to be productive. 
And finally, TCs need to make sure that the community get public credit for
their work, to make sure everyone is aware of the value contribution made -
especially if contributors made their contributions voluntary. Neglecting to
give credit can occur in companies which are not yet accustomed to the
InnerSource working model or when the software being developed by the
InnerSource community runs _behind the scenes_. In my experience, failure to
give credit is almost never done in bad faith, though, and TCs should be able
to easily correct that. 

## Becoming a Trusted Committer 

As we said in the beginning, the TC role is a very demanding but at the same
time very fulfilling role to fulfill. If we have interested you in the role of
a TC, you might ask yourself: how do I actually become a TC? How does that work
in practice?

InnerSource communities follow a lot of the same principles that Open Source communities
do, one of which is meritocracy. In a meritocracy, power is vested in
individuals based on their talent, effort and achievement. In other words,
the responsibility and privileges that come with the TC role need to be earned.
Transparency, another Open Source value, also plays a vital role in that it
makes the talent, effort and achievements visible to the whole community.

The process of officially becoming a TC differs from company to company,
depends on where you are in your InnerSource journey, and might evolve over
time. In grass-roots type communities, the founders often automatically assume
the role of the TC, as well. As a community grows, the community or the
existing TCs might nominate a contributor to become TC, which might or might
not be subject to a community vote. Ideally, nominated contributors should take
on the TC role because they want to, in adherence with the Open Source
principle of voluntarism.

What are the criteria to apply in nominating contributors for a TC role? What
does it take to successfully fill the role of a TC? First, potential TCs
need to have demonstrated a deep, technical competence during their work in the
community. In addition to that, they must have proven their ability to
effectively communicate with peers in the community and ideally also with
product owners and with management, as that's a key part of the TC role, as
well. In the same vein, the must have shown the willingness and patience to use
their skills and spend intentional time to uplevel contributors so that they
can make more contributions than they could have on their own. Finally,
fulfilling the TC role requires a certain emotional maturity in order to be
able to deal with stressful social situations, which are bound to come up from
time to time. Contributors who satisfy these criteria will be good potential
TCs, in our opinion.

In my community, we had multiple TCs, and it was the group of TCs who nominated
contributors to become TCs. We were blessed with many contributors with deep
technical expertise but we have made it a point to only then nominate
contributors for the TC role, when they have made _social_ contributions to the
community on their own initiative, such as helping with onboarding new
contributors, supporting community members in forums and mailing lists or
representing and marketing the community on company events. 

Whether or not you have only one or multiple TCs depends on the size and the
risk associated with the software developed in the InnerSource community. The
TC role is time consuming and not everyone is willing or empowered to spend 100
% of their time as TC. Some companies have therefore enacted a _TC rotation_
where multiple TC share the workload of the TC role and the TCs who are not _on
duty_ could exclusively focus on tech oriented work. Another reason to have
multiple TCs is to prepare for the inevitable case that some TCs can no longer
take on their responsibilities, e. g. because they are changing to another
position in the company, because they leave it or simply because they are no
longer interested in filling that role. In that case, it is important that
there are other TCs in place already, who can take over and ensure continuity
in the community.

## Conclusion

In the past sections, we have learned about the responsibilities of TCs;
ensuring product quality, keeping their community healthy, reducing the barrier
to making contributions as well as upleveling the community and advocating the
communities needs in their organization. We also talked about how to become a
TC and what it takes to fill that role. For me personally, I can say that my
years working as TC have been the best years of my professional life, so far.
It's been a great experience, overall.

We hope that this article inspired you to set of on a path towards becoming a
TC as well. And we also hope that it might help your organization understand
the importance of having capable TCs for the success of any InnerSource 
initiative.

We'd like to invite you to learn more about InnerSource by exploring the other
articles and videos in the InnerSource Learning Path.
