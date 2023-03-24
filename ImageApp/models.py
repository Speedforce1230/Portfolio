from django.db import models


class Image(models.Model):
    name = models.CharField(max_length=60)
    file_extension = models.CharField(max_length=3)
