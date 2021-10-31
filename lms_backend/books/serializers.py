from django.db.models import fields
from .models import Book,Admin
from rest_framework import serializers

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id','name','author','publisher')
    
class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('email','password')