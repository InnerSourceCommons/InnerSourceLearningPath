# InnerSource Learning Path: Trusted Committer

## Introducing The Trusted Committer Role

The Trusted Committer (TC) role is one of the key roles in an InnerSource
community. Think of TCs as the people in a community that you trust with
important technical decisions and with mentoring contributors in order to get
their contribution over the finish line. The TC role is both a demanding and a
rewarding role to fulfill. It goes far beyond being an opinionated gatekeeper
and it is instrumental for the success of any InnerSource community. 

Generally speaking, the TC role is defined by its responsibilities, rather than
by its privileges. On a very high level, TCs represent the interests of both
their InnerSource community and the products the community is building. They
are concerned with the health of both the community and the product. So as a
TC, you'll have both tech oriented and community oriented responsibilities.  We'll
explore both of these dimensions in the following sections. 

Before we go into the details of what a TC actually does, let's spend some time
contrasting the TC role to other roles in InnerSource on a high level of abstraction and
explain why we think the name is both apt and important.  Let's
start with the _Contributor_ role. A _Contributor_ - as the name implies -
makes contributions to an InnerSource community.  These contributions could be code or non-code
artifacts, such as bug-reports, feature-requests or documentation.
_Contributors_ might or might not be part of the community. They might be sent by
another team to develop a feature that team might need. This is why we
sometimes also refer to _Contributors_ as _Guests_ or being part of a _Guest
Team_. The _Contributor_ is responsible for "fitting in" and for conforming to the
community's expectations and processes.

The _Trusted Committer_ is always a member of the InnerSource community, which
also sometimes referred to as the _Host Team_. In this analogy, the TC is
responsible for both building the house and setting the house rules, to make
sure their guests are comfortable and can work together effectively. Compared
to contributors, TCs have earned the responsibility to push code closer to
production and are generally allowed to perform tasks that have a higher level
of risk associated with them.

The _Product Owner_ (PO) is the third role in InnerSource.  Similar to agile
processes, the PO is responsible for defining and prioritizing requirements and
stories for the community to implement. The PO interacts often with the
TC, e.g. in making sure that a requested or contributed feature actually
belongs to the product. Especially in smaller, grass-roots type InnerSource
communities, the TC usually also acts as a PO. Please check out our Product
Owner Learning Path segment for more detailed information.

## Why role names matter

The role of the TC is present in every successful InnerSource community but not
every community uses that name. Some communities use the term Maintainer, but
it turns out that conflicts with the technical role "Maintainer" defined by
GitHub, for instance.  Apache uses the term _Committer_, too, but they attach
fewer and mostly tech oriented responsibilities to that role. The TC role with
its additional community oriented responsibilities goes beyond that.  The
"Trusted" in TC conveys that they are trusted and thus empowered by both their
management and their community to do their job. By fostering openness and
transparency, TCs build trust in the process and also in the product being
built.

So similar to how naming is important in writing software, it is for the
roles in an InnerSource project as well. Choosing the right names and doing so
consistently ensures that everyone has the same notion of the role and how it
serves the community.

Now you should hav a basic understanding of the role, why using the term
trusted committer is appropriate, and understand how a trusted committer might
interact with other common roles in a souftware project.

## Responsibilities

In the following segments, we'll dive into the various responsibilities that
TCs have:

- ensuring product quality,
- keeping the community healthy,
- reducing the barrier to making contributions,
- uplevelling the community,
- advocating the communities needs.

In addition to this, we will also explore the path of becoming a TC in the end
of this article.

## Ensuring Product Quality

Let's start with the responsibility most often associated with the TC role: 
ensuring product quality. 

In an InnerSource community, the TCs _own_ all tech related decisions,
especially those related to product quality. Ownership implies that TCs need
to make sure the decisions in place are followed through.  This includes
communicating and - if necessary - advocating these decisions, inside and outside
of the community. TCs don't necessarily make all the tech related decisions
themselves or do all the work to implement them.

So what does a TC do in practice to reach these goals? It turns out that as a 
TC, you have many tools for that job. Let's go to the most important ones.

