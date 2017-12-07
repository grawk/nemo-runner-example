
describe('@simple@', function () {
    it('launch google, snap screenshot, wait a minute', async function () {
        let nemo = this.nemo;
        await nemo.driver.get('https://www.google.com');
        await nemo.runner.snap();
        await nemo.driver.sleep(1000);
    });

});
