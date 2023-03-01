# cascade-financial-test
A quick demo of webdriverio uses for Cascade Financial

## Setup
This tiny project is intended to be run one of three ways:
1. Locally with the `npm test` command
2. With Docker (through docker-compose)
3. With GitHub Actions

### Node
To run locally, you'll need to have Node installed.  I happen to be using v16.13 at the moment with npm v9.2

Simply run `npm install` to install the dependencies, and then `npm test` to run the tests.

### Docker
To run with Docker, you'll need to have Docker installed.  I happen to be using v20.12

Simply run `docker-compose up` to run the tests.

### GitHub Actions
The action script is found in the `.github/workflows` directory.  It's intended to run on workflow_dispatch, but can be modified to run on push or pull_request.