It is the TCs job to communicate and motivate quality standards in their
community and to formulate them in a way that is understandable and actionable
by their contributors. This includes written documentation, of course. But the
most effective way for TCs to communicate this is to set an example for the
expected quality standard themselves. We think it can be a worthwhile goal for
an InnerSource community to try and distinguish itself from traditional
software development projects not just in the way they organize development but
also in the quality of the software they produce, as well. A high software quality is
essential for building trust in an InnerSource community on part of their users
and their management and we all know how one bad release can shatter this trust
in an instant.

The TCs also make sure that the community has the infrastructure and the tools
they need to produce quality software. The tool that TCs will use most
frequently for ensuring quality is the peer review, usually performed as part
of pull requests. While everybody can usually start and participate in pull
requests by pointing out necessary improvements, it is usually only the TCs who
can ultimately accept and merge or reject a contribution. That is what we meant
when we said "TCs can push code closer to production" earlier.  TCs should also
help contributors during a PR to get their contribution over the finish line.
That said, it is ultimately the contributors job to make that happen. The job
of a TC is not to accept all contributions by default, but to only accept those
who meet the defined criteria in terms of quality and scope.  And TCs should
avoid rewriting a contributors code to make it “fit” as much as possible, even
if it means spend way more time supporting the contributors in a PR compared
to doing it themselves.  TCs take a long term perspective and understand that
this kind of support is an investment both in the longevity of the community
and the speed at which it will move forward. 

Coming back to project scope: sometimes requirements or limitations for
the software being developed are not elicited up front but rather discovered
during development. TCs are also responsible for making sure these findings are
captured and documented for both the POs and the contributors.

The TCs purview with respect to quality goes beyond pull requests, though. TCs think
about quality on a strategic level and ensure the longevity of the software
being built. That entails code oriented responsibilities from ensuring 
cleanliness of the code to maintaining conceptual integrity of the overall
software. It also entails more management oriented tasks such as making sure 
that the community is given sufficient time to refactor their software or move
a release date in favor of quality improvements, if the community deems that
necessary. The effectiveness of the TC is strongly related to code health.
Absent the latter, the TC will have to spend much of their valuable time
validating and documenting workarounds for bugs or a fragile architecture
and will not have enough time to spend on onboarding and mentoring 
contributors.

In conclusion, ensuring product quality is a key responsibility of TCs. They set
quality standards and lead by example.  They participate in pull requests and 
help contributors with their contributions to meet the quality standards.  They
also take responsibility for the long term health of the software.

## Keeping The Community Healthy

The introduction points out that TCs have both tech oriented and community
oriented responsibilities. It is not sufficient to focus on code and code
health only. To ensure success in the long run, TCs should strive for keeping
the community which is building the software healthy as well. Because of that, they
must strike a good balance between effort spent on ensuring product quality and
growing a healthy community. 

What does a healthy community look like? Quite simply, in a healthy community,
contributors tend to stick around, can spend most of their time on developing
software and are able to level up their abilitiies. As a result, a healthy
community will also be growing. 

Why do contributors join and stick around in a community? Some do because they
subscribe to the purpose or the mission of the community. It is the TCs job to
clearly articulate and promote this purpose. The importance of this is often
not recognized - marketing a community and their products is truly essential.

Another, more obvious reason for people to stick around is that they enjoy
working with other members of the community, including the TCs. In my
experience, what this comes down to is that community members treat and
communicate with each other with utmost respect. Contributions are treated as
like a gift or a donation, rather than something that detracts from their own
work and they laud excellent and especially first contributions. The TC's job
in all this is primarily to set an example for others, similarly to setting an
example for the level of software quality that is expected.  If necessary, the
TCs are the ones who should create and enact a code of conduct for the
community. Should there be community members who behavior is detrimental or
even toxic to the community's health, it is the TC's responsibility to either
try and change or contain this or, in the worst case, to remove people from the
community. TCs should create opportunities for people to get together
regularly and get to know each other personally.

