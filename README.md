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

#### W/O Docker Compose
If you don't want to use docker-compose you can run the following commands:
1. `docker build -t cascade-financial-test .`
2. `docker run -it --rm cascade-financial-test`

### GitHub Actions
Not currently operational, work in progress :(

## A Note About Using XPath Over CSS Locators
I chose to use XPath over CSS locators for this example project.  I've found that XPath is more reliable, and I've had less issues with it than I have with CSS locators.

The main customer facing Cascade Financial page does not contain `data-testid` attributes on any elements, the class names are not unique, and the `id` attributes are not always unique.

If `data-testid` attributes were added to the elements, I would have used those instead of XPath.

It is not uncommon for websites requiring automation to not have unique identifiers on elements; this is not a problem if using xpath, but attempting to use any other form of locator often leads to overly complex and difficult to maintain object location and selection means.

### Recommendations to Assist Test Automation
1. Use `data-testid` attributes on elements that are intended to be interacted with by automation
2. Use unique class names on elements that are intended to be interacted with by automation