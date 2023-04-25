---
sidebar_position: 1
title: Routing
description: Routing in PiePHP framework for developers.
---

# Routing

PiePHP uses a dynamic router to map URLs to controllers and actions. The router examines the first two elements of the URL to determine which controller and action to use, respectively.

For example, if the URL is http://example.com/blog/post, PiePHP will use the BlogController and the post action to handle the request.

If you need to pass additional parameters to the action, such as an ID, you can include them in the URL as well. For example, if you want to view a specific blog post with an ID of 42, you could use the URL http://example.com/blog/post/42.

PiePHP also supports additional routing conditions, such as regular expressions, which can be used to customize the URL routing behavior. This allows for greater flexibility and control over how URLs are mapped to controllers and actions.

In summary, PiePHP's dynamic routing system allows for flexible and customizable URL routing, making it easy to map URLs to controllers and actions, as well as pass additional parameters as needed.
