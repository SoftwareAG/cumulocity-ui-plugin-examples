angular.module("myapp.deviceEventsRealTime",[]).config(["c8yViewsProvider",function(a){a.when("/device/:deviceId",{name:"Real-Time Events",icon:"rss",templateUrl:"/apps/myapplication/deviceEventsRealTime/views/deviceEventsRealTime.html",controller:"deviceEventsRealTimeCtrl"})}]),angular.module("myapp.deviceEventsRealTime").run(["$templateCache",function(a){"use strict";a.put("/apps/myapplication/deviceEventsRealTime/views/deviceEventsRealTime.html",'<div><div class="alert alert-warning" ng-show="events.length === 0">No incoming events at the moment...</div><table class="table table-hover"><tr ng-repeat="e in events|orderBy:\'id\':true"><td style=width:30px class=text-center><span class=badge>{{e.data.type}}</span></td><td>{{e.data.text || \'-- no text message --\'}} <small class="text-muted hidden-sm hidden-xs" style=margin-right:10px><strong>Created:</strong> {{e.data.creationTime|date:\'medium\'}}</small> <small class="text-muted hidden-sm hidden-xs"><strong>Data:</strong> {{e.data|json}}</small></td></tr></table></div>')}]);