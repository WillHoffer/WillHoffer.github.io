## About the Website

This website is the personal website of Will Hoffer, hosted via Github pages. It contains professional information, an informational blog, talk notes, and other resources/references. 

## Copyright & Unofficial License
We retain all rights to academic, pedagogical, and all other personally created content on the website. Readers are more than welcome, and encouraged, to engage with the content themselves for personal and educational purposes. If you reproduce or improve upon any content, please provide reasonable citation and keep the content accessible.

## Technical Information
The webpage is run through Github pages, and I have a few tutorials on the website about creating and managing it. To edit it, download and edit files on a local repository. Once changes have been made, the website can be viewed locally before changes are pushed to the master branch at the origin. Doing so requires running the following Ruby command in the regular command line (on Windows, cmd.) Don't forget to navigate to the correct directory of the locally cloned repository using `cd` followed by the directory.

```
bundle exec jekyll serve 
```
Alternatively, run the `simulateWebsite.ps1` powershell file in the repo for the same effect, though of course ruby must be installed. This will run a local version of the website for preview; by default it will may be found on http://127.0.0.1:4000/. This preview is updated live with changes; no need to commit the files prior to viewing.

Periodically, run `bundle update` to keep the gems up to date. 

