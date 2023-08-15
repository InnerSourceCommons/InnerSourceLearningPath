# Spell & Style Checking

To check both the spelling and the style of writing, we are using vale.

These checks are performed using the [isc-styles][] definitions that are maintained centrally, so that they can be applied to all projects of the InnerSource Commons.

Note that we have only started using vale recently (May 2023), and have only used it for the Patterns and the Learning Path so far. So some bumps in the road should be expected.

Further note that we are not sure yet which documentation is best to keep here versus keeping it centrally in the [isc-styles][]. So we might consolidate this documentation at a later point.

## Running the checks for the Learning Path content locally

To run the vale checks locally, you need to install:

* [vale](https://vale.sh/docs/vale-cli/installation/)
* asciidoctor - `gem install asciidoctor`

Then synchronize your vale packages (i.e. download the [isc-styles][])

`$ vale sync`

Then run vale on the files that you want to check, e.g.:

`$ vale project-leader`

This will run the checks on all markdown and asciidoc files below the `/project-leader` folder.

Any issues found will be shown in the terminal like this:

```bash
 project-leader/outline.md
 3:42   error  Did you really mean             ISC.Spelling
               'intersting'?
 3:211  error  Did you really mean             ISC.Spelling
               'organisation'?
 5:154  error  Did you really mean             ISC.Spelling
               'consollidating'?
```

## Checking new Learning Path content coming in via Pull Requests

This happens automatically, using GitHub Actions and this workflow [vale.yml](.github/workflows/vale.yml).

Output looks like this:

![Example of inline annotation](https://github.com/InnerSourceCommons/InnerSourceLearningPath/assets/163029/8dda3c81-634c-48db-9a2f-3f216b717e97)

Note that this highlighting will only be done for any issues found in lines that were changed in the given Pull Request. The idea here is that a contributor should only have to review style issues in the content that they have added themselves.

If you (e.g. as a maintainer) want to see all potential issues that vale has found in any file that it checked, you should check the "Filtered Findings" in the **reviewdog [vale] report** that is generated automatically for any PR as well.

That report looks like this:

![Example of reviewdog \[vale\] report](https://github.com/InnerSourceCommons/InnerSourceLearningPath/assets/163029/c0a478ea-4f01-4d2b-87a4-9340761221b8)

You should only have to adapt the GitHub Actions workflow in [vale.yml](.github/workflows/vale.yml) when adding entirely new sections to the Learning Path.

## How to add exceptions to the spell checker?

There may be times where the Learning Path wants to use spelling differently from what is defined in [isc-styles][]. (Note that we hope that this will be the exception, as otherwise it won't make sense to maintain the styles centrally).

To do so, add the exceptions that you want to make to [accept.txt](.github/vale/Vocab/Base/accept.txt) or [reject.txt](.github/vale/Vocab/Base/reject.txt)

Note: We need to add a more specific description here about when to add exceptions to `Vocab/Base` in this repo, or when to rather add them to the isc-styles repo. However we have to get more hands-on experience with vale before we can write a more helpful description of this approach.

[isc-styles]: https://github.com/InnerSourceCommons/isc-styles