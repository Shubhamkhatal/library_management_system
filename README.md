# library_management_system

Used database postgresql

admin should be added through django admin panel

adding new book managed by admin only

# Tables/Schemas
Books table :- 
In the books table there are four columns as below: 
1)id -it is the int column and primary key(auto genereted by django migrations). 
2)name :- it's the variable character column (for store name of the books). 
3)author :- it's the variable character column (for store name of the author of the book). 
4)publisher :- it's the variable character column (for store name of the publisher of the books).

Admin table :- 
1)id -it is the int column and primary key(auto genereted by django migrations). 
2)name :- it's the variable character column (for store name of the Admin). 
4)email :- it's the email column (for store email of the Admin). 3)password :- it's the variable character column (for store password of the admin). 
The admin table is maintain by the django superuser. 

# Api :- 
Base url :- ‘http://127.0.0.1:8000/’ 
Endpoints :- 
1)’user/’:- perform operation on admin(only get method allowed, only  email and password fields returns) 
2)’books/’:-perform operation on books (get and post method  allowed,all fields are returned) 
3)’books/{int:id}/’:- perform operation on book of the given id  (get,post,put and delete methods allowed).
‘user/’
