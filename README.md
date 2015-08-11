If you want to skip to the end and see the final result here:
https://github.com/jeffreypriebe/keystone/tree/integrated-insert-view-images/admin/public/js/lib/tinymce/plugins/cloudinarybrowser/docs

# Keystone Images (working website)

This is the working website for the work being done to allow for images and files to be inserted in the RTE and also sync with a management of images and files.

The keystone source is at [jeffreypriebe/keystone#integrated-insert-view-images](https://github.com/jeffreypriebe/keystone/tree/integrated-insert-view-images).
(This branch is forked from current keystone master [which is a bit beyond v0.3.12].)

### Project Links

1. Most specification is at [jeffreypriebe/keystone-images-docs](https://github.com/jeffreypriebe/keystone-images-docs).
2. [Trello](https://trello.com/b/7kIVEHoA/keystonejs-rte-images-files)
3. Current chat: [main keystone gitter](https://gitter.im/keystonejs/keystone)

## Keystone repo recommended Setup

Once you've cloned this repo locally and then run `npm install` to get all deendencies, you probably want to setup a nice easy way to work off the keystone branch and also test it quickly.

Note: Since package is pointed at the branch, you could do an `npm update keystone` but this would rebuild keystone's deps (usually unnecessary) and would be slow.  

It is faster if you want work directly against the local keystone module while also having that be your repo, I highly recommend this. (This works because the top-level project ignores everything in node_modules.) To set this up:
Working inside node_modules/keystone of this local directory, basically follow a few instructions

```
git init
git remote add origin https://github.com/jeffreypriebe/keystone.git
git fetch origin
git checkout -b integrated-insert-view-images --track origin/integrated-insert-view-images

git reset --hard origin/integrated-insert-view-images
```

The last step just ensures that the current files are matching the repo files - which they should if you just did an npm install that pulled from the repo.

Now you can work node_modules/keystone and `fetch` and `push` as normal

Modified from [stackoverflow answer](http://stackoverflow.com/a/16900010/1592).
