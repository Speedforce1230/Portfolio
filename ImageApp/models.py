from django.db import models


class Images(models.Model):
    name = models.CharField(max_length=60)
    file_extension = models.CharField(max_length=3)
class Fashion(models.Model):
    name = models.CharField(max_length=60)
    file_extension = models.CharField(max_length=3)
    