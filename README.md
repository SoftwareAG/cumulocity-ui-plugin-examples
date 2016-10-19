cumulocity-ui-plugin-examples
=============================

Repository contains an application with sample plugins described in [Plugin Developer Guide](http://www.cumulocity.com/).

Plugins
-------

* myplugin

Simple hello world plugin.

* branding

Sample branding plugin which changes the icon displayed in Application Switcher menu. It can be developed further by adding more CSS/LESS rules to alter the whole appearance of the application. Base layout and styling is provided by standard Cumulocity branding plugin (`core/c8yBranding`).

* deviceContact

Application embedded plugin that adds a new tab to device details view named *Contact* which displays a simple form for providing contact details. Contact details are stored in Managed Object’s data.


* deviceEventsRealTime

Application embedded plugin that adds a new tab to device details view and displays the list of incoming device events in real-time.


How to run the examples
-----------------------

* Clone or download [`cumulocity-ui-plugin-examples`](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) repository,
* Install `npm i cumulocity-tools -g`
* run `c8y install latest`,
* adjust application manifest file `cumulocity.json`:
    * change `contextPath` to something unique for your tenant,
    * change `key` to something unique for platform, (?)
    * change `name` to something unique for platform, (?)
* run `c8y deploy:app myapplication` to register the application without plugins,
* run `c8y server` to start local server,
* visit *http://localhost:9000/apps/<appname>* to see the application working.
