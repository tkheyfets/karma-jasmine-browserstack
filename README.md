 Karma-BrowserStack Example
=========

Sample for using karma-browserstack-launcher to run Karma tests (Jasmine framework) on BrowserStack infrastructure.

### Prerequisites
Node and yarn

### Clone this repository
`git clone https://github.com/tkheyfets/karma-jasmine-browserstack.git`

### Install dependencies

Navigate to appropriate directory for testing and then install the dependencies by running

`yarn install`

### BrowserStack Configuration

Export the environment variables for the username and access key of your BrowserStack account.
These can be found on the automate accounts page on [BrowserStack](https://www.browserstack.com/accounts/automate).

`export BROWSERSTACK_USERNAME=<browserstack-username>`

`export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>`

You can further customize configuration in karma.conf.js. For detailed reference, visit karma-browserstack-launcher github repository [here](https://github.com/browserstack/karma-browserstack-launcher).

#### Run the tests

Execute the following command to run the karma tests:

`yarn test`

