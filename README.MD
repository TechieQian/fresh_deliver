### What

Refreshes the amazon fresh checkout page like a madman. Plays sound if there's a damn slot open.

1. Clone this repo.
2. Open up chrome browser.
3. Go to chrome://extensions/
4. Hit Load unpacked on the upper left.
5. Navigate to that folder and hit select.
6. You should see the plugin installed with no error...
7. Go to https://www.amazon.com/gp/buy/shipoptionselect/handlers/display.html?hasWorkingJavascript=1
8. Manually navigate your way to the page that allows you to choose slots.
9. You should see the page refresh every 3s if it doesnt find a slot.
10. If it does, itll play a sound for about 4 seconds.

### Limitations

- Only works on Chrome.
- Only runs on hard-coded URL (see manifest.json)
- Doesn't work when computer is asleep.
