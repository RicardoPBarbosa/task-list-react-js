# Task List

####Task List using ReactJs + Flux and MongoDB to store the tasks

*Praticing React with the Flux architecture*

## Config

You will need a mLab account to get the API Key to store the tasks, you can enter here: [mLab](https://mlab.com/login/) and get the key in the user page.

## Install

```sh
$ npm install
```

## Usage
```sh
$ gulp
```
```sh
run dist/index.html
```

## Known Problem

After inserting a task there's an error, the task listing is from the local array of tasks and it's not coming from the API, what results in an error when you try to make an action (mark the task as done or delete it) to the tasks you inserted without refreshing the page. After refreshing, the tasks come from the API and there're no more errors.
