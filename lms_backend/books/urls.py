from django.urls import path
from .views import BookList,BookDetails,AdminView
urlpatterns = [
    path('user/',AdminView.as_view()),
    path('books/',BookList.as_view()),
    path('books/<int:pk>/',BookDetails.as_view())
]