Another reason for people to stick around is that their
work in an InnerSource community was an excellent opportunity to acquire new
skills and to grow personally. This is again where the role of the TC is really
important. TCs often become mentors for junior developers, and they explicitly
spend time during pull requests not only to point out areas for improvement but
also explain in detail why something needs to be improved.  This explanation includes the theory
or experience behind it and offering suggestions on how it is best done. By doing
so, the TCs will often be able to increase the speed of learning in their
communities far beyond what is common in traditional software development
projects. 

We believe that TCs should prioritize onboarding and mentoring during pull
requests over reaching communicated release dates, unless there is a very
good reason not to. TCs do this because they understand the virtuous cycle:
Good mentoring in pull requests leads to a higher level of trust and engagement on part
of the contributors which in turn leads to more people willing to make
contributions and thus more contributions. We'll discuss more about this in the
segment on "Upleveling the Community".

Finally, some people stick around in InnerSource communities, because they get
to focus on developing software and to spend as little time as possible on
activities which are considered overhead or waste, common especially in large
companies with a strong focus on processes.  The TC's job in this context is to
ensure that contributors can actually do that and generally to keep things
running smoothly. This includes communicating and enacting helpful
contribution guidelines.

One important aspect of these is to explain what I
call _signaling_ in pull requests: what should a comment look like? What does
it mean if I _like_ or _+1_ a comment?  How is @mentioning someone with a /CC
prefix different from doing so with a /FYI prefix? Generally speaking, TCs need
to make sure that the contribution process uncovers problems, rather than be
the cause of them.  Ultimately, TCs should empower their community to point out
process related problems and to adapt and improve them as a community as much
as possible.

For TCs to be able to fulfill all these responsibilities, it is important that
they communicate regularly with community members and _keep an ear to the 
ground_ so to speak so that they are aware of the communities needs. We'll
go into more detail about this in the section on "Advocating the Community's
Needs".

In summary, TCs should strive to create a welcoming and appreciative
environment for their contributors that allows them to concentrate on writing
software and to grow personally by creating opportunities to learn from other
community members.

## Uplevelling The Community 

Let's talk about participation. There is a continuum of participation in an
InnerSource community. There are people not even aware of the community,
_newcomers_ which are aware of the community but have not yet used or contributed
to the software, _consumers_ which already use the software, _contributors_ who
have made at least one contribution and _TCs_, who take responsibility for both
the software and the community. As a TC, you are responsible for moving
individuals along this continuum and to uplevel their ability to make
contributions. In that sense, TCs act as force multipliers in their community. 

As indicated earlier, it is helpful for TCs to engage in marketing their
product and their community, in order to increase the number of newcomers and
consumers. They should communicate opportunities for making contributions to
consumers and try to elicit and align the interests of potential contributors
with that of the community. What often works well is if contributors were able
to work on something that made their day job easier, e.g. development tools and automation.

Finally, it is the TCs responsibility to identify contributors with the
potential to grow.  They should foster and nurture that growth by getting
contributors excited for tackling challenging tasks and to mentor or coach them
while they are performing them. This is, in our opinion, the noblest
responsibility a TC has. It is rewarding for both the contributor and the
TC alike. We have heard from TCs that mentoring and seeing people level up
their abilities more than makes up for the fact that they have less time to
actually spend writing software. 

As mentioned in the previous section, learning and personal growth are reasons
why people join and stick around in an InnerSource community. Upleveling their
contributors is one of the most powerful tools TCs have at their disposal to
increase the speed, output and longevity of their community. It is also one of
the key arguments with which to convince management to allow their employees to
participate in an InnerSource community, as that will make their employees more 
valuable to them, to the company overall and it will help retain top talent.

In summary, TCs need to attract new contributors and level up their ability to
make contributions.  This activity ultimately levels up the community's ability to create
better software faster. They do so by communicating opportunities to make 
contributions and by helping and mentoring contributors to grow.

## Reducing Barriers To Entry

Soliciting contributions is one of the things that is more challenging in
InnerSource compared to Open Source. There are a number of reasons for this.

- The sheer number of potential contributors is lower in InnerSource
- Contributors will want to contribute during their work time. That means
  they are more time constrained compared to doing Open Source, which also
  happens after office hours.
- Work in InnerSource might not necessarily be part of the official 
  performance goals of contributors so time spent working on InnerSource might
  detract from reaching these goals.

