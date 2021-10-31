from django.shortcuts import render
from rest_framework import generics
# Create your views here.
from . models import Book,Admin
from .serializers import BookSerializer,AdminSerializer

class BookList(generics.ListCreateAPIView):
    queryset = Book.object.all()
    serializer_class = BookSerializer

class BookDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.object.all()
    serializer_class = BookSerializer

class AdminView(generics.ListAPIView):
    queryset = Admin.object.all()
    serializer_class = AdminSerializer