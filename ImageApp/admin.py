from django.contrib import admin
from . import models


class AdminDisplay(admin.ModelAdmin):
    list_display = ('name', 'file_extension')


admin.site.register(models.Images, AdminDisplay)
admin.site.register(models.Fashion, AdminDisplay)
