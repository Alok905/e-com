# users

```bash
'api/user'

'/'
post: create user
get: get all users (admin)

'/auth'
post: login user

'/logout'
post: logout current logged in user

'/profile'
get: get current logged in user profile
  (authenticate)
put: update current logged in user profile   (authenticate)

'/:id'
get: get any user details by id   (admin)
put: update any user profile by id   (admin)
delete: delete any user data by id   (admin)
```

# category

```bash
'api/category'

'/'
post: create category    (admin)

'/categories'
get: get all the categories

'/:categoryId'
get: get category by id
put: update category by id   (admin)
delete: delete category by id   (admin)
```

# product

```bash
'api/products'

'/'
get: get all products, keyword=<query for name>
post: add new product   (admin)

'/allProducts'
get: get all the products

'/:id/reviews'
post: add review   (admin)

'/top'
get: get top rated products

'/new'
get: get the new products

'/:id'
get: get product by id
put: update product by id   (admin)
delete: delete product by id   (admin)
```

# uploads

```bash
'api/upload'
post: upload images of type jpg/jpeg/png/webp

```

# static paths

```bash
'/uploads/<image name>'
display the uploaded image
```