It is therefore super important to make the process for making contributions
and for onboarding contributors as frictionless as possible to avoid wasting a
contributor's time. This falls squarely into the responsibilities of TCs. There
are a number of things TCs can do in this department.

- Have a good readme.md in each code repository. A good readme.md explains
  what's in the repository and what it can be used for. In addition, it should
  provide detailed instructions on how to get, build, test and use the software in
  the repository, including information about the license.
- Have a good contributing.md which outlines what is expected of the
  contributor with respect to making a contribution. It should answer common
  questions, such as:

    - How do I submit a bug report or feature request?
    - Who do I contact in case of questions and how can I reach them?
    - What are conventions for code style, branching or commit messages?
    - What is the definition of done for a contribution?
    - What are the process steps that govern contributions?
    - What is expected of me in terms of supporting contributed code after
      the contribution was accepted?
    - What is the code of conduct and what are the guidelines to how the
      community operates?

If you have an internal license attached to the software, which in some
companies is a precondition to share software across legal entities, include a copy
of that license **and** an explanation of the rights and obligations of that
license in layman's terms.
  
In addition to these documentary tasks and similar to Open Source software 
development, it should be easy and straightforward to run and test the software
being developed locally by potential contributors, so that they can start
implementing and validating their contribution with as little effort as
possible.

There are two common models for making contributions, today: 
_shared repository_ and _fork and join_. Both have advantages and as a TC, 
you'll want to support both models to accommodate the different needs of your
potential and current contributors.

Oftentimes, potential contributors will have questions they would like to
have answered before they make a contribution. Those could be tech oriented
questions, questions regarding contributions or quite simply questions aimed at
figuring out if there's somebody to talk to in the community. It is therefore 
important for any InnerSource community to have one or more contact persons
that are available for answering such questions. It is the TCs responsibility
to make sure there is a community member "on call". Most commonly, the TCs
themselves will fullfill that role, since onboarding new community members is
one of their jobs.

It is also important to help potential contributors
to determine what contributions are welcome or needed. These can be code
contributions but also non-code contributions, such as writing documentation,
creating artwork or organizing events. One common way to do this is to tag
"newcomer tasks" in the issue tracker used by the community or implement a
marketplace for open tasks, that contributors can use.

In summary, it is super important for InnerSource communities in a corporate
environment to keep the barriers to contributing as low as possible to get as
many contributors as possible. TCs therefore make sure that users and
contributors have both access to helpful documentation and people in the
community to answer any questions they might have and that they can get up
and running in no time. Generally speaking, TCs should make sure that the
the onboarding experience is a great one.
 
## Advocating The Community's Needs

InnerSource communities exist in a corporate context and are thus more
constrained than Open Source Communities. There can be times when a business
units interests are at odds with those of the community. Companies are more
concerned with the bottom line and thus with the products produced by an
InnerSource community. They are also often more concerned with the short and
medium term results of the community.  InnerSource communities, on the other
hand understand that a healthy community is a precondition for healthy code and
are naturally more concerned with the longevity of both the product and the
community. This is why many InnerSource initiatives were modeled after the
Apache Way, which has the motto "Community over Code". 

It is this potential area of conflict, where the TC plays a vital role. TCs
build trust with the organization and, building on that trust, act as an
advocate for the interests of the community and the long term health of the
software in the company. They are responsible for communicating technical as
well community related risks to management. At the same time, TCs need to be
strategic and work within the degrees of freedom afforded by their companies.

Related to this, TCs need to make sure that the community and individual
contributors get public credit for their work, to make sure everyone is aware
of the value contribution made. Public credit is kind of the currency in which
contributors are being paid, especially those who contribute voluntarily. It is
good practice to commend valuable contributors publicly and making sure their
managers are CC'd as well. Neglecting to give credit, on the other hand, can be
hugely frustrating for individual contributors and very detrimental for the
health of the community overall. Neglecting to give credit can occur in
companies which are not yet accustomed to the InnerSource working model or when
the software being developed by the InnerSource community runs _behind the
scenes_ and managers were simply not aware of the communities contribution. A
good TC will engage with management in this case and advocate the need for
public credit in this case. Failure to give credit is almost never done in bad
faith, though, and TCs should be able to easily correct that. 

