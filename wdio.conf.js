exports.config = {
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instance available you can make sure that not more than
        // 5 instance gets started at a time.
        maxInstances: 2,
        browserName: 'chrome'
    }],
    specs: [
        './test/specs/*.js'
    ],
    framework: 'mocha',
    reporters: ['spec'],
    before: function() {
        // Setup tasks here...
    },
    after: function() {
        // Teardown tasks here...
    },
    waitforTimeout: 5000,
    connectionRetryTimeout: 90000,
    services: ['selenium-standalone']
}