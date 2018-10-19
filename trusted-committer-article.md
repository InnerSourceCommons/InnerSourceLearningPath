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

The Product Owner is the third role in InnerSource. Whether or not there is one
depends on the type of InnerSource community and the products they build. 
Similar to agile processes, the PO is responsible for defining and prioritizing
requirements and stories for the community to implement. The PO therefore often
interacts with the TC, e. g. in making sure that a requested or contributed
feature actually belongs to the product. In the Host/Guest analogy, the PO
would be the one of determines what Host and Guest work on in the communities
House. Please check out our Product Owner Learning Path video for more detailed
information.

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
that one of the ways we distinguist ourselves from non InnerSource SW
development projects is not only the way we develop software, but also the
quality of the SW itself. Quality became part of our Ethos. The TCs also make
sure that developers have the infrastructure and tools they need to produce
quality software. The most important and most powerful passive tool TCs have 
to ensure quality is setting an example for quality themselves.

The tool that TCs will use most frequently for ensuring quality is peer review
performed in Pull Requests. While usually everybody can partake in a Pull
Request and help point out necessary improvements, it is usually only the TCs
who can finally accept or reject a contribution. That is what I meant when I
said "TCs can push code closer to production" earlier. TCs should also help
contributors during a PR to get their contribution over the finish line. That
said, it is ultimately the contributors job to make that happen. The job of a
TC is not to accept all contributions by default, but to only accept those who
meet the defined criteria in terms of quality and scope.

The TCs purview with respect to quality goes beyond PRs, though. TCs need to
think about quality on a strategic level and ensure the longevity of the SW
being built. That entails code oriented responsibilities from ensuring 
cleanliness of the code to maintaining conceptual integrity of the overall
software. It also entails more management oriented tasks such as making sure 
that the community is given sufficient time to refactor the software or move
a release date in favor of quality improvement tasks.

(- act as stakeholder of the SW/Architecture towards rest of org)

## Keeping Things Running Smoothly

- set, enact and communicate contribution guidelines 
- set guidelines for how to communicate in PRs
- reviewing contributions
    - make sure the contribution process uncovers problems, rather than be the
      cause of them.
- documenting discovered and yet undocumented requirements 
    - When an undocumented requirement, process or limitation is discovered, TC
      is responsible for making sure it is documented accurately and in a way
      that it is understandable for contributors and POs alike.
- define the right process for the community
- adapt existing processes, if necessary
- gather support for necessary change in how the community operates

## Keeping The Community Healthy

- TCs must strike a healthy balance between effort spent on ensuring product
  quality and growing a healthy community. 
- defining/enacting a code of conduct
- set an example for community members in terms of conduct and especially
  communication
- Health also means that there is a critical mass of contributors.
    - Virtuous cycle: Good mentoring in PRs -> higher level of trust from
      contributors -> more people being willing to contribute -> more Pull
      Requests
- be aware of the communities needs
    - keep in touch with the community
- advocate the communities interests
- Examples:
    - Treat any contribution as a gift or as a donation. 
    - I always prioritized onboarding and mentoring over reaching communicated
      release dates, unless there was a really good reason to meet the date.
    - Laude excellent and first contributions
    - Make sure community members have a chance to level up by suggesting 
      challenging tasks. That includes recognizing people who have the 
      potential to grow.
    - If there are people toxic to the communities health, it is the TCs
      responsibility to either try and change, contain or remove those people
    - Communicate the purpose of the community and try to get everyone on
      board with it 
    - Commmunicate technical and community risks to responsible managers
    - Help potential community members with them beeing empowered to make
      contributions by talking to their managers
    - Ensure there are users and potential contributors by promoting and
      advertising the community and its goals
    - Make sure there are opportunities for people to get a together regularly
    - It is important to both give and take in the community
      
## Reducing Barriers To Entry

- Soliciting contributions is one of the things that is more challenging with
  InnerSource compared to Open Source. There are a number of reasons for that 
    - The sheer number of potential contributors is lower in InnerSource
    - Contributors will want to contribute during their work time. That means
      they are more time constrained compared to doing Open Source after office
      hours. Time spent on InnerSource might be time lost on reaching their
      original goals.
    - Work in InnerSource might not necessarily be part of the official 
      performance goals of contributors.
- It is therefore super important to make the process for making contributions
  and for onboarding contributors as frictionless as possible to avoid wasting
  a contributors time. 
- There are a number of things a TC can do to achieve that state
    - have a good readme.md, providing detailed instructions on how to get,
      build, test and use the SW developed by the InnerSource community.
    - have a good contribute.md which outlines what is expected of the
      contributor to make a contribution. It should answer common questions
      like
        - Who do I contact in case of questions and how to reach her?
        - How do I submit a bug report or feature request?
        - What is the definition of done for a contribution; code, tests, docs?
        - What are conventions for code style, branching or committ messages,
          e. g.?
        - What is expected of me in terms of supporting contributed code after
          the contribution was accepted?
        - What are the process steps that govern contributions?
        - Is there a code of conduct or other guidelines to how the community
          operates?
    - Make it easy to run and test the SW locally
