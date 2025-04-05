## 🧠 What You'll Learn

This mini-project covers three super useful Angular Routing features in a simple, beginner-friendly way:

### 🛡️ Route Guards

Route Guards are like security gates for your app. They control who can access certain routes.  
For example, only logged-in users should see the dashboard, right? A `CanActivate` guard can check if the user is logged in before letting them through.

### 🧱 Child Routes

Think of Child Routes as sub-pages inside a bigger page.  
For example, inside the `/dashboard`, we have `/dashboard/profile` and `/dashboard/settings`. These are **nested routes** and help keep things organized.

### 🔁 Dynamic Routing

Dynamic routes let you create pages based on user-specific data.  
Instead of hardcoding every user page, we use a route like `/users/:id` where `:id` changes depending on the user.  
So we can visit `/users/1`, `/users/2`, etc., and display info for each user dynamically.

# CLI to create Home & Login

ng g c home --skip-tests --inline-template --inline-style
ng g c login --skip-tests --inline-template --inline-style

# CLI to create Dashboard and its children

ng g c dashboard/dashboard --skip-tests --inline-template --inline-style
ng g c dashboard/profile --skip-tests --inline-template --inline-style
ng g c dashboard/settings --skip-tests --inline-template --inline-style

# CLI to create Users and User Detail

ng g c users/users --skip-tests --inline-template --inline-style
ng g c users/user-detail --skip-tests --inline-template --inline-style


## 📚 Learn More from Angular Docs

- [Routing & Navigation](https://angular.io/guide/router)
- [Route Guards](https://angular.io/guide/router#milestone-5-route-guards)
- [Child Routes](https://angular.io/guide/router#child-routing-component)
- [Route Parameters (Dynamic)](https://angular.io/guide/router#activated-route-in-action)