## About the Website

This website is hosted by Github and the personal website of Will Hoffer.

### How to Edit the Site

The website should be editted in the following fashion. Clone the repository to the local computer and open the project in RStudio. The website is built using Jekyll; RStudio adds support for R Markdown files.

Note that to properly format files generated from RStudio, prettyjekyll is used to implement the proper theme. Then, for local viewing, run the command
```
prettyjekyll::FormatPost(choose.files())
```
In order to tweak the format to fix the header, footer, etc. of the posts.

Once changes have been made, the website can be viewed locally before changes are pushed to the master branch at the origin. Doing so requires running the following Ruby command in the regular command line (on Windows, cmd.) Don't forget to navigate to the correct directory of the locally cloned repository using `cd` followed by the directory.

```
bundle exec jekyll serve 
```
This will run a local version of the website for preview; by default it will may be found on http://127.0.0.1:4000/. This preview is updated live with changes; no need to commit the files prior to viewing.

