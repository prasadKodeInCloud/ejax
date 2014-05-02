ejax
====

Experiment on calling jquery ajax methods in chainable syntax.

## Quick Start
---
###methods

- get("url").success(function(result){}).err(function(a){}).end();
- get("url").for({id:10}).success(function(result){}).err(function(a){}).end();
- get("url").async.for({id:10}).success(function(result){}).err(function(a){}).end();
- get("url").async.success(function(result){}).err(function(a){}).end();
- get("url").async.success(function(result){}).err(function(a){}).cache();
- post("url").for({id:10}).success(function(result){}).err(function(a){}).end();
