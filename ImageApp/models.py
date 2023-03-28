from django.db import models


class HomeImage(models.Model):
    name = models.CharField(max_length=60)
    file_extension = models.CharField(max_length=4)
class FashionImage(models.Model):
    name = models.CharField(max_length=60)
    file_extension = models.CharField(max_length=4)
    