exports.config = {
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
        }
    }],
    specs: [
        './test/specs/*.js'
    ],
    framework: 'mocha',
    reporters: ['spec'],
    waitforTimeout: 5000,
    connectionRetryTimeout: 90000
}