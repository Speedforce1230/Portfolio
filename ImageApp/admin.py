from django.contrib import admin
from . import models


class AdminDisplay(admin.ModelAdmin):
    list_display = ('name', 'file_extension')


admin.site.register(models.HomeImage, AdminDisplay)
admin.site.register(models.FashionImage, AdminDisplay)
