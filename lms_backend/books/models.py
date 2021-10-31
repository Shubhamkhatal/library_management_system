from django.db import models

# Create your models here.
class Book(models.Model):
    class BookObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .all()

    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)
    object = models.Manager()
    bookobject = BookObjects()
    
    def __str__(self):
        return self.name

class Admin(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    object = models.Manager()
    def __str__(self):
        return self.name