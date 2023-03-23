from django.db import models


class Image(models.Model):
    image_url = models.CharField(max_length=2083)

