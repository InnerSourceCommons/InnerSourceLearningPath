# InnerSource Learning Path: Trusted Committer

## Introduction

- tbd

## Introducing The Trusted Committer Role

The Trusted Committer (TC) role is one of the key roles in an InnerSource
community. It is both a challenging and a rewarding role to fulfill and it is
instrumental for the success of any InnerSource community. 

Generally speaking, the TC role is defined by its responsibilities, rather than
by its privileges. On a very high level, a TC represents the interests of both
their InnerSource community and the products the community is building. So as
a TC, you'll have both tech oriented and community oriented responsibilities
and we'll explore both of these dimensions in the following sections.

Before we go into the details of what a TC actually does, let's spend some time
contrasting the TC role to other roles in IS and why we think the name is both
apt and important.

- Contributor
    - makes contributions
    - sometimes part of the community
    - sometimes send by another part of the organization to develop a feature
      for it. This is why contributors are sometimes referred to as Guests. 
    - responsible for "fitting in"/conforming to the host team and it's 
      expectations and processes
    - similar to an Apache Developer or committer

- Trusted Committer
    - Sometimes referred to as a host.
    - In this analogy, he is both resonsible for building the house and setting
      the house rules to make sure his guests are comfortable.
    - In comparison to the Contributor, a TC has rights to push code closer to
      production
- Product Owner
    - Responsible for defining and prioritizing requirements and stories for
      the community to implement.
    - Also interacts directly and frequently with the trusted committers
    - Distinction between the guest and host PO - have to negotiate
      requirements, if necessary.
    - Depending on the type of InnerSource community, there might not be a PO
      from the outset. Especially true in case of innovation oriented and
      bottom-up driven communities. POs come into play when a productization
      of an InnerSource communities products becomes relevant.

    ? In the Guest/Host analogy, what would be the analogon of a PO?

## Why role names matter

- The role of the TC is present in every successful InnerSource community but
  not every community uses that name.
- True for myself - I used the term Maintainer. It turns out that conficts with
  the technical role "Maintainer" defined by GitHub, for instance. 
- Apache e. g. also uses the term Committer, but attaches fewer and mostly
  tech oriented responsibilities to that role. The TC role with its additional
  community oriented responsibilities goes beyond that.
- Similar to how naming is important in writing software, it is, too, for the
  roles in an InnerSource project so that everyone has the same notion of 
  the role.
- The "Trusted" in TC conveys that she is trusted by both her community and
  empowered by her management to do the job.

## Ensuring Product Quality

- define quality goals 
- set contribution guidelines 
- enact/communicate these guidelines 
- own tech related decisions 
- act as stakeholder of the SW/Architecture towards rest of org
- set an example
- make sure community has what it needs to produce quality sw
    - communicated quality goals/standards
    - empowerment by management
    - right tools
    - prioritize quality and release dates
- ensure quality at strategic level (longevity of the SW)
- ensure that decisions regarding quality are followed through
- review and accept contributions
- document yet undocumented requirements

## Keeping Things Running Smoothly

- reviewing contributions
- communicating guidelines
- documenting yet undocumented (discovered) requirements 
- define the right process for the community
- adapt existing processes, if necessary
- gather support for necessary change in how the community operates

## Keeping The Community Healthy

- be aware of the communities needs
- advocate the communities interests
- defining/enacting a code of conduct
- Examples:
    - I always prioritized onboarding and mentoring over reaching communicated
      release dates, unless there was a really good reason to meet the date.
    - It is important to both give and take in the community
    - If there are people toxic to the communities health, it is the TCs
      responsibility to either try and change, contain or remove those people
    - Communicate the purpose of the community and try to make everyone on
      board with the purpose.
    - Laude excellent or first contributions
    - Make sure community members have a chance to level up by suggesting 
      challenging tasks.
    - Commmunicate technical and community risks to responsible managers
    - Help potential community members with them beeing empowered to make
      contributions by talking to their managers
    - Ensure there are users and potential contributors by promoting and
      advertising the community and its goals
    - Make sure people get a together regularly
      
## Reducing Barriers To Entry

- Soliciting contributions is one of the things that is more challenging with
  InnerSource compared to Open Source. There are two main reasons for that 
    - The sheer number of potential contributors is lower in InnerSource
    - Contributors will want to contribute during their work time. That means
      they are more time constrained compared to doing Open Source after office
      hours.
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
        - What are conventions for code style, branching or committ messages, e. g.?
        - What is expected of me in terms of supporting contributed code after
          the contribution was accepted?
        - What are the process steps that govern contributions?
        - Is there a code of conduct or other guidelines to how the community
          operates?
- As a TC, I have to make sure there is someone in the community who is
  available to answer questions of users and potential contributors.
- Actively publishing a list of "Newbie Tasks" to actively solicit contributions,
  rather than waiting for them to happen.
- Also make it clear that non-code contributions are welcome, such as writing
  documentation, organizing events or creating artwork.
- Gig-Marketplace as a good example of how to do this.

## Uplevelling Community Members

- identifying talent
- encouraging growth
- mentoring community members (e. g. during PRs)

## Advocating The Communities Needs

- One major difference of InnerSource compared to Open Source software
  development is the degree of freedom communities have. 
- Naturally, an InnerSource community is more constrained because it has to fit
  in the corporate context.
- There are varying degrees of freedom, depending on whether your InnerSource
  initiative focuses more on permissionless innovation or on shared development
  of reusable components.
- In any case, there can be times when the company interests are at odds with
  those of the community and this is where the TC plays a vital role.
- One example I remember is when I developed a system for remotely controlling
  HVAC systems in my InnerSource community. We successfully met the deadline to
  present the system on a trade fair, where it was an overall success. But we
  knew that we still had to iron out a couple of wrinkles, before we could
  launch the system into the market.  When the planned time for market
  introduction came closer and we were reasonably sure that we would not be
  ready in time, it was my responsibility as a TC to engage with management,
  explain the risks of launching before we were ready and to convince them to
  delay the introduction for a couple of days. These were difficult
  conversations but they were necessary to protect the community from the
  backlash we would have gotten, if our system would have performed
  suboptimally in the market. Because a successful market introduction really
  was the goal we were all striving towards and taking that away would have
  been a huge blow to the communities motivation.
- Another common example is when contributors are not given time or permission
  to make a contribution, especially when the community is working on a 
  product which is not part of the contributors departments domain. In this case,
  the TC should engage in discussion with the contributors manager and lobby for
  an alternative decision.
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

- demonstrated technical competence to maintain rank in the meritocracy
- ability to communicate with peers, with product owners and with management
- emotional maturity to deal with stressful social situations
- sufficient standing in the organization to effectively advocate the
  communities and the products needs

## Conclusion