Another common example where the TCs advocacy is needed is when contributors
are not given time or permission to make a contribution, which can happen if
the community is not working on a product that belongs to the contributors
departments domain and was thus not relevant for the respective managers goals.
In this case, the TC should engage in discussion with the contributors manager
and lobby for an alternative decision.

In summary, there are many situations in which TCs need to advocate the
interests of individual contributors and their community as a whole to the
organization. They do this because they understand that the value that the
community can provide to the organization depends on the health and longevity
of the community and ultimately on a trustworthy relationship between both.

## Becoming a Trusted Committer 

As we said in the beginning, the TC role is a very demanding but at the same
time very fulfilling role. If we have interested you in the role of a TC, you
might ask yourself: how do I actually become TC and am I the right person to
fill that role?

InnerSource communities follow the same principles that Open Source communities
do, one of which is meritocracy. In a meritocracy, power is vested in
individuals based on their talent, effort and achievement. In other words,
the responsibility and privileges that come with the TC role need to be earned.
Transparency, another Open Source value, also plays a vital role in that it
makes the talent, effort and achievements visible to the whole community.

The process of officially becoming a TC differs from community to community,
depends on where you are in your InnerSource journey and might evolve over
time. In grass-roots type communities, the founders often automatically assume
the role of the TC, as well. As a community grows, the community or the
existing TCs might nominate a contributor to become TC, which might or might
not be subject to a community vote. Ideally, nominated contributors should take
on the TC role voluntarily, as that indicates a high level of committment.

What are the criteria to apply in nominating contributors for a TC role? What
does it take to successfully fill the role of a TC? First off, potential TCs
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

For some contributors, the TC role might not appear all that attractive as it
means spending less time on coding. Being nominated as a TC might even be
perceived by some as a demotion or a negative comment on their coding skills.
The opposite is true. Being nominated as a TC is most often a sign that someone
has recognized your potential to grow and that you are indeed already growing,
personally. The TC role will give you more influence over the evolution of the
codebase. That and the wider perspective the TC role affords will
arguably make you a more complete developer. And as any trainer will be
tell you, explaining something to someone else, in the TCs case
explaining to contributors how the software works, more often than not leads to
new insights on part of the TC and will help him identify opportunities to
improve the software.

Whether or not you have only one or multiple TCs depends on the size and the
risk associated with the software developed in the InnerSource community. The
TC role is time consuming and not everyone is willing or empowered to spend 100
% of their time as TC. Some companies have therefore enacted a _TC rotation_
where multiple TC share the workload of the TC role and the TCs who are not _on
duty_ could exclusively focus on tech oriented work. Another reason to have
multiple TCs is to prepare for the inevitable case that some TCs can no longer
take on their responsibilities, e. g. because they are changing to another
position in the company or because they leave it. In that case, it is important
that there are other TCs in place already, who can take over and ensure
continuity in the community.

In summary, the TC role has to be earned in the community by making valuable
contributions - both technical contributions and social contribution for the
benefit of the community. In a healthy community, you will have fellow TCs at
your side.  As a TC, you will have less time to code yourself. However, by
acting as a force multiplier you will ultimately be able to boost your value
contribution to the community and accelerate your own growth. 

## Conclusion

In the past sections, we have learned about the responsibilities of TCs;
ensuring product quality, keeping their community healthy, reducing the barrier
to making contributions as well as upleveling the community and advocating the
communities needs in their organization. We also talked about how to become a
TC and what it takes to fill that role. Working as a TC will be demanding but
it will also be very fulfilling and will help you amplify your value contribution
in your company.


In that sense, we hope this this video inspired you to set off on a path
towards becoming a TC as well. And if you're doubt, why not just try it out?

We also hope that this video will help your organization understand the
importance of having capable TCs for the success of any InnerSource initiative
and the level of empowerment that this role requires.

We'd like to invite you to learn more about InnerSource by exploring the other
articles and videos in the InnerSource Learning Path. And of course, we'd be
thrilled to welcome you in the InnerSource commons community.

May the source be with you.



