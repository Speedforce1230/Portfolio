from django.contrib import admin
from . import models


class GameTimeAdmin(admin.ModelAdmin):
    list_display = ('image_url')


admin.site.register(models.GameTime, GameTimeAdmin)
