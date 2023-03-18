from django.db import models


class GameTime(models.Model):
    image_url = models.CharField(max_length=2083)

