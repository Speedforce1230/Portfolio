from django.contrib import admin
from . import models


class GameTimeAdmin(admin.ModelAdmin):
    list_display = ('name', 'hours_played', 'status', 'image_url')


admin.site.register(models.GameTime, GameTimeAdmin)
