from django.contrib import admin
from . import models


class AdminDisplay(admin.ModelAdmin):
    list_display = ['image_url']


admin.site.register(models.Image, AdminDisplay)
