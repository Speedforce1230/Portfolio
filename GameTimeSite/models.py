from django.db import models


class GameTime(models.Model):
    name = models.CharField(max_length=30)
    hours_played = models.IntegerField()
    status = models.CharField(max_length=12)
    image_url = models.CharField(max_length=2083)

