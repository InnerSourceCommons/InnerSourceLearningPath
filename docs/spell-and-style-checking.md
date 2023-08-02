# Spell & Style Checking

To check both the spelling and the style of writing, we are using vale.

These checks are performed using the [isc-styles][] definitions that are maintained centrally, so that they can be applied to all projects of the InnerSource Commons.

Note that we have only started using vale recently (May 2023), and have only used it for the Patterns and the Learning Path so far. So some bumps in the road should be expected.

Further note that we are not sure yet which documentation is best to keep here versus keeping it centrally in the [isc-styles][]. So we might consolidate this documentation at a later point.

## How to check **Learning Path** content using vale (locally)

To run the vale checks locally, you need to install:

* [vale](https://vale.sh/docs/vale-cli/installation/)
* asciidoctor - `gem install asciidoctor`

Then synchronize your vale packages (i.e. download the [isc-styles][])

`$ vale sync`

Then run vale on the files that you want to check, e.g.:

`$ vale project-leader`

This will run the checks on all markdown and asciidoc files below the `/project-leader` folder.

Any issues found will be shown in the terminal and would look like this:

```bash
 project-leader/outline.md
 3:42   error  Did you really mean             ISC.Spelling
               'intersting'?
 3:211  error  Did you really mean             ISC.Spelling
               'organisation'?
 5:154  error  Did you really mean             ISC.Spelling
               'consollidating'?
```

## How to check new Learning Path content coming in via Pull Requests

This happens automatically, using GitHub Actions and this workflow [vale.yml](.github/workflows/vale.yml).

Output looks like this:

TBD

You should only have to adapt that workflow when adding entirely new sections to the Learning Path.

## How to add exceptions to the spell checker?

There may be times where the Learning Path wants to use spelling differently from what is defined in [isc-styles][]. (Note that we hope that this will be the exception, as otherwise it won't make sense to maintain the styles centrally).

To do so, add the exceptions that you want to make to [accept.txt](.github/vale/Vocab/Base/accept.txt) or [reject.txt](.github/vale/Vocab/Base/reject.txt)

TBD - I think this needs to be described in more detail

[isc-styles]: https://github.com/InnerSourceCommons/isc-styles