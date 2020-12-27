## About the Website

This website is the personal website of Will Hoffer, hosted via Github pages. It contains professional information, an informational blog, talk notes, and other resources/references. 

## Copyright & Unofficial License
We retain all rights to academic, pedagogical, and all other personally created content on the website. Readers are more than welcome, and encouraged, to engage with the content themselves for personal and educational purposes. If you reproduce or improve upon any content, please provide reasonable citation and keep the content accessible.

Other content not created by me remains in accordance with respective license provisions (e.g. creative commons, MIT, and/or fair use.) If there are any issues found, please bring them to our attention so that they may be rectified; we are not aware of any at this time.

## Technical Information
The following information describes how to edit and create website content.

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

