# GitHub User Lookup

This app allows for the lookup of known GitHub users by handle. It is also coded so that it typically always returns a result, whether or not a known user is inputted.

## Motivation

Unsatisfied with the search feature on the main GitHub site, it became increasingly desireable to have access to a deterministic and direct method of retrieving requested GitHub user records and parsing out the necessary returned information. I built this app in order to abstract from the main GitHub search functionality only that information I deemed important for most end users.

## Build Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/30685a17-5a71-452b-be27-328e5a401bd9/deploy-status)](https://app.netlify.com/sites/react-gh-user-card/deploys)

## Code Style

<img src="https://img.shields.io/badge/react%20component%20style-class-blue" alt="react component style">

### Screenshots

<img src="https://raw.githubusercontent.com/ajohnson1031/React-Github-User-Card/7529d36abcc79643ef2bf0aab37c79d7d54d15e6/src/imgs/screenshot.jpg" alt="GitHub User Lookup Screenshot">

## Tech/Framework USed

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). LESS (CSS) styling. GitHub API for returning contribution histories and links to repos.

## Features

Ability to search for known handles of GitHub users. Returns the searched user's contribution history via GitHub API. Also returns a list sampling the searched user's public repos and shows all followers, which may also be accessed from directly within the interface.

## Contribute

The app may be augmented by mapping additional API methods such as 'Follow' and logging their responses directly within the app as opposed to linking out to the main GitHub website.