- As a TC, I have to make sure there is someone in the community who is
  available to answer questions of users and potential contributors.
- Also make it clear that non-code contributions are welcome, such as writing
  documentation, organizing events or creating artwork.
- In addition to these "passive" means to facilitate contributions, a TC also
  actively helps with that
    - Publishing a list of "Newbie Tasks" and actively solicit contributions
      rather than waiting for them to happen.
    - TCs are expected to actively help new contributors to finish their PRs
      if they would not be able to do so, otherwise.
- Gig-Marketplace as a good example of how to do this.

## Uplevelling The Community 

- There is a continuum of participation: Unaware, Newcomer, Consumer, 
  Contributor and Maintainer.
- TCs are responsible for moving individuals along this continuum and to 
  uplevel their ability to make contributions.
- This includes
    - marketing the community, its purpose and its goals
    - identify and communicate opportunities for making contributions
    - explore how to align the contributors and the communities goals and
      interests
        - example from own experience: what always worked best was if
          contributors were able to work on something in the community that
          contributed to their day job.
    - identifying talent and encouraging growth, e. g. by assigning challenging
      tasks to contributors
    - mentoring and coaching community members (e. g. during PRs)

## Advocating The Communities Needs

- InnerSource communities exist in a corporate context and are thus more 
  constrained than Open Source Communities.
- There can be times when a business units interests are at odds
  with those of the community. And while companies are more concerned with the
  bottom line and thus the products produced by an InnerSource community,
  InnerSource communities, on the other hand understand that a healthy
  community is a precondition for healthy code. This is why the Apache Software
  Foundation, after which many InnerSource initiatives were modeled, has the
  motto "Community over Code". Vice versa, the effectiveness of the TC is 
  strongly related to code health, as well. Absent the latter, the TC will
  have to spend all their time validating and documenting workarounds for bugs
  or a fragile architecture rather and will not have enough time to spend on
  onboarding and mentoring contributors.
- It is this potential area of conflict, where the TC plays a vital role.
- One example I remember is when I developed a system for remotely controlling
  HVAC systems in my InnerSource community. We successfully met the deadline to
  present the system on a trade fair, where it was an overall success. But we
  knew that we still had to iron out a couple of wrinkles, before we could
  launch the system into the market. When the planned time for market
  introduction came closer and we were reasonably sure that we would not be
  ready in time, it was my responsibility as a TC to engage with management,
  explain the risks of launching before we were ready and to convince them to
  delay the introduction for a couple of days. These were difficult
  conversations but they were necessary to protect the community from the
  backlash we would have gotten, if our system would have performed
  suboptimally in the market. Because a successful market introduction really
  was the goal we were all striving towards and taking that away would have
  been a huge blow to the communities motivation. So as a TC, I had to advocate
  the communities need for a successful market introduction to management.
- Another common example is when contributors are not given time or permission
  to make a contribution, especially when the community is working on a product
  which is not part of the contributors departments domain. In this case, the
  TC should engage in discussion with the contributors manager and lobby for an
  alternative decision.
- In summary, as a TC, you need to be strategic and work within the degrees of
  freedom afforded by your company when advocating for the communities needs.
- Other examples 
    - Advocating the need for required hardware/software 
    - Making sure the community gets public credit for their work
    - ...

## Becoming a Trusted Committer

- Open source principles of transparency and meritocracy guide the process by
  which contributors can become TCs.
- I have made it a point to only then nominate contributors as TCs when they
  have proven their technical merit AND the social merit. In other words, they
  must have made sort of social contributions, such as e. g. 
    - helping onboarding new contributors
    - organizing community events
    - support community members in forums or mailing lists
    - representing the community on events
- In my community, the current TCs made the decision to officially ask a 
  Contributor to assume the TC role, which is of course, voluntary.
- There might well be multiple TCs in one project
- TCs might step down, when they no longer have the time to perform the duties
  of a TC.

## Is the Trusted Committer a role for you?

- needs to be earned
- demonstrated deep technical competence to maintain rank in the meritocracy
- ability to communicate with peers, with product owners and with management
- emotional maturity to deal with stressful social situations
- sufficient standing in the organization to effectively advocate the
  communities and the products needs
- willingness and patientce to use their skills and spend intentional time to
  uplevel contributors so that they can make more contributions that they could
  have on their own (force multiplier)

## Conclusion

## This to mention as well

- there can be multiple TCs per community, depending on the level of risk
  and the size of the community.
- PayPals idea to rotate TCs (TC on duty)
- Recognize TC role by HR (similar to how architects and agile roles are 
  officially recognized)
- PR is probably the most powerful tool the TC has to fulfill his role. It is
  probably the channel he will spend most time communicating in. It is 
  instrumental in communicating and reaching software quality, it presents an
  opportunity to set an example, both in terms of software quality and how to
  conduct oneself in communications. And finally, a PR is where mentoring and
  upleveling contributors happens, in my experience.
